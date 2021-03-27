import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/TwoColumnWithInput.js";
import GetStarted from "components/cta/GetStarted";
//import Pricing from "components/pricing/TwoPlansWithDurationSwitcher";
import Footer from "components/footers/SimpleFiveColumn.js";
import Features from "components/features/DashedBorderSixFeatures";

export default () => {
  return (
    <AnimationRevealPage disabled>
      <Hero roundedHeaderButton={false} />
      <Features />
      <GetStarted />
      <Footer />
    </AnimationRevealPage>
  );
}
