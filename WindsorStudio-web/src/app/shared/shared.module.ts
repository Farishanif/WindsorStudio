import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FooterComponent } from "../components/footer/footer.component";
import { NavbarComponent } from "../components/navbar/navbar.component";
import { RouterModule } from "@angular/router";

// ... imports

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NavbarComponent,
    FooterComponent
  ],
  exports: [
    CommonModule,
    RouterModule,
    NavbarComponent,
    FooterComponent
  ]
})
export class SharedModule { }