
function Projects() {
    return (
        <div id="projects" className="mt-60 text-center text-2xl">
            <span className="before:block before:absolute before:-inset-1 before:-skew-y-6 before:rounded-md before:bg-darkorange relative inline-block">
                <span className="relative text-4xl text-white font-[Freeman] ">PROJECTS</span>
            </span>

            <div className="font-[Oswald] m-16 block place-items-end justify-items-center text-sm lg:text-2xl gap-3 lg:gap-24 space-y-5 lg:grid grid-flow-col-dens grid-cols-2 lg:space-y-0">
                <div className="flex items-center divide-x-2 bg-inherit outline rounded-md border p-2 ">
                    <img className="mx-2 w-1/3 text-xl size-16 lg:size-32 rounded-full" src="src\images\cryptologo.jpeg" />

                    <p className="pl-2 text-left"> CRYPTOTRACKER-APP <br /> <span className=" font-thin">  A project mafe by me, it lets you not only track the crytocurrencies, but also top and latest news and it gives crypto converter. <br /> <a href="https://github.com/muhakodirov/cryptomaster" target="blanc" className="projectCardsStyle"> VISIT THE PROJECT </a> </span>  </p>
                </div>
                <div className="flex items-center divide-x-2 bg-inherit outline rounded-md border p-2 ">
                    <img className="mx-2 w-1/3 text-xl size-16 lg:size-32  rounded-full" src="src\images\booklogo.png" />

                    <p className="pl-2 text-left"> BOOKLIBRARY-APP <br /> <span className=" font-thin">  A project mafe by me, it lets you not only track the crytocurrencies, but also top and latest news and it gives crypto converter. <br /> <a href="https://github.com/muhakodirov/Book-Library-App" target="blanc" className="projectCardsStyle" > VISIT THE PROJECT </a> </span>  </p>
                </div>
                <div className="flex items-center divide-x-2 bg-inherit outline rounded-md border p-2 ">
                    <img className="mx-2 w-1/3 text-xl size-16 lg:size-32  rounded-full" src="src\images\booklogo.png" />

                    <p className="pl-2 text-left"> TODO-APP <br /> <span className=" font-thin">  A project mafe by me, it lets you not only track the crytocurrencies, but also top and latest news and it gives crypto converter. <br /> <a href="https://github.com/muhakodirov/Todo-App" target="blanc" className="projectCardsStyle"> VISIT THE PROJECT </a> </span>  </p>
                </div>
            </div>
        </div>
    )
}

export default Projects