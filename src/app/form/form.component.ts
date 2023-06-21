import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgModel } from '@angular/forms';
import { PreviewformComponent } from '../previewform/previewform.component';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit , AfterViewInit{
constructor(){}
  ngAfterViewInit(): void {
   console.log(this.child.data);

  }
  ngOnInit(): any {
  }

  @ViewChild(PreviewformComponent) child !:PreviewformComponent

  home = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]+$')]),
    email: new FormControl('', [Validators.required, Validators.email]),
    contactno: new FormControl('', [Validators.required, Validators.pattern(/^\d{10}$/)]),
    age: new FormControl('', [Validators.required, Validators.pattern(/^(1[89]|[2-9]\d)$/gm)]),
  })

  entries: any = [
  {
    "name": "gau",
    "email": "aaa@gmail.com",
    "contactno":5555555555,
    "age":43
  },
  {
    "name": "gau",
    "email": "aaa@gmail.com",
    "contactno":5555555555,
    "age":43
  },
  {
    "name": "gau",
    "email": "aaa@gmail.com",
    "contactno":5555555555,
    "age":43
  }
  ]
  entry: any = [];
  session: any = []
  tempArray: any

obj:any=[]
a:any =[]

  get(){
this.obj = this.home.value
console.log(this.obj);
const arr = Object.keys(this.obj).map(key => this.obj[key]);
const obj = (this.home.value);

const entries = Object.entries(obj);

this.entries.push(obj);
  }
item:any
  remove(items: any){
    let index = this.entries.indexOf(this.item);
    console.log(index);
    console.log(items);
    const a = this.entries.findIndex((item: { index: any; }) => item.index == index)
    // if (index != -1) {
      this.entries.splice(index, 1);
    // }
  }

}
