import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-component-one-of-Mone',
  templateUrl: './component-one.component.html',
  styleUrls: ['./component-one.component.scss'],
})
export class ComponentOneComponent implements OnInit {
  fName = '';
  lName = '';
  reactiveForm1: FormGroup = new FormGroup({
    comp1fName: new FormControl(''),
    comp1lName: new FormControl(''),
  });
  inputVal: string = '';

  constructor(private _dataService: DataService) {
    this.reactiveForm1 = new FormGroup({
      comp1fName: new FormControl('Hemang'),
      comp1lName: new FormControl('Gupta'),
    });
  }

  ngOnInit(): void {}

  onSubmit(data: string[]) {
    // console.log(this.reactiveForm1.value);
    console.log(data);

    // console.log(this.fName, this.lName);
    this._dataService.set(data);
  }

  // handleInput(e: any) {
  //   console.log(e);
  //   this.inputVal = e.target.value;
  // }
}
