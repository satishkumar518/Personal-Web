import ContactForm from "../components/ContactForm"
import Navbar from "../components/Navbar"

function Contact(){
    return(
        <>
        <Navbar/>
        <div className="container mx-auto p-8 mt-20">
            <ContactForm/>
        </div>
        </>
        
    )
}

export default Contact