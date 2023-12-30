import React, { useState, useEffect } from 'react';
import './App.css';

const apiEndpoint = 'https://erhpguzad8.execute-api.us-east-1.amazonaws.com/dev';
const apiKey = '6eWlnNGcgm4d8lxpQekJR9ZYEez3ZFn6ak1wCDCH';

function StarRating(props) {
  const [rating, setRating] = useState(3);

  const handleRatingChange = (newRating) => {
    setRating(newRating);
    props.onRatingChange(newRating);
  };

  return (
    <div className="star-rating">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={`star ${star <= rating ? 'selected' : ''}`}
          onClick={() => handleRatingChange(star)}
        >
          ★
        </span>
      ))}
    </div>
  );
}

function App() {
  const [totalCost, setTotalCost] = useState('');
  const [friendliness, setFriendliness] = useState(3);
  const [timeliness, setTimeliness] = useState(3);
  const [tableMaintenance, setTableMaintenance] = useState(3);
  const [diningExperience, setDiningExperience] = useState(3);
  const [tipAmount, setTipAmount] = useState(null);
  const [requestDataResponse, setRequestDataResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleRatingChange = (newRating) => {
    // Handle rating change for star ratings
    console.log('New rating:', newRating);
  };

  const handleButtonClick = async () => {
    try {
      setLoading(true);

      // Calculate tip
      const calculateTipResponse = await fetch(`${apiEndpoint}/calculate-tip`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': apiKey,
        },
        body: JSON.stringify({
          friendliness,
          timeliness,
          tableMaintenance,
          diningExperience,
          totalCost,
        }),
      });

      if (!calculateTipResponse.ok) {
        throw new Error(`HTTP error! Status: ${calculateTipResponse.status}`);
      }

      const calculateTipResult = await calculateTipResponse.json();
      console.log('calculateTipResult:', calculateTipResult);

      // Check if the response has the expected properties
      if ('tipAmount' in calculateTipResult) {
        const { tipAmount } = calculateTipResult;
        setTipAmount(tipAmount);

        // Set the response data for request data
        setRequestDataResponse(calculateTipResult.requestData);

        // Submit data
        await submitData(calculateTipResult.requestData);

        // Add additional logic as needed
      } else {
        throw new Error('Unexpected response format');
      }
    } catch (error) {
      console.error('Error during calculateTip operation', error);
      setError(`An error occurred: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const submitData = async (requestData) => {
    try {
      const submitDataResponse = await fetch(`${apiEndpoint}/submit-data`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': apiKey,
        },
        body: JSON.stringify(requestData),
      });

      if (!submitDataResponse.ok) {
        throw new Error(`HTTP error! Status: ${submitDataResponse.status}`);
      }

      const submitDataResult = await submitDataResponse.json();
      console.log('submitDataResult:', submitDataResult);

      // Add additional logic for handling the submit data response if needed
    } catch (error) {
      console.error('Error during submitData operation', error);
      // Handle error for submitData operation
    }
  };

  useEffect(() => {
    // Add any additional logic you need when the component mounts
  }, []);

  const calculateTotalBill = () => {
    if (totalCost && tipAmount) {
      const totalBill = parseFloat(totalCost) + parseFloat(tipAmount);
      return totalBill.toFixed(2);
    }
    return '';
  };

  return (
    <div className="App">
      <h1>TipAdvisor</h1>
      <h2>-RATE YOUR SERVICE TO CALCULATE TIP RECOMMENDATION-</h2>
      <div>
        <label htmlFor="totalCost">Enter Cost of Meal</label>
        <span class="currency">$</span>
        <input
          id="totalCost"
          type="number"
          step="0.01"
          value={totalCost}
          onChange={(e) => setTotalCost(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="friendliness">Friendliness and Attitude:</label>
        <StarRating onRatingChange={(newRating) => setFriendliness(newRating)} />
      </div>
      <div>
        <label htmlFor="timeliness">Timeliness of Service:</label>
        <StarRating onRatingChange={(newRating) => setTimeliness(newRating)} />
      </div>
      <div>
        <label htmlFor="tableMaintenance">Table Maintenance:</label>
        <StarRating onRatingChange={(newRating) => setTableMaintenance(newRating)} />
      </div>
      <div>
        <label htmlFor="diningExperience">Dining Experience:</label>
        <StarRating onRatingChange={(newRating) => setDiningExperience(newRating)} />
      </div>
      <button onClick={handleButtonClick} disabled={loading}>
        {loading ? 'Processing...' : 'Calculate Tip'}
      </button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {tipAmount !== null && <p>Tip: ${tipAmount}</p>}
      {calculateTotalBill() && <p>Total: ${calculateTotalBill()}</p>}
    </div>
  );
}

export default App;
