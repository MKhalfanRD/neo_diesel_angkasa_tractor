// src/app/admin/create/page.js
'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import ProductForm from '@/app/components/productForm';

export default function ProductCreatePage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (formData) => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/product', {
        method: 'POST',
        body: formData
      });

      if (!response.ok) {
        throw new Error(await response.text());
      }

      const { id } = await response.json();
      router.push(`/admin/products/${id}`);
    } catch (error) {
      console.error('Create failed:', error);
      alert('Failed to create product: ' + error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-white">Create New Product</h1>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        <ProductForm 
          onSubmit={handleSubmit}
          loading={isLoading}
        />
      </div>
    </div>
  );
}