import {
  Firestore,
  collection,
  query,
  where,
  getDocs,
  doc,
  getDoc,
} from "firebase/firestore";

import { Kenki } from "@/types/kenki";

type Kenkis = Array<Kenki>;

export const useFirestore = () => {
  const db = useState<Firestore>("db").value;
  // 全ユーザーを取得
  async function getKenkis() {
    return new Promise(async (resolve, reject) => {
      const q = query(collection(db, "Kenkis"));
      const querySnapshot = await getDocs(q);

      const kenkis: Kenkis = querySnapshot.docs.map((doc) => {
        const data = doc.data();
        const kenki: Kenki = {
          id: doc.id,
          name: data.name,
          rarity: data.rarity,
          type: data.type,
          skills: data.skills,
          characteristics: data.characteristics,
          attributes: data.attributes,
        };
        return kenki;
      });
      resolve(kenkis);
    });
  }

  async function getKenkiById(id: string) {
    return new Promise(async (resolve, reject) => {
      const docRef = doc(db, "Kenkis", id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const data = docSnap.data();
        const kenki: Kenki = {
          id: docSnap.id,
          name: data.name,
          rarity: data.rarity,
          type: data.type,
          skills: data.skills,
          characteristics: data.characteristics,
          attributes: data.attributes,
        };
        resolve(kenki);
      } else {
        reject(null);
      }
    });
  }
  async function getHashiraKenkis() {
    return new Promise(async (resolve, reject) => {
      const q = query(collection(db, "Kenkis"), where("hashira", "==", true));
      const querySnapshot = await getDocs(q);

      const kenkis: Kenkis = querySnapshot.docs.map((doc) => {
        const data = doc.data();
        const kenki: Kenki = {
          id: doc.id,
          name: data.name,
          rarity: data.rarity,
          type: data.type,
          skills: data.skills,
          characteristics: data.characteristics,
          attributes: data.attributes,
        };
        return kenki;
      });
      resolve(kenkis);
    });
  }
  return {
    getKenkis,
    getKenkiById,
    getHashiraKenkis,
  };
};
