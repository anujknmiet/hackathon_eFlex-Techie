namespace BankRewardsPragramme.Model
{
    // Root myDeserializedClass = JsonConvert.DeserializeObject<Root>(myJsonResponse);
    public class AgeEligibility
    {
        public double MinimumAge { get; set; }
        public List<string> Notes { get; set; }
    }

    public class Brand
    {
        public string BrandName { get; set; }
        public List<PCA> PCA { get; set; }
    }

    public class Card
    {
        public string Scheme { get; set; }
        public string Type { get; set; }
        public bool ContactlessIndicator { get; set; }
    }

    public class CoreProduct
    {
        public string ProductDescription { get; set; }
        public string ProductURL { get; set; }
        public string TcsAndCsURL { get; set; }
        public string MonthlyMaximumCharge { get; set; }
        public List<string> SalesAccessChannels { get; set; }
        public List<string> ServicingAccessChannels { get; set; }
    }

    public class CreditCheck
    {
        public string ScoringType { get; set; }
    }

    public class Datum
    {
        public List<Brand> Brand { get; set; }
    }

    public class Eligibility
    {
        public ResidencyEligibility ResidencyEligibility { get; set; }
        public List<OtherEligibility> OtherEligibility { get; set; }
        public IDVerificationCheck IDVerificationCheck { get; set; }
        public CreditCheck CreditCheck { get; set; }
        public AgeEligibility AgeEligibility { get; set; }
    }

    public class FeatureBenefitEligibility
    {
        public string Name { get; set; }
        public string Type { get; set; }
        public string Description { get; set; }
        public OtherType OtherType { get; set; }
    }

    public class FeatureBenefitGroup
    {
        public string Name { get; set; }
        public string Type { get; set; }
        public List<FeatureBenefitItem> FeatureBenefitItem { get; set; }
    }

    public class FeatureBenefitItem
    {
        public string Identification { get; set; }
        public string Name { get; set; }
        public string Type { get; set; }
        public string Textual { get; set; }
        public bool? Indicator { get; set; }
        public List<FeatureBenefitEligibility> FeatureBenefitEligibility { get; set; }
    }

    public class FeaturesAndBenefits
    {
        public List<FeatureBenefitItem> FeatureBenefitItem { get; set; }
        public List<MobileWallet> MobileWallet { get; set; }
        public List<Card> Card { get; set; }
        public List<FeatureBenefitGroup> FeatureBenefitGroup { get; set; }
    }

    public class FeeChargeCap
    {
        public string MinMaxType { get; set; }
        public string FeeCapAmount { get; set; }
        public List<string> FeeType { get; set; }
    }

    public class FeeChargeDetail
    {
        public string FeeCategory { get; set; }
        public string FeeType { get; set; }
        public List<string> Notes { get; set; }
        public string FeeRate { get; set; }
        public string ApplicationFrequency { get; set; }
        public string CalculationFrequency { get; set; }
        public string FeeAmount { get; set; }
    }

    public class IDVerificationCheck
    {
    }

    public class Meta
    {
        public DateTime LastUpdated { get; set; }
        public int TotalResults { get; set; }
        public string Agreement { get; set; }
        public string License { get; set; }
        public string TermsOfUse { get; set; }
    }

    public class MobileWallet
    {
        public string Type { get; set; }
        public List<string> Notes { get; set; }
    }

    public class OtherEligibility
    {
        public string Type { get; set; }
        public OtherType OtherType { get; set; }
        public string Name { get; set; }
        public string Amount { get; set; }
        public string Period { get; set; }
        public List<string> Notes { get; set; }
        public bool? Indicator { get; set; }
        public string Textual { get; set; }
    }

    public class OtherFeesCharges
    {
        public List<FeeChargeDetail> FeeChargeDetail { get; set; }
        public List<FeeChargeCap> FeeChargeCap { get; set; }
    }

    public class OtherResidencyType
    {
        public string Name { get; set; }
        public string Description { get; set; }
    }

    public class OtherType
    {
        public string Name { get; set; }
        public string Description { get; set; }
    }

    public class Overdraft
    {
        public List<OverdraftTierBandSet> OverdraftTierBandSet { get; set; }
    }

    public class OverdraftFeeChargeCap
    {
        public string MinMaxType { get; set; }
        public string FeeCapAmount { get; set; }
        public List<string> FeeType { get; set; }
        public string CappingPeriod { get; set; }
    }

    public class OverdraftFeeChargeDetail
    {
        public string FeeType { get; set; }
        public List<string> Notes { get; set; }
        public string FeeAmount { get; set; }
        public string ApplicationFrequency { get; set; }
        public string CalculationFrequency { get; set; }
    }

    public class OverdraftFeesCharge
    {
        public List<OverdraftFeeChargeDetail> OverdraftFeeChargeDetail { get; set; }
        public List<OverdraftFeeChargeCap> OverdraftFeeChargeCap { get; set; }
    }

    public class OverdraftTierBand
    {
        public string Identification { get; set; }
        public List<string> Notes { get; set; }
        public string TierValueMin { get; set; }
        public string TierValueMax { get; set; }
        public string EAR { get; set; }
    }

    public class OverdraftTierBandSet
    {
        public string Identification { get; set; }
        public List<string> Notes { get; set; }
        public string TierBandMethod { get; set; }
        public string BufferAmount { get; set; }
        public List<OverdraftTierBand> OverdraftTierBand { get; set; }
        public List<OverdraftFeesCharge> OverdraftFeesCharges { get; set; }
    }

    public class PCA
    {
        public string Name { get; set; }
        public string Identification { get; set; }
        public bool OnSaleIndicator { get; set; }
        public List<PCAMarketingState> PCAMarketingState { get; set; }
        public List<string> Segment { get; set; }
    }

    public class PCAMarketingState
    {
        public string Identification { get; set; }
        public CoreProduct CoreProduct { get; set; }
        public FeaturesAndBenefits FeaturesAndBenefits { get; set; }
        public string MarketingState { get; set; }
        public string FirstMarketedDate { get; set; }
        public string LastMarketedDate { get; set; }
        public OtherFeesCharges OtherFeesCharges { get; set; }
        public Eligibility Eligibility { get; set; }
        public Overdraft Overdraft { get; set; }
        public List<string> Notes { get; set; }
        public string StateTenurePeriod { get; set; }
        public int? StateTenureLength { get; set; }
        public string PredecessorID { get; set; }
    }

    public class ResidencyEligibility
    {
        public string ResidencyType { get; set; }
        public OtherResidencyType OtherResidencyType { get; set; }
        public List<string> ResidencyIncluded { get; set; }
        public List<string> Notes { get; set; }
    }

    public class Root
    {
        public Meta meta { get; set; }
        public List<Datum> data { get; set; }
    }


}
