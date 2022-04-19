import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BooksService } from '../books.service';
import { Books, users } from '../Model/books.model';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  displayedColumns:any[]=['action','title','catag','author','year','date','url','Delete','Available']
  data:Books[]=[];
  bookcount:users[]=[];
  count!: users;
  id:any;
  number:any;
  username:any;
  firstname:any;
  isDataloading=true;
  constructor(private empService:BooksService,private route:Router,private toastr:ToastrService) { }

  ngOnInit(): void {
    this.empService.getbook().subscribe(response=>{
      this.data=response;
      console.log(this.data);
      this.isDataloading=false;
    },error=>{
      console.log(error);
      this.isDataloading=false;
    })
  }
Search(){
  if(this.firstname==""){
    this.ngOnInit();
  }else{
    this.data=this.data.filter(res=>{
      return res.title.toLocaleLowerCase().match(this.firstname.toLocaleLowerCase());
    })
  }
}
order(username:string){
  this.empService.getcount().subscribe(response=>{
    this.bookcount=response;
    this.number=this.bookcount.map(data => data.OrderCount)
    //this.username=this.bookcount.map(data=>data.name);
    this.id=this.bookcount.map(data=>data.id);
    debugger;
    console.log(this.number);
    this.isDataloading=false;

    if(this.number<5){
      this.number++;
      debugger;
      this.empService.updatebookcount(this.id,{OrderCount:this.number,name:username,id:this.id}).subscribe(res=>
        {

       this.toastr.success("Ordered Book","Your Return Date is 26/05/2022")
        });



    }else{
      console.log("Oder number increased")
      this.toastr.error("Increased Number of order")
    }
  },error=>{
    console.log(error);
    this.isDataloading=false;
  })


}
}
