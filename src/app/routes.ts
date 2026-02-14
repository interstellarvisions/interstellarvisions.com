import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/privacy-policy",
    Component: PrivacyPolicy,
  },
  {
    path: "/terms-conditions",
    Component: TermsConditions,
  },
]);
