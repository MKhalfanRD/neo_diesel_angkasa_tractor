import { db } from '@/lib/firebase';
import { collection, getDocs } from 'firebase/firestore';

export async function getServerSideProps() {
  const querySnapshot = await getDocs(collection(db, "products"));
  const products = querySnapshot.docs.map(doc => doc.data());
  
  return { props: { products } };
}

export default function Products({ products }) {
  return (
    <div>
      {products.map(product => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <a href={`https://wa.me/628xxx?text=Pesan ${product.name}`}>
            Pesan via WA
          </a>
        </div>
      ))}
    </div>
  );
}