import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { FormComponent } from "./components/form/form.component";
import { CalendarComponent } from "./components/calendar/calendar.component";

const routes: Routes = [
  { path: "form", component: FormComponent },
  { path: "calendar", component: CalendarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
