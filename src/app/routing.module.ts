import { NgModule} from '@angular/core';
import { Routes , RouterModule} from "@angular/router";
import { PortafolioComponent } from './cuerpo/portafolio/portafolio.component';
import { NosotrosComponent } from './cuerpo/nosotros/nosotros.component';
import { ItemComponent } from './cuerpo/item/item.component';


const rutas : Routes = [
    { path : 'home', component: PortafolioComponent},
    { path : 'nosotros', component: NosotrosComponent },
    { path : 'item', component: ItemComponent },
    { path : '**', pathMatch: 'full', redirectTo: 'home' }
]

@NgModule({
    imports: [
        RouterModule.forRoot( rutas , { useHash: true })
    ],

    exports: [
        RouterModule
    ]
})

export class AppRouting {}
