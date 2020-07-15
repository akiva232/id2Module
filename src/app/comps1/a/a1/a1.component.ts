import { Component, OnInit } from '@angular/core';
import { SService } from 'src/app/s/s.service';

@Component({
  selector: 'app-a1',
  templateUrl: './a1.component.html',
  styleUrls: ['./a1.component.css']
})
export class A1Component implements OnInit {

  constructor(public s:SService ) { }

  ngOnInit(): void {
  }
  add(){this.s.counter++}
}
