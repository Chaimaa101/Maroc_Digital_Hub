import Hero from '../components/Hero';
import Newsletter from '../components/Newsletter';
import SectorCard from '../components/SectorCard';
import Startups from './Startups';

const HomePage = () => {


  return (
    <div className="min-h-screen bg-gray-50">
      <Hero />

      <section className="py-12">
        <div className="container mx-auto px-4">
        <Startups />
        </div>
      </section>

      <Newsletter />
      <SectorCard />
    </div>
  );
};

export default HomePage;
