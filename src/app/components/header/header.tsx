import Image from 'next/image'
import './header.scss'

export function Header(){
    return(
        <div className='header'>
            <div>
              <h1>Hi, my name is Edwin!👋🏼</h1>
              <h2>Software developer</h2>
            </div>
            <Image
              src="/me.jpg"
              alt="my Logo"
              width={277}
              height={350}
              priority
            />

      </div>
    )
}