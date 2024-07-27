using BankRewardsPragramme.Model;
using System.Net.Http.Headers;
using Newtonsoft.Json;
using System.Collections.Generic;
using Newtonsoft.Json.Linq;
using Microsoft.AspNetCore.Mvc.RazorPages;
using System.Web;

namespace BankRewardsPragramme.Repository
{
    public class BankRewardsRepository:IBankRewardsRepository
    {
        public CustomerIdenity GetCustomerIdentity()
        {
            CustomerIdenity customerIdenity= new CustomerIdenity();
            string token = GetToken();
            string baseUrl = "https://ob.sandbox.natwest.com/zerocode/bankofapis.com/";
            using (var client = new HttpClient())
            {
                client.BaseAddress = new Uri(baseUrl);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                client.DefaultRequestHeaders.Add("Authorization", "Bearer " + token);
                var retriveAsynctask = Task.Run(async () =>
                {
                    return await client.GetAsync("customer-identity/v3/attributes/identity");
                });
                if (retriveAsynctask.Result.IsSuccessStatusCode)
                {
                    dynamic responseData = JObject.Parse(retriveAsynctask.Result.Content.ReadAsStringAsync().Result);
                    NameData nameData = new NameData();
                    nameData.title = responseData.data.name.title;
                    nameData.given_name = responseData.data.name.given_name;
                    nameData.middle_names = responseData.data.name.middle_names;
                    nameData.family_name = responseData.data.name.family_name;
                    nameData.salutation=    responseData.data.name.salutation;
                    nameData.full_name = responseData.data.name.full_name;
                    customerIdenity.id = responseData.data.id;
                    customerIdenity.name = nameData;
                }
            }
            return customerIdenity;
        }

        public string  GetToken()
        {
            string clientId = "tvdOA8m9egeiPo_WE2CsYoML3hMDTjERLVpkQerkApQ=";
            string clientScret = "21rkCxWomQ-rRrze6eYVGaFUWiBP6fKegdF2eJApcZw=";
            string token = "";
            string baseAddress = "https://ob.sandbox.natwest.com/";
            using (var client = new HttpClient())
            {
                client.BaseAddress = new Uri(baseAddress);
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                var postData = new List<KeyValuePair<string, string>>();
                postData.Add(new KeyValuePair<string, string>("grant_type", "client_credentials"));
                postData.Add(new KeyValuePair<string, string>("client_id", clientId));
                postData.Add(new KeyValuePair<string, string>("client_secret", clientScret));
                FormUrlEncodedContent content = new FormUrlEncodedContent(postData);
                var retriveAsynctask = Task.Run(async () =>
                {
                    return await client.PostAsync("token", content);
                });
                if(retriveAsynctask.Result.IsSuccessStatusCode)
                {
                    dynamic responseData = JObject.Parse(retriveAsynctask.Result.Content.ReadAsStringAsync().Result);
                    token = responseData.access_token;
                }
                return token;
            }
        }
    }
}
