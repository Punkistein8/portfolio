import ProjectsCards from './projects/ProjectsCard'
import { IsDarked } from '../context/DarkMode';
import { useContext } from 'react';
import projOne from '../assets/Proj1.png'
import projTwo from '../assets/Proj2.png'
import projThree from '../assets/Proj3.png'
import projStayfinder from '../assets/ProjStayfinder.png'
import projTourUTC from '../assets/ProjTourUTC.png'
import projMaxicom from '../assets/projMaxicom.png'
import projCasitaSabor from '../assets/ProjCasitaSabor.png'
import projEvacCotopaxi from '../assets/ProjEvacCotopaxi.png'
const Projects = () => {

  const { darkMode } = useContext(IsDarked); //consumiendo el contexto para saber si esta en modo Dark, o no.

  return (
    <div id='projects' className='flex flex-col gap-10'>
      <h2 className={darkMode ? ('text-center text-2xl text-amber-300 font-semibold') : ('text-center text-2xl text-violet-900 font-semibold')}>My Projects</h2>
      <div className='flex items-center justify-center flex-col gap-8 mb-16 sm:flex-row flex-wrap'>
        <ProjectsCards
          title={'App Club de Software UTC'}
          description={'Aplicación Web que consta de una landing page del Club de Software de la Universidad Técnica de Cotopaxi y de una plataforma de usuarios y administradores para gestionar las actividades del club.'}
          image={projOne}
          link={'https://clubsoftwareutc.netlify.app/'}
        />
        {/* <ProjectsCards
          title={'Designs Portfolio'}
          description={'Este es mi primer portafolio de muestra de trabajos que he hecho como Diseñador Gráfico'}
          image={projTwo}
          link={'https://www.henrylegus.com/'}
        /> */}

        <ProjectsCards
          title={'Gif Fetch App'}
          description={'Una aplicación web que permite buscar y ver gifs animados de la API de Giphy, hecha del curso de Fernando Herrera de React de cero a experto'}
          image={projThree}
          link={'https://gif-fetch-fh.netlify.app/'}
        />
        <ProjectsCards
          title={'Stayfinder'}
          description={'Una aplicación web que compara y analiza precios de hoteles y lugares de estadía en la provincia de Cotopaxi mediante técnicas de web scraping.'}
          image={projStayfinder}
          link={'https://stayfinder-utc.vercel.app/'}
        />
        <ProjectsCards
          title={'Tour Virtual UTC'}
          description={'Recorrido virtual por el campus principal de la Universidad Técnica de Cotopaxi que desarrollé con el framework visualizador web 360° Marzipano y TailwindCSS.'}
          image={projTourUTC}
          link={'https://tour-virtual-utc.netlify.app/'}
        />
        <ProjectsCards
          title={'Landing Page Maxicomp'}
          description={'Sitio web informativo del ISP MaxiCom. Desarrollado con framework web basado en React, Next.js v13, TailwindCSS y otras tecnologías.'}
          image={projMaxicom}
          link={'https://maxicomp.netlify.app/'}
        />
        <ProjectsCards
          title={'App Casita del Sabor'}
          description={'Aplicación web que permite manejarse con 3 usuarios, administrador, cliente registrado y cliente no registrado para gestionar el flujo de solicitud de comida en un restaurante desde una página web con altos patrones de diseño UX/UI, gestión de pedidos, registro y login de usuarios, CRUD sobre los platos, API de Whatsapp, etc'}
          image={projCasitaSabor}
          link={'http://casita-del-sabor.infinityfreeapp.com/?i=1'}
        />
        <ProjectsCards
          title={'Evacuación Cotopaxi'}
          description={'Esta es una aplicación web que sirve para planificar la mejor ruta en caso de una posible erupción del volcán Cotopaxi en función de su ubicación determinada utilizando algoritmos de búsqueda, API de Google Maps y API de rutas de Google Maps.'}
          image={projEvacCotopaxi}
          link={'https://cotopaxi-evacuacion.000webhostapp.com/'}
        />
      </div>
    </div>
  )
}

export default Projects