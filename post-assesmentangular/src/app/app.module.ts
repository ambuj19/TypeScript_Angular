import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatTableModule } from '@angular/material/table'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import {MatDialogModule} from '@angular/material/dialog';
import { MatMenuModule} from '@angular/material/menu';
import { AdminComponent } from './admin/admin.component';
import { NgxAnimatedGradientModule } from 'ngx-animated-gradient';
import { BooksService } from './books.service';
import { HttpClientModule } from '@angular/common/http';
import { AddBookComponent } from './add-book/add-book.component';
import { UpdateBookComponent } from './update-book/update-book.component';
import { UserComponent } from './user/user.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    AddBookComponent,
    UpdateBookComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    ToastrModule.forRoot(),
    HttpClientInMemoryWebApiModule,
    Ng2SearchPipeModule,
    HttpClientModule,
    NgxAnimatedGradientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatMenuModule,
    MatDialogModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    MatCardModule,
    MatNativeDateModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatListModule,
    ReactiveFormsModule,
    FormsModule,
    MatSidenavModule,
    MatRadioModule,
    MatDatepickerModule,
    FlexLayoutModule
  ],
  providers: [BooksService,HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
