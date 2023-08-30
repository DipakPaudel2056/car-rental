import { BrowserRouter, Route, Routes} from "react-router-dom";
import { About, Cars, Contact, Home, Service } from "./pages";

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/home" element={<Home/>} />
    <Route path="/contact" element={<Contact/>} />
    <Route path="/about" element={<About/>} />
    <Route path="/service" element={<Service/>} />
    <Route path="/cars" element={<Cars/>} />
   </Routes>
   </BrowserRouter>
  );
}

export default App;
