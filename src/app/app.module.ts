import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { FileDropModule } from 'ngx-file-drop';
import { HttpClientModule } from '@angular/common/http';
import {
  MatListModule,
  MatInputModule,
  MatButtonModule,
  MatDialogModule,
  MatToolbarModule,
  MatSnackBarModule,
  MatFormFieldModule,
} from '@angular/material';

import { AppComponent } from './app.component';
import { UploadPackageComponent } from './components/upload-package/upload-package.component';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    UploadPackageComponent
  ],
  imports: [
    FormsModule,
    MatListModule,
    BrowserModule,
    FileDropModule,
    MatInputModule,
    MatDialogModule,
    MatButtonModule,
    HttpClientModule,
    MatToolbarModule,
    MatSnackBarModule,
    MatFormFieldModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
