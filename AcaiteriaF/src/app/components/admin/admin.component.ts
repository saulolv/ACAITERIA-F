import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private router: Router){}

  ngOnInit(): void {
  }

  selectService(service: string){
    this.router.navigate(['/admin', service.toLowerCase()]);
  }

}
