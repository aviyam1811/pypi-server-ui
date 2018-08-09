import {PackageManager} from './package-manager';
import { HttpClient } from '@angular/common/http';

export class PackageManagerServer {
  id: number;
  score = 0;
  constructor(
    public name,
    public url,
    public packageManager: PackageManager
  ) {
  }

  uploadPackage(file: File,
                http: HttpClient): void {
    this.packageManager.uploadPackage(file, this.url, http);
  }
}
