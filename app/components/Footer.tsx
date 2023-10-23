import React from 'react'

import Image from 'next/image'

const Footer: React.FC = () => {
  return (
    <footer>
              <div className="flex flex-col items-center">
                <div className=" flex space-x-4">
                 
                 <a
         
          target="_blank"
          href="https://www.instagram.com/"
          rel="noopener noreferrer"
        >
          <Image alt="Instagram Icon" src='./icons8-instagram.svg' width={25} height={25} />
        </a>
                </div>
                <div className="mb-2 flex flex-col items-center uppercase leading-10 text-white space-x-2 text-sm ">
                Venha nos visitar
                            </div>
                </div>
            </footer>
  )
}

export default Footer;

