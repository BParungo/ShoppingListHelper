import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  doc,
  getDoc,
  query,
  where,
  updateDoc,
} from "firebase/firestore/lite";
import { ShoppingListItem } from "./types";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function getRecipeAll() {
  const recipesCollection = collection(db, "recipe");
  const recipesSnapshot = await getDocs(recipesCollection);
  const recipesList = recipesSnapshot.docs.map((doc) => doc.data());
  return recipesList;
}

// export async function updateRecipeByName(item) {
//   const recipeDocRef = doc(db, "recipe", item.name);
//   await updateDoc(recipeDocRef, item);
// }

// export async function addRecipe() {
//   const res = await addDoc(collection(db, "recipe"), {
//     name: "New Recipe",
//     items: [{ name: "New Item", quantity: 1 }],
//   });
//   return res;
// }

// Settings
export async function getSettings() {
  const settingsCollection = collection(db, "settings");
  const settingsSnapshot = await getDocs(settingsCollection);
  const settingsList = settingsSnapshot.docs.map((doc) => doc.data());
  return settingsList;
}

export async function updateSettings(docId: string, newData: object) {
  const settingsDocRef = doc(db, "settings", docId);
  await updateDoc(settingsDocRef, newData);
}

export async function getSettingByName<T>(str: string) {
  const settingsCollectionRef = collection(db, "settings");
  const q = query(settingsCollectionRef, where("name", "==", str));
  const querySnapshot = await getDocs(q);

  if (!querySnapshot.empty) {
    const doc = querySnapshot.docs[0];
    return { id: doc.id, data: doc.data() } as T;
  } else {
    console.log("No such document!");
  }
}

export async function addItemToShoppingList(item: ShoppingListItem) {
  const res = await addDoc(collection(db, "current-shopping-list"), item);
  return res;
}
