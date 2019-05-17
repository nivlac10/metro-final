import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../services/profile.service';
import { ControlService } from '../services/control.service';
import { jsonpCallbackContext } from '@angular/common/http/src/module';
import { MatDialogRef, MatDialog } from '@angular/material';
import { RequestdialogComponent } from '../requestdialog/requestdialog.component';

@Component({
  selector: 'app-availabledialog',
  templateUrl: './availabledialog.component.html',
  styleUrls: ['./availabledialog.component.scss']
})
export class AvailabledialogComponent implements OnInit {
  items: any[];
  started: boolean  = true;

  constructor(public dialogref: MatDialogRef<AvailabledialogComponent>, public dialog: MatDialog,   public ph: ProfileService, public ctrl: ControlService) { }

  ngOnInit() {
    this.ph.getActiveDriverProfile().on('value', snapshot => {
      this.items = [];
         this.started = false
        snapshot.forEach( snap => {
         
          this.items.push({
            key: snap.key,
            lat: snap.val().driver_details[0],
            lng: snap.val().driver_details[1],
            id: snap.val().driver_details[4],
            push: snap.val().driver_details[2],
            cartype: snap.val().driver_details[3],
            pic: snap.val().driver_details[5],
          });
          console.log(snap.val())
          return false
        });
      });
  }


  Assign(i){
    this.ctrl.current_key = i
    this.dialogref.close();

    const dialogRef = this.dialog.open(RequestdialogComponent,
      {width:'500px',
      height:'700px'});
  
      dialogRef.afterClosed().subscribe

  }

}
