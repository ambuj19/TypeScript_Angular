import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BooksService } from '../books.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  empForm!: FormGroup;
  isDataLoading=false;

  constructor(private empService:BooksService,private router: Router, private formBuilder: FormBuilder,private toastr:ToastrService) { }

  ngOnInit(): void {
    this.empForm=this.formBuilder.group({

      title:['',Validators.required],
      catag:['',Validators.required],
      author:['',Validators.required],
      year:['',Validators.required],
      date:['',Validators.required],
      url:['',Validators.required],
    })
  }
  public onFormSubmit(form: NgForm)
  {
    console.log(form);

   this.empService.addbook(form).subscribe(response=>{

    console.log(response);
      const id=response['id'];

      //this.router.navigate(['details',id])
      this.router.navigate(['/admin'])
      this.toastr.success("Book Added")

    },(error:any)=>{
      console.log(error);
    })
  }
}
