import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
// import { AngularFireDatabase } from 'angularfire2/database';
import { ProfileService } from '../services/profile.service';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import { ControlService } from '../services/control.service';
declare var google;


@Component({
  selector: 'app-available',
  templateUrl: './available.component.html',
  styleUrls: ['./available.component.scss']
})
export class AvailableComponent implements OnInit {
  public number_of_drivers: number = 0;
  number_of_Passengers: number;
  total_number_of_drivers: any = 0;
  number_of_drivers_waiting: any = 0;
  number_of_users: any = 0;
  number_of_items: any = 0;
  number_of_bookigs: any = 0;
  free_driver_num: any = 0;
  run_num: any = 0;
  cars: any;
  feed_num: any = 0;
  shares: any = 0;
  passKey: any;
  items: any = [];
name : any;
other: any;
cartype : any ;
phone: any;
location : any ;
destination : any;
price: any;
driverName : any;
displayedColumns = ['phone', 'pic', 'location', 'car', 'map'];s
dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);
holder: any;
pages: any;
  constructor(public router: Router, public ctrl: ControlService, public ph: ProfileService) { }

  ngOnInit() {
    let bsc =[]
    this.ph.ActiveDriverProfile.on('child_added', passengerSnapshot => {
      // console.log(passengerSnapshot.val().client.Client_Dropped);
      if (passengerSnapshot.val() != null) {
        
        let id = {
          phone: passengerSnapshot.val().driver_details[4],
          pic: passengerSnapshot.val().driver_details[5], 
          lat: passengerSnapshot.val().driver_details[0], 
          lng: passengerSnapshot.val().driver_details[1],  
          car: passengerSnapshot.val().driver_details[3]
        }
         
          this.ctrl.started = false;
       this.items.push(id);

       this.dataSource = this.items
       
        
       



      }
          })


          this.ph.dashboardProfile.on('value', snap => {
            this.cars = snap.val()
          })

          
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;

     /**
      * Set the paginator after the view init since this component will
      * be able to query its view for the initialized paginator.
      */
     ngAfterViewInit() {
       this.dataSource.paginator = this.paginator;
     }

     gotoPage(item){
      window.open(item)
    }

    gotoMAP(i, j){
      this.router.navigateByUrl('map').then(sucess =>{
        this.ctrl.lat = i;
        this.ctrl.lng = j;
      })
    }

}
export interface Element {
  phone: number;
  pic: any;
  location: any;
  car: any;
  map: any;
}

const ELEMENT_DATA: Element[] = [

];