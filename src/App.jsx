import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ReportLost from './pages/ReportLost';
import ViewItems from './pages/ViewItems';
import ItemDetails from './pages/ItemDetails';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HeroSection from './pages/HeroSection';
import SearchFilterSection from './pages/SearchFilterSection';
import HowItWorks from './pages/HowItWorks';
import LostFoundList from './pages/LostFoundList';
import PopularCategories from './pages/PopularCategories';

export default function App() {
  return (
    <Router>
      <Navbar />
      
      <Routes>
       
        <Route path="/" element={<HeroSection />} />
         <Route path="/" element={<SearchFilterSection />} />
         <Route path="/" element={<HowItWorks />} />
         <Route path="/" element={<LostFoundList />} />
          <Route path="/" element={<PopularCategories />} />

        <Route path="/report-lost" element={<ReportLost />} />
        <Route path="/items" element={<ViewItems />} />
        <Route path="/item/:id" element={<ItemDetails />} />
      
      </Routes>
      <Footer />
    </Router>
  );
}
