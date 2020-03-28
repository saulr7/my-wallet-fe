import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyATpwqkptPnJfLcHq_R2Lwt_6y6snV7XEw",
    authDomain: "ackle-avenue.firebaseapp.com",
    databaseURL: "https://ackle-avenue.firebaseio.com",
    projectId: "ackle-avenue",
    storageBucket: "ackle-avenue.appspot.com",
    messagingSenderId: "573675047094",
    appId: "1:573675047094:web:8e166978bd2c9f858e7e17",
    measurementId: "G-J1L2D1TC01"
}

// Initialize Firebase
const Firebase = firebase.initializeApp(firebaseConfig)

export default Firebase