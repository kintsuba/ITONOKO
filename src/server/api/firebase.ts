import { getFirestore } from "firebase-admin/firestore";
import { initializeApp, getApps, cert } from "firebase-admin/app";
import { Kenki } from "@/types/kenki";

const apps = getApps();

if (!apps.length) {
  initializeApp({
    credential: cert("./itonoko-credentials.json"), // ../../himitsukagiではなく、./です
  });
}

export default async (request, response) => {
  const db = getFirestore();
  const kenkisSnap = await db.collection("Kenkis").get();
  const kenkisData = kenkisSnap.docs.map((doc) => {
    return {
      id: doc.id,
      ...doc.data(),
    };
  });

  return kenkisData as Kenki[];
};
