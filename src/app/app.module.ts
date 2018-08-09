import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FileDropModule } from 'ngx-file-drop';
import { MatGridListModule } from '@angular/material/grid-list';
import { HttpClientModule } from '@angular/common/http';
import {
  MatButtonModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
  MatListModule,
  MatTabsModule,
  MatToolbarModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { UploadPackageComponent } from './components/upload-package/upload-package.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  AddPackageManagerServerDialogComponent,
  ExplorePackageManagerServersComponent
} from './components/explore-package-manager-servers/explore-package-manager-servers.component';

@NgModule({
  declarations: [
    AppComponent,
    UploadPackageComponent,
    ExplorePackageManagerServersComponent,
    AddPackageManagerServerDialogComponent
  ],
  entryComponents: [
    ExplorePackageManagerServersComponent,
    AddPackageManagerServerDialogComponent
  ],
  imports: [
    FormsModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    FileDropModule,
    MatGridListModule,
    MatListModule,
    HttpClientModule,
    MatToolbarModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    MatTabsModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false , passThruUnknownUrl: true}
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
