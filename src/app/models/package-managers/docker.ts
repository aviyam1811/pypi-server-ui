import { HttpClient } from '@angular/common/http';

import { PackageManager } from '../package-manager';

export class Docker implements PackageManager {
  id: number;
  name = 'Docker Hub';
  image_path = '/src/images/package_managers_logos/docker_logo.svg';

  uploadPackage(file: File,
                url: string,
                http: HttpClient): void {
    throw new Error('not implemented');
  }
}
