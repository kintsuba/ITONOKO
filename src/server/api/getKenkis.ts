import { getFirestore } from "firebase-admin/firestore";
import { initializeApp, getApps, cert } from "firebase-admin/app";
import { Kenki } from "@/types/kenki";

const apps = getApps();

if (!apps.length) {
  initializeApp({
    credential: cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n"),
    }),
  });
}

export default async (request, response) => {
  const db = getFirestore();
  const kenkisSnap = await db.collection("kenkis").get();
  const kenkisData = kenkisSnap.docs.map((doc) => {
    return {
      id: doc.id,
      ...doc.data(),
    };
  });

  return kenkisData as Kenki[];
};
