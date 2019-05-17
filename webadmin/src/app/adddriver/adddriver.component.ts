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
  selector: 'app-adddriver',
  templateUrl: './adddriver.component.html',
  styleUrls: ['./adddriver.component.scss']
})
export class AdddriverComponent implements OnInit {

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
  myCar: any = 'No car selected';
   constructor(private fb: FormBuilder,  public upload: UploadServiceService, public authS: AuthserviceService, public ctrl: ControlService, public router: Router, public ph: ProfileService) { 
  this.ctrl.pageName = 'Add Item'
  this.ctrl.newScene = true;
  this.ctrl.createNew = false;
  
  }


  ngOnInit() {
    this.ph.getDashboardProfile().on('value', snapshot => {
      this.fists.push([snapshot.val().car_0],[snapshot.val().car_1],[snapshot.val().car_2])
      
    });
  }


  public fileOverDropZone(e:any):void {
    this.isDropZoneOver = e;
     console.log(this.files);
  } 

  public openItem(f){
  console.log(f[0])
  this.myCar = f[0]
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


public FileChangeEvent2(fileInput:any){
  this.CurrentFile2 = fileInput.target.files[0];
 console.log(this.CurrentFile2);
 let reader = new FileReader();
 reader.onload = () => {
         this.ImageSource2 = reader.result;
     };
 reader.readAsDataURL(this.CurrentFile2);
  
}

public doThis(){
  this.ctrl.submitted=false; this.ctrl.submitted2=false; this.CurrentFile=null; this.isEnabledUpload=false; this.CurrentFile2=null; this.isEnabledUpload2=false
  this.router.navigateByUrl('/drivers')
}

public doThat(){
  this.ctrl.submitted=false; this.ctrl.submitted2=false; this.CurrentFile=null; this.isEnabledUpload=false; this.CurrentFile2=null; this.isEnabledUpload2=false
}



onSubmit(form: any ) {
  if (this.CurrentFile || this.CurrentFile2){
firebase.auth().createUserWithEmailAndPassword(form.email, form.password).then( newUser => {
  
  this.ph.getDriverProfile(newUser.user.uid).update({
    name: form.name,
    city: form.city,
    license: form.license,
    carmodel: form.model,
    caryear: form.year,
    plate: form.plate,
    seats: form.seat,
    rating: 0,
    earnings: 0,
    phoneNumber: form.phone,
    active_state: false,
    accountNumber: form.account,
    Bank: form.bank,
    Cartype: this.myCar,
    price: 10,
    Language: 'en',
    inspector: 'NONE'
  }).then(()=>{
 // console.log(tu.key)
  //this.ctrl.submitted = true;
  this.isEnabledUpload = true;
  this.isEnabledUpload2 = true;
  this.upload.UploadLicense(this.CurrentFile, newUser.user.uid)
  this.upload.UploadProfilePicture(this.CurrentFile2, newUser.user.uid)
})
  
})
}else{
  console.log('Done for Now')  }
  
}




}
