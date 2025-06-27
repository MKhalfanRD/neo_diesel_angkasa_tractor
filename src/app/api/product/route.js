// src/app/api/products/route.js
import { uploadProductImages, createProductDocument } from '@/services/productService';

export async function POST(request) {
  try {
    const formData = await request.formData();
    
    // Extract product data
    const productData = {
      name: formData.get('name'),
      category: formData.get('category'),
      brand: formData.get('brand'),
      model: formData.get('model'),
      price: Number(formData.get('price')),
      stock: Number(formData.get('stock')),
      description: formData.get('description')
    };

    // Process images
    const imageFiles = formData.getAll('images');
    const imageUrls = await uploadProductImages(imageFiles);

    // Save to Firestore
    const productId = await createProductDocument({
      ...productData,
      images: imageUrls,
      specifications: JSON.parse(formData.get('specifications'))
    });

    return Response.json({ 
      success: true, 
      id: productId 
    });
  } catch (error) {
    return Response.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}