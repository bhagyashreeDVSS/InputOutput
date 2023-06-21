import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'InputOutput';

  session :any =[
"lewis"
  ]
  // @Input() items: this.session | string;


  constructor(){}


}
