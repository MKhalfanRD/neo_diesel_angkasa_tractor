// src/services/productService.js
import { db, storage } from '@/lib/firebase/config';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

export const uploadProductImages = async (images) => {
  return Promise.all(
    images.map(async (image) => {
      const storageRef = ref(storage, `products/${Date.now()}_${image.name}`);
      await uploadBytes(storageRef, image);
      return getDownloadURL(storageRef);
    })
  );
};

export const createProductDocument = async (productData) => {
  const docRef = await addDoc(collection(db, "products"), {
    ...productData,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp()
  });
  return docRef.id;
};