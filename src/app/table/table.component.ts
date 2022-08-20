import { Component, OnInit } from '@angular/core';
import { TableDefinition } from '../table-definition';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  definition: TableDefinition = {
    columns: 'col1,col2',
    rows: [{col1: 'abdul', col2: 2233},{col1:'andela',col2:332}]
  }

  constructor() { }

  ngOnInit(): void {
  }

  get columns() {
    return this.definition.columns.split(',')
  }
}
