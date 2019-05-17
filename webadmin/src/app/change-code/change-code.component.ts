import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from '../services/authservice.service';
import { Router } from '@angular/router';
import { ProfileService } from '../services/profile.service';
import { ControlService } from '../services/control.service';

@Component({
  selector: 'app-change-code',
  templateUrl: './change-code.component.html',
  styleUrls: ['./change-code.component.scss']
})
export class ChangeCodeComponent implements OnInit {
  
  favoritePayment: string;
  favoritePool: string;
  favoriteschedule: string;
  favoriterefer: string;
  favoritewallet: string;
  favoritecompany: string;

  pools: string[] = ['Yes', 'No'];
  companys: string[] = ['Yes', 'No'];
  schedules: string[] = ['Yes', 'No'];
  wallets: string[] = ['Yes', 'No'];
  refers: string[] = ['Yes', 'No'];

  form: any;
  powers: string[];
  items: any;
  submitted: boolean = false;
  submitted2: boolean = false;
  submitted3: boolean = false;
  submitted4: boolean = false;
  submitted5: boolean = false;
  submitted6: boolean = false;
  constructor(public authS: AuthserviceService, public ctrl: ControlService, public router: Router, public ph: ProfileService) { 
    this.ctrl.pageName = 'Settings'
  }
     
  ngOnInit() {
    this.ph.getDashboardProfile().on('value', snapshot => {
      this.items = snapshot.val();
     
      if (this.items.pool){
        this.favoritePool = 'Yes'
      }else{
        this.favoritePool = 'No'
      }

      if (this.items.company){
        this.favoritecompany = 'Yes'
      }else{
        this.favoritecompany = 'No'
      }
      
      if (this.items.refer){
        this.favoriterefer = 'Yes'
      }else{
        this.favoriterefer = 'No'

      }

      if (this.items.wallet){
        this.favoritewallet = 'Yes'
      }else{
        this.favoritewallet = 'No'

      }
      
      if (this.items.schedule){
        this.favoriteschedule = 'Yes'
      }else{
        this.favoriteschedule = 'No'
      }

    });
  }

  onSubmit(form: any ) {
    this.form = form;
    return this.ph.dashboardProfile.update({
      code: form.name,
    }).then(d =>{
      this.submitted = true;
      console.log(d)
    });
  } 


  triggerPool(){
    if (this.favoritePool == this.pools[0]){
    return this.ph.dashboardProfile.update({
      pool: true,
    }).then(d =>{
     // this.submitted = true;
      console.log(d)
    });
  }else{
    return this.ph.dashboardProfile.update({
      pool: false,
    }).then(d =>{
     // this.submitted = true;
      console.log(d)
    });
  }
  }

  triggerSchedule(){
    if (this.favoriteschedule == this.schedules[0]){
    return this.ph.dashboardProfile.update({
      schedule: true,
    }).then(d =>{
     // this.submitted = true;
      console.log(d)
    });
  }else{
    return this.ph.dashboardProfile.update({
      schedule: false,
    }).then(d =>{
     // this.submitted = true;
      console.log(d)
    });
  }
  }

  triggerRefer(){
    if (this.favoriterefer == this.refers[0]){
    return this.ph.dashboardProfile.update({
      refer: true,
    }).then(d =>{
     // this.submitted = true;
      console.log(d)
    });
  }else{
    return this.ph.dashboardProfile.update({
      refer: false,
    }).then(d =>{
     // this.submitted = true;
      console.log(d)
    });
  }
  }

  triggerWallet(){
    if (this.favoritewallet == this.wallets[0]){
    return this.ph.dashboardProfile.update({
      wallet: true,
    }).then(d =>{
     // this.submitted = true;
      console.log(d)
    });
  }else{
    return this.ph.dashboardProfile.update({
      wallet: false,
    }).then(d =>{
     // this.submitted = true;
      console.log(d)
    });
  }
  }

  triggerCompany(){
    if (this.favoritecompany == this.companys[0]){
    return this.ph.dashboardProfile.update({
      company: true,
    }).then(d =>{
     // this.submitted = true;
      console.log(d)
    });
  }else{
    return this.ph.dashboardProfile.update({
      company: false,
    }).then(d =>{
     // this.submitted = true;
      console.log(d)
    });
  }
  }
 

}
