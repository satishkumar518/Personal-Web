import ImageSection from "../components/ImageSection"
import Navbar from "../components/Navbar"

function Gallery(){
    return(
        <>
        <Navbar/>
        <div className="container mx-auto p-8 mt-20">
            <ImageSection/>
        </div>
        </>
        
    )
}

export default Gallery