import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-component-one-of-Mtwo',
  templateUrl: './component-one.component.html',
  styleUrls: ['./component-one.component.scss'],
})
export class ComponentOneComponent implements OnInit {
  f2Name = '';
  l2Name = '';
  UserValue: FormGroup = new FormGroup({
    comp2fName: new FormControl(''),
    comp2lName: new FormControl(''),
  });

  constructor(private _dataService: DataService) {
    this.UserValue = new FormGroup({
      comp2fName: new FormControl(''),
      comp2lName: new FormControl(''),
    });
  }

  ngOnInit(): void {
    // this._dataService.set('hello');
    this._dataService.subject.subscribe((data) => {
      console.log('GET called');

      [this.f2Name,this.l2Name] = data;
      console.log(data);
    });
  }
  onSubmit2() {
    // console.log(this.f2Name, this.l2Name);
  }
}
