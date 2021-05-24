import { Component } from '@angular/core';


@Component({
    selector: 'app-contador',
    template: `
    
    <h1>{{title}}</h1>
    <h3>La base es: <strong>{{base}}</strong></h3>

    <button (click)="accumulate(base)"> + {{base}} </button>
    <span> {{num}} </span>
    <button (click)="accumulate(-base)"> - {{base}} </button>
    `
})


export class ContadorComponent {
    title:string = 'Contador Component';
    num: number = 10;
    base: number = 5;
  
    // sum(){
    //   this.num += 1; 
    // }
  
    // rest(){
    //   this.num -= 1; 
    // }
  
    accumulate(valor:number){
      this.num += valor;
    }
}