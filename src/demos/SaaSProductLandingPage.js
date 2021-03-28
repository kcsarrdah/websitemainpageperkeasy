import React from "react";
//import AnimationRevealPage from "helpers/AnimationRevealPage.js";
//import Header from "components/headers/light.js";
import Hero from "components/hero/TwoColumnWithInput.js";
import GetStarted from "components/cta/GetStarted";
//import Pricing from "components/pricing/TwoPlansWithDurationSwitcher";
//import Footer from "components/footers/SimpleFiveColumn.js";
import Features from "components/features/DashedBorderSixFeatures";

export default () => {
  return (
    <div>
      <Hero roundedHeaderButton={false} />
      <Features />
      <GetStarted />
    </div>
  );
}
