import { Component } from "@angular/core";

@Component({
    selector: 'app-hero',
    templateUrl: 'hero.component.html'
})
export class HeroComponent {
    
    public nameHR: string = 'Captain America';
    public age: number = 39;

    //El getter en TS funciona como una propiedad
    get getUppercaseName():string{
        return this.nameHR.toUpperCase();
    }
    getName():string{
        return ` ${this.nameHR} - ${this.age} `;
    }

    changeName():void{
        this.nameHR = 'Spiderman';
    }

    changeAge():void{
        this.age = 40;
    }
}