import {HttpClient, HttpEvent} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FileSystemFileEntry, UploadEvent, UploadFile } from 'ngx-file-drop';
import {catchError, map} from 'rxjs/operators';
import {Observable, of} from 'rxjs';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-upload-package',
  templateUrl: './upload-package.component.html',
  styleUrls: ['./upload-package.component.css']
})

export class UploadPackageComponent implements OnInit {

  public files: UploadFile[] = [];
  public url = 'http://127.0.0.1:8080';
  private snackbarMessage = 'hello';
  constructor(
    private http: HttpClient,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
  }

  public dropped(event: UploadEvent) {
    this.files = event.files;
  }

  public removeFile(file: UploadFile) {
    const i = this.files.indexOf(file, 0);
    if (i > -1) {
      this.files.splice(i, 1);
    }
  }

  public uploadFiles() {
    console.log('Uploading Files');
    for (const fileToUpload of this.files) {
      // Is it a file?
      if (fileToUpload.fileEntry.isFile) {
        const fileEntry = fileToUpload.fileEntry as FileSystemFileEntry;
        fileEntry.file((file: File) => {
          const formData = new FormData();
          formData.append('content', file);
          formData.append(':action', 'file_upload');
          this.http.post(this.url, formData).pipe(
            catchError((error, caught) => { console.log(error); return of(error); }));
        });
      }
      this.snackBar.open(this.snackbarMessage);
      this.removeFile(fileToUpload);
    }
  }
}
