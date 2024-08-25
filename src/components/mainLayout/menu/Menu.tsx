import Link from 'next/link';

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
    </div>
  )
}