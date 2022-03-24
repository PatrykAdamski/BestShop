import React from "react";
import SinglePriceComponent from "./SinglePriceComponent";
import Carousel from "react-elastic-carousel";
import { offers } from "../data/PricingOffer";

export default function HomePricing() {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 500, itemsToShow: 2 },
    { width: 996, itemsToShow: 3 },
  ];

  return (
    <section className="container p-3">
      <h2 className="text-center fs-1">Pricing</h2>
      <Carousel breakPoints={breakPoints} className="py-5">
        {offers.map((offer) => {
          return (
            <SinglePriceComponent
              key={offer.id}
              title={offer.title}
              price={offer.price}
              isLimitedOffer={offer.isLimitedOffer}
              howMuchSpace={offer.howMuchSpace}
              subdomain={offer.subdomain}
              emails={offer.emails}
              license={offer.license}
              isLicense={offer.isLicense}
              isFullSupport={offer.isFullSupport}
              classNameElementColor={offer.classNameElementColor}
            />
          );
        })}
      </Carousel>
    </section>
  );
}
