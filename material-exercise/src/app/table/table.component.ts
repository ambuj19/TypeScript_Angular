import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
//import { PostDialogComponent } from '../post-dialog/post-dialog.component';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { DataService } from '../data.service';
import { DialogComponent } from '../dialog/dialog.component';
import {DataSource} from '@angular/cdk/table';
import { CollectionViewer } from '@angular/cdk/collections';
import { Observable } from 'rxjs';
import { detail } from '../details';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  dataSource: any = [];
  @ViewChild('paginator') paginator: MatPaginator | undefined;
  openDialog(): void {
    let dialogRef = this.dialog.open(DialogComponent, {
      width: '600px',
      data: 'Add Post'
    });
    dialogRef.componentInstance.event.subscribe((result) => {
      this.dataService.addPost(result.data);
      this.dataSource = new PostDataSource(this.dataService);
      this.dataSource = this.dataService;

    });
  }
  deletePost(id:any) {

    this.dataService.deletePost(id);
    console.log(this.dataService.dataLength.length);
    this.dataSource = new PostDataSource(this.dataService);

  }

  constructor(private _BookingService: DataService,private dataService: DataService, public dialog: MatDialog) {
    this._BookingService.getData().subscribe((response: any) => {
      this.dataSource = new MatTableDataSource(response);

    })

  }

  ngOnInit(): void {

  }
  displayedColumns = ['id', 'date_posted', 'from', 'to', 'category', 'delete'];

  ngAfterViewInit(): void{
    //this.dataSource=this.dataService.paginatorr;
    this.dataService.getData().subscribe((response: any) => {
      this.dataSource = new MatTableDataSource(response);
      this.dataSource.paginator = this.paginator;
      console.log(this.dataSource);
    })
}
}
export class PostDataSource extends DataSource<any> {
  constructor(private dataService: DataService) {
    super();
  }

  connect(): Observable<detail[]> {
    return this.dataService.getData();
  }

  disconnect() {
  }
}
function ngOnInit(): ((error: any) => void) | null | undefined {
  throw new Error('Function not implemented.');
}