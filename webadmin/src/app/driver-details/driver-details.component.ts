import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ControlService } from '../services/control.service';
import { ProfileService } from '../services/profile.service';
import { EmailService } from '../services/email.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-driver-details',
  templateUrl: './driver-details.component.html',
  styleUrls: ['./driver-details.component.scss']
})
export class DriverDetailsComponent implements OnInit {
  submitted: boolean = false;
  form: any;
  driverEmail:any;
  username: any;
  isDecided: boolean = false;
  snap: any;
  id:any;
  wallet: any;
allowed: boolean = true
  message: any;
  earnings: any;
  driverPay: any;
  totalPaid: any = 0;
  federalPay: any;

  AgentPay: any;
  MaintanancePay: any;
  companypay: any;
  isDecider2: boolean = false;
  paydriver: any;
  paycompany: any;
  payagent: any;
  paymain: any;
  payfed: any;
  public item: Array<any>;
  constructor(public router: Router, public dialog: MatDialog, public email: EmailService, public ctrl: ControlService, public ph:ProfileService) {
    ctrl.pageName = 'Drivers_Details'
   }

  ngOnInit() {
   
      this.ph.getDriverProfile(this.ctrl.cur_Item).on('value', snapshot => {
     
    
         this.snap = snapshot.val()
         this.earnings = Math.round(snapshot.val().earnings)
         
         this.driverPay = Math.round(snapshot.val().driverPay)
         this.companypay = Math.round(snapshot.val().companyPay)
         this.MaintanancePay = Math.round(snapshot.val().Maintanance)
         this.AgentPay = Math.round(snapshot.val().AgentPay)
         this.federalPay = Math.round(snapshot.val().FederalPay)
         this.totalPaid = Math.round(snapshot.val().totalPaid)
   
     this.paydriver = Math.round(this.earnings*80/100)
     this.paycompany = Math.round(this.earnings*10/100)
     this.paymain = Math.round(this.earnings*2/100)
     this.payagent = Math.round(this.earnings*3/100)
     this.payfed = Math.round(this.earnings*5/100)

     console.log(this.snap)
    });


    this.ph.dashboardProfile.on('value', snap => {
      this.wallet = snap.val().wallet
    })
     
   }
 
  
  
   openDialog(): void {
    this.ctrl.name = 'Are You Sure To Delete?'
   let dialogRef = this.dialog.open(DialogComponent, {
     width: '250px',
   });

   dialogRef.afterClosed().subscribe(result => {
    if (!this.ctrl.state_1){
      this.Delete();
      this.ctrl.state_1 = true
   }
   });
 }

 
 
   Mail(email, name){
     this.driverEmail = email
     let myText = 'Hi '+ name + ', '
    // this.ctrl.canHide = true
     this.username = name
     window.open("mailto:"+email+'?cc='+'&subject='+'Message From Admin'+'&body='+ myText);
   }
 
   onSubmit(form: any ) {
     this.form = form;
     this.email.send('Message From Admin', form.name, this.driverEmail)
     console.log(this.driverEmail)
   } 
 
 
 
   login() {
     this.router.navigateByUrl('driver');
   }
 
 
 
   Delete(){
     console.log(this.ctrl.cur_Item)
     this.ph.getDriverProfile(this.ctrl.cur_Item).remove().then(f =>{
      this.openDialog3('Driver Deleted Succefully')
      this.allowed = false;
      this.router.navigateByUrl('driver').then(sucess =>{
        this.allowed = true
      })
     })
   }

    
   History(){
    this.router.navigateByUrl('history').then(sucess =>{
      this.allowed = true
    })
   }


   openDialog3(g): void {
    this.ctrl.name = g
   let dialogRef = this.dialog.open(DialogComponent, {
     width: '250px',
   });

   dialogRef.afterClosed().subscribe(result => {
   
   });
 }


   openDialog2(): void {
    this.ctrl.name = 'Have You Paid This Driver?'
   let dialogRef = this.dialog.open(DialogComponent, {
     width: '250px',
   });

   dialogRef.afterClosed().subscribe(result => {
    if (!this.ctrl.state_1){
     // this.confirmPay();
      this.ctrl.state_1 = true
   }
   });
 }

 openDialog4(): void {
  this.ctrl.name = 'Have You Paid The Referal?'
 let dialogRef = this.dialog.open(DialogComponent, {
   width: '250px',
 });
}


 Block(){
  this.ph.getDriverProfile(this.ctrl.cur_Item).update({
   blocked: true
  }).then((suc) =>{
    this.openDialog3('Driver Has Been Blocked')
  })
 }


 UnBlock(){
  this.ph.getDriverProfile(this.ctrl.cur_Item).update({
   blocked: false
  }).then((suc) =>{
    this.openDialog3('Driver Has Been UnBlocked')
  })
 }
 
 
 
 confirmDriverPay() {
  this.ph.driverProfile.child(this.ctrl.cur_Item).update({
    driverPay: this.earnings*80/100,
    companyPay: this.earnings*10/100,
    AgentPay: this.earnings*3/100,
    FederalPay: this.earnings*5/100,
    Maintanance: this.earnings*2/100,
  }).then((suc) => {
    this.ph.driverProfile.child(this.ctrl.cur_Item).update({
      earnings: 0,
    }).then((suc) => {
      this.openDialog3('Payment Successful, Now Click on Cash Out Below After Making Deposits.')
    })
  })



}


confirmPay1() {
  this.ph.driverProfile.child(this.ctrl.cur_Item).update({
    driverPay: 0,
  }).then((suc) => {
    this.openDialog3('Cash Out Successful')
  })
}

confirmPay2() {
  this.ph.driverProfile.child(this.ctrl.cur_Item).update({
    companyPay: 0,
  }).then((suc) => {
    this.openDialog3('Cash Out Successful')
  })
}

confirmPay3() {
  this.ph.driverProfile.child(this.ctrl.cur_Item).update({
    AgentPay: 0,
  }).then((suc) => {
    this.openDialog3('Cash Out Successful')
  })
}

confirmPay4() {
  this.ph.driverProfile.child(this.ctrl.cur_Item).update({
    FederalPay: 0,
  }).then((suc) => {
    this.openDialog3('Cash Out Successful')
  })
}


confirmPay5() {
  this.ph.driverProfile.child(this.ctrl.cur_Item).update({
    Maintanance: 0,
  }).then((suc) => {
    this.openDialog3('Cash Out Successful')
  })
}

confirmComPay() {
  this.ph.driverProfile.child(this.ctrl.cur_Item).update({
    companyPay: 0,
    earnings: this.earnings - this.earnings*10/100
  }).then((suc) => {
    this.openDialog3('Payment Confirmed');
  });
}




   confirmRefPay() {
    this.ph.driverProfile.child(this.ctrl.cur_Item).update({
      FederalPay: 0,
      earnings: this.earnings - this.earnings*5/100
    }).then((suc) => {
      this.openDialog3('Payment Confirmed');
    });
  }

  confirmMainPay() {
    this.ph.driverProfile.child(this.ctrl.cur_Item).update({
      Maintanance: 0,
      earnings: this.earnings - this.earnings*2/100
    }).then((suc) => {
      this.openDialog3('Payment Confirmed');
    });
  }
 
 
 gotoPage(item){
   window.open(item.license_picture);
 }
 
}
