import { Component, OnInit } from '@angular/core';
import { SService } from 'src/app/s/s.service';

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.css'],
  providers:[SService]
})
export class BComponent implements OnInit {

  constructor(public s:SService ) { }

  ngOnInit(): void {
  }

}
