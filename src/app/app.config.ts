import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideHttpClient, withFetch } from '@angular/common/http';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { provideClientHydration } from '@angular/platform-browser';
import { routes } from './app.routes';

const firebaseConfig = {
  apiKey: 'AIzaSyAhBNfCiFG55uqkafp3lnb6jDQb2xJR88w',
  authDomain: 'angular-firebase-auth-809c6.firebaseapp.com',
  projectId: 'angular-firebase-auth-809c6',
  storageBucket: 'angular-firebase-auth-809c6.appspot.com',
  messagingSenderId: '750560032732',
  appId: '1:750560032732:web:5848b2f2a733dd3af8c119',
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideHttpClient(withFetch()),
    importProvidersFrom([
      provideFirebaseApp(() => initializeApp(firebaseConfig)),
      provideAuth(() => getAuth()),
    ]),
  ],
};
