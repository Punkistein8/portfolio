import 'animate.css';
import Hero from './components/Hero';
import NavBar from './components/NavBar';
import Projects from './components/Projects';
import ContactMe from './components/ContactMe'
import TiraSociales from './components/svgs/TiraSociales';

import { useContext } from 'react'
import { IsDarked } from './context/DarkMode';


function App() {

  const { darkMode } = useContext(IsDarked); //consumiendo el contexto para saber si esta en modo Dark, o no

  return (
    <>
      <NavBar />

      <Hero />

      <div className='flex overflow-hidden my-12'>
        <hr className='border-b-stone-300 border-b-[50px] border-t-transparent border-r-transparent border-r-[100px] w-1/2 '
          style={{ transform: 'rotate(2deg)', translate: '-5px 5px' }}></hr>
        <hr className={darkMode ? ('border-b-amber-300/[0.8] border-b-[50px] border-t-transparent border-r-transparent border-r-[100px] w-1/2')
          : ('border-b-violet-400 border-b-[50px] border-t-transparent border-r-transparent border-r-[100px] w-1/2')}

          style={{ transform: 'rotate(178deg)', translate: '10px 5px' }}></hr>
      </div>

      <Projects />

      <div className='flex overflow-hidden my-12'>
        <hr className={darkMode ? ('border-b-amber-300/[0.8] border-b-[50px] border-t-transparent border-r-transparent border-r-[100px] w-1/2')
          : ('border-b-violet-400 border-b-[50px] border-t-transparent border-r-transparent border-r-[100px] w-1/2')}
          style={{ transform: 'rotate(2deg)', translate: '-5px 5px' }}></hr>

        <hr className='border-b-stone-300 border-b-[50px] border-t-transparent border-r-transparent border-r-[100px] w-1/2 '
          style={{ transform: 'rotate(178deg)', translate: '10px 5px' }}></hr>
      </div>

      <ContactMe />

      <TiraSociales />
    </>
  )
}

export default App
