import { IonicModule } from 'ionic-angular';
import { NgModule } from '@angular/core';
import { ListItemComponent } from './list-item/list-item';
@NgModule({
	declarations: [ListItemComponent],
	imports: [IonicModule],
	exports: [ListItemComponent]
})
export class ComponentsModule {}
