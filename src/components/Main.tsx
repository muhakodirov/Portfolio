
function Main() {
    return (
        <div className="text-center lg:flex flex-row-reverse lg:gap-24 lg:container lg:mx-auto mt-16 ">
            <img src="src\images\img.png" className="rounded-full size-80 mx-auto mt-20 shadow-xl lg:shadow-2xl hover:translate-y-2 lg:hover:size-96 transition-all lg:mr-10" alt="" />
            <div className="relative inline-block lg:mt-16 lg:ml-10">
                <h1 className="text-4xl lg:text-5xl font-[Freeman] mt-5 rounded-sm bg-darkorange">
                    <span className="p-1 text-gray-100"> MUHAMMAD KODIROV </span>
                </h1>
                <p className="font-[Oswald] mt-3 text-sm lg:text-lg"> 22 YEARS OLD JUNIOR FRONTEND/BACKEND DEVELOPER. <br /> LIVE, WORK AND STUDY IN GERMANY </p>
                <a href="" download=''>
                    <button className="orange_button my-7 lg:text-2xl lg:mt-40"> Download CV </button>
                </a>
            </div>
        </div>
    )
}

export default Main