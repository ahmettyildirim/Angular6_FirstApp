import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { Routes, RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { NavComponent } from './nav/nav.component';
import { PostComponent } from './post/post.component';
import { AlertifyService } from "./services/alertify.service";
import { PostFilterPipe } from './post/post-filter.pipe'
import { FormsModule } from '@angular/forms'

const routes: Routes = [
  { path: "", redirectTo: "posts", pathMatch: "full" },
  { path: "posts", component: PostComponent },
  { path: "posts/:userid", component: PostComponent },
  { path: "customers", component: CustomerComponent }

]


@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    NavComponent,
    PostComponent,
    PostFilterPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [AlertifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
