import { Component, ViewChild } from '@angular/core';

/**
 * Generated class for the MycanvasComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'mycanvas',
  templateUrl: 'mycanvas.html'
})
export class MycanvasComponent {

  @ViewChild('mycanvas') mycanvas;

  constructor() {

  }

  ngAfterViewInit(){ 

      let hammer = new window['Hammer'](this.mycanvas.nativeElement);
      hammer.get('pan').set({ direction: window['Hammer'].DIRECTION_ALL });

      hammer.on('pan', (ev) => {
        this.handlePan(ev);
      });

      this.drawEyes();
  }

  drawEyes(){

      let ctx = this.mycanvas.nativeElement.getContext('2d');

      ctx.beginPath();
      ctx.moveTo(10,10);
      ctx.lineTo(510,10);
      ctx.stroke();

  }

  redraw(){

      let ctx = this.mycanvas.nativeElement.getContext('2d');

      ctx.clearRect(0, 0, this.mycanvas.nativeElement.width, this.mycanvas.nativeElement.height);
      this.drawEyes();
  }

  handlePan(ev){

      this.redraw();

  }

}
