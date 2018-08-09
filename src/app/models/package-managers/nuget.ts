import { HttpClient } from '@angular/common/http';

import { PackageManager } from '../package-manager';

export class Nuget implements PackageManager {
  id: number;
  name = 'Nuget';
  image_path = '/src/images/package_managers_logos/nuget_logo.svg';

  uploadPackage(file: File,
                url: string,
                http: HttpClient): void {
    throw new Error('not implemented');
  }
}
