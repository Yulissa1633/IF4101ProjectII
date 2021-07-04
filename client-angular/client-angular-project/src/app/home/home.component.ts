import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public rest:RestService, private route: ActivatedRoute, private router: Router) { }


  ngOnInit() {

    
    
  }

  goToLogin() {
    this.router.navigate(['/help-desk-login']);
  }


}
