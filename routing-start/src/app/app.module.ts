import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersService } from './servers/servers.service';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthService } from './auth.service';
import { AuthGuardService } from './auth-guard.service';
import { CanDeactivateGurad } from './servers/can-deactivate.service';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'servers', component: ServersComponent,
    // canActivate: [AuthGuardService],// this will prevent both parent child to load
    // canActivateChild: [AuthGuardService], // this will load the parent but prevent child to load 
    children: [{
      path: ':id', component: ServerComponent,
    },
    { path: ':id/edit', component: EditServerComponent, canDeactivate: [CanDeactivateGurad] }
    ]
  },
  {
    path: 'users', component: UsersComponent,
    children: [{ path: ':id/:name', component: UserComponent }]
  },
  {
    path: 'not-found', component: PageNotFoundComponent
  },
  {
    path: 'customer-dashboad', loadChildren: () => import('../../src/app/customer-dashboard/customer-dashboard.module').then(m => m.CustomerDashboardModule)
  },
  // {
  //   path: '**', redirectTo: 'not-found'
  // }


];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    ServersComponent,
    UserComponent,
    EditServerComponent,
    ServerComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ServersService, AuthService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
