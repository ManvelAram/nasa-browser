import { Route, Routes, Link } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Home from './pages/Home';
import NearbyAsteroids from './pages/NearbyAsteroids';
import DayPicthure from './pages/DayPicthure';
import NewPlanet from './pages/NewPlanet';
import React from 'react';
import i18n from './i18n';
import { useTranslation } from 'react-i18next';
import LocaleContext from './LocaleContext';

function App() {
  const [locale, setLocale] = useState(i18n.language);

  const { t } = useTranslation();
      
  

  function changeLanguage(lang) {
    i18n.changeLanguage(lang);
  }
  return (
<>
<LocaleContext.Provider value={{locale, setLocale}}>
  <header className='head'>
    NASA BROWSER  
  </header>
  <div className='parent'>
    <Link to="/">{t('home')}</Link>|
    <Link to="/nearbyAsteroids">{t('NEARBY_ASTEROIDS')}</Link>|
    <Link to="/dayPicthure">{t('ASTRONOMY_PICTURE_OF_THE_DAY')}</Link>|
    <Link to="/newPlanet">{t('SUBMIT_NEW_PLANET')}</Link>
    <button onClick={()=>changeLanguage('en')} >EN</button>
    <button onClick={()=>changeLanguage('am')}>ՀՅ</button>
    
   

  </div>

  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/nearbyAsteroids' element={<NearbyAsteroids/>}/>
    <Route path='/dayPicthure' element={<DayPicthure/>}/>
    <Route path='/newPlanet' element={<NewPlanet/>}/>
  </Routes>
</LocaleContext.Provider>

</>
  
  );
}

export default App;
