import "tailwindcss/dist/base.css";
import "styles/globalStyles.css";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import SaaSProductLandingPage from "demos/SaaSProductLandingPage.js";
import Blog2 from "components/blogs/ThreeColSimpleWithImageAndDashedBorder.js";
import FAQ2 from "components/faqs/SingleCol.js";
import LoginPage from "pages/Login.js";
import SignupPage from "pages/Signup.js";
//import PricingPage from "pages/Pricing.js";
import AboutUsPage from "pages/AboutUs.js";
import ContactUsPage from "pages/ContactUs.js";
import TermsOfServicePage from "pages/TermsOfService.js";
import Pricing from "components/pricing/TwoPlansWithDurationSwitcher";
import PrivacyPolicyPage from "pages/PrivacyPolicy.js";
import Footer from "components/footers/SimpleFiveColumn.js";
import Careers from "components/careers/careers.js";
export default function App() {
  return (
    <Router>
    <Switch>

      <Route path="/" exact>
      <SaaSProductLandingPage />
      </Route>

      <Route path="/login" exact>
      <LoginPage />
        </Route>

        <Route path="/signup" exact>
          <SignupPage />
        </Route>

        <Route path="/about-us" exact>
          <AboutUsPage />
        </Route>

        <Route path="/contact-us" exact>
          <ContactUsPage />
        </Route>

        <Route path="/terms-of-service" exact>
          <TermsOfServicePage />
        </Route>

        <Route path="/privacy-policy" exact>
          <PrivacyPolicyPage />
        </Route>

        <Route path="/blog" exact>
          <Blog2 />
        </Route>
        <Route path="/faq" exact>
        <FAQ2 />
        </Route>
        <Route path="/pricing" exact>
        <Pricing />
        <Footer/>
        </Route>
        <Route path="/careers" exact>
        <Careers />
        </Route>
    </Switch>
  </Router>
  )
}
