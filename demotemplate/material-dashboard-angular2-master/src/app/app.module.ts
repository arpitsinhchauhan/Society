import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { MatIconModule } from '@angular/material/icon';
import { DemoComponent } from './demo/demo.component';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { NgIf } from '@angular/common';
import { SignUpComponent } from './register/sign-up.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ImageModalComponent } from './image-modal/image-modal.component';
import { TableListComponent } from './table-list/table-list.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MapsComponent } from './maps/maps.component';
import { ProductDialogComponentComponent } from './product-dialog-component/product-dialog-component.component';
import { MatMenuModule } from '@angular/material/menu';
import { UserAddComponent } from './user-add/user-add.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    BrowserModule,
    NoopAnimationsModule,
    NgIf,
    MatButtonModule,
    HttpClientModule,
    MatIconModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatDialogModule,
    MatMenuModule,
    MatTooltipModule,
    NgxChartsModule
    // ChartsModule,
    // NgModule,
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    AdminLayoutComponent,
    DemoComponent,
    SignUpComponent,
    ImageModalComponent,
    UserEditComponent,
    ProductDialogComponentComponent,
    UserAddComponent,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
