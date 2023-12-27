import { Header } from './components/header/header'
import './styles/home.scss'


export default function Home() {
  return (
    <main className='container' >
      <Header/>
      <div className='experience'>
        <h3>experience</h3>
        <p>Texto</p>
        <div className='experienceTime'>

        </div>
        <div className='infos'>
          <h3>Languages</h3>
          <div className='languagesInfo'>
            <span>EN - Fluent</span>
            <span>PT - Native</span>
          </div>
            <h3>Education</h3>
            <div className="educationalInfo">
              <span> </span>
              <span>ITC</span>
            </div>
            <div className="buttons">
              <div className="social"></div>
              <button>Contact me</button>
            </div>
        </div>
      </div>
          
    </main>
  )
}
