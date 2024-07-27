using BankRewardsPragramme.Model;
using BankRewardsPragramme.Repository;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace BankRewardsPragramme.Controllers
{
    [Route("[controller]")]
    [ApiController]
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
    }
}
