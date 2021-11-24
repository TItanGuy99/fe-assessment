import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/shared/Header/Header";
import ListCompanies from "./Components/features/ListCompanies/ListCompanies";
import ListNumbers from "./Components/features/ListNumbers/ListNumbers";
import NumberDetails from "./Components/features/NumberDetails/NumberDetails";
import PageError from "./Components/shared/PageError/PageError";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route path="/" exact element={<ListCompanies />} />
          <Route path="/company/:companyId" exact element={<ListNumbers />} />
          <Route path="/number/:numberId" exact element={<NumberDetails />} />
          <Route path='*' exact={true} element={<PageError />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
