import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCSXvudbdcpVvwDmpT8HD79ms6NmWvDlTo",
  authDomain: "plantiffaide.firebaseapp.com",
  projectId: "plantiffaide",
  storageBucket: "plantiffaide.appspot.com",
  messagingSenderId: "560136488644",
  appId: "1:560136488644:web:c7e11b33dadcca5d5f6b91",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoggle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
        console.log(result)
      const name = result.user.displayName;
      const email = result.user.email;
      const profilePic = result.user.photoURL;
      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("profilePic", profilePic);
    })
    .catch((error) => {
      console.log(error);
    });
};
