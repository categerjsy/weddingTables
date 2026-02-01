import { Component, Input, signal } from '@angular/core';
import { Table } from '../interfaces/table';

@Component({
  selector: 'app-your-table',
  imports: [],
  templateUrl: './your-table.html',
  styleUrl: './your-table.scss',
})
export class YourTable {
  @Input() table: Table | null = null;

}
