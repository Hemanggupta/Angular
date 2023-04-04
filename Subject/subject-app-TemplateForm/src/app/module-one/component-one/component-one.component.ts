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

  inputVal: string = '';

  constructor(private _dataService: DataService) {}

  ngOnInit(): void {}

  onSubmit(data: string[]) {
    console.log(data);
    this._dataService.set(data);
  }
}
