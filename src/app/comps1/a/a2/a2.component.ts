import { Component, OnInit } from '@angular/core';
import { SService } from 'src/app/s/s.service';

@Component({
  selector: 'app-a2',
  templateUrl: './a2.component.html',
  styleUrls: ['./a2.component.css']
})
export class A2Component implements OnInit {

  constructor(public s:SService ) { }

  ngOnInit(): void {
  }
   minus(){this.s.counter--}
}
