import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { NavBarComponent } from './nav-bar/nav-bar';
@NgModule({
	declarations: [
    NavBarComponent],
	imports: [IonicModule ],
	exports: [
    NavBarComponent],
	schemas: [
		CUSTOM_ELEMENTS_SCHEMA
	]
})
export class ComponentsModule {}
