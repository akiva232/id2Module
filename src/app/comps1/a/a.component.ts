import { Component, OnInit } from '@angular/core';
import { SService } from 'src/app/s/s.service';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.css'],
  providers:[SService]
})
export class AComponent implements OnInit {

  constructor(public s:SService ) { }

  ngOnInit(): void {
  }

}
