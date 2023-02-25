import { LoanTotalsProps } from '../typings/typings';

/**
 * The LoanTotals component displays the total cost amounts for the loan.
 * @param props the props for the LoanTotals component describing the loan total costs.
 */
function LoanTotals({
  principal,
  totalInterest,
  totalPayment,
}: LoanTotalsProps) {
  return (
    <div className="my-6 p-4 border-2 border-red-500 rounded-lg flex flex-col">
      <h2 className="text-2xl font-bold text-red-500">Loan Total Amounts</h2>
      <div className="flex flex-row justify-center gap-10">
        <div className="mt-4 flex flex-col">
          <span className="font-bold text-lg">Principal Amount: </span>
          <span className="text-lg">
            {principal.toLocaleString(undefined, {
              maximumFractionDigits: 0,
            })}
          </span>
        </div>
        <div className="mt-4 flex flex-col">
          <span className="font-bold text-lg">Total Interest: </span>
          <span className="text-lg">
            {totalInterest.toLocaleString(undefined, {
              maximumFractionDigits: 0,
            })}
          </span>
        </div>
        <div className="mt-4 flex flex-col">
          <span className="font-bold text-lg">Total Payment: </span>
          <span className="text-lg">
            {totalPayment.toLocaleString(undefined, {
              maximumFractionDigits: 0,
            })}
          </span>
        </div>
      </div>
    </div>
  );
}

export default LoanTotals;
