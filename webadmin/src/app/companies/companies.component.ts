import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../services/profile.service';
import { ControlService } from '../services/control.service';
@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss']
})
export class CompaniesComponent implements OnInit {
  snap: any;
  form:any;
  hidden:boolean = true;
  submitted: boolean = false;
  items: any;
  constructor(public ph: ProfileService, public ctrl: ControlService) { }

  ngOnInit() {
    this.ph.getCompanyrofile(this.ctrl.current_key).on('value', snapshot => {
      this.snap = snapshot.val()
      this.items = [];
      //  this.pop.hideLoader()
        snapshot.forEach( snap => {
         
          this.items.push({
            key: snap.key,
            name: snap.val().driverName,
            phone: snap.val().phone,
           // pic: snap.val().picture,
           
          });
          return false
  
        
        });
   });

  }


  onSubmit(form: any ){
    this.form = form;
    console.log(form.name, form.bank, form.nex)
    if (form.name && form.bank && form.nex)
    return this.ph.getCompanyrofile(this.ctrl.current_key).update({
      account: form.name,
      bank: form.bank,
      name: form.nex,
      password: form.password
    }).then(()=>{
      this.submitted = true;
    });
  }



  Toggle(){
    this.hidden = false;
  }

  openDialog2(){
    alert('We will process your payment')
    this.ph.getCompanyrofile(this.ctrl.current_key).update({
     earnings: 0
    }).then(()=>{
      this.submitted = true;
    });
  }

}
