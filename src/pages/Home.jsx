import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'

function Home(){
    return(
        <>
        
        <div>
            <Navbar/>
            <div className='container mx-auto p-8'>
            <HeroSection/>
            </div>
            
        </div>
        </>

    )
}

export default Home