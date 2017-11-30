import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { GoogleAnalytics } from '@ionic-native/google-analytics';

import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, ga: GoogleAnalytics) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      setTimeout(() => {
        ga.startTrackerWithId('UA-110495448-1')
       .then(() => {
         console.log('Google analytics is ready now');
            ga.trackView('test');
         // Tracker is ready
         // You can now track pages or set additional information such as AppVersion or UserId
       })
       .catch(e => console.log('Error starting GoogleAnalytics', e));

           });


    });

  }



}
