import { IonicModule } from 'ionic-angular';
import { NgModule } from '@angular/core';
import { ListItemComponent } from './list-item/list-item';
import { MycanvasComponent } from './mycanvas/mycanvas';
@NgModule({
	declarations: [ListItemComponent,
    MycanvasComponent],
	imports: [IonicModule],
	exports: [ListItemComponent,
    MycanvasComponent]
})
export class ComponentsModule {}
