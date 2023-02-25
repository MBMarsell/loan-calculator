import { useState } from 'react';

import { calculateLoanPlan } from '../utils/loanUtils';
import { LoanPlan, LoanCalculatorProps } from '../typings/typings';

import LoanPlanTable from './LoanPlanTable';
import LoanTotals from './LoanTotals';
import LoanForm from './LoanForm';

/**
 * LoanCalculator component that calculates the loan plan and displays the results. It also allows the user to change the loan amount, loan term and interest rate.
 * @param props the props for the LoanCalculator component describing the type of loan and initial interest rate.
 */
function LoanCalculator(props: LoanCalculatorProps) {
  const [amount, setAmount] = useState<number>(250000);
  const [years, setYears] = useState<number>(20);
  const [interestRate, setInterestRate] = useState<number>(
    props.loanType.interestRate
  );
  const [loanPlan, setLoanPlan] = useState<LoanPlan | undefined>(undefined);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoanPlan(calculateLoanPlan(amount, years, interestRate));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    switch (id) {
      case 'amount':
        setAmount(parseInt(value));
        break;
      case 'years':
        setYears(parseInt(value));
        break;
      case 'interestRate':
        setInterestRate(parseInt(value));
        break;
      default:
        break;
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-5xl font-bold mb-10">Loan Calculator</h1>

      <LoanForm
        onInputChange={handleInputChange}
        onSubmit={handleSubmit}
        amount={amount}
        years={years}
        interestRate={interestRate}
      />

      {loanPlan ? (
        <>
          <LoanTotals
            principal={loanPlan.totalAmount}
            totalInterest={loanPlan.totalInterest}
            totalPayment={loanPlan.totalPayment}
          />
          <LoanPlanTable plan={loanPlan} />
        </>
      ) : null}
    </div>
  );
}

export default LoanCalculator;
