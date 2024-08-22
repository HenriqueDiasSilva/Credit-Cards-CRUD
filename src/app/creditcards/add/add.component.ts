import { Component } from '@angular/core';
import { CreditCard } from 'src/app/models/credit-card';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent {

  newCreditCard: CreditCard = {
    id: undefined,
    cardName: "",
    bankName: "",
    description: "",
    maxCredit: 5000,
    active: false,
    annualFee: 12,
    interestRate: 12,
    recommededCreditScore: "100-500",
    createdDate: Date(),
    termsAndConditions: "Terms and conditions for the credit card",
  }

  saveCreditCard(){
    console.log(this.newCreditCard);
  }
}