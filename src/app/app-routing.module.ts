import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//components
import { ContractSearchComponent } from './components/contract-search/contract-search.component';

const appRoutes:Routes = [
    {
        path: '',
        component: ContractSearchComponent
    },
    {     
        path: '**', 
        redirectTo: 'ContractSearchComponent' 
    }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
