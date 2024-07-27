using FITAppProducerAPI.Model;

namespace FITAppProducerAPI.Repository
{
    public class ProducerRepository:IProducerRepository
    {
        public CustomerReward GeRewards(int customerId, int athleteId, int fitnessPoints, int clientId)
        {
            double NWRewardRate = 0.10;
            double rewards = fitnessPoints * NWRewardRate;
            CustomerReward customerReward = new CustomerReward();
            customerReward.athleteId = athleteId;
            customerReward.customerId = customerId;
            customerReward.rewardPoints = rewards;
            return customerReward;
        }
    }
}
