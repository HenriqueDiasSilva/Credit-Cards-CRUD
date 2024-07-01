import { Component, ViewChild } from '@angular/core';
import { CreditCard } from '../models/credit-card';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { CreditcardsService } from '../services/creditcards.service';

@Component({
  selector: 'app-creditcards',
  templateUrl: './creditcards.component.html',
  styleUrls: ['./creditcards.component.scss'],
})
export class CreditcardsComponent {
  creditcards: CreditCard[] = [];
  dataSource: any;
  selection: any;

  constructor(private creditcardsService: CreditcardsService) {
    this.creditcardsService.getCreditCards().subscribe((data: CreditCard[]) => {
      this.creditcards = data;

      this.dataSource = new MatTableDataSource<CreditCard>(this.creditcards);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;

      this.selection = new SelectionModel<CreditCard>(true, []);
    });
  }

  displayedColumns: string[] = [
    'select',
    'id',
    'cardName',
    'bankName',
    'maxCredit',
    'active',
  ];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
}
