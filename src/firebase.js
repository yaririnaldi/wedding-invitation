import firebase from 'firebase/app'
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyBItAmc5EvpQpK8KMXYOLN2MimziSX2LSU",
    authDomain: "webinv-4753d.firebaseapp.com",
    projectId: "webinv-4753d",
    storageBucket: "webinv-4753d.appspot.com",
    messagingSenderId: "95375794045",
    appId: "1:95375794045:web:9da7a24a8f96332f4a3614"
  };
  
firebase.initializeApp(firebaseConfig);

// const app = firebase(firebaseConfig);

export default firebase.database();