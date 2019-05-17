import { Component, OnInit , ElementRef, ViewChild} from '@angular/core';
import { AuthserviceService } from '../services/authservice.service';
import { Router } from '@angular/router';
import { ProfileService } from '../services/profile.service';
import { ControlService } from '../services/control.service';
import * as firebase from 'firebase/app';
import { FileItem } from '../directives/file-item';
import { AngularFireStorageModule } from 'angularfire2/storage';
import 'firebase/storage';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { UploadServiceService } from '../services/upload-service.service';

@Component({
  selector: 'app-addpassenger',
  templateUrl: './addpassenger.component.html',
  styleUrls: ['./addpassenger.component.scss']
})
export class AddpassengerComponent implements OnInit {

  public createNew: boolean = false;
  public edit: boolean = false;
  public eventList: Array<any>;
  CurrentFile:File;
  CurrentFile2:File;
  ImageSource:any;
  ImageSource2:any;
  form: any;
  showMe: boolean = false;
  isDropZoneOver:boolean = false;
  isEnabledUpload: boolean = false;
  isEnabledUpload2: boolean = false;
  files: Array<FileItem[]> = [];
  id: any;
  @ViewChild('fileInput') fileInput: ElementRef;
   public item_subProfile: any;
   isDecided: boolean = false;
  profileUploaded: boolean = false;
  selectedFile: any;
  items: any;
  submitted: boolean = false;
  submitted2: boolean = false;
  fileToUpload: Array<FileItem[]> = [];
 fists: any = [];
  myCar: any;
   constructor(private fb: FormBuilder,  public upload: UploadServiceService, public authS: AuthserviceService, public ctrl: ControlService, public router: Router, public ph: ProfileService) { 
  this.ctrl.pageName = 'Add Item'
  this.ctrl.newScene = true;
  this.ctrl.createNew = false;
  
  }


  ngOnInit() {
   
  }


  public fileOverDropZone(e:any):void {
    this.isDropZoneOver = e;
     console.log(this.files);
  } 



  public FileChangeEvent(fileInput:any){
    this.CurrentFile = fileInput.target.files[0];
   console.log(this.CurrentFile);
   let reader = new FileReader();
   reader.onload = () => {
           this.ImageSource = reader.result;
       };
   reader.readAsDataURL(this.CurrentFile);
    
}


public doThis(){
  this.ctrl.submitted=false; this.ctrl.submitted2=false; this.CurrentFile=null; this.isEnabledUpload=false; this.CurrentFile2=null; this.isEnabledUpload2=false
  this.router.navigateByUrl('/clients')
}

public doThat(){
  this.ctrl.submitted=false; this.ctrl.submitted2=false; this.CurrentFile=null; this.isEnabledUpload=false; this.CurrentFile2=null; this.isEnabledUpload2=false
}



onSubmit(form: any ) {
  if (this.CurrentFile){
    
      firebase.auth().createUserWithEmailAndPassword(form.email, form.password).then( newUser => {
        
  this.ph.getUserProfile(newUser.user.uid).update({
    name: form.name,
    rating: 0,
    phoneNumber: form.phone,
    email: form.email,
    earnings: 0
  }).then(()=>{
  
  //this.ctrl.submitted = true;
  this.isEnabledUpload = true;
  this.upload.UploadPassengerPic(this.CurrentFile, newUser.user.uid)
  
})

      })
  }else{
console.log('Done for Now')  }
}




}
