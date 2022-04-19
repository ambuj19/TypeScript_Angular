import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import {Router}from '@angular/router'
import { AuthService } from '../Shared/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router,private toastr:ToastrService,private authService:AuthService) { }
  emails: string = '';
  passwords:string='';


  public exform = new FormGroup({

    frmemail: new FormControl([Validators.required, Validators.email]),
    frmpassword: new FormControl([Validators.required,Validators.minLength(3)])
    //decimalPrecision: new FormControl()


  });
  get eform(){
    return this.exform.controls;
  }
  ngOnInit(): void {
  }
  onsubmit(){
    // if(this.emails=='admin@123'){
    //   this.router.navigate(['/admin']);
    //  // window.location.reload();
    // }else if(this.emails=='user@123'){
    //   this.router.navigate(['/user'])
    //   this.toastr.success("Welcome User")
    //  // window.location.reload();

    // }
    debugger;
    this.authService.IsAdmin(this.emails);
  }
}
