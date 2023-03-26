import { getFirestore } from "firebase-admin/firestore";
import { initializeApp, getApps, cert } from "firebase-admin/app";
import { Attribute } from "@/types/attribute";

const apps = getApps();

if (!apps.length) {
  initializeApp({
    credential: cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
    }),
  });
}

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const attribute = body as Attribute;
  const db = getFirestore();

  const res = db.collection("attributes").doc(attribute.id).set({
    name: attribute.name,
  });

  return res;
});
