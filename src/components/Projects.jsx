import ProjectsCards from './projects/ProjectsCard'
import { IsDarked } from '../context/DarkMode';
import { useContext } from 'react';
import projOne from '../assets/Proj1.png'
import projTwo from '../assets/Proj2.png'
import projThree from '../assets/Proj3.png'

const Projects = () => {

  const { darkMode } = useContext(IsDarked); //consumiendo el contexto para saber si esta en modo Dark, o no

  return (
    <div id='projects' className='flex flex-col gap-10'>
      <h2 className={darkMode ? ('text-center text-2xl text-amber-300 font-semibold') : ('text-center text-2xl text-violet-900 font-semibold')}>My Projects</h2>
      <div className='flex items-center justify-center flex-col gap-8 mb-16 sm:flex-row'>
        <ProjectsCards
          title={'App Club de Software UTC'}
          description={'Aplicación Web que consta de una landing page del Club de Software de la Universidad Técnica de Cotopaxi y de una plataforma de usuarios y administradores para gestionar las actividades del club.'}
          image={projOne}
          link={'https://clubsoftwareutc.netlify.app/'}
        />
        <ProjectsCards
          title={'Designs Portfolio'}
          description={'Este es mi primer portafolio de muestra de trabajos que he hecho como Diseñador Gráfico'}
          image={projTwo}
          link={'https://www.henrylegus.com/'}
        />

        <ProjectsCards
          title={'Gif Fetch App'}
          description={'Una aplicación web que permite buscar y ver gifs animados de la API de Giphy, hecha del curso de Fernando Herrera de React de cero a experto'}
          image={projThree}
          link={'https://gif-fetch-fh.netlify.app/'}
        />
      </div>
    </div>
  )
}

export default Projects