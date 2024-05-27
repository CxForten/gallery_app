import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Image } from '../models/image.model';
import { ImageFromData } from '../models/image-from-data.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  private readonly apiURL = environment.apiURL;

  constructor(private http: HttpClient) { }

  getAllImages(){
    return this.http.get<Image[]>(`${this.apiURL}/images`);
  }

  getOneImage(id: number){
    return this.http.get<Image>(`${this.apiURL}/images/${id}`);
  }

  saveImage(data: ImageFromData):Observable<Image>{
    return this.http.post<Image>(`${this.apiURL}/images`, data);
  }

  deleteImage(id: number):Observable<any>{
    return this.http.delete(`${this.apiURL}/images/${id}`);
  }
}
