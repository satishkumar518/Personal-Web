import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import ContactForm from '../components/ContactForm'

function Home(){
    return(
        <>
        
        <div>
            <Navbar/>
            <div className='container mx-auto mt-20' >
            <HeroSection/>
            </div>
            <div className="container mx-auto p-8 mt-4">
            <ContactForm/>
            </div>
            
        </div>
        </>

    )
}

export default Home