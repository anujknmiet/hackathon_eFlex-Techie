using BankRewardsPragramme.Model;

namespace BankRewardsPragramme.Repository
{
    public interface IBankRewardsRepository
    {
        public CustomerIdenity GetCustomerIdentity();

        public Root GetNatwestProducts();

        public RedeemPointsResponse RedeemReward(int customerId, int totalRewardPoints, int pointsToRedeem);

        public CustomerReward GeRewards(int customerId, int athleteId, int fitnessPoints, int clientId);
    }
}
