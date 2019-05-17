import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Pipe, Directive, Component } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { FormsModule }   from '@angular/forms';
import { ChartsModule } from 'ng2-charts/ng2-charts';
// New imports to update based on AngularFire2 version 4
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFirestoreDocument } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule} from '@angular/http';
import { FeedbacksComponent } from './feedbacks/feedbacks.component';
import { FeedbackDriverComponent } from './feedback-driver/feedback-driver.component';
import { FeedbackUserComponent } from './feedback-user/feedback-user.component';
// components
import { AppComponent } from './app.component';
import { FormBuilder, FormGroup, Validators} from "@angular/forms";
import { DriversComponent } from './drivers/drivers.component';
import { ClientsComponent } from './clients/clients.component';
import { HomeComponent } from './home/home.component';
import { DriversWaitingComponent } from './drivers-waiting/drivers-waiting.component';
import { LoginComponent } from './login/login.component';
import { BookingComponent } from './booking/booking.component';
import { ControlService } from './services/control.service';
import { EmailService } from './services/email.service';
import { AuthserviceService } from './services/authservice.service';
import { ProfileService } from './services/profile.service';
import { UploadServiceService } from './services/upload-service.service';
import { ChangeCodeComponent } from './change-code/change-code.component';
import { PayoutHistoryComponent } from './payout-history/payout-history.component';
import { UserhistoryComponent  } from './userhistory/userhistory.component';
import { AdditemComponent } from './additem/additem.component';
import { MoreitemComponent } from './moreitem/moreitem.component';
import { ManageComponent } from './manage/manage.component';
import { AdddriverComponent } from './adddriver/adddriver.component';
import { AddpassengerComponent } from './addpassenger/addpassenger.component';
import { RequestrideComponent } from './requestride/requestride.component';



import { NgDropFilesDirective } from './directives/ng-drop-files.directive';
import { ClientDetailsComponent } from './client-details/client-details.component';
import { DriverDetailsComponent } from './driver-details/driver-details.component';
import { ChatdriveComponent } from './chatdrive/chatdrive.component';
import { ChatuserComponent } from './chatuser/chatuser.component';
import { DriverwaitingDetailsComponent } from './driverwaiting-details/driverwaiting-details.component';
import { DialogComponent } from './dialog/dialog.component';
import { DialogUploadComponent } from './upload/upload.component';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CompaniesComponent } from './companies/companies.component';
import { StartComponent } from './start/start.component';
import { AddcompanyComponent } from './addcompany/addcompany.component';
import { AvailableComponent } from './available/available.component';
import { ProgressComponent } from './progress/progress.component';
import { MapComponent } from './map/map.component';
import { CartypeComponent } from './sidemenu/cartype/cartype.component';

import { AppcurrencyComponent } from './sidemenu/appcurrency/appcurrency.component';
import { AppnameComponent } from './sidemenu/appname/appname.component';
import { ChangepriceComponent } from './sidemenu/changeprice/changeprice.component';
import { CountrycodeComponent } from './sidemenu/countrycode/countrycode.component';
import { PhonenumberComponent } from './sidemenu/phonenumber/phonenumber.component';
import { WebsiteComponent } from './sidemenu/website/website.component';
import { FaqComponent } from './sidemenu/faq/faq.component';
import { CareersComponent } from './sidemenu/careers/careers.component';
import { TermsandserviceComponent } from './sidemenu/termsandservice/termsandservice.component';
import { InstagramComponent } from './sidemenu/instagram/instagram.component';
import { RequestdialogComponent } from './requestdialog/requestdialog.component';
import { AvailabledialogComponent } from './availabledialog/availabledialog.component';
import { CustomerdialogComponent } from './customerdialog/customerdialog.component';


export const firebaseConfig = {
  apiKey: "AIzaSyCwzaekjLiP39qJSPOtoFCQvcn1FWdUfmY",
  authDomain: "metro-app-47710.firebaseapp.com",
  databaseURL: "https://metro-app-47710.firebaseio.com",
  storageBucket: "metro-app-47710.appspot.com",
  messagingSenderId: "677545043138"
};




