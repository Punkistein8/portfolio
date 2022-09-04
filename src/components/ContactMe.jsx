import { IsDarked } from '../context/DarkMode';
import { useContext } from 'react';
import ContactForm from './mail/ContactForm';

const ContactMe = () => {

  const { darkMode } = useContext(IsDarked); //consumiendo el contexto para saber si esta en modo Dark, o no

  return (
    <div className='flex flex-col gap-10'>
      <h2 className={darkMode ? ('text-center text-2xl text-amber-300 font-semibold') : ('text-center text-2xl text-violet-900 font-semibold')}>Contact Me</h2>
      <ContactForm />
    </div>
  )
}

export default ContactMe