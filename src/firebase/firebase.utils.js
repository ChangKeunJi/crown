import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// congif => fig for Git
const fig = {
  apiKey: "AIzaSyCh2zbHB5uNzKI8nEhHKQAqFs-C1tzxu3Q",
  authDomain: "crown-db-298f3.firebaseapp.com",
  databaseURL: "https://crown-db-298f3.firebaseio.com",
  projectId: "crown-db-298f3",
  storageBucket: "",
  messagingSenderId: "1042913746813",
  appId: "1:1042913746813:web:48f6a8e713b72c09"
};

firebase.initializeApp(fig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

// const popUp = auth.signInWithPopup(provider);
// export const signInWithGoogle = () => popUp;

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

// import firebase from "firebase/app";
// import "firebase/firestore";
// import "firebase/auth";

// const config = {
//   apiKey: "AIzaSyCh2zbHB5uNzKI8nEhHKQAqFs-C1tzxu3Q",
//   authDomain: "crown-db-298f3.firebaseapp.com",
//   databaseURL: "https://crown-db-298f3.firebaseio.com",
//   projectId: "crown-db-298f3",
//   storageBucket: "",
//   messagingSenderId: "1042913746813",
//   appId: "1:1042913746813:web:48f6a8e713b72c09"
// };

// firebase.initializeApp(config);

// export const auth = firebase.auth();
// export const firestore = firebase.firestore();

// const provider = new firebase.auth.GoogleAuthProvider();
// provider.setCustomParameters({ prompt: "select_account" });
//? const popUp = auth.signInWithPopup(provider);
//? export const signInWithGoogle = () => popUp;
// export const signInWithGoogle = () => auth.signInWithPopup(provider);

// export default firebase;
