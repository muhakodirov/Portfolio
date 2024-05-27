import { useEffect, useState } from 'react'
import { BiMenuAltRight, BiMenuAltLeft } from "react-icons/bi";
import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";

function NavMenu() {

    const [opened, setOpened] = useState<boolean>(false)
    const [dark, setDark] = useState<boolean>(false)

    const clickHandle = () => {
        setOpened(!opened)
    }

    useEffect(() => {
        const darkMode = localStorage.getItem('dark') === 'true'
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [])

    const toggleDarkMode = () => {
        setDark(!dark)
        document.documentElement.classList.toggle("dark");
        localStorage.setItem('dark', `${!dark}`);
    }

    const handleScroll = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, targetId: string) => {
        event.preventDefault();
        const targetElement = document.getElementById(targetId);
        targetElement?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    };

    return (
        <div id='main' className=''>
            <div className=' flex justify-between mb-2'>
                <p className='font-[Freeman] text-3xl lg:text-5xl text-darkorange'> <a href="#main"> MK. </a> </p>
                <div className='flex gap-3 text-xl'>
                    <div className='content-center cursor-pointer hover:text-darkorange transition lg:hidden'>
                        {opened
                            ? <BiMenuAltRight className='' onClick={clickHandle} />
                            : <BiMenuAltLeft className='' onClick={clickHandle} />}

                    </div>
                    <ul className="hidden lg:flex my-2 gap-5 font-[Oswald] after:content-['|']">
                        <li><a className='hover:text-darkorange transition' onClick={(e) => handleScroll(e, 'about')} href="#about">About</a></li>
                        <li><a className='hover:text-darkorange transition' onClick={(e) => handleScroll(e, 'stack')} href="#stack">Stack</a></li>
                        <li><a className='hover:text-darkorange transition' onClick={(e) => handleScroll(e, 'projects')} href="#projects">Projects</a></li>
                        <li><a className='hover:text-darkorange transition' onClick={(e) => handleScroll(e, 'contacts')} href="#contacts">Contacts</a></li>
                    </ul>
                    <div className='content-center cursor-pointer lg:text-2xl hover:text-3xl transition-all' >
                        {dark ? <MdDarkMode onClick={toggleDarkMode} /> : <MdOutlineDarkMode onClick={toggleDarkMode} />}
                    </div>
                </div>
            </div>

            <ul className={opened ? 'block text-center mb-4 font-[Oswald] lg:hidden' : 'hidden lg:hidden'}>
                <li><a className='link' onClick={(e) => handleScroll(e, 'about')} href="#about">About</a></li>
                <li><a className='link' onClick={(e) => handleScroll(e, 'stack')} href="#stack">Stack</a></li>
                <li><a className='link' onClick={(e) => handleScroll(e, 'projects')} href="#projects">Projects</a></li>
                <li><a className='link' onClick={(e) => handleScroll(e, 'contacts   ')} href="#contacts">Contacts</a></li>
            </ul>
            <hr className=' w-[100%] dark:border-gray-700' />
        </div>
    )
}

export default NavMenu