import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ResetPasswordPage } from './reset-password';
@NgModule({
	declarations: [
		ResetPasswordPage
	],
	imports: [
		IonicPageModule.forChild(ResetPasswordPage),
	],
	entryComponents: [
		ResetPasswordPage
	]
})
export class ResetPasswordPageModule { }