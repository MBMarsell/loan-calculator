import { LoanPlan } from '../typings/typings';

/**
 * The LoanPlanTable component displays the loan plan in a table format. It shows the plan month by month.
 * @param props the props for the LoanPlanTable component describing the loan plan.
 */

function LoanPlanTable({ plan }: { plan: LoanPlan }) {
  return (
    <div className="bg-white shadow overflow-y-hidden sm:rounded-lg">
      <h2 className="px-6 py-3 text-3xl font-medium text-red-500 bg-gray-100">
        Loan Plan
      </h2>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
            >
              Month
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
            >
              Payment
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
            >
              Interest
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
            >
              Principal
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
            >
              Balance
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {plan.payments.map((payment, index: number) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {index + 1}
              </td>

              {/* Payment */}
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {payment.payment.toLocaleString(undefined, {
                  maximumFractionDigits: 0,
                })}
              </td>

              {/* Interest */}
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {payment.interest.toLocaleString(undefined, {
                  maximumFractionDigits: 0,
                })}
              </td>

              {/* Principal */}
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {payment.principal.toLocaleString(undefined, {
                  maximumFractionDigits: 0,
                })}
              </td>

              {/* Balance */}
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {payment.balance.toLocaleString(undefined, {
                  maximumFractionDigits: 0,
                })}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default LoanPlanTable;
