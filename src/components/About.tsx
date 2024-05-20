
function About() {
    return (
        <div id="about">
            <div className="my-80">

                <div className="text-center  mt-32">
                    <span className="before:block before:absolute before:-inset-1 before:-skew-y-12 before:rounded-md before:bg-darkorange relative inline-block">
                        <span className="relative text-4xl text-white font-[Freeman] ">ABOUT</span>
                    </span>
                    <div className="font-[Oswald] text-xl mt-8">
                        <p className=" first-line:text-2xl first-letter:text-darkorange first-line:uppercase "> I am <span className="tracking-wide"> Muhammad Kodirov</span>,
                            <br />  </p>
                        <div className=" mx-auto lg:w-3/6 my-4">
                            <p> A passionate 22 years old Frontend and Backend Developer. I have made a several Projects till now.
                                I live, work and study in Germany. </p>
                        </div>
                        <p className="mt-12"> You can find me on <a className="border border-b-4 rounded-md hover:bg-gray-900 p-1 hover:text-white dark:hover:bg-black transition" href="https://github.com/muhakodirov" target="blanc"> GitHub ↗ </a> </p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default About