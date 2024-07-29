import { Component } from '@angular/core';
import { CreditcardsService } from '../../services/creditcards.service';
import { CreditCard } from 'src/app/models/credit-card';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent {

  creditCardDetails!: CreditCard;

  constructor(private creditcardsService: CreditcardsService) {
    this.creditcardsService.getCreditCardById(3).subscribe((data: CreditCard) => {
      this.creditCardDetails = data;
    });
  }
}
