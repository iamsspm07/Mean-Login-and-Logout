import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { ExpPipe } from './exp.pipe';

import { GenderPipe } from './gender.pipe';
import { ReplacePipe } from './replace.pipe';
import { StudentComponent } from './student/student.component';
import { AgePipePipe } from './age-pipe.pipe';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    ExpPipe,
  
    GenderPipe,
       ReplacePipe,
       StudentComponent,
       AgePipePipe,
       RegistrationFormComponent,
       ProductComponent,
       CartComponent,
       NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
