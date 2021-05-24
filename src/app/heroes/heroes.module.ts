import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroComponent } from './hero/hero.component';
import { HerolistComponent } from './herolist/herolist.component';

@NgModule({
    declarations: [
        HeroComponent,
        HerolistComponent
    ],
    exports:[
        HerolistComponent
    ],
    imports: [
        CommonModule
    ]
})
export class HeroesModule {

}