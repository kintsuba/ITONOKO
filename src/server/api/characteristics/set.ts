import { getFirestore } from "firebase-admin/firestore";
import { initializeApp, getApps, cert } from "firebase-admin/app";
import { Characteristic } from "@/types/characteristic";

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

export default defineEventHandler(async (event) => {
  const body = await useBody(event);
  const attibute = body as Characteristic;
  const db = getFirestore();

  const res = db.collection("characteristics").doc(attibute.id).set({
    name: attibute.name,
    maxRank: attibute.maxRank,
    rankDetails: attibute.rankDetails,
  });

  return res;
});
