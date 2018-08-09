import { HttpClient } from '@angular/common/http';

export interface PackageManager {
  id: number;
  name: string;
  image_path: string;
  uploadPackage(file: File,
                url: string,
                http: HttpClient): void;
}
