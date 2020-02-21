import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.css"]
})
export class FormComponent implements OnInit {
  exampleForm = new FormGroup({
    movie: new FormControl({ value: "", disabled: true }, Validators.required)
  });
  constructor() {}

  ngOnInit(): void {
    this.exampleForm.get("movie").valueChanges.subscribe(value => {
      this.imprimir(value);
    });
  }

  get movie() {
    return this.exampleForm.get("movie");
  }

  onSubmit() {
    // TODO: Use EventEmitter with   value
    console.log(this.movie.value);
  }

  enable() {
    this.exampleForm.get("movie").enable();
  }
  private imprimir(value: string) {
    console.log(value);
  }
}
