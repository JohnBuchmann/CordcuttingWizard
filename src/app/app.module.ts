import { DevicesComponent } from './home/devices/devices.component';
import { MessageService } from './services/message.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceResultsComponent } from './home/services/service-results/service-results.component';
import { HeaderComponent } from './header/header.component';
import { ServiceManagerComponent } from './admin/service-manager/service-manager.component';
// import { ServiceFormComponent } from './admin/service-manager/service-form/service-form.component';
import { ServiceFormComponent } from "./admin/service-manager/service-form/service-form.component";
import { HomeComponent } from './home/home.component';


/* Services */
import { AuthService } from './services/auth.service';
import { EmailService } from './services/email.service';
import { ServicesService } from './services/services.service';

import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { LoginComponent } from './login/login.component';
import { ModalComponent } from './modal/modal.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './footer/footer.component';
import {ShareButtonsModule} from 'ngx-sharebuttons';
import { ReporterrorComponent } from './reporterror/reporterror.component';
import { DeviceFormComponent } from './admin/device-manager/device-form/device-form.component';
import { DeviceManagerComponent } from './admin/device-manager/device-manager.component';
import { ServicesComponent } from './home/services/services.component';


@NgModule({
  declarations: [
    AppComponent,
    ServiceResultsComponent,
    HeaderComponent,
    ServiceManagerComponent,
    ServiceFormComponent,
    HomeComponent,
    LoginComponent,
    ModalComponent,
    FooterComponent,
    ReporterrorComponent,
    DeviceFormComponent,
    DeviceManagerComponent,
    ServicesComponent,
    DevicesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule.forRoot(),
    ShareButtonsModule.forRoot()
  ],
  providers: [ServicesService, MessageService, AuthService, EmailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
