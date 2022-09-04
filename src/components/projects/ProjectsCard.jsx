import { useState } from 'react'
import { IsDarked } from '../../context/DarkMode';
import { useContext } from 'react';

const Projects = ({ title, description, image, link }) => {

  const [hover, sethover] = useState(false)

  const { darkMode } = useContext(IsDarked); //consumiendo el contexto para saber si esta en modo Dark, o no

  const handleHover = () => {
    sethover(true)
  }

  const handleLeave = () => {
    sethover(false)
  }

  return (
    <a href={link} target='__blank'>
      <div
        className="relative overflow-hidden bg-no-repeat bg-cover max-w-xs cursor-pointer rounded-md shadow-2xl"
        style={{ backgroundPosition: "50%" }}
        onMouseEnter={handleHover}
        onMouseLeave={handleLeave}
      >
        <img
          src={image}
          className="max-w-xs"
        />
        <div
          className="hover:bg-slate-800/[0.6] absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed transition ease-in-out duration-700  before:bg-black conten"
        // style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
        >
          <div className={hover ? ('opacity-100 flex flex-col justify-between h-full text-center') : ('hidden')}>
            <h2 className={darkMode ? ('text-amber-300 text-xl font-extrabold m-6 rounded-2xl animate__animated animate__fadeInUp bg-slate-800/[0.5]')
              :
              ('text-violet-400 text-xl font-extrabold p-6 animate__animated animate__fadeInUp')}>{title}</h2>
            <section className='bg-slate-800/[0.5] animate__animated animate__fadeInDown '>
              <p className='text-xs text-white p-8 animate__animated animate__fadeIn animate__slower '>{description}</p>
            </section>
          </div>
        </div>
      </div >
    </a>

  )
}

export default Projects