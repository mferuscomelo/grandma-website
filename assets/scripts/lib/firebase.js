import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getPerformance } from "firebase/performance";

const firebaseConfig = {
  apiKey: "AIzaSyDf-YKIMkhRsH3Q4geJuWGdU_HjxPyYLhw",
  authDomain: "grandma-website.firebaseapp.com",
  projectId: "grandma-website",
  storageBucket: "grandma-website.appspot.com",
  messagingSenderId: "354568927832",
  appId: "1:354568927832:web:b4bbe95fc4e1213b5ba82d",
  measurementId: "G-6CKMWY0MGE",
};

export function initFirebase() {
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const performance = getPerformance(app);
}
