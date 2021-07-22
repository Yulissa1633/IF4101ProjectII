import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { ActivatedRoute, Router } from '@angular/router';
import {FormControl, Validators} from '@angular/forms';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';


@Component({
  selector: 'app-help-desk-main',
  templateUrl: './help-desk-main.component.html',
  styleUrls: ['./help-desk-main.component.css']
})
export class HelpDeskMainComponent implements OnInit, AfterViewInit {

  constructor(public rest:RestService, private route: ActivatedRoute, private router: Router) { }
 
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol','HOLA'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
  }

  scrollToElement($element): void {
    console.log($element);
    $element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    }

    email = new FormControl('', [Validators.required, Validators.email]);

    getErrorMessage() {
      if (this.email.hasError('required')) {
        return 'Debe ingresar un correo válido';
      }
  
      return this.email.hasError('email') ? 'Not a valid email' : '';
    }
}

  export interface PeriodicElement {
    name: string;
    position: number;
    weight: number;
    symbol: string;
    HOLA: string;
  }
  
  const ELEMENT_DATA: PeriodicElement[] = [
    {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', HOLA: ''},
    {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He', HOLA: ''},
    {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li', HOLA: ''},
    {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be', HOLA: ''},
    {position: 5, name: 'Boron', weight: 10.811, symbol: 'B', HOLA: ''},
    {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C', HOLA: ''},
    {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N', HOLA: ''},
    {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O', HOLA: ''},
    {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F', HOLA: ''},
    {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne', HOLA: ''},
    {position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na', HOLA: ''},
    {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg', HOLA: ''},
    {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al', HOLA: ''},
    {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si', HOLA: ''},
    {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P', HOLA: ''},
    {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S', HOLA: ''},
    {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl', HOLA: ''},
    {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar', HOLA: ''},
    {position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K', HOLA: ''},
    {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca', HOLA: ''},
  ];

