
function Stack() {
    return (

        <div id="stack" className=" mt-80">

            <div className="text-center  mt-32">
                <span className="before:block before:absolute before:-inset-1 before:skew-y-12 before:rounded-md before:bg-darkorange relative inline-block">
                    <span className="relative text-4xl text-white font-[Freeman] ">STACK</span>
                </span>
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-14  font-[Oswald] p-4 text-5xl lg:text-7xl mt-20">
                    <i className="devicon-react-original colored transition hover:before:content-['REACT'] "></i>
                    <i className="devicon-redux-original colored  transition hover:before:content-['REDUX']  "></i>
                    <i className="devicon-javascript-plain colored  transition hover:before:content-['JS']"></i>
                    <i className="devicon-html5-plain colored  hover:before:content-['HTML']"></i>
                    <i className="devicon-css3-plain colored  transition hover:before:content-['CSS']"></i>
                    <i className="devicon-typescript-plain colored  transition hover:before:content-['TS']"></i>
                    <i className="devicon-nodejs-plain-wordmark colored  transition hover:before:content-['NODE']"></i>
                    <i className="devicon-mysql-original colored hover:before:content-['SQL']"></i>
                    <i className="devicon-tailwindcss-original colored hover:before:content-['TAILWIND'] font-xl"></i>

                </div>
            </div>


        </div>

    )
}

export default Stack