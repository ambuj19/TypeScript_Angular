import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import {HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { BooksService } from './books.service';
import { Books } from './Model/books.model';

describe('BooksService', () => {
  let service: BooksService;
  const baseUrl='http://localhost:3000/books';
 let httpTestingController: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        BooksService,
        { provide: 'http://localhost:3000/books',
          useValue: 'apiurl'
        }],
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(BooksService);
    httpTestingController = TestBed.get(HttpTestingController);

  });

  fit('Should getAllBooks',()=>{
    const MockBookData = [

      {
        title: "Gitanjali",
        catag: "Verse",
        year: "1910",
        author: "Rabindranath Tagore",
        url: "http://prodimage.images-bn.com/pimages/2940013033078_p0_v1_s1200x630.jpg",
        date: "2020-03-02",
        Available: "Yes",
        id: 4
      }

    ];
    let response:Books[];
   //spyOn(service,'getbook').and.returnValue(of(MockBookData));
    service.getbook().subscribe(res =>{
     // debugger;
       response=res;
       expect(response).toEqual(MockBookData)
    });
    const req = httpTestingController.expectOne(baseUrl);
    debugger;
   expect(req.request.method).toBe('GET');
    req.flush(MockBookData);
    httpTestingController.verify();
  })
});
