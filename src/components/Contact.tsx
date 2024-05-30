import { FaInstagram, FaTelegram, FaGithub } from "react-icons/fa";

function Contact() {
    return (
        <div id="contacts" className="text-center mt-40">
            <hr className="dark:border-gray-700" />
            <div className=" mt-40 mb-10">
                <span className="text-2xl text-black dark:text-white lg:text-4xl font-[Freeman]"> CONTACT ME</span>
            </div>
            <div className=" inline-block space-y-10 text-4xl lg:text-5xl lg:flex flex-1 justify-evenly place-items-end mb-96">
                <a className="block" target="blanc" href="https://instagram.com">
                    <FaInstagram className=" hover:text-orange-700 transition cursor-pointer" />
                </a>
                <a className="block" target="blanc" href="https://telegram.org">
                    <FaTelegram className="hover:text-blue-400 transition cursor-pointer" />
                </a>
                <a className="block" target="blanc" href="https://github.com/muhakodirov">
                    <FaGithub className="hover:text-slate-700 transition cursor-pointer" />
                </a>
            </div>
            <hr className="dark:border-gray-700" />
            <p className=" font-[Oswald] text-sm lg:text-lg my-10">© 2024 Muhammad Kodirov <br />
                All rights are reserved
            </p>
        </div>
    )
}

export default Contact