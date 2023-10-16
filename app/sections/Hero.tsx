import React from 'react'

import Image from 'next/image'

const Hero : React.FC = () => {
  return (
    <div>Hero
           <Image src="https://plus.unsplash.com/premium_photo-1664297694687-570b7f392906?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80" width={300} height={800} alt={''}/>

    </div>
  )
}

export default Hero