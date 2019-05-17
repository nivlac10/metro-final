import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from '../services/authservice.service';
import { Router } from '@angular/router';
import { ProfileService } from '../services/profile.service';
import { ControlService } from '../services/control.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { DialogComponent } from '../dialog/dialog.component';
import {  } from '@angular/router';
@Component({
  selector: 'app-addcompany',
  templateUrl: './addcompany.component.html',
  styleUrls: ['./addcompany.component.scss']
})
export class AddcompanyComponent implements OnInit {
  form: any;
  powers: string[];
  items: Array<any>;
  items2: Array<any>;
  submitted: boolean = false;
  hidden: boolean = true;
  started: boolean = true;
  constructor(public ph: ProfileService, public router: Router, public dialog: MatDialog, public ctrl: ControlService) { }

  ngOnInit() {
    let snap1;
    this.ph.getCompanyProfile().on('value', snapshot => {
    this.items = [];
    this.started = false;
      snapshot.forEach( snap => {
        snap1 = snap
        this.items.push({
          key: snap.key,
          // state: snap.val().active_state,
        });
        console.log(snap.key)
        return false
      });
    });
  }

  onSubmit(form: any){
  let former = form.name;
  this.ph.getCompanyProfile().on('value', snapshot => {
    if (snapshot.key == former){
      alert('Name Already In Use, Please Choose Another')
    }else{
      return this.ph.companyProfile.child(former).update({
        earnings: 0
      }).then(()=>{
      this.submitted = true;
      })
    }
    })
  }


  Toggle(){
    this.hidden = false;
  }

  openDialog2(key): void {
    this.ctrl.name = 'Have You Paid This Company?'
   let dialogRef = this.dialog.open(DialogComponent, {
     width: '250px',
   });

   dialogRef.afterClosed().subscribe(result => {
   
      this.confirmPay(key);
      
   })
   };

   view(id){
        this.ctrl.current_key = id;
        console.log(this.ctrl.current_key);
        this.router.navigateByUrl('company').then(sucess =>{});
   }


   confirmPay(id) {
    this.ph.companyProfile.child(id).update({
      earnings: 0,
    }).then((suc) => {
      alert('Payment Confirmed')
    });
  }

}


