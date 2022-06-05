import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

//   // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyAyoKfQFZr1xwIuohMmZXegG4yCqanc0wE",
//   authDomain: "well-rounded-communities.firebaseapp.com",
//   projectId: "well-rounded-communities",
//   storageBucket: "well-rounded-communities.appspot.com",
//   messagingSenderId: "464681115134",
//   appId: "1:464681115134:web:363648907255548a9c34af",
//   measurementId: "G-WE8E6L662R"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);