import React from "react";
import PricingFeature from "./PricingFeature";

const PricingCard = ({ pricing }) => {
  const { features } = pricing;
  console.log(pricing);
  return (
    <div
      className={`card ${pricing.most_popular && "bg-purple-500"} shadow-sm flex flex-col p-4 pt-4 pb-2`}
    >
      <div>
        {/* <div>
          <span className="badge badge-xs badge-warning">
            {pricing.most_popular && (
              <span className="badge badge-xs badge-warning">
                {pricing.tagline}
              </span>
            )}
          </span>
        </div> */}
        <div>
          {pricing.most_popular && <span className="badge badge-xs badge-warning">
                {pricing.tagline}
              </span>}
        </div>
        <div className="flex justify-between">
          <h2 className="text-3xl font-bold">{pricing.name}</h2>
        </div>
        <p>
          <span className="font-bold text-xl">{pricing.price}</span>/Month
        </p>
      </div>

      <div className="flex-1">
        <ul className="flex flex-col">
          {features.map((feature, index) => (
            <PricingFeature key={index} feature={feature}></PricingFeature>
          ))}
        </ul>
      </div>

      <div className="mt-6">
        <button
          className={`btn ${pricing.most_popular ? "bg-white" : "bg-linear-to-r from-violet-700 to-purple-600 text-white"} btn-block rounded-4xl`}
        >
          {pricing.most_popular ? (
            <span className="bg-linear-to-r from-violet-700 to-purple-600 bg-clip-text text-transparent font-bold">
              {pricing.button}
            </span>
          ) : (
            pricing.button
          )}
        </button>
      </div>
    </div>
  );
};

export default PricingCard;
