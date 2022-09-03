import { useState, useContext } from 'react'
import { IsDarked } from '../context/DarkMode';

const NavBar = () => {

  const { darkMode, setDarkMode } = useContext(IsDarked); //consumiendo el contexto para saber si esta en modo Dark, o no

  const [showMenu, setShowMenu] = useState(false);

  const handleClick = () => {
    setDarkMode(!darkMode);
  }

  const handleResponsiveMenu = () => {
    setShowMenu(!showMenu);
  }

  return (
    <div className={darkMode ? 'dark z-10 bg-slate-900' : 'bg-slate-100'}>

      <nav className='bg-gradient-to-r from-slate-300 to-slate-100  dark:from-slate-800 dark:to-slate-700 '>
        <div className='sm:hidden flex gap-4 py-5 px-2 justify-between'>
          <div className='pl-3'>
            <h1 className='dark:text-white self-center text-xl font-semibold'> Henry Guerrero </h1>
            <h3 className=' text-violet-900 dark:text-amber-300 text-sm font-bold'>Systems Engineer</h3>
          </div>

          <button
            onClick={handleResponsiveMenu}
            className='mr-3 text-slate-100 bg-slate-600 hover:bg-slate-800 dark:hover:bg-slate-500 dark:bg-slate-300 dark:text-slate-900 rounded-md px-4 py-3 transition-all ease-in-out'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>

        <ul className={showMenu ? 'transition-all ease-in-out flex flex-col gap-4 sm:hidden' : 'hidden'}>
          <a className='font-bold dark:font-normal animate__animated animate__fadeInLeft text-slate-900 hover:text-violet-900 dark:text-slate-100 cursor-pointer self-center dark:hover:text-amber-300 py-3'>about me</a>
          <a className='font-bold dark:font-normal animate__animated animate__fadeInRight text-slate-900 hover:text-violet-900 dark:text-slate-100 cursor-pointer self-center dark:hover:text-amber-300 py-3'>my projects</a>
          <a className='font-bold dark:font-normal animate__animated animate__fadeInLeft text-slate-900 hover:text-violet-900 dark:text-slate-100 cursor-pointer self-center dark:hover:text-amber-300 py-3'>contact me</a>
        </ul>

        <div className='hidden sm:flex gap-4 py-5 px-2 justify-around'>
          <div>
            <h1 className='dark:text-white self-center text-xl font-semibold'> Henry Guerrero </h1>
            <h3 className=' text-violet-900 dark:text-amber-300 text-sm font-bold'>Systems Engineer</h3>
          </div>
          <ul className='flex gap-6'>
            <a className='font-bold dark:font-normal text-slate-900 hover:text-violet-900 dark:text-slate-100 cursor-pointer self-center dark:hover:text-amber-300'>about me</a>
            <a className='font-bold dark:font-normal text-slate-900 hover:text-violet-900 dark:text-slate-100 cursor-pointer self-center dark:hover:text-amber-300'>my projects</a>
            <a className='font-bold dark:font-normal text-slate-900 hover:text-violet-900 dark:text-slate-100 cursor-pointer self-center dark:hover:text-amber-300'>contact me</a>
          </ul>
        </div>

        <button
          className='z-10 fixed bottom-4 right-4 bg-slate-600 hover:bg-slate-800 dark:bg-slate-300 dark:hover:bg-slate-500
           rounded-xl px-4 py-3 transition-all ease-in-out'
          onClick={handleClick}
        >{darkMode ? '🌞' : '🌙'}</button>
      </nav>
    </div>

  )
}

export default NavBar