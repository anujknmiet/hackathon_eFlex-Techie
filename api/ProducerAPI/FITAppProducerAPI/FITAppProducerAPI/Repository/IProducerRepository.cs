using FITAppProducerAPI.Model;

namespace FITAppProducerAPI.Repository
{
    public interface IProducerRepository
    {
        public CustomerReward GeRewards(int customerId, int athleteId, int fitnessPoints, int clientId);
    }
}
