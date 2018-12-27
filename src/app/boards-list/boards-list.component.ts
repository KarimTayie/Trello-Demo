import { Component, OnInit } from '@angular/core';

import { Board } from './board.model';

@Component({
  selector: 'app-boards-list',
  templateUrl: './boards-list.component.html',
  styleUrls: ['./boards-list.component.css']
})
export class BoardsListComponent implements OnInit {
  boardsList: Board[] = [
    {
      boardTitle: '1',
      boardBody: 'Board 1'
    },
    {
      boardTitle: '2',
      boardBody: 'Board 2',
    },
    {
      boardTitle: '3',
      boardBody: 'Board 3'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
