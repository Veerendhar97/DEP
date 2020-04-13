import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { BottomComponent } from "./bottom/bottom.component";
import { TopComponent } from "./top/top.component";
@NgModule({
  declarations: [AppComponent, TopComponent, BottomComponent, TopComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
