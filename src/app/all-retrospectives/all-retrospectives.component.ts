import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-retrospectives',
  templateUrl: './all-retrospectives.component.html',
  styleUrls: ['./all-retrospectives.component.css']
})
export class AllRetrospectivesComponent implements OnInit {

  allRetrospectives = [
    {
      retrospectiveName: 'Retrospectiva 1',
      createDate: new Date('2021-04-23T10:00:00.000Z'),
      actions: 'action 1',
      finished: false
    },
    {
      retrospectiveName: 'Retrospectiva 2',
      createDate: new Date('2021-04-23T10:00:00.000Z'),
      actions: 'action 2',
      finished: false
    },
    {
      retrospectiveName: 'Retrospectiva 3',
      createDate: new Date('2021-04-23T10:00:00.000Z'),
      actions: 'action 3',
      finished: false
    },
    {
      retrospectiveName: 'Retrospectiva 4',
      createDate: new Date('2021-04-23T10:00:00.000Z'),
      actions: 'action 4',
      finished: false
    },
    {
      retrospectiveName: 'Retrospectiva 5',
      createDate: new Date('2021-04-23T10:00:00.000Z'),
      actions: 'action 5',
      finished: false
    },
    {
      retrospectiveName: 'Retrospectiva 6',
      createDate: new Date('2021-04-23T10:00:00.000Z'),
      actions: 'action 6',
      finished: true
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
