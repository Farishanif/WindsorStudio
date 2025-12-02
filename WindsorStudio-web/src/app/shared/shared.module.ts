// src/app/shared/shared.module.ts
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
    // ✅ Standalone Components are imported, not declared.
    NavbarComponent,
    FooterComponent
  ],
  exports: [
    CommonModule,
    RouterModule,
    // ✅ Standalone Components are exported for use in feature modules.
    NavbarComponent,
    FooterComponent
  ]
})
export class SharedModule { }