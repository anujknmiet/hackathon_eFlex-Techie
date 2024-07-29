using FITAppProducerAPI.Model;
using FITAppProducerAPI.Repository;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace FITAppProducerAPI.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class ProducerController : ControllerBase
    {
        private readonly IProducerRepository _producerRepository;
        public ProducerController(IProducerRepository producerRepository)
        {
            _producerRepository = producerRepository;
        }

        [HttpGet(Name = "CustomerRewards")]
        public CustomerReward Get(int customerId, int athleteId, int fitnessPoints, int clientId)
        {
            return _producerRepository.GeRewards(customerId, athleteId, fitnessPoints, clientId);
        }
    }
}
