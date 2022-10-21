import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyDhTsQilrsjddK8rQ-UBz2cHHxWo1FVga4",
  authDomain: "rn-instagram-clone-63b31.firebaseapp.com",
  projectId: "rn-instagram-clone-63b31",
  storageBucket: "rn-instagram-clone-63b31.appspot.com",
  messagingSenderId: "500691479642",
  appId: "1:500691479642:web:f5d8e41b7cb06ad26f3c63",
  measurementId: "G-CWPGD2X8R9"
}

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()

export default firebase