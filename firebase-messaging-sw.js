// Import the scripts that are required
importScripts('https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/11.0.1/firebase-messaging.js');

// Initialize Firebase with your project credentials
firebase.initializeApp({
  apiKey: "AIzaSyBsz-82MDaibWnIBUpoykrZHyJW7UMedX8",
  authDomain: "movies-bee24.firebaseapp.com",
  projectId: "movies-bee24",
  messagingSenderId: "1080659811750",
  appId: "1:1080659811750:web:c1ef7d4dacc3ab17edc367",
  measurementId: "G-T68EYGG3SF"
});

// Retrieve Firebase Messaging instance
const messaging = firebase.messaging();

// Handle background messages
messaging.onBackgroundMessage(function(payload) {
  console.log('Received background message ', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/firebase-logo.png'
  };

  return self.registration.showNotification(notificationTitle, notificationOptions);
});