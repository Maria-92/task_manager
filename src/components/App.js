import "bootstrap/dist/css/bootstrap.min.css";

import NavbarPage from "./NavbarPage";
import Header from "./Header";
import FeaturePage from "./FeaturePage";
import LeadingPage from "./LeadingPage";
import DownloadPage from "./DownloadPage";
import ReviewPage from "./ReviewPage";
import CardPage from "./CardPage";
import SubscribePage from "./SubscribePage";
import Footer from "./Footer";

function App() {
  return (
    <div>
      <NavbarPage />
      <Header />
      <FeaturePage />
      <LeadingPage />
      <DownloadPage />
      <ReviewPage />
      <CardPage />
      <SubscribePage />
      <Footer />
    </div>
  );
}

export default App;
