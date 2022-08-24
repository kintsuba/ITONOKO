import { defineNuxtPlugin, useState } from "#app";
import { FirebaseApp, initializeApp } from "firebase/app";
import { Firestore, getFirestore } from "firebase/firestore";
import { Auth, initializeAuth } from "firebase/auth";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAf0UgEFheqvII9zqPbPQbUpqGWH20kpFU",
  authDomain: "itonoko-f37c3.firebaseapp.com",
  projectId: "itonoko-f37c3",
  storageBucket: "itonoko-f37c3.appspot.com",
  messagingSenderId: "912275997254",
  appId: "1:912275997254:web:6e5fe692772f9c54b84047",
  measurementId: "G-Q0994GEDRE",
};

const firebaseApp: FirebaseApp = initializeApp(firebaseConfig);

export const db: Firestore = getFirestore(firebaseApp);
export const auth: Auth = initializeAuth(firebaseApp);

export default defineNuxtPlugin((nuxtApp) => {
  useState("firebaseApp", () => firebaseApp);
  useState("auth", () => auth);
  useState("db", () => db);
});
