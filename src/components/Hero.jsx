import { useContext } from 'react';
import henry from '../assets/img3.1.jpg'
import { IsDarked } from '../context/DarkMode';
import { TypeAnimation } from 'react-type-animation';
import Mongo from './svgs/Mongo'
import ReactSvg from './svgs/React';
import Node from './svgs/Node';
import Tailwind from './svgs/Tailwind';
import Vite from './svgs/Vite';

const Hero = () => {

  const { darkMode } = useContext(IsDarked); //consumiendo el contexto para saber si esta en modo Dark, o no

  return (
    <div className='flex flex-col lg:justify-center'>
      <div className='m-3 lg:w-3/4 lg:max-w-[1200px] lg:ml-24 lg:mt-4 lg:mb-4'>
        <img src={henry} className='w-full rounded-xl shadow-2xl' />
      </div>

      <div className='text-center font-bold text-6xl flex justify-center w-full -translate-y-14 
      lg:absolute lg:w-1/3 lg:right-0 lg:mt-28'>
        <div className={darkMode
          ?
          ('bg-slate-200/[0.5]  backdrop-blur rounded-xl w-3/4')
          :
          ('bg-slate-500/[0.5]  backdrop-blur rounded-xl w-3/4')}>
          <h2 className={darkMode
            ?
            ('text-slate-700 text-4xl from-amber-600 to-violet-700 text-transparent bg-clip-text bg-gradient-to-br pt-1')
            :
            ('text-slate-100 text-4xl from-amber-200 to-violet-300 text-transparent bg-clip-text bg-gradient-to-br pt-1')}>
            <TypeAnimation
              sequence={['¡Hola!', 1500, 'Hello!', 1000, 'Привет!', 1000, 'こんにちは!', 1000, 'Salut!', 1000, 'Hallo!', 1000]}
              wrapper="span"
              repeat={Infinity}
            />
          </h2>
          <section className={darkMode ? 'font-medium text-[17px] md:text-lg py-4 px-4 mb-10' : 'font-medium text-[17px] md:text-lg py-4 px-4 text-slate-50 mb-10'}>
            Mi nombre es <span className='font-semibold'>Henry Guerrero.</span> <br />
            <p className='leading-4 text-xs pt-3'>
              Fullstack Web Developer, Freelancer & Systems Engineering Degree
            </p>
          </section>
        </div>
        <div className={darkMode ? ('rounded-full bg-slate-400 w-auto absolute bottom-0 translate-y-6')
          :
          ('rounded-full bg-slate-600 w-auto absolute bottom-0 translate-y-6 fill-white')}>
          <ReactSvg />
        </div>
        <div className={darkMode ? ('rounded-full bg-slate-400 w-auto absolute bottom-0 translate-y-6 translate-x-16')
          :
          ('rounded-full bg-slate-600 w-auto absolute bottom-0 translate-y-6 translate-x-16 fill-white')}>
          <Mongo />
        </div>
        <div className={darkMode ? ('rounded-full bg-slate-400 w-auto absolute bottom-0 translate-y-6 -translate-x-16')
          :
          ('rounded-full bg-slate-600 w-auto absolute bottom-0 translate-y-6 -translate-x-16 fill-white')}>
          <Node />
        </div>
        <div className={darkMode ? ('rounded-full bg-slate-400 w-auto absolute bottom-0 translate-y-6 -translate-x-32')
          :
          ('rounded-full bg-slate-600 w-auto absolute bottom-0 translate-y-6 -translate-x-32 fill-white')}>
          <Tailwind />
        </div>
        <div className={darkMode ? ('rounded-full bg-slate-400 w-auto absolute bottom-0 translate-y-6 translate-x-32')
          :
          ('rounded-full bg-slate-600 w-auto absolute bottom-0 translate-y-6 translate-x-32 fill-white')}>
          <Vite />
        </div>
      </div>
    </div >
  )
}

export default Hero