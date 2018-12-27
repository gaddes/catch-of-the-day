import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCLkIr3d1hcg1n0MScMWjUYPEgWuWkObE4",
  authDomain: "catch-of-the-day-mg.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-mg.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// This is a default export
export default base;