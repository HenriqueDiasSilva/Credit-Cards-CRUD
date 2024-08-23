import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CreditCard } from 'src/app/models/credit-card';
import { CreditcardsService } from 'src/app/services/creditcards.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent {
  constructor(private creditCardsService:CreditcardsService, private router:Router) {}

  newCreditCard: CreditCard = {
    id: undefined,
    cardName: '',
    bankName: '',
    description: '',
    maxCredit: 5000,
    active: false,
    annualFee: 12,
    interestRate: 12,
    recommededCreditScore: '100-500',
    createdDate: Date(),
    termsAndConditions: 'Terms and conditions for the credit card',
  };

  saveCreditCard() {
    console.log(this.newCreditCard);
    this.creditCardsService.createCreditCard(this.newCreditCard).subscribe(data => {
      alert("Create New Credit Card");
      this.router.navigate(['creditcards'])
    });
  }
}