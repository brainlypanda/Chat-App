import firebase from "firebase/app";
import "firebase/database";

const config= {
    //API KEYS
    apiKey: "AIzaSyChwPRSDMrcuDazqVTFLJB_EguZ35iOguM",
    authDomain: "firevuechat-2d7d9.firebaseapp.com",
    projectId: "firevuechat-2d7d9",
    storageBucket: "firevuechat-2d7d9.appspot.com",
    messagingSenderId: "338415407393",
    appId: "1:338415407393:web:24ea4bed17e38ea0ef6e60"
}

const db =firebase.initializeApp(config);
export default db; 
