import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { GuestSearch } from './guest-search/guest-search';
import { YourTable } from './your-table/your-table';
import { Table } from './interfaces/table';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, GuestSearch, YourTable],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Wedding Tables');
  selectedTable: Table | null = null;


  onTableFound(table: Table | null) {
    this.selectedTable = table; // store result from child
  }
}
