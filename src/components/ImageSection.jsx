function ImageSection(){
    return(
        <>
        <div className=" bg-white shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md my-1">
        <h1 className="text-center p-4 text-black font-bold font-[sans-serif] text-lg">Gallery</h1>

        </div>
        
        <div className="h-full flex w-full justify-center items-center bg-white shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md text-[#333] font-[sans-serif] p-2 dark:border-gray-700">
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-4 md:p-2 xl:p-5">
        {/* <!-- card  --> */}
        <div
            className="relative bg-white border rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 transform transition duration-500 hover:scale-105">
            <div className="absolute top-3 right-3 rounded-full bg-violet-600 text-gray-200  w-6 h-6 text-center">
                1
            </div>
            <div className="p-2 flex justify-center">
                <a href="#">
                    <img className="rounded-md"
                    src="./images/profile1.jpg"
                    loading="lazy"/>
                </a>
            </div>

            <div className="px-4 pb-3">
                <div>
                    <a href="#">
                        <h5
                            className="text-xl font-semibold tracking-tight hover:text-violet-800 dark:hover:text-violet-300 text-gray-900 dark:text-white ">
                            Butwal Jungle View
                        </h5>
                    </a>

                    <p className="antialiased text-gray-600 dark:text-gray-400 text-sm break-all">
                        2021 
                    </p>
                </div>
            </div>

        </div>

        {/* <!-- card  --> */}
        <div
            className="relative bg-white border rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 transform transition duration-500 hover:scale-105">
            <div className="absolute top-3 right-3 rounded-full bg-violet-600 text-gray-200  w-6 h-6 text-center">
                2
            </div>
            <div className="p-2 flex justify-center">
                <a href="#">
                    <img className="rounded-md"
                    src="./images/profile.3.jpg"
                    loading="lazy"/>
                </a>
            </div>

            <div className="px-4 pb-3">
                <div>
                    <a href="#">
                        <h5
                            className="text-xl font-semibold tracking-tight hover:text-violet-800 dark:hover:text-violet-300 text-gray-900 dark:text-white ">
                            College Program
                        </h5>
                    </a>

                    <p className="antialiased text-gray-600 dark:text-gray-400 text-sm break-all">
                        2023
                    </p>
                </div>
            </div>
        </div>

        {/* <!-- card  --> */}
        <div
            className="relative bg-white border rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 transform transition duration-500 hover:scale-105">
            <div className="absolute top-3 right-3 rounded-full bg-violet-600 text-gray-200  w-6 h-6 text-center">
                3
            </div>    
            <div className="p-2 flex justify-center">
                <a href="#">
                    <img className="rounded-md"
                    src="./images/profile.jpg"
                    loading="lazy"/>
                </a>
            </div>

            <div className="px-4 pb-3">
                <div>
                    <a href="#">
                        <h5
                            className="text-xl font-semibold tracking-tight hover:text-violet-800 dark:hover:text-violet-300 text-gray-900 dark:text-white ">
                            farewell Program
                        </h5>
                    </a>
                    <p className="antialiased text-gray-600 dark:text-gray-400 text-sm break-all">
                        2024
                    </p>
                </div>
            </div>
        </div>

        {/* <!-- card  --> */}
        <div
            className="relative bg-white border rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 transform transition duration-500 hover:scale-105">

            <div className="absolute top-3 right-3 rounded-full bg-violet-600 text-gray-200  w-6 h-6 text-center">
                4
            </div>

            <div className="p-2 flex justify-center">
                <a href="https://tailwindflex.com/tag/form">
                    <img className="rounded-md"
                    src="./images/profile4.webp"
                    loading="lazy"/>
                </a>
            </div>


            <div className="px-4 pb-3">
                <div>
                    <a href="https://tailwindflex.com/tag/form">
                        <h5
                            className="text-xl font-semibold tracking-tight hover:text-violet-800 dark:hover:text-violet-300 text-gray-900 dark:text-white ">
                            Form
                        </h5>
                    </a>

                    <p className="antialiased text-gray-600 dark:text-gray-400 text-sm break-all">
                        description
                    </p>

                </div>
            </div>
        </div>

        {/* <!-- card  --> */}
        <div
            className="relative bg-white border rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 transform transition duration-500 hover:scale-105">
            <div className="absolute top-3 right-3 rounded-full bg-violet-600 text-gray-200  w-6 h-6 text-center">
                5
            </div>
            <div className="p-2 flex justify-center">
                <a href="#">
                    <img className="rounded-md"
                    src="./images/profile5.webp"
                    loading="lazy"/>
                </a>
            </div>


            <div className="px-4 pb-3">
                <div>
                    <a href="#">
                        <h5
                            className="text-xl font-semibold tracking-tight hover:text-violet-800 dark:hover:text-violet-300 text-gray-900 dark:text-white ">
                            Alert
                        </h5>
                    </a>

                    <p className="antialiased text-gray-600 dark:text-gray-400 text-sm break-all">
                        description
                    </p>
                </div>
            </div>
        </div>

        {/* <!-- card  --> */}
        <div
            className="relative bg-white border rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 transform transition duration-500 hover:scale-105">
            <div className="absolute top-3 right-3 rounded-full bg-violet-600 text-gray-200  w-6 h-6 text-center">
                6
            </div>
            <div className="p-2 flex justify-center">
                <a href="#">
                    <img className="rounded-md"
                    src="./images/profile6.webp"
                    loading="lazy"/>
                </a>
            </div>
            <div className="px-4 pb-3">
                <div>
                    <a href="#">
                        <h5
                            className="text-xl font-semibold tracking-tight hover:text-violet-800 dark:hover:text-violet-300 text-gray-900 dark:text-white ">
                            Gradient
                        </h5>
                    </a>

                    <p className="antialiased text-gray-600 dark:text-gray-400 text-sm break-all">
                        description
                    </p>
                </div>
            </div>
        </div>

        {/* <!-- card  --> */}
        <div
            className="relative bg-white border rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 transform transition duration-500 hover:scale-105">

            <div className="absolute top-3 right-3 rounded-full bg-violet-600 text-gray-200  w-6 h-6 text-center">
                7
            </div>

            <div className="p-2 flex justify-center">
                <a href="https://tailwindflex.com/tag/badge">
                    <img className="rounded-md"
                    src="./images/profile6.webp"
                    loading="lazy"/>
                </a>
            </div>

            <div className="px-4 pb-3">
                <div>
                    <a href="https://tailwindflex.com/tag/badge">
                        <h5
                            className="text-xl font-semibold tracking-tight hover:text-violet-800 dark:hover:text-violet-300 text-gray-900 dark:text-white ">
                            Badge
                        </h5>
                    </a>
                    <p className="antialiased text-gray-600 dark:text-gray-400 text-sm break-all">
                        description
                    </p>
                </div>
            </div>
        </div>

        {/* <!-- card  --> */}
        <div
            className="relative bg-white border rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 transform transition duration-500 hover:scale-105">
            <div className="absolute top-3 right-3 rounded-full bg-violet-600 text-gray-200  w-6 h-6 text-center">
                8
            </div>

            <div className="p-2 flex justify-center">
                <a href="#">
                    <img className="rounded-md"
                    src="./images/profile7.jpg"
                    loading="lazy"/>
                </a>
            </div>


            <div className="px-4 pb-3">
                <div>
                    <a href="#">
                        <h5
                            className="text-xl font-semibold tracking-tight hover:text-violet-800 dark:hover:text-violet-300 text-gray-900 dark:text-white ">
                            Button Group
                        </h5>
                    </a>

                    <p className="antialiased text-gray-600 dark:text-gray-400 text-sm break-all">
                        description
                    </p>
                </div>
            </div>

        </div>

        {/* <!-- card  --> */}
        {/* <div
            className="relative bg-white border rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 transform transition duration-500 hover:scale-105">
            <div className="absolute top-3 right-3 rounded-full bg-violet-600 text-gray-200  w-6 h-6 text-center">
                7
            </div>

            <div className="p-2 flex justify-center">
                <a href="#">
                    <img className="rounded-md"
                    src="https://tailwindflex.com/public/images/thumbnails/resonsive-card-grid-with-hover-animation/thumb_u.min.webp"
                    loading="lazy"/>
                </a>
            </div>

            <div className="px-4 pb-3">
                <div>
                    <a href="#">
                        <h5
                            className="text-xl font-semibold tracking-tight hover:text-violet-800 dark:hover:text-violet-300 text-gray-900 dark:text-white ">
                            Feature
                        </h5>
                    </a>
                    <p className="antialiased text-gray-600 dark:text-gray-400 text-sm break-all">
                        description
                    </p>
                </div>
            </div>
        </div> */}

        {/* <!-- card  --> */}
        {/* <div
            className="relative bg-white border rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 transform transition duration-500 hover:scale-105">
            <div className="absolute top-3 right-3 rounded-full bg-violet-600 text-gray-200  w-6 h-6 text-center">
                6
            </div>

            <div className="p-2 flex justify-center">
                <a href="https://tailwindflex.com/tag/call-to-action">
                    <img className="rounded-md"
                    src="https://tailwindflex.com/public/images/thumbnails/hero-header-with-search-button/thumb_u.min.webp"
                    loading="lazy"/>
                </a>
            </div>

            <div className="px-4 pb-3">
                <div>
                    <a href="https://tailwindflex.com/tag/call-to-action">
                        <h5
                            className="text-xl font-semibold tracking-tight hover:text-violet-800 dark:hover:text-violet-300 text-gray-900 dark:text-white ">
                            Call to Action
                        </h5>
                    </a>
                    <p className="antialiased text-gray-600 dark:text-gray-400 text-sm break-all">
                        description
                    </p>
                </div>
            </div>
        </div> */}

        {/* <!-- card  --> */}
        {/* <div
            className="relative bg-white border rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 transform transition duration-500 hover:scale-105">
            <div className="absolute top-3 right-3 rounded-full bg-violet-600 text-gray-200  w-6 h-6 text-center">
                6
            </div>
            <div className="p-2 flex justify-center">
                <a href="#">
                    <img className="rounded-md"
                    src="https://tailwindflex.com/public/images/thumbnails/feature-showcase/canvas.min.webp"
                    loading="lazy"/>
                </a>
            </div>

            <div className="px-4 pb-3">
                <div>
                    <a href="#">
                        <h5
                            className="text-xl font-semibold tracking-tight hover:text-violet-800 dark:hover:text-violet-300 text-gray-900 dark:text-white ">
                            Grid
                        </h5>
                    </a>

                    <p className="antialiased text-gray-600 dark:text-gray-400 text-sm break-all">
                        description
                    </p>
                </div>
            </div>
        </div> */}

        {/* <!-- card  --> */}
        {/* <div
            className="relative bg-white border rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 transform transition duration-500 hover:scale-105">
            <div className="absolute top-3 right-3 rounded-full bg-violet-600 text-gray-200 w-6 h-6 text-center">
                6
            </div>

            <div className="p-2 flex justify-center">
                <a href="#">
                    <img className="rounded-md"
                    src="https://tailwindflex.com/public/images/thumbnails/login-form-with-icon/thumb_u.min.webp"
                    loading="lazy"/>
                </a>
            </div>


            <div className="px-4 pb-3">
                <div>
                    <a href="#">
                        <h5
                            className="text-xl font-semibold tracking-tight hover:text-violet-800 dark:hover:text-violet-300 text-gray-900 dark:text-white ">
                            Login
                        </h5>
                    </a>
                    <p className="antialiased text-gray-600 dark:text-gray-400 text-sm break-all">
                        description
                    </p>
                </div>
            </div>
        </div> */}

       </div>

       </div>
        </>
        

    )
}

export default ImageSection