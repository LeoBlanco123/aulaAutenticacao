import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAkuDKf10EUJ1K9oCSPHgCoBCRer-rpFdI",
  authDomain: "autenticacao-pf-24425.firebaseapp.com",
  projectId: "autenticacao-pf-24425",
  storageBucket: "autenticacao-pf-24425.appspot.com",
  messagingSenderId: "739378660243",
  appId: "1:739378660243:web:d0f94ea803bfd652a99e66",
  measurementId: "G-W8H8X7QP5N"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
