import firebase from 'firebase';
// Initialize Firebase
var config = {
  apiKey: "AIzaSyD8AZaE2mO6tez_f0XBfmEwmYDkZqCUfF0",
  authDomain: "cariilmu-73f80.firebaseapp.com",
  databaseURL: "https://cariilmu-73f80.firebaseio.com",
  projectId: "cariilmu-73f80",
  storageBucket: "cariilmu-73f80.appspot.com",
  messagingSenderId: "445471177965"
};

export const initializeFirebase = () => {
  firebase.initializeApp(config);

  // navigator.serviceWorker
  //   .register('../serviceWorker.js')
  //   .then((registration) => {
  //     firebase.messaging().useServiceWorker(registration);
  //   });
}

export const askPermission = async () => {
  try {
    const messaging = firebase.messaging();
    await messaging.requestPermission();
    const token = await messaging.getToken();
    console.log("Token FCM : ",token)

    return token
  } catch (err) {
    console.error(err)
  }
}
