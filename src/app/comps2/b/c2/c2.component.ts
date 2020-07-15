import { Component, OnInit } from '@angular/core';
import { SService } from 'src/app/s/s.service';

@Component({
  selector: 'app-c2',
  templateUrl: './c2.component.html',
  styleUrls: ['./c2.component.css']
})
export class C2Component implements OnInit {

  constructor(public s:SService ) { }

  ngOnInit(): void {
  }

  minus(){this.s.counter--}
}
