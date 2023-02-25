import { LoanFormProps } from '../typings/typings';

/**
 * LoanForm component that allows the user to change the loan amount, loan term and interest rate.
 * @param props the props for the LoanForm component describing the current loan amount, loan term and interest rate. It also contains the functions to handle the form submit and input change events.
 */
function LoanForm(props: LoanFormProps) {
  const { amount, years, interestRate, onSubmit, onInputChange } = props;

  return (
    <form onSubmit={onSubmit} className="max-w-sm mx-auto">
      <div className="mb-4">
        <label
          htmlFor="amount"
          className="block mb-2 font-medium text-gray-700"
        >
          Amount
        </label>
        <input
          id="amount"
          type="number"
          step="10000"
          value={amount}
          onChange={onInputChange}
          required
          className="w-full px-3 py-2 text-gray-700 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
        />
        <input
          id="amount"
          type="range"
          min="10000"
          max="10000000"
          step="10000"
          value={amount}
          onChange={onInputChange}
          className="mt-2 w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer accent-red-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="years" className="block mb-2 font-medium text-gray-700">
          Payback Time (years)
        </label>
        <input
          id="years"
          type="number"
          value={years}
          onChange={onInputChange}
          required
          className="w-full px-3 py-2 text-gray-700 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
        />
        <input
          id="years"
          type="range"
          min="1"
          max="30"
          step="1"
          value={years}
          onChange={onInputChange}
          className="mt-2 w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer accent-red-500"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="interestRate"
          className="block mb-2 font-medium text-gray-700"
        >
          Interest Rate (%)
        </label>
        <input
          disabled // Disabled for this task
          id="interestRate"
          type="number"
          step="0.1"
          value={interestRate}
          onChange={onInputChange}
          required
          className="w-full px-3 py-2 text-gray-700 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
        />
        <input
          id="interestRate"
          disabled // Disabled for this task
          type="range"
          min="1"
          max="20"
          step="0.1"
          value={interestRate}
          onChange={onInputChange}
          className="mt-2 w-full h-2 bg-gray-300 rounded-lg appearance-none accent-red-500 cursor-not-allowed"
        />
      </div>
      <button
        type="submit"
        className="w-full px-4 py-2 text-white bg-red-600 rounded-md hover:bg-red-500 focus:outline-none focus:bg-red-700"
      >
        Calculate
      </button>
    </form>
  );
}

export default LoanForm;
