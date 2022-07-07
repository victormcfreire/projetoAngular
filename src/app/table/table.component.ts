import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  users: any = [
    {id: 1, name:'joe', username:'john doe'},
    {id: 2, name:'joe2', username:'john doe2'},
    {id: 3, name:'joe3', username:'john doe3'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
