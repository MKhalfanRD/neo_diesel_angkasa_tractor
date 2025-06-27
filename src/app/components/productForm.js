// src/components/ProductForm.js
'use client';

import { useState } from 'react';
import { FiUpload, FiTrash2, FiPlus } from 'react-icons/fi';

export default function ProductForm({ 
  onSubmit, 
  loading, 
  initialData = {} 
}) {
  const [product, setProduct] = useState({
    name: initialData.name || '',
    category: initialData.category || '',
    brand: initialData.brand || '',
    price: initialData.price || '',
    description: initialData.description || '',
    // tambahkan field lainnya sesuai kebutuhan
  });
  
  const [images, setImages] = useState([]);
  const [specItems, setSpecItems] = useState(
    initialData.specifications || [{ key: '', value: '' }]
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct(prev => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    setImages([...images, ...files]);
  };

  const removeImage = (index) => {
    setImages(images.filter((_, i) => i !== index));
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

  const handleSubmitForm = (e) => {
    e.preventDefault();
    
    const formData = new FormData();
    Object.entries(product).forEach(([key, value]) => {
      formData.append(key, value);
    });
    
    images.forEach(image => {
      formData.append('images', image);
    });
    
    formData.append('specifications', JSON.stringify(
      specItems.filter(item => item.key && item.value)
    ));
    
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmitForm} className="space-y-6">
      {/* Basic Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Product Name*</label>
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={handleChange}
            className="w-full px-4 py-2 text-black border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Category*</label>
          <select
            name="category"
            value={product.category}
            onChange={handleChange}
            className="w-full px-4 py-2 text-black border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            required
          >
            <option value="">Select Category</option>
            <option value="electronics">Electronics</option>
            <option value="clothing">Clothing</option>
            {/* Tambahkan kategori lainnya */}
          </select>
        </div>

        {/* Tambahkan field lainnya dengan pola yang sama */}
      </div>

      {/* Image Upload Section */}
      <div className="mt-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">Product Images</label>
        <div className="flex items-center justify-center w-full">
          <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <FiUpload className="w-8 h-8 mb-3 text-gray-400" />
              <p className="mb-2 text-sm text-gray-500">Click to upload or drag and drop</p>
              <p className="text-xs text-gray-500">PNG, JPG (MAX. 5MB)</p>
            </div>
            <input 
              type="file" 
              className="hidden" 
              multiple 
              onChange={handleImageUpload}
              accept="image/*"
            />
          </label>
        </div>

        {images.length > 0 && (
          <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {images.map((image, index) => (
              <div key={index} className="relative group">
                <img 
                  src={URL.createObjectURL(image)} 
                  alt={`Preview ${index}`}
                  className="h-32 w-full object-cover rounded-md"
                />
                <button
                  type="button"
                  onClick={() => removeImage(index)}
                  className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <FiTrash2 size={14} />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Specifications */}
      <div className="mt-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">Specifications</label>
        {specItems.map((spec, index) => (
          <div key={index} className="flex gap-4 mb-3">
            <input
              type="text"
              placeholder="Parameter"
              value={spec.key}
              onChange={(e) => handleSpecChange(index, 'key', e.target.value)}
              className="flex-1 px-4 py-2 text-black border border-gray-300 rounded-md"
            />
            <input
              type="text"
              placeholder="Value"
              value={spec.value}
              onChange={(e) => handleSpecChange(index, 'value', e.target.value)}
              className="flex-1 px-4 py-2 text-black border border-gray-300 rounded-md"
            />
            <button
              type="button"
              onClick={() => removeSpecItem(index)}
              className="px-3 text-red-500 hover:text-red-700"
              disabled={specItems.length <= 1}
            >
              <FiTrash2 size={18} />
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={addSpecItem}
          className="mt-2 text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center"
        >
          <FiPlus className="mr-1" />
          Add Specification
        </button>
      </div>

      {/* Submit Button */}
      <div className="mt-8">
        <button
          type="submit"
          disabled={loading}
          className={`px-6 py-2 rounded-md text-white ${loading ? 'bg-blue-400' : 'bg-blue-600 hover:bg-blue-700'} transition-colors`}
        >
          {loading ? 'Creating...' : 'Create Product'}
        </button>
      </div>
    </form>
  );
}