import { Component } from '@angular/core';
import { CreditCard } from 'src/app/models/credit-card';
import { CreditcardsService } from '../../services/creditcards.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss'],
})
export class DeleteComponent {
  creditCardDetails!: CreditCard;
  creditCardId!: Number;

  constructor(
    private creditcardsService: CreditcardsService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.creditCardId = parseInt(this.route.snapshot.paramMap.get('id') || '');

    this.creditcardsService
      .deleteCreditCard(this.creditCardId)
      .subscribe(() => {
        alert('Credit card deleted...');
        this.router.navigate(['creditcards']);
      });
  }
}
