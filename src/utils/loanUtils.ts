import { LoanPlan, LoanPlanItem } from '../typings/typings';

/**
 * The calculateLoanPlan function calculates the loan plan based on the amount, years and interest rate.
 * @param amount
 * @param years
 * @param interestRate
 * @returns payment plan, total amount, total interest and total payment, and plan
 */
export const calculateLoanPlan = (
  amount: number,
  years: number,
  interestRate: number
): LoanPlan => {
  const months = years * 12;
  const monthlyInterestRate = interestRate / 12 / 100;

  const monthlyPayment =
    (amount * monthlyInterestRate) /
    (1 - Math.pow(1 + monthlyInterestRate, -months));

  let balance = amount;
  let totalPayment = 0;
  let totalInterest = 0;

  const plan: LoanPlanItem[] = [];

  for (let i = 1; i <= months; i++) {
    const interest = balance * monthlyInterestRate;
    const principal = monthlyPayment - interest;

    balance -= principal;
    totalPayment += monthlyPayment;
    totalInterest += interest;

    plan.push({
      month: i,
      payment: monthlyPayment,
      interest,
      principal,
      balance,
    });
  }

  return {
    payments: plan,
    totalAmount: amount,
    totalInterest,
    totalPayment,
    plan,
  };
};
