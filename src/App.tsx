import './App.css';
import LoanCalculator from './components/LoanCalculator';

/*
  * This is the main App component. It is responsible for rendering the
  * LoanCalculator component and passing the current loan type as a prop.

*/

function App() {
  const currentLoanType = { name: 'Housing Loan', interestRate: 3.5 };

  return (
    <div className="App">
      <LoanCalculator loanType={currentLoanType} />
    </div>
  );
}

export default App;
