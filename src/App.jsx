import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ReportLost from './pages/ReportLost';
import ViewItems from './pages/ViewItems';
import ItemDetails from './pages/ItemDetails';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Features from './pages/Features';

export default function App() {
  return (
    <Router>
      <Navbar />
      
      <Routes>
       
        <Route path="/" element={<Features />} />
        <Route path="/report-lost" element={<ReportLost />} />
        <Route path="/items" element={<ViewItems />} />
        <Route path="/item/:id" element={<ItemDetails />} />
      
      </Routes>
      <Footer />
    </Router>
  );
}
