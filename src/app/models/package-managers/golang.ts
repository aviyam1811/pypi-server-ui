import { HttpClient } from '@angular/common/http';

import { PackageManager } from '../package-manager';

export class Golang implements PackageManager {
  id: number;
  name = 'Go language';
  image_path = '/src/images/package_managers_logos/golang_logo.svg';

  uploadPackage(file: File,
                url: string,
                http: HttpClient): void {
    throw new Error('not implemented');
  }
}
