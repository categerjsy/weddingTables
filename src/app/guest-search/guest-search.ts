import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormArray, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import * as XLSX from "xlsx";
import { Table } from '../interfaces/table';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-guest-search',
  imports: [ReactiveFormsModule],
  templateUrl: './guest-search.html',
  styleUrl: './guest-search.scss',
})
export class GuestSearch {
  @Output() tableFound = new EventEmitter<Table | null>();
  tables: Table[] | undefined;
  result: Table | null = null;

  private formBuilder = inject(FormBuilder);
  guestForm = this.formBuilder.group({
    name: ['', Validators.required]
  });

  constructor(private http: HttpClient) { 
    this.loadSeating();
  }

  onSubmit() {

    let guestName = this.guestForm.value;

    if (this.tables) {
      this.searchTable(this.guestForm.value)
    }
  }

  searchTable(searchName: any) {
    console.log(searchName.name)
    const name = searchName.name.trim().toLowerCase();
    if (!name) {
      this.result = null;
      return;
    }

    if (this.tables) {
      this.result = this.tables.find(table =>
        table.guests.some(guest => guest.toLowerCase() === name)
      ) || null;
      console.log(this.result);
      this.tableFound.emit(this.result);
    }


  }
  loadSeating(): void {
    fetch('assets/wedding_seating.csv')
      .then(res => res.text())
      .then(csvText => {
        const lines = csvText.split('\n').map(l => l.trim()).filter(l => l);
        const headers = lines[0].split(',');

        this.tables = lines.slice(1).map(line => {
          const cells = line.split(',');
          const tableNumber = Number(cells[0]);

          const guests: string[] = cells.slice(1).filter(g => g.trim());

          return { tableNumber, guests };
        });

        console.log(this.tables)
      });
  }
}