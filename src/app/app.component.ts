import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string;
  data = [];
  constructor(){
    this.name = 'Angular2 Electron!';
    this.generateDemoData();
    setTimeout(() => {
      this.name = 'Angular2 Electron!!!';
    },1000);
  }
  generateDemoData() {
    for(let i=0; i< 15; i++) {
      const obj: any = {};
      obj.name = `xxx股票${i}`;
      obj.code = `sz6` + this.generateNumber(5);
      obj.price = this.getRandomInt(10, 1000) / this.getRandomInt(1, 120);
      obj.fields = [];
      for (let j=0; j<5; j++) {
        obj.fields.push('filed' + i  + '' + j);
      }
      this.data.push(obj);
    }
  }
  generateNumber(count){
    var d = new Date().getTime();
    var str = 'x'.repeat(count || 16);
    return str.replace(/[xy]/g,function(c){
      const r = (d + Math.random()*16)%16 | 0;
      d = Math.floor(d/16);
      return (c==="x" ? r : (r&0x7|0x8)).toString(16);
    });
  }
  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
}
