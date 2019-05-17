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
  selector: 'app-additem',
  templateUrl: './additem.component.html',
  styleUrls: ['./additem.component.scss']
})
export class AdditemComponent implements OnInit {
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
  constructor(private fb: FormBuilder,  public upload: UploadServiceService, public authS: AuthserviceService, public ctrl: ControlService, public router: Router, public ph: ProfileService) { 
  this.ctrl.pageName = 'Add Item'
  this.ctrl.newScene = true;
  this.ctrl.createNew = false;
  
  }

  ngOnInit() {
    this.ph.getUserNewsProfile().on('value', snapshot => {
      if(this.items)
      this.items = snapshot.val();
    });
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

public FileChangeEvent2(fileInput:any){
  this.CurrentFile2 = fileInput.target.files[0];
 console.log(this.CurrentFile2);
 let reader = new FileReader();
 reader.onload = () => {
         this.ImageSource2 = reader.result;
     };
 reader.readAsDataURL(this.CurrentFile2);
  
}




  onSubmit(form: any ) {
  
      this.form = form;
      //this.ctrl.submitted = true;
      this.isEnabledUpload = true;
      this.upload.createNewParentItem(this.CurrentFile, form.name)
    
  }


  onSubmit2(form: any ) {
      this.form = form;
     // this.ctrl.submitted2 = true;
      this.isEnabledUpload2 = true;
      this.upload.createNewSecondaryItem(this.CurrentFile2, 'chop')
    } 
  

  
 
}
