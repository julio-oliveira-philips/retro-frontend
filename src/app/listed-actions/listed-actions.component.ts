import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listed-actions',
  templateUrl: './listed-actions.component.html',
  styleUrls: ['./listed-actions.component.css']
})
export class ListedActionsComponent implements OnInit {

  allActions = [
    {
      retrospectiveCode: 1,
      actionDescription: 'Realizar atividade 1',
      createDate: new Date('2021-04-23T10:00:00.000Z'),
      owner: 'fulano de tal',
      finished: false
    },
    {
      retrospectiveCode: 2,
      actionDescription: 'Realizar atividade 1',
      createDate: new Date('2021-04-23T10:00:00.000Z'),
      owner: 'fulano de tal',
      finished: false
    },
    {
      retrospectiveCode: 3,
      actionDescription: 'Realizar atividade 1',
      createDate: new Date('2021-04-23T10:00:00.000Z'),
      owner: 'fulano de tal',
      finished: false
    },
    {
      retrospectiveCode: 4,
      actionDescription: 'Realizar atividade 1',
      createDate: new Date('2021-04-23T10:00:00.000Z'),
      owner: 'fulano de tal',
      finished: false
    },
    {
      retrospectiveCode: 5,
      actionDescription: 'Realizar atividade 1',
      createDate: new Date('2021-04-23T10:00:00.000Z'),
      owner: 'fulano de tal',
      finished: false
    },
    {
      retrospectiveCode: 6,
      actionDescription: 'Realizar atividade 1',
      createDate: new Date('2021-04-23T10:00:00.000Z'),
      owner: 'fulano de tal',
      finished: true
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
