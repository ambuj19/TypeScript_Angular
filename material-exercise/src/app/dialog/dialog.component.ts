import { Component, EventEmitter, Inject, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  Post = {
    id: 0,
    to: '',
    from: '',
    category: '',
    position: 0,
    date_posted:Date,
  };
  public event: EventEmitter<any> = new EventEmitter();
  constructor(public dataService: DataService,@Inject(MAT_DIALOG_DATA) public data: any,public dialogRef: MatDialogRef<DialogComponent>) { }
  onNoClick(): void {
    console.log("hello");
    this.dialogRef.close();
  }

  onSubmit(): void {
    this.Post.position = this.dataService.dataLength();
    this.event.emit({data: this.Post});
    this.dialogRef.close();
  }
  ngOnInit(): void {
  }
  categories = this.dataService.getCategories() ;;
}
