import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjoutAffectationComponent } from './pages/ajout-affectation/ajout-affectation.component';
import { AjoutApiComponent } from './pages/ajout-api/ajout-api.component';
import { AjoutApplicationComponent } from './pages/ajout-application/ajout-application.component';
import { AjoutCategorieComponent } from './pages/ajout-categorie/ajout-categorie.component';
import { AjoutIntervenantComponent } from './pages/ajout-intervenant/ajout-intervenant.component';
import { AjoutTagsComponent } from './pages/ajout-tags/ajout-tags.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { ListApisComponent } from './pages/list-apis/list-apis.component';
import { ListApplicationsComponent } from './pages/list-applications/list-applications.component';
import { ListCategoriesComponent } from './pages/list-categories/list-categories.component';
import { ListIntervenantsComponent } from './pages/list-intervenants/list-intervenants.component';
import { ListOperationComponent } from './pages/list-operation/list-operation.component';
import { UpdateAffectationComponent } from './pages/update-affectation/update-affectation.component';
import { UpdateApiComponent } from './pages/update-api/update-api.component';
import { UpdateIntervenantComponent } from './pages/update-intervenant/update-intervenant.component';

const routes: Routes = [
 { path: '', redirectTo:'Home',  pathMatch:'full'},
 {path: 'Home' , component : HomeComponent},
 {path: 'AjoutApi',component : AjoutApiComponent},
 {path: 'ListApis',component : ListApisComponent},
 {path: 'UpdateApi',component : UpdateApiComponent},
 {path: 'AjoutIntervenant',component : AjoutIntervenantComponent},
 {path: 'UpdateIntervenant/:id',component : UpdateIntervenantComponent},
 {path: 'ListIntervenants',component : ListIntervenantsComponent},
 {path: 'AjoutAffectation',component : AjoutAffectationComponent},
 {path: 'UpdateAffectation',component : UpdateAffectationComponent},
 {path: 'ListOperations',component : ListOperationComponent},
 {path: 'AjoutCategorie',component : AjoutCategorieComponent},
 {path: 'ListCategories',component : ListCategoriesComponent},
 {path: 'AjoutTags',component : AjoutTagsComponent},
 {path: 'ListApplications',component : ListApplicationsComponent},
 {path: 'Dashboard',component : DashboardComponent},
 {path: 'UpdateAffectation',component : UpdateAffectationComponent},
 {path: 'AjoutApplication',component : AjoutApplicationComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
