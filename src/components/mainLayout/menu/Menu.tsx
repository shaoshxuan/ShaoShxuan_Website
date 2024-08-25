import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faCodepen,
  faDribbble,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export const Menu = ({
  menuOpen,
  closeMenu,
}: {
  menuOpen: boolean;
  closeMenu: () => void;
}) => {
  const handleMenuClose = () => {
    closeMenu();
  };

  return (
    <div className={`z-40 fixed ${menuOpen ? 'top-0' : '-top-full'} transition-all w-screen h-screen bg-shaoBlack/[.95] flex flex-col justify-center items-center text-shaoWhite`}>
      <div className='m-8 text-xl md:text-4xl inline-block transition-all hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-shaoPink hover:to-shaoOrange'>
        <Link href={'/'} onClick={handleMenuClose}>SOFTWARE DEVELOPER</Link>
      </div>
      <div className='m-8 text-xl md:text-4xl inline-block transition-all hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-shaoPink hover:to-shaoOrange'>
      <Link href={'/photography'} onClick={handleMenuClose}>PHOTOGRAPHY</Link>
      </div>
      
      <div className='lg:hidden absolute bottom-6'>
        <div className="cursor-pointer flex justify-center items-center">
          <Link
            href="https://www.instagram.com/shaoshxuan/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faInstagram}
              className="mx-2 text-4xl"
            />
          </Link>
          <Link
            href="https://dribbble.com/shaoshxuan"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faDribbble}
              className="mx-2 text-4xl"
            />
          </Link>
          <Link
            href="https://codepen.io/shaoshxuan"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faCodepen}
              className="mx-2 text-4xl"
            />
          </Link>
          <Link
            href="https://www.linkedin.com/in/shaoshxuanchua/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className="mx-2 text-4xl"
            />
          </Link>
          <Link
            href="https://github.com/shaoshxuan"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithub}
              className="mx-2 text-4xl"
            />
          </Link>
        </div>
      </div>
    </div>
  )
}