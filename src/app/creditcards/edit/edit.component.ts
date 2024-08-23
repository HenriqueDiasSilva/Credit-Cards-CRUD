import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CreditCard } from 'src/app/models/credit-card';
import { CreditcardsService } from 'src/app/services/creditcards.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent {

  editCreditCardForm!: FormGroup;

  creditCardData!: CreditCard;

  constructor(private formBuilder:FormBuilder, private route:ActivatedRoute, private creditCardsService:CreditcardsService){
    this.editCreditCardForm = this.formBuilder.group({
      active: [true],
      cardName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      bankName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      maxCredit: ['', [Validators.required, Validators.maxLength(20)]],
      interestRate: ['', [Validators.required, Validators.maxLength(20)]],
      annualFee: ['', [Validators.required, Validators.maxLength(20)]],
      recommendScore: [null],
      createdDate: ['', [Validators.required]],
      description: ['', [Validators.required]],
    })

  }

  ngOnInit() {
    const id = parseInt(this.route.snapshot.paramMap.get("id") || '');

    if (id !== 0) {
      this.creditCardsService.getCreditCardById(id).subscribe(data => {
        this.creditCardData = data;

        this.editCreditCardForm.patchValue(this.creditCardData);
      })
    }
  }

  onSubmit() {
    if (this.editCreditCardForm.valid) {
      const updateFormData: CreditCard = this.editCreditCardForm.value;
      this.creditCardsService.updateCreditCard(updateFormData);
    }
  }
}