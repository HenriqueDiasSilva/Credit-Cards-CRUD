import { Component } from '@angular/core';
import { CreditcardsService } from '../../services/creditcards.service';
import { CreditCard } from 'src/app/models/credit-card';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss'],
})
export class ViewComponent {
  creditCardDetails!: CreditCard;
  creditCardId!: Number;

  constructor(
    private creditcardsService: CreditcardsService,
    private route: ActivatedRoute
  ) {

    this.creditCardId = parseInt(this.route.snapshot.paramMap.get('id') || '');

    this.creditcardsService
      .getCreditCardById(this.creditCardId)
      .subscribe((data: CreditCard) => {
        this.creditCardDetails = data;
      });
  }
}
