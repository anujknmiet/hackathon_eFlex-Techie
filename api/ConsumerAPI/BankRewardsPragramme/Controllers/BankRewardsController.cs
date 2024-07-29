using BankRewardsPragramme.Model;
using BankRewardsPragramme.Repository;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace BankRewardsPragramme.Controllers
{
    [Route("[controller]/[action]")]
    [ApiController]
    //[EnableCors]
    public class BankRewardsController : ControllerBase
    {
        private readonly IBankRewardsRepository _bankRewardsRepository;
        public BankRewardsController(IBankRewardsRepository bankRewardsRepository)
        {
            _bankRewardsRepository = bankRewardsRepository;
        }

        [HttpGet(Name = "CustomerIdentity")]
        public CustomerIdenity Get()
        {
            return _bankRewardsRepository.GetCustomerIdentity();
        }

        [HttpGet(Name = "Products")]
        public Root GetProducts()
        {
            return _bankRewardsRepository.GetNatwestProducts();
        }

        [HttpGet(Name = "RedeemRewards")]
        public RedeemPointsResponse RedeemRewards(int customerId,int totalRewardPoints, int pointsToRedeem)
        {
            return _bankRewardsRepository.RedeemReward(customerId, totalRewardPoints, pointsToRedeem);
        }
    }
}
