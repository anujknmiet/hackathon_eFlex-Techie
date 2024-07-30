import axios from "axios";

const hackathonService = {
  customerData: async () => {
    const response = await axios.get("https://localhost:7111/BankRewards/Get");
    return response.data;
  },
  getRewards: async (customerId, athleteId, fitnessPoints, clientId) => {
    const response = await axios.get(
      "https://localhost:7111/BankRewards/GetCustomerRewars",
      {
        params: {
          customerId: customerId,
          athleteId: athleteId,
          fitnessPoints: fitnessPoints,
          clientId: clientId,
        },
      }
    );
    return response.data;
  },
  getProducts: async () => {
    const response = await axios.get(
      "https://localhost:7111/BankRewards/GetProducts"
    );
    return response.data;
  },
  redeemRewards: async (customerId, totalRewardPoints, pointsToRedeem) => {
    const response = await axios.get(
      "https://localhost:7111/BankRewards/RedeemRewards",
      {
        params: {
          customerId: customerId,
          totalRewardPoints: totalRewardPoints,
          pointsToRedeem: pointsToRedeem,
        },
      }
    );
    return response.data;
  },
};

export default hackathonService;
