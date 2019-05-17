import { Component, OnInit } from '@angular/core';
import { ControlService } from '../services/control.service';
import { ProfileService } from '../services/profile.service';
import { EmailService } from '../services/email.service';
@Component({
  selector: 'app-chatuser',
  templateUrl: './chatuser.component.html',
  styleUrls: ['./chatuser.component.scss']
})
export class ChatuserComponent implements OnInit {
  items: any;
  form: any;
  submitted2: boolean = false;
  email: any;
  constructor(public ctrl: ControlService, public ph: ProfileService) { }

  ngOnInit() {

      this.ph._getFeedUserProfile2(this.ctrl.cur_Item).on('value', snapshot => {
        this.items = [];
        this.email = snapshot.val().email
      //  this.pop.hideLoader()
        snapshot.forEach( snap => {
  
          this.items.push({
            key: snap.key,
            email: snap.val().email,
            admin: snap.val().Admin_Message,
            user: snap.val().Client_Message,
          });
          return false
  
        })
       
      });
    }
  
  
  
    onSubmit2(form: any ) {
     // console.log(key)
      this.form = form;
      return this.ph._getFeedUserProfile2(this.ctrl.cur_Item).push({
        Admin_Message: form.name,
      }).then(()=>{
        this.submitted2 = true;
      });
    } 
  
  }


