import { Component, group } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  group:FormGroup;
  constructor(private formBuilder:FormBuilder){}

  ngOnInit(){
    this.group = this.formBuilder.group({
      
    })
  }


}
