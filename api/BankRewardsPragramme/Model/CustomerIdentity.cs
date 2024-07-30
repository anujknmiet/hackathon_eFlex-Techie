namespace BankRewardsPragramme.Model
{
    public class NameData
    {
        public string title { get; set; }

        public string given_name { get; set; }

        public string family_name { get; set; }

        public string middle_names { get; set; }

        public string salutation { get; set; }

        public string full_name { get; set; }

    }

    public class CustomerIdenity
    {
        public string id { get; set; }

        public NameData name {  get; set; }
    }
}
