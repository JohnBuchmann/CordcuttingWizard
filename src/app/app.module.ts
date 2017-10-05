import { MessageService } from './services/message.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { ChannelsService } from './services/channels.service';
import { DevicesComponent } from './devices/devices.component';
import { HeaderComponent } from './header/header.component';
import { ManagerComponent } from './manager/manager.component';
import { ChannelFormComponent } from './channel-form/channel-form.component';
import { HomeComponent } from './home/home.component';
import { AuthService } from './services/auth.service';

import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { LoginComponent } from './login/login.component';
import { ModalComponent } from './modal/modal.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './footer/footer.component';
import {ShareButtonsModule} from 'ngx-sharebuttons';

@NgModule({
  declarations: [
    AppComponent,
    DevicesComponent,
    DevicesComponent,
    HeaderComponent,
    ManagerComponent,
    ChannelFormComponent,
    HomeComponent,
    LoginComponent,
    ModalComponent,
    FooterComponent
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
  providers: [ChannelsService, MessageService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
