import { Component, OnInit } from '@angular/core';
import { UserService } from './../../app/user.service';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  users=[];
  constructor(private myService:UserService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers()
  {
     this.myService.getUser().subscribe((data:any) => this.users=data);

  }

}
