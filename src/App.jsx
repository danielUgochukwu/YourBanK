import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, About, Careers, Security, SignIn, SignUp } from "./pages";

import Header from "./components/Header";

const App = () => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/careers" element={<Careers />} />
      <Route path="/security" element={<Security />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
    </Routes>
  </BrowserRouter>
);

export default App;
