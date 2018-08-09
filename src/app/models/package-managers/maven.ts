import { HttpClient } from '@angular/common/http';

import { PackageManager } from '../package-manager';

export class Maven implements PackageManager {
  id: number;
  name = 'Maven';
  image_path = '/src/images/package_managers_logos/maven_logo.svg';

  uploadPackage(file: File,
                url: string,
                http: HttpClient): void {
    throw new Error('not implemented');
  }
}
