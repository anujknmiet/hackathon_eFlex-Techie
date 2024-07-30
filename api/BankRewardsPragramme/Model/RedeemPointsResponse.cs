namespace BankRewardsPragramme.Model
{
    public class RedeemPointsResponse
    {
        public int customerId { get; set; }

        public int remainingPoints { get; set; }

        public string Message { get; set; }
    }
}
