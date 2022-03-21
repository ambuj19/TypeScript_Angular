import { HttpClient } from '@angular/common/http';
import { Injectable ,ViewChild} from '@angular/core';
import { Observable, of } from 'rxjs';
import { detail } from './details';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  ELEMENT_DATA: detail[] = [
    {id:19228, position: 0, from: 'heath_and_wellness', category: true, date_posted: new Date(), to: 'herbal_traditional_products'},
    {id:19223, position: 1, from: 'home_care', category: true, date_posted: new Date(), to: 'home-care/report'},
    {id:19225, position: 2, from: 'hot-drinks', category: true, date_posted: new Date(), to: 'associated-british-foods'},
    {id:19226, position: 3, from: 'herbal_traditional_products', category: true, date_posted: new Date(), to: 'associated-british-foods'},
    {id:19227, position: 4, from: 'home_care', category: false, date_posted: new Date(), to: 'home-care/report'},
    {id:19229, position: 5, from: 'herbal_traditional_products', category: true, date_posted: new Date(), to: 'associated-british-foods'},
  ];
  categories = [
    {value: 'true', viewValue: 'true'},
    {value: 'false', viewValue: 'false'},

  ];
  getData(): Observable<detail[]> {
    return of<detail[]>(this.ELEMENT_DATA);
  }
  getCategories() {
    return this.categories;
  }

  dataLength() {
    return this.ELEMENT_DATA.length;

  }
  addPost(data: detail) {
    this.ELEMENT_DATA.push(data);
  }
  deletePost(index:any) {
    this.ELEMENT_DATA = [...this.ELEMENT_DATA.slice(0, index), ...this.ELEMENT_DATA.slice(index + 1)];
  }
}
