const AWS = require('aws-sdk');
const dynamoDB = new AWS.DynamoDB.DocumentClient();

const baseResponse = {
  headers: {
    'Access-Control-Allow-Origin': 'http://52.6.83.50:3000',
    'Access-Control-Allow-Methods': 'OPTIONS, POST',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization, x-api-key',
    'Access-Control-Allow-Credentials': true,
  },
};

const addCorsHeaders = (response = {}) => {
  response.headers = { ...baseResponse.headers };
  return response;
};

// Function to calculate tip and submit data
exports.calculateTip = async (event) => {
  try {
    console.log('Received calculateTip event.body:', event.body);

    const requestData = JSON.parse(event.body);

    if (!requestData || !requestData.friendliness || !requestData.timeliness || !requestData.tableMaintenance || !requestData.diningExperience || !requestData.totalCost) {
      throw new Error('Incomplete data. Required fields: friendliness, timeliness, tableMaintenance, diningExperience, totalCost');
    }

    // Calculate capped tip amount (max 20% of total cost)
    const cappedTipAmount = requestData.totalCost * 0.2;

    // Calculate average tip percentage based on slider values
    const averageTipPercentage = ((requestData.friendliness + requestData.timeliness + requestData.tableMaintenance + requestData.diningExperience) / 4) * 0.2;

    // Calculate actual tip amount
    const actualTipAmount = averageTipPercentage * cappedTipAmount;

    // Call submitData with calculated tip
    await submitData({
      ...requestData,
      tipAmount: actualTipAmount.toFixed(2),
    });

    const successResponse = addCorsHeaders({
      statusCode: 200,
      body: JSON.stringify({
        message: 'Tip calculated and data submitted successfully',
        tipAmount: actualTipAmount.toFixed(2),
        requestData,
      }),
    });

    return successResponse;
  } catch (error) {
    console.error('Error calculating tip:', error);

    const errorResponse = addCorsHeaders({
      statusCode: 500,
      body: JSON.stringify({
        error: error.message || 'Internal Server Error',
        requestData: event.body ? JSON.parse(event.body) : {},
      }),
    });

    return errorResponse;
  }
};

// Function to submit data
const submitData = async (data) => {
  try {
    console.log('Submitting data:', data);

    // Add your DynamoDB submission logic here
    // Example: Insert data into DynamoDB
    const ratingId = Date.now();

    const item = {
      ratingId,
      timestamp: Date.now(),
      friendliness: data.friendliness,
      timeliness: data.timeliness,
      tableMaintenance: data.tableMaintenance,
      diningExperience: data.diningExperience,
      totalCost: data.totalCost,
      tipAmount: data.tipAmount,
    };

    const params = {
      TableName: 'TipadvisorTable',
      Item: item,
    };

    await dynamoDB.put(params).promise();

    console.log('Data submitted successfully');
  } catch (error) {
    console.error('Error submitting data:', error);
    throw error; // Propagate the error to the caller if submission fails
  }
};