export const ROUTES: Routes = [
  // { path: '', component: StartComponent },
  { path: '', component: LoginComponent },
  { path: 'driver', component : DriversComponent },
  { path: 'driver_details', component : DriverDetailsComponent },
  { path: 'available', component : AvailableComponent },

  { path: 'adddriver', component : AdddriverComponent },
  { path: 'addpassenger', component : AddpassengerComponent },
  { path: 'request', component : RequestrideComponent },

  { path: 'progress', component : ProgressComponent },
  { path: 'client_details', component : ClientDetailsComponent },
  { path: 'additem', component : AdditemComponent },
  { path: 'moreitem', component : MoreitemComponent },
  { path: 'home', component: HomeComponent },
  { path: 'map', component: MapComponent },
  { path: 'booking', component: BookingComponent },
  { path: 'feed_driver', component : FeedbackDriverComponent },
  { path: 'feed_user', component : FeedbackUserComponent },
  { path: 'feed', component: FeedbacksComponent },
  { path: 'history', component: PayoutHistoryComponent },
  { path: 'driver_pending', component: DriversWaitingComponent },
  { path: 'chat_driver', component: ChatdriveComponent },
  { path: 'chat_user', component: ChatuserComponent },
  { path: 'driver_pending_details', component: DriverwaitingDetailsComponent },
  { path: 'client', component: ClientsComponent },
  { path: 'userhistory', component: UserhistoryComponent },
  { path: 'change_code', component: ChangeCodeComponent },
  { path: 'manage', component: ManageComponent },
  { path: 'company', component: CompaniesComponent },
  { path: 'addcompany', component: AddcompanyComponent },
  { path: 'phonenumber', component: PhonenumberComponent },
  { path: 'cartype', component: CartypeComponent },
  { path: 'appcurrency', component: AppcurrencyComponent },
  { path: 'appname', component: AppnameComponent},
  { path: 'careers', component: CareersComponent},
  { path: 'changeprice', component: ChangepriceComponent },
  { path: 'countrycode', component: CountrycodeComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'instagram', component: InstagramComponent },
 
  { path: 'termsandservices', component: TermsandserviceComponent},
  { path: 'addcompany', component: AddcompanyComponent },
  { path: 'website', component: WebsiteComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    DriversComponent,
    ClientsComponent,
    MapComponent,
    HomeComponent,
    AdddriverComponent,
    AddpassengerComponent,
    RequestrideComponent,
    DriversWaitingComponent,
    NgDropFilesDirective,
    AvailableComponent,
    ProgressComponent,
    DialogComponent,
    ManageComponent,
    UserhistoryComponent,
    LoginComponent,
    ChangeCodeComponent,
    AdditemComponent,
    DialogUploadComponent,
    PayoutHistoryComponent,
    MoreitemComponent,
    StartComponent,
    DriverDetailsComponent,
    DriverwaitingDetailsComponent,
    ClientDetailsComponent,
    FeedbackDriverComponent,
    FeedbackUserComponent,
    FeedbacksComponent,
    AddcompanyComponent,
    BookingComponent,
    ChatdriveComponent,
    ChatuserComponent,
    CompaniesComponent,
    CartypeComponent,
    AppcurrencyComponent,
    AppnameComponent,
    ChangepriceComponent,
    CountrycodeComponent,
    PhonenumberComponent,
    WebsiteComponent,
    FaqComponent, 
    CareersComponent,
    TermsandserviceComponent,
    InstagramComponent,
    RequestdialogComponent,
    AvailabledialogComponent,
    CustomerdialogComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    ChartsModule,
    HttpModule,
    FormsModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    MaterialModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(ROUTES, {useHash : true}),
  ],
  providers: [ControlService, FormBuilder, AuthserviceService, UploadServiceService, EmailService, ProfileService],
  bootstrap: [AppComponent],
  entryComponents: [ DialogComponent, DialogUploadComponent, RequestdialogComponent, AvailabledialogComponent, CustomerdialogComponent]
})
export class AppModule { }
