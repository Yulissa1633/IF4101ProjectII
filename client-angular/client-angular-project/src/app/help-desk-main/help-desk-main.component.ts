import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-help-desk-main',
  templateUrl: './help-desk-main.component.html',
  styleUrls: ['./help-desk-main.component.css']
})
export class HelpDeskMainComponent implements OnInit {

  constructor(public rest:RestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

 

}
