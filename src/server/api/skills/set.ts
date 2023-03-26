import { getFirestore } from "firebase-admin/firestore";
import { initializeApp, getApps, cert } from "firebase-admin/app";
import { Skill } from "@/types/skill";

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
  const skill = body as Skill;
  const db = getFirestore();

  const res = db
    .collection("skills")
    .doc(skill.id)
    .set({
      name: skill.name,
      description: skill.description,
      inGameDescription: skill.inGameDescription,
      category: skill.category ?? "",
    });

  return res;
});
