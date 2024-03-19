import {
  createBrowserRouter,
  Route,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
//layout
import RootLayout from "./layouts/RootLayout";
import HelpLayout from "./layouts/HelpLayout";
///Help
import Contact from "./pages/help/Contact";
import Faq from "./pages/help/Faq";
///Careers
import Careers from "./pages/careers/Careers";
import CareersLayout from "./layouts/CareersLayout";
///Careers Loader Function
import { CareersLoader } from "./pages/careers/Careers";
import { careerDetailsLoader } from "./pages/careers/CareersDetails/CareerDetails";
///Careers Deails
import CareerDetails from "./pages/careers/CareersDetails/CareerDetails";
///Not Found
import NotFound from "./pages/NotFound";
import CareersEror from "./pages/careers/CareersEror";
/// form function
import { contactAction } from "./pages/help/Contact";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="help" element={<HelpLayout />}>
        <Route path="faq" element={<Faq />} />
        <Route path="contact" element={<Contact />} action={contactAction} />
      </Route>
      <Route path="*" element={<NotFound />} />
      <Route
        path="careers"
        element={<CareersLayout />}
        errorElement={<CareersEror />}>
        <Route index element={<Careers />} loader={CareersLoader} />
        <Route
          path=":id"
          element={<CareerDetails />}
          loader={careerDetailsLoader}
        />
      </Route>
      <Route />
    </Route>
  )
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
