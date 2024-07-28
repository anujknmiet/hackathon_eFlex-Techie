import axios from "axios";

const hackathonService = {
  customerData: async () => {
    const response = await axios.get("https://localhost:7111/BankRewards");
    return response.data;
  },
  getRewards: async (customerId, athleteId, fitnessPoints, clientId) => {
    const response = await axios.get("https://localhost:7093/Producer", {
      params: {
        customerId: customerId,
        athleteId: athleteId,
        fitnessPoints: fitnessPoints,
        clientId: clientId,
      },
    });
    return response.data;
  },
};

export default hackathonService;
