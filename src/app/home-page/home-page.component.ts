import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../photo.service';
// import { fadeInAnimation } from '../animate.class';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  // animations: [fadeInAnimation],
  // host: { '[@fadeInAnimation]': '' }
})
export class HomePageComponent implements OnInit {
  query: any = <any>{};
  photoUrls: string[] = [];
  page: number = 1;
  constructor(private photoService: PhotoService) {}

  ngOnInit(): void {
    this.getPhotos();
  }

  async getPhotos() {
    const response: any = await this.photoService.getPhotos(this.page);
    response.photos.forEach((e: { src: { landscape: string } }) => {
      this.photoUrls.push(e.src.landscape);
    });
  }

  async searchPhotos() {
    const response: any = await this.photoService.search(
      this.query.search,
      this.page
    );
    response.photos.forEach((e: { src: { landscape: string } }) => {
      this.photoUrls.push(e.src.landscape);
    });
  }

  onScroll() {
    this.page++;
    if (!this.query.search) this.getPhotos();
    else this.searchPhotos();
  }
}
