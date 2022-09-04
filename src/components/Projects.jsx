import ProjectsCards from './projects/ProjectsCard'
import { IsDarked } from '../context/DarkMode';
import { useContext } from 'react';
import projOne from '../assets/Proj1.png'
import projTwo from '../assets/Proj2.png'

const Projects = () => {

  const { darkMode } = useContext(IsDarked); //consumiendo el contexto para saber si esta en modo Dark, o no

  return (
    <div className='flex items-center justify-center flex-col gap-8 mb-16'>
      <h2 className={darkMode ? ('text-center text-2xl text-amber-300 font-semibold') : ('text-center text-2xl text-violet-900 font-semibold')}>My Projects</h2>
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
    </div>
  )
}

export default Projects