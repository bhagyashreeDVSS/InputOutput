import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-previewform',
  templateUrl: './previewform.component.html',
  styleUrls: ['./previewform.component.scss']
})
export class PreviewformComponent implements OnInit  {
  @Input() data:any
obj:any =[]
  entries:any =[]
  @Output() newEvent = new EventEmitter();
  ngOnInit(): void {
    console.log('sdsdfsd',this.data)

    this.obj = (this.data);
this.entries = Object.entries(this.obj);
this.entries.push(this.obj);
console.log(this.entries);
  }

  constructor(){}
  RemoveData(item: string){
this.newEvent.emit(item);
  }

}
