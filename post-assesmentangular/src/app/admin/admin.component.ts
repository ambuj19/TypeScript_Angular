import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BooksService } from '../books.service';
import { Books } from '../Model/books.model';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  displayedColumns:any[]=['action','title','catag','author','year','date','url','Delete']
  data:Books[]=[];
  id:any
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
  public delete(id:number)
  {
    this.empService.deletebook(id).subscribe(response=>{
      console.log(response);
     // this.route.navigate(['/admin']);
      window.location.reload();
      this.toastr.success("Deleted");
    },(error:any)=>{
      console.log(error);
    })
  }

}
