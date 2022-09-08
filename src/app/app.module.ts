import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {SliderModule} from 'primeng/slider';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { JusticeNetworkComponent } from './justice-network/justice-network.component';
import {FileUploadModule} from 'primeng/fileupload';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {TableModule} from 'primeng/table';
import {ToastModule} from 'primeng/toast';
import {CalendarModule} from 'primeng/calendar';
import {FormsModule} from '@angular/forms';
import {MultiSelectModule} from 'primeng/multiselect';
import {ContextMenuModule} from 'primeng/contextmenu';
import {DialogModule} from 'primeng/dialog';
import {ButtonModule} from 'primeng/button';
import {DropdownModule} from 'primeng/dropdown';
import {ProgressBarModule} from 'primeng/progressbar';
import {InputTextModule} from 'primeng/inputtext';
import { DataViewModule } from 'primeng/dataview';
import { NetworkMetricesComponent } from './network-metrices/network-metrices.component';


@NgModule({
  declarations: [
    AppComponent,
    JusticeNetworkComponent,
    NetworkMetricesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,BrowserAnimationsModule,FileUploadModule,MessageModule,MessagesModule,ToastModule,
    CalendarModule,SliderModule,MultiSelectModule,ContextMenuModule,DialogModule,ButtonModule,DropdownModule,ProgressBarModule,
    InputTextModule,TableModule,DataViewModule,SliderModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
