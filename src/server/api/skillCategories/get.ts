import { getFirestore } from "firebase-admin/firestore";
import { initializeApp, getApps, cert } from "firebase-admin/app";
import { SkillCategory } from "@/types/skill";

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
  const db = getFirestore();
  const scSnap = await db.collection("skillCategories").get();
  const scData = scSnap.docs.map((doc) => {
    return {
      id: doc.id,
      ...doc.data(),
    };
  }) as SkillCategory[];

  return scData.sort((a, b) => b.name.localeCompare(a.name));
});
