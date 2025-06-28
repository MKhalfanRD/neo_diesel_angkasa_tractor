import { signInWithEmailAndPassword } from 'firebase/auth';

const handleLogin = async (email, password) => {
  await signInWithEmailAndPassword(auth, email, password);
};