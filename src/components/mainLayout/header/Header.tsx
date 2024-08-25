import './Header.css';
import Image from 'next/image';

export const Header = ({
  menuOpen,
  toggleMenu,
}: {
  menuOpen: boolean;
  toggleMenu: () => void;
}) => {
  return (
    <div className='z-40 fixed w-screen h-24 p-6 backdrop-blur-sm flex flex-row justify-between items-center'>
      <div>
        <Image
          src='/shao_logo.png'
          width={75}
          height={500}
          alt='Shao Shxuan Logo'
        />
      </div>
      <div className={['hamburgerMenu cursor-pointer w-10 h-10 p-1 flex flex-col justify-between items-center', menuOpen ? 'menuOpen' : 'menuClose'].join(' ')} onClick={toggleMenu}>
        <div id='menu_line1' className={`relative w-10 h-1.5 rounded-md bg-gradient-to-r from-shaoPink to-shaoOrange transition-all ${menuOpen && 'rotate-[140deg] top-[13px]'}`}></div>
        <div id='menu_line2' className={`relative w-10 h-1.5 rounded-md bg-gradient-to-r from-shaoPink to-shaoOrange transition-all ${menuOpen && 'opacity-0'}`}></div>
        <div id='menu_line3' className={`relative w-10 h-1.5 rounded-md bg-gradient-to-r from-shaoPink to-shaoOrange transition-all ${menuOpen && 'rotate-[40deg] bottom-[13px]'}`}></div>
      </div>
    </div>
  )
}