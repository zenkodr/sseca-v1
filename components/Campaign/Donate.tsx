import { useState } from 'react';

const Donate = () => {
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState('Ether');

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value);
  };

  const handleCurrencyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrency(e.target.value);
  };

  const handleDonate = () => {
    // TODO: Implement donation logic using the Donate.sol contract
    console.log(`Donating ${amount} ${currency}`);
  };

  return (
    <div>
      <h2>Donate</h2>
      <label htmlFor="amount">Amount:</label>
      <input type="number" id="amount" value={amount} onChange={handleAmountChange} placeholder="Enter amount" />
      <select value={currency} onChange={handleCurrencyChange} title="Select Token">
        <option value="Ether">Ether</option>
        <option value="Matic">Matic</option>
      </select>
      <button onClick={handleDonate}>Donate</button>
    </div>
  );
};

export default Donate;
