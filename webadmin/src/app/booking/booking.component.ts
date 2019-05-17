import { Component, OnInit,  } from '@angular/core';
import { Router } from '@angular/router';
import { ControlService } from '../services/control.service';
import { ProfileService } from '../services/profile.service';
import { EmailService } from '../services/email.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {
  submitted: boolean = false;
  form: any;
  driverEmail:any;
  username: any;
  isDecided: boolean = false;
  snap: any;
  id:any;
  //item: any;
  allowed: boolean = true
  message: any;
  isDecider2: boolean = false;
  public items: Array<any>;
  constructor(public router: Router, public dialog: MatDialog, public email: EmailService, public ctrl: ControlService, public ph:ProfileService) {
   }

  
   ngOnInit() {
    this.ph._getLondonProfile().on('value', snapshot => {
      this.items = [];
    //  this.pop.hideLoader()
      snapshot.forEach( snap => {
       
        this.items.push({
          key: snap.key,
          name: snap.val().Client_username,
          phone: snap.val().Client_phoneNumber,
          pic: snap.val().Client_picture,
          rating: snap.val().Client_Rating,
          date: snap.val().Client_Date,
          time: snap.val().Client_Time,
          location: snap.val().Client_locationName,
          destination: snap.val().Client_destinationName
        });
        return false

      
      });
    });
  }
   
  
   openDialog(item): void {
     this.ctrl.name = 'Are You Done?'
    let dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
        if (!this.ctrl.state_1){
           this.Delete(item);
           this.ctrl.state_1 = true
        }
    });
  }




  openDialog3(g): void {
    this.ctrl.name = g
   let dialogRef = this.dialog.open(DialogComponent, {
     width: '250px',
   });

   dialogRef.afterClosed().subscribe(result => {
   
   });
 }
 


 
   Delete(item){
     this.ph.getLondonProfile(item).remove().then(f =>{
      this.openDialog3('User Removed Successfully')
      this.allowed = false;
      this.router.navigateByUrl('home').then(sucess =>{
        this.allowed = true
      })
     })
   }

 
 
 gotoPage(item){
   window.open(item.picture)
 }

}
