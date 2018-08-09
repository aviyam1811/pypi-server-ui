import { HttpClient } from '@angular/common/http';

import { PackageManager } from '../package-manager';

export class Npm implements PackageManager {
  id: number;
  name = 'Node Package Manager (NPM)';
  image_path = '/src/images/package_managers_logos/npm_logo.svg';

  uploadPackage(file: File,
                url: string,
                http: HttpClient): void {
    throw new Error('not implemented');
  }
}

