import * as firebase from "firebase/app";
import "firebase/messaging"
import axios from "axios";
// Initialize Firebase
var config = {
  apiKey: "AIzaSyD8AZaE2mO6tez_f0XBfmEwmYDkZqCUfF0",
  authDomain: "cariilmu-73f80.firebaseapp.com",
  databaseURL: "https://cariilmu-73f80.firebaseio.com",
  projectId: "cariilmu-73f80",
  storageBucket: "cariilmu-73f80.appspot.com",
  messagingSenderId: "445471177965"
};

var serverKey =
  "AAAAZ7gmvO0:APA91bHK-658Tdc7oHgHls0XoBUmF7vzkqw8fr2tXy-m4LmletoyM1bYKlUNbrUA5pyzWZNlV-qbJy0uAGVy0rVzYU6N1nBwWUgqNOe9Lgs_2dRByNtCN8_kbi8ccazdlwaLc_ZOOPr9";

export const initializeFirebase = () => {
  firebase.initializeApp(config);
};

export const askPermission = async () => {
  try {
    const messaging = firebase.messaging();
    await messaging.requestPermission();
    const token = await messaging.getToken();
    messaging.getToken().then(token => {
      axios({
        method: "post",
        url: `https://iid.googleapis.com/iid/v1/${token}/rel/topics/alldevices`,
        headers: {
          Authorization: `key=${serverKey}`
        }
      }).then(res => console.log("Subscribed to topic "));
    });

    return token;
  } catch (err) {
    console.error(err);
  }
};