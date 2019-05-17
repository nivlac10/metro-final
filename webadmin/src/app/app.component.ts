import { Component, NgZone } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

import { Router } from '@angular/router';
import * as firebase from 'firebase/app';
import { AuthserviceService } from './services/authservice.service';
import { ControlService } from './services/control.service';
import { ProfileService } from './services/profile.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { DialogComponent } from './dialog/dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  msgVal: string = '';
  pages: any;
  username: any;
  canHide: boolean = false;
  isAllowed: boolean = false;
  line: boolean = false;
  isDarkTheme: boolean = true;
  navList: { heading: string; icon: string; link: string; pages: { title: string; link: string; icon: string; }[]; }[];
  constructor(public afAuth: AngularFireAuth, public zone: NgZone, public dialog: MatDialog, public auth: AuthserviceService, private ph:ProfileService, public ctrl: ControlService, public router: Router, public af: AngularFireDatabase) {
    //localStorage.removeItem('firebase:previous_websocket_failure');
        this.router.navigateByUrl('').then(sucess =>{
          
        })

        this.navList = [
          {
            heading: 'Dashboard',
            icon: 'dashboard',
            link: '/home',
            pages: []
          },
          {
            heading: 'Map Stats',
            icon: 'map',
            link: '/map',
            pages: [
              {
                title: 'Ongoing',
                link: '/progress',
                icon: ''
              },
              {
                title: 'Available Drivers',
                link: '/available',
                icon: ''
              }
            ]
          },
          {
            heading: 'Book A Ride',
            icon: 'place',
            link: '/request',
            pages: []
          },
          {
            heading: 'User Management',
            icon: 'face',
            link: '/client',
            pages: [
              {
                title: 'Add A User',
                link: '/addpassenger',
                icon: 'departure_board'
              },
              {
                title: 'View All Passengers',
                link: '/client',
                icon: 'departure_board'
              }
            ]
          },
          {
            heading: 'Driver Management',
            icon: 'directions_car',
            link: 'directions_car',
            pages: [
              {
                title: 'Add A Driver',
                link: '/adddriver',
                icon: 'departure_board'
              },
              {
                title: 'Approved',
                link: '/driver',
                icon: 'directions_car'
              },
              {
                title: 'UnApproved',
                link: '/driver_pending',
                icon: 'departure_board'
              }
             
            ]
          },
          {
            heading: 'FeedBacks',
            icon: 'stars',
            link: '/feed',
            pages: [
             
            ]
          },
          {
            heading: 'News',
            icon: 'announcement',
            link: '/additem',
            pages: []
          },
          {
            heading: 'Social',
            icon: 'public',
            link: '/instagram',
            pages: []
          },
          {
            heading: 'App Features',
            icon: 'pages',
            link: '/change_code',
            pages: []
          },
          {
            heading: 'App Information',
            icon: 'info',
            link: '/settings',
            pages: [
              {
                title: 'App Name',
                link: '/appname',
                icon: 'appname'
              },
              {
                title: 'Careers',
                link: '/careers',
                icon: 'event_seat'
              },
              {
                title: 'Terms and Conditions',
                link: '/termsandservices',
                icon: 'class'
              },
              {
                title: 'Payment',
                link: '/appcurrency',
                icon: 'card'
              },
              {
                title: 'FAQ',
                link: '/faq',
                icon: 'question_answer'
              }
            ]
          },
          {
            heading: 'Car Types',
            icon: 'local_taxi',
            link: '/cartype',
            pages: []
          },
          {
            heading: 'App Configurations',
            icon: 'settings',
            link: '/settings',
            pages: [
              {
                title: 'Price Settings',
                link: '/changeprice',
                icon: 'perm_identity'
              },
              {
                title: 'Language',
                link: '/countrycode',
                icon: 'perm_identity'
              },
              {
                title: 'Push Notifications',
                link: '/website',
                icon: 'perm_identity'
              }
            ]
          },
        ]
     
    
      }

  ngOnInit() {
    if (window.screen.width <= 720)
     this.line = true

     this.ph.getDashboardProfile().on('value', snapshot => {
      this.username = snapshot.val().username;
    });
  }

  check(){
    this.canHide = this.canHide ? false : true
  }

  light(){
    this.isDarkTheme = false;
  }

  changeColor(){
    this.isDarkTheme = this.isDarkTheme ? false : true
  }


onResize(event) {
  this.line = (event.target.innerWidth <= 720) ? true : false;
  this.canHide = (event.target.innerWidth <= 720) ? true : false;
}


Pop(): void {
  this.ctrl.name = 'sdgtobjwfbsfiweierihwehhieihuwehiewiuhwethiihweihuewtihwutehiuetiuht'
    let dialogRef = this.dialog.open(DialogComponent, {
      width: '700px',
    });
 };


  hideBar(){
    console.log("can go home")
    this.ctrl.sidemenu_toggle = false
  }
  
  sideNav(){
    this.ctrl.canShowNav = false;
  }
  
  
  openChange(){
    this.zone.run(()=>{
      this.router.navigateByUrl('change_code').then(sucess =>{ 
    
      })
    })
    
  }

  goHome(){
    this.zone.run(()=>{
    this.router.navigateByUrl('home').then(sucess =>{ 
  
    })
  })
  
}

  
  gotoPage(page){
    this.zone.run(()=>{
    this.router.navigateByUrl(page).then(sucess =>{ 
      // document.getElementById("container").style.color = "red";
    })
  })
  }
  
  logOut(){
    this.auth.logout()
  }

}
