import firebase from "firebase";

const firebaseConfig = {
apiKey: "AIzaSyArFhDZPuzsCiqoJfnbm1TCyBvolIfBP2A",
authDomain: "idobatakaigi-with-kag.firebaseapp.com",
projectId: "idobatakaigi-with-kag",
storageBucket: "idobatakaigi-with-kag.appspot.com",
messagingSenderId: "254552960959",
appId: "1:254552960959:web:6a4ade20533d351ab93b0a"
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const messagesRef = database.ref('messages');

export const pushMessage = ({ name, text }) => {
    messagesRef.push({ name, text });
}