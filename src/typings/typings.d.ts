export type LoanType = {
  name: string;
  interestRate: number;
};

export interface LoanCalculatorProps {
  loanType: LoanType;
}

export interface LoanPlanItem {
  month: number;
  payment: number;
  interest: number;
  principal: number;
  balance: number;
}

export interface LoanPlan {
  totalAmount: number;
  totalInterest: number;
  totalPayment: number;
  plan: LoanPlanItem[];
  payments: {
    month: number;
    payment: number;
    interest: number;
    principal: number;
    balance: number;
  }[];
}

export interface LoanTotalsProps {
  principal: number;
  totalInterest: number;
  totalPayment: number;
}

export type LoanFormProps = {
  amount: number;
  years: number;
  interestRate: number;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
