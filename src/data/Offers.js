import { prices } from "../data/Prices";

export const offers = [
  {
    id: Math.random(),
    title: "Basic",
    price: prices.package.basic,
    isLimitedOffer: false,
    howMuchSpace: "100 MB HDD",
    subdomain: "1 Subdomain",
    emails: "2 Emails",
    license: "Two years license",
    isLicense: false,
    isFullSupport: false,
    classNameElementColor:
      "custom-basic-price position-relative d-flex flex-column  align-items-center p-3 p-sm-5",
  },
  {
    id: Math.random(),
    title: "BasicPlus",
    price: prices.package.basicPlus,
    isLimitedOffer: false,
    howMuchSpace: "200 MB HDD",
    subdomain: "1 Subdomain",
    emails: "4 Emails",
    license: "One years license",
    isLicense: true,
    isFullSupport: false,
    classNameElementColor:
      "custom-premium-price position-relative d-flex flex-column  align-items-center p-3 p-sm-5",
  },

  {
    id: Math.random(),
    title: "Professional",
    price: prices.package.professional,
    isLimitedOffer: true,
    howMuchSpace: "500 MB HDD",
    subdomain: "2 Subdomains",
    emails: "5 Emails",
    license: "One years license",
    isLicense: true,
    isFullSupport: false,
    classNameElementColor:
      "custom-professional-price position-relative d-flex flex-column align-items-center p-3 p-sm-5",
  },

  {
    id: Math.random(),
    title: "Premium",
    price: prices.package.premium,
    isLimitedOffer: true,
    howMuchSpace: "2 GB HDD",
    subdomain: "5 Subdomains",
    emails: "20 Emails",
    license: "Two years license",
    isLicense: true,
    isFullSupport: true,
    classNameElementColor:
      "custom-premium-price position-relative d-flex flex-column  align-items-center p-3 p-sm-5",
  },
  {
    id: Math.random(),
    title: "PremiumPlus",
    price: prices.package.premiumPlus,
    isLimitedOffer: true,
    howMuchSpace: "5 GB HDD",
    subdomain: "20 Subdomains",
    emails: "40 Emails",
    license: "Four years license",
    isLicense: true,
    isFullSupport: true,
    classNameElementColor:
      "custom-basic-price position-relative d-flex flex-column falign-items-center p-3 p-sm-5",
  },
];
