import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';

import { BooksService } from '../books.service';
import { Books } from '../Model/books.model';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {

  empForm!: FormGroup;
  isDataLoading=false;

 // public event:EventEmitter<any>=new EventEmitter();
  constructor(public empService:BooksService,public route:ActivatedRoute,public router: Router, private formBuilder: FormBuilder) { }
  val:any;
  users:Books[]=[];
  user!: Books;
  //public data:Books[]=[];
  isDataloading=true;
  ngOnInit()  {
    let sub=this.route.params.subscribe(params=>{
      this.val=params['id'];
    })
    console.log(this.val);
    this.empService.getUpdateUser(this.val).subscribe(data=>{
      this.user=data

    })
    this.empForm=this.formBuilder.group({
      id:['',Validators.required],
      title:['',Validators.required],
      catag:['',Validators.required],
      author:['',Validators.required],
      year:['',Validators.required],
      date:['',Validators.required],
      url:['',Validators.required],
    })
  }
  update(){
    this.empService.updateUser(this.user).subscribe(data=>{

    });
    this.getUsers();
    this.router.navigate(['/admin']);
  }
  getUsers(){
    this.empService.getbook().subscribe((response)=>{
      this.users=response;
    })
  }
  public onFormSubmit(form: NgForm)
  {
    console.log(form);

   this.empService.addbook(form).subscribe(response=>{

    console.log(response);
      const id=response['id'];

      this.router.navigate(['details',id])
    },(error:any)=>{
      console.log(error);
    })
  }
}
