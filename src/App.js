import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Subscription from "./Components/Subscription";
import SubscriptionOption from "./Components/SubscriptionOption";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/subscriptionoption" element={<SubscriptionOption />} />
        <Route path="/subscription" element={<Subscription />} />
      </Routes>
    </div>
  );
}

export default App;
