import { useContext } from 'react';
import { IsDarked } from '../../context/DarkMode';

const TiraSociales = () => {
  const { darkMode } = useContext(IsDarked); //consumiendo el contexto para saber si esta en modo Dark, o no
  return (
    <div id='contact'
      className={darkMode ?
        ('flex flex-wrap gap-8 justify-between text-gray-700 bg-black/[0.7] py-12')
        :
        ('flex flex-wrap gap-8 justify-between text-gray-700 bg-black/[0.7] py-12')}>
      {/* Discord */}
      <a href='https://discord.gg/cuRPSYVR85' target='__blank'>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 645 517"
          className={darkMode ?
            ('text-white w-6 h-6 mx-8  md:w-10 md:mx-10 hover:text-amber-400 hover:scale-150 transition-all ease-in-out duration-300')
            :
            ('text-white w-6 h-6 mx-8  md:w-10 md:mx-10 hover:text-violet-400 hover:scale-150 transition-all ease-in-out duration-300')}
        >
          <path
            fill="currentColor"
            d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"
          />
        </svg>
      </a>


      {/* Facebook */}
      <a href='https://www.facebook.com/henrysaul.guerreroleon/' target='__blank'>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 325 517"
          className={darkMode ?
            ('text-white w-6 h-6 mx-8  md:w-10 md:mx-10 hover:text-amber-400 hover:scale-150 transition-all ease-in-out duration-300')
            :
            ('text-white w-6 h-6 mx-8  md:w-10 md:mx-10 hover:text-violet-400 hover:scale-150 transition-all ease-in-out duration-300')}
        >
          <path
            fill="currentColor"
            d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
          />
        </svg>
      </a>


      {/* Messenger */}
      <a href='https://m.me/henrysaul.guerreroleon' target='__blank'>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 515 517"
          className={darkMode ?
            ('text-white w-6 h-6 mx-8  md:w-10 md:mx-10 hover:text-amber-400 hover:scale-150 transition-all ease-in-out duration-300')
            :
            ('text-white w-6 h-6 mx-8  md:w-10 md:mx-10 hover:text-violet-400 hover:scale-150 transition-all ease-in-out duration-300')}
        >
          <path
            fill="currentColor"
            d="M256.55 8C116.52 8 8 110.34 8 248.57c0 72.3 29.71 134.78 78.07 177.94 8.35 7.51 6.63 11.86 8.05 58.23A19.92 19.92 0 0 0 122 502.31c52.91-23.3 53.59-25.14 62.56-22.7C337.85 521.8 504 423.7 504 248.57 504 110.34 396.59 8 256.55 8zm149.24 185.13l-73 115.57a37.37 37.37 0 0 1-53.91 9.93l-58.08-43.47a15 15 0 0 0-18 0l-78.37 59.44c-10.46 7.93-24.16-4.6-17.11-15.67l73-115.57a37.36 37.36 0 0 1 53.91-9.93l58.06 43.46a15 15 0 0 0 18 0l78.41-59.38c10.44-7.98 24.14 4.54 17.09 15.62z"
          />
        </svg>
      </a>


      {/* Twitter */}
      <a href='https://twitter.com/chelovek_Henry' target='__blank'>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 515 517"
          className={darkMode ?
            ('text-white w-6 h-6 mx-8  md:w-10 md:mx-10 hover:text-amber-400 hover:scale-150 transition-all ease-in-out duration-300')
            :
            ('text-white w-6 h-6 mx-8  md:w-10 md:mx-10 hover:text-violet-400 hover:scale-150 transition-all ease-in-out duration-300')}
        >
          <path
            fill="currentColor"
            d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
          />
        </svg>
      </a>


      {/* Linkedin */}
      <a href='https://www.linkedin.com/in/henry-guerrero-leon/' target='__blank'>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 445 517"
          className={darkMode ?
            ('text-white w-6 h-6 mx-8  md:w-10 md:mx-10 hover:text-amber-400 hover:scale-150 transition-all ease-in-out duration-300')
            :
            ('text-white w-6 h-6 mx-8  md:w-10 md:mx-10 hover:text-violet-400 hover:scale-150 transition-all ease-in-out duration-300')}
        >
          <path
            fill="currentColor"
            d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
          />
        </svg>
      </a>

      {/* Stack overflow */}
      <a href='https://es.stackoverflow.com/users/238268/henry-legus' target='__blank'>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 385 517"
          className={darkMode ?
            ('text-white w-6 h-6 mx-8  md:w-10 md:mx-10 hover:text-amber-400 hover:scale-150 transition-all ease-in-out duration-300')
            :
            ('text-white w-6 h-6 mx-8  md:w-10 md:mx-10 hover:text-violet-400 hover:scale-150 transition-all ease-in-out duration-300')}
        >
          <path
            fill="currentColor"
            d="M290.7 311L95 269.7 86.8 309l195.7 41zm51-87L188.2 95.7l-25.5 30.8 153.5 128.3zm-31.2 39.7L129.2 179l-16.7 36.5L293.7 300zM262 32l-32 24 119.3 160.3 32-24zm20.5 328h-200v39.7h200zm39.7 80H42.7V320h-40v160h359.5V320h-40z"
          />
        </svg>
      </a>

      {/* Telegram */}
      <a href='https://t.me/Punkistein' target='__blank'>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 495 517"
          className={darkMode ?
            ('text-white w-6 h-6 mx-8  md:w-10 md:mx-10 hover:text-amber-400 hover:scale-150 transition-all ease-in-out duration-300')
            :
            ('text-white w-6 h-6 mx-8  md:w-10 md:mx-10 hover:text-violet-400 hover:scale-150 transition-all ease-in-out duration-300')}
        >
          <path
            fill="currentColor"
            d="M248,8C111.033,8,0,119.033,0,256S111.033,504,248,504,496,392.967,496,256,384.967,8,248,8ZM362.952,176.66c-3.732,39.215-19.881,134.378-28.1,178.3-3.476,18.584-10.322,24.816-16.948,25.425-14.4,1.326-25.338-9.517-39.287-18.661-21.827-14.308-34.158-23.215-55.346-37.177-24.485-16.135-8.612-25,5.342-39.5,3.652-3.793,67.107-61.51,68.335-66.746.153-.655.3-3.1-1.154-4.384s-3.59-.849-5.135-.5q-3.283.746-104.608,69.142-14.845,10.194-26.894,9.934c-8.855-.191-25.888-5.006-38.551-9.123-15.531-5.048-27.875-7.717-26.8-16.291q.84-6.7,18.45-13.7,108.446-47.248,144.628-62.3c68.872-28.647,83.183-33.623,92.511-33.789,2.052-.034,6.639.474,9.61,2.885a10.452,10.452,0,0,1,3.53,6.716A43.765,43.765,0,0,1,362.952,176.66Z"
          />
        </svg>
      </a>

      {/* Github */}
      <a href='https://github.com/Punkistein8' target='__blank'>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 495 517"
          className={darkMode ?
            ('text-white w-6 h-6 mx-8  md:w-10 md:mx-10 hover:text-amber-400 hover:scale-150 transition-all ease-in-out duration-300')
            :
            ('text-white w-6 h-6 mx-8  md:w-10 md:mx-10 hover:text-violet-400 hover:scale-150 transition-all ease-in-out duration-300')}
        >
          <path
            fill="currentColor"
            d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
          />
        </svg>
      </a>


      {/* Whatsapp */}
      <a href='https://wa.me/593963382575' target='__blank'>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 445 517"
          className={darkMode ?
            ('text-white w-6 h-6 mx-8  md:w-10 md:mx-10 hover:text-amber-400 hover:scale-150 transition-all ease-in-out duration-300')
            :
            ('text-white w-6 h-6 mx-8  md:w-10 md:mx-10 hover:text-violet-400 hover:scale-150 transition-all ease-in-out duration-300')}
        >
          <path
            fill="currentColor"
            d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"
          />
        </svg>
      </a>
      <div className='text-white w-full text-center'>
        <h3 className={darkMode ? ('font-bold text-amber-400') : ('font-bold text-violet-400')}>© Henry Guerrero</h3>
        <p className='text-xs'>All rights reserved</p>
      </div>
    </div>


  )
}

export default TiraSociales