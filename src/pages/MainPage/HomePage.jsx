import React from 'react';
import { useNavigate } from 'react-router-dom';


 
import HomePageHero from './components/HomePageHero';
import DiscoverGamesCard from './components/DiscoverGamesCard';
import CyberPunkCard from './components/CyberPunkCard';
import PcGamerCard from './components/PcGamerCard';
import GTAVCard from './components/GTAVCard';
import EndingHero from './components/EndingHero';

function HomePage() {
  const navigate = useNavigate();

  return (
    <div>
      <HomePageHero />
      <DiscoverGamesCard />
      <CyberPunkCard />
      <PcGamerCard />
      <GTAVCard />
      <EndingHero />
    </div>
  );
}

export default HomePage;
