import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './includes/header/header.component';
import { FooterComponent } from './includes/footer/footer.component';
import { AjoutApiComponent } from './pages/ajout-api/ajout-api.component';
import { AjoutIntervenantComponent } from './pages/ajout-intervenant/ajout-intervenant.component';
import { AjoutApplicationComponent } from './pages/ajout-application/ajout-application.component';
import { AjoutCategorieComponent } from './pages/ajout-categorie/ajout-categorie.component';
import { AjoutTagsComponent } from './pages/ajout-tags/ajout-tags.component';
import { ListApisComponent } from './pages/list-apis/list-apis.component';
import { ListIntervenantsComponent } from './pages/list-intervenants/list-intervenants.component';
import { UpdateApiComponent } from './pages/update-api/update-api.component';
import { UpdateIntervenantComponent } from './pages/update-intervenant/update-intervenant.component';
import { UpdateAffectationComponent } from './pages/update-affectation/update-affectation.component';
import { AjoutAffectationComponent } from './pages/ajout-affectation/ajout-affectation.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { ListOperationComponent } from './pages/list-operation/list-operation.component';
import { ListApplicationsComponent } from './pages/list-applications/list-applications.component';
import { ListCategoriesComponent } from './pages/list-categories/list-categories.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';


import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

import {MatListModule} from '@angular/material/list';
import { MatMenuModule} from '@angular/material/menu';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AjoutApiComponent,
    AjoutIntervenantComponent,
    AjoutApplicationComponent,
    AjoutCategorieComponent,
    AjoutTagsComponent,
    ListApisComponent,
    ListIntervenantsComponent,
    UpdateApiComponent,
    UpdateIntervenantComponent,
    UpdateAffectationComponent,
    AjoutAffectationComponent,
    DashboardComponent,
    HomeComponent,
    ListOperationComponent,
    ListApplicationsComponent,
    ListCategoriesComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatPaginatorModule,
    MatDividerModule,
    MatSortModule,
    MatTableModule,
    MatToolbarModule,
    FormsModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
