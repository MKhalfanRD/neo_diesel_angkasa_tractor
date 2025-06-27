'use client';

import { useState, useEffect } from 'react';
import { FiUpload, FiTrash2, FiSave, FiX } from 'react-icons/fi';
import { useRouter } from 'next/navigation';

export default function ProductEditForm({ productData }) {
  const router = useRouter();
  const [product, setProduct] = useState({
    id: '',
    name: '',
    category: '',
    brand: '',
    model: '',
    year: '',
    price: '',
    stock: '',
    weight: '',
    dimensions: '',
    description: '',
    specifications: [],
    images: [],
    existingImages: []
  });

  const [specItems, setSpecItems] = useState([{ key: '', value: '' }]);
  const [removedImages, setRemovedImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Initialize form with product data
  useEffect(() => {
    if (productData) {
      setProduct({
        ...productData,
        existingImages: productData.images || []
      });
      
      if (productData.specifications && productData.specifications.length > 0) {
        setSpecItems(productData.specifications);
      }
    }
  }, [productData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct(prev => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    setProduct(prev => ({ ...prev, images: [...prev.images, ...files] }));
  };

  const removeNewImage = (index) => {
    setProduct(prev => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index)
    }));
  };

  const removeExistingImage = (index) => {
    const imageToRemove = product.existingImages[index];
    setRemovedImages([...removedImages, imageToRemove]);
    setProduct(prev => ({
      ...prev,
      existingImages: prev.existingImages.filter((_, i) => i !== index)
    }));
  };

  const restoreImage = (index) => {
    const imageToRestore = removedImages[index];
    setProduct(prev => ({
      ...prev,
      existingImages: [...prev.existingImages, imageToRestore]
    }));
    setRemovedImages(removedImages.filter((_, i) => i !== index));
  };

  const addSpecItem = () => {
    setSpecItems([...specItems, { key: '', value: '' }]);
  };

  const removeSpecItem = (index) => {
    setSpecItems(specItems.filter((_, i) => i !== index));
  };

  const handleSpecChange = (index, field, value) => {
    const updatedSpecs = [...specItems];
    updatedSpecs[index][field] = value;
    setSpecItems(updatedSpecs);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const formData = new FormData();
      
      // Append basic product data
      formData.append('id', product.id);
      formData.append('name', product.name);
      formData.append('category', product.category);
      formData.append('brand', product.brand);
      formData.append('model', product.model);
      formData.append('year', product.year);
      formData.append('price', product.price);
      formData.append('stock', product.stock);
      formData.append('weight', product.weight);
      formData.append('dimensions', product.dimensions);
      formData.append('description', product.description);
      
      // Append specifications
      formData.append('specifications', JSON.stringify(
        specItems.filter(item => item.key && item.value)
      ));
      
      // Append new images
      product.images.forEach(image => {
        formData.append('newImages', image);
      });
      
      // Append removed image IDs
      formData.append('removedImages', JSON.stringify(removedImages));
      
      // Simpan perubahan produk
      const response = await fetch('/api/products/update', {
        method: 'POST',
        body: formData
      });
      
      const result = await response.json();
      
      if (response.ok) {
        router.push(`/products/${product.id}`);
      } else {
        throw new Error(result.message || 'Failed to update product');
      }
    } catch (error) {
      console.error('Error updating product:', error);
      alert('Error updating product: ' + error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-6xl my-3 mx-auto p-6 bg-[#be0000] rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Edit Produk</h1>
        <button 
          onClick={() => router.back()}
          className="text-gray-500 hover:text-gray-700"
        >
          <FiX size={24} />
        </button>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Basic Information Section */}
        <div className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Informasi Dasar Produk</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Nama Produk*</label>
              <input
                type="text"
                name="name"
                value={product.name}
                onChange={handleChange}
                className="w-full px-4 py-2 text-gray-900 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Kategori*</label>
              <select
                name="category"
                value={product.category}
                onChange={handleChange}
                className="w-full px-4 py-2 text-gray-900 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                required
              >
                <option value="">Pilih Kategori</option>
                <option value="sparepart">Sparepart</option>
                <option value="engine">Mesin</option>
                <option value="hydraulic">Sistem Hidrolik</option>
                <option value="undercarriage">Undercarriage</option>
                <option value="attachment">Attachment</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Merek*</label>
              <input
                type="text"
                name="brand"
                value={product.brand}
                onChange={handleChange}
                className="w-full px-4 py-2 text-gray-900 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Model*</label>
              <input
                type="text"
                name="model"
                value={product.model}
                onChange={handleChange}
                className="w-full px-4 py-2 border text-gray-900 border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Tahun Pembuatan</label>
              <input
                type="number"
                name="year"
                value={product.year}
                onChange={handleChange}
                min="1900"
                max={new Date().getFullYear()}
                className="w-full px-4 py-2 text-gray-900 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Harga (IDR)*</label>
              <input
                type="number"
                name="price"
                value={product.price}
                onChange={handleChange}
                className="w-full px-4 py-2 text-gray-900 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
          </div>
        </div>

        {/* Inventory & Physical Details */}
        <div className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Stok & Spesifikasi Fisik</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Stok Tersedia*</label>
              <input
                type="number"
                name="stock"
                value={product.stock}
                onChange={handleChange}
                min="0"
                className="w-full px-4 py-2 text-gray-900 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Berat (kg)</label>
              <input
                type="number"
                name="weight"
                value={product.weight}
                onChange={handleChange}
                min="0"
                step="0.01"
                className="w-full px-4 py-2 text-gray-900 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Dimensi (P x L x T)</label>
              <input
                type="text"
                name="dimensions"
                value={product.dimensions}
                onChange={handleChange}
                placeholder="Contoh: 120x80x50 cm"
                className="w-full px-4 py-2 text-gray-900 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
        </div>

        {/* Product Images */}
        <div className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Gambar Produk</h2>
          
          {/* Existing Images */}
          {product.existingImages.length > 0 && (
            <div className="mb-6">
              <h3 className="text-sm font-medium text-gray-700 mb-2">Gambar Saat Ini</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {product.existingImages.map((image, index) => (
                  <div key={`existing-${index}`} className="relative group">
                    <img 
                      src={typeof image === 'string' ? image : URL.createObjectURL(image)}
                      alt={`Existing ${index}`}
                      className="h-32 w-full object-cover rounded-md"
                    />
                    <button
                      type="button"
                      onClick={() => removeExistingImage(index)}
                      className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <FiTrash2 size={14} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* Removed Images (can be restored) */}
          {removedImages.length > 0 && (
            <div className="mb-6 bg-yellow-50 p-4 rounded-md">
              <h3 className="text-sm font-medium text-yellow-700 mb-2">Gambar yang Dihapus</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {removedImages.map((image, index) => (
                  <div key={`removed-${index}`} className="relative group">
                    <img 
                      src={typeof image === 'string' ? image : URL.createObjectURL(image)}
                      alt={`Removed ${index}`}
                      className="h-32 w-full object-cover rounded-md opacity-60"
                    />
                    <button
                      type="button"
                      onClick={() => restoreImage(index)}
                      className="absolute top-2 right-2 bg-green-500 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <FiSave size={14} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* Upload New Images */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">Upload Gambar Baru (Max 5MB per gambar)</label>
            <div className="flex items-center justify-center w-full">
              <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <FiUpload className="w-8 h-8 mb-3 text-gray-400" />
                  <p className="mb-2 text-sm text-gray-500">Klik untuk upload atau drag & drop</p>
                  <p className="text-xs text-gray-500">PNG, JPG, JPEG (Max. 5MB)</p>
                </div>
                <input 
                  type="file" 
                  className="hidden" 
                  multiple 
                  accept="image/*"
                  onChange={handleImageUpload}
                />
              </label>
            </div>
          </div>
          
          {/* Preview New Images */}
          {product.images.length > 0 && (
            <div className="mt-4">
              <h3 className="text-sm font-medium text-gray-700 mb-2">Preview Gambar Baru</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {product.images.map((image, index) => (
                  <div key={`new-${index}`} className="relative group">
                    <img 
                      src={URL.createObjectURL(image)} 
                      alt={`New ${index}`}
                      className="h-32 w-full object-cover rounded-md"
                    />
                    <button
                      type="button"
                      onClick={() => removeNewImage(index)}
                      className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <FiTrash2 size={14} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Product Description */}
        <div className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Deskripsi Produk*</h2>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Deskripsi Lengkap</label>
            <textarea
              name="description"
              value={product.description}
              onChange={handleChange}
              rows="5"
              className="w-full px-4 py-2 text-gray-900 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              required
            ></textarea>
          </div>
        </div>

        {/* Technical Specifications */}
        <div className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Spesifikasi Teknis</h2>
          
          <div className="space-y-4">
            {specItems.map((spec, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Parameter</label>
                  <input
                    type="text"
                    value={spec.key}
                    onChange={(e) => handleSpecChange(index, 'key', e.target.value)}
                    placeholder="Contoh: Kapasitas Mesin"
                    className="w-full px-4 py-2 text-gray-900 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Nilai</label>
                  <input
                    type="text"
                    value={spec.value}
                    onChange={(e) => handleSpecChange(index, 'value', e.target.value)}
                    placeholder="Contoh: 250 HP"
                    className="w-full px-4 py-2 text-gray-900 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div className="pt-7">
                  <button
                    type="button"
                    onClick={() => removeSpecItem(index)}
                    className="text-red-500 hover:text-red-700"
                    disabled={specItems.length <= 1}
                  >
                    <FiTrash2 size={18} />
                  </button>
                </div>
              </div>
            ))}
            
            <button
              type="button"
              onClick={addSpecItem}
              className="mt-2 text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center"
            >
              <span className="mr-1">+ Tambah Spesifikasi</span>
            </button>
          </div>
        </div>

        {/* Form Actions */}
        <div className="flex justify-end space-x-4 pt-4">
          <button
            type="button"
            onClick={() => router.back()}
            className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50"
            disabled={isLoading}
          >
            Batal
          </button>
          <button
            type="submit"
            className="px-6 py-2 border border-transparent rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 flex items-center disabled:opacity-50"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Menyimpan...
              </>
            ) : (
              <>
                <FiSave className="mr-2" />
                Simpan Perubahan
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}