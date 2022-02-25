import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';



export class Home {
  constructor(
    public id: number,
    public first_name: string,
    public last_name: string,
    public avatar: string,
    public email: string,
   
    
  ) {
  }
}


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  home:Home[];
  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.getdata();
  }
  getdata(){
    this.httpClient.get<any>('https://reqres.in/api/users?page=2').subscribe(
      response => {
        console.log(response);
        this.home = response.data;
      }
    );
  }
}
