import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  constructor(private httpClient: HttpClient) {
  }

  getPhotos(pageNumber: number = 1) {
    return this.httpClient.get(`https://api.pexels.com/v1/curated?per_page=15&page=${pageNumber}`).toPromise()
  }

  search(query: string, pageNumber: number = 1) {
    return this.httpClient.get(`https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&per_page=15&page=${pageNumber}`).toPromise()
  }
}
