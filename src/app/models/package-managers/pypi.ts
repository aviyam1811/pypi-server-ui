import { HttpClient } from '@angular/common/http';

import { PackageManager } from '../package-manager';

export class Pypi implements PackageManager {
  id: number;
  name = 'Python Package Index (Pypi)';
  image_path = '/src/images/package_managers_logos/pypi_logo.svg';

  uploadPackage(file: File,
                url: string,
                http: HttpClient): void {
    const formData = new FormData();
    formData.append('content', file);
    formData.append(':action', 'file_upload');
    http.post(url, formData)
      .subscribe(result => console.log(`send POST to ${url}`));
  }
}
