import { Component, OnInit, Input } from '@angular/core';
import { RestService } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-help-desk-login',
  templateUrl: './help-desk-login.component.html',
  styleUrls: ['./help-desk-login.component.css']
})
export class HelpDeskloginComponent implements OnInit {


  constructor(public rest:RestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {

   }


  }


