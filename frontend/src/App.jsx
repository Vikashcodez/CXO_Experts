import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './compontes/Navbar/Navbar';
import Login from './compontes/Admin/Login';
import Dashboard from './compontes/Admin/dashboard';
import AddService from './compontes/Admin/AddService';
import AddNewsletter from './compontes/Admin/AddNewsletter'; // Import AddNewsletter component
import Services from './compontes/services/services';
import Newsletter from './compontes/Pages/Newsletter';
import Eservice from './compontes/Admin/delservices'
import Enews from './compontes/Admin/delnews'
import Home from './compontes/Home/home'
import Footer from './compontes/Footer/footer'
import BookAppointment from './compontes/Navbar/Appoinment';
import ServiceDetail from'./compontes/Pages/ServiceDetails';
import About from './compontes/Pages/about'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/about-us" element={<About />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/add-service" element={<AddService />} />
        <Route path="/add-newsletter" element={<AddNewsletter />} /> {/* AddNewsletter Route */}
        <Route path="/services" element={<Services />} />
        <Route path="/newsletters" element={<Newsletter />} />
        <Route path="/hide-delete-newsletters" element={<Enews />} />
        <Route path="/hide-delete-services" element={<Eservice />} />
        <Route path="/" element={<Home />} />
        <Route path="/book-appointment" element={<BookAppointment />} />
        <Route path="/services/:id" element={<ServiceDetail />} />
        <Route path="/Admin/Login" element={<Login />} />
        
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
