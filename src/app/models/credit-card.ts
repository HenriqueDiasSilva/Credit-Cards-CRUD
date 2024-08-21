export interface CreditCard {
  id: number | undefined;
  cardName: string;
  bankName: string;
  description: string;
  maxCredit: number;
  active: boolean;
  annualFee: number;
  interestRate: number;
  recommededCreditScore: string;
  createdDate: string;
  termsAndConditions: string;
}