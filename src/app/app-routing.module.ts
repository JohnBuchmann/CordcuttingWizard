import { DeviceFormComponent } from './admin/device-manager/device-form/device-form.component';
import { DeviceManagerComponent } from './admin/device-manager/device-manager.component';
import { ReporterrorComponent } from './reporterror/reporterror.component';
import { LoginComponent } from './login/login.component';
import {NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';



import { ServiceFormComponent} from './admin/service-manager/service-form/service-form.component';
import { HomeComponent } from './home/home.component';
import { ServiceManagerComponent } from './admin/service-manager/service-manager.component';



const routes = [
    {path: '', component: HomeComponent },
    {path: 'reporterror', component: ReporterrorComponent },
    {path: 'manager', component: ServiceManagerComponent, children: [
      {path: 'form', component: ServiceFormComponent }
    ] },
    {path: 'device-manager', component: DeviceManagerComponent, children: [
      {path: 'device-form', component: DeviceFormComponent}
    ]},
    {path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
