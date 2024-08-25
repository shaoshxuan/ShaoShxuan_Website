import Link from 'next/link';

export const Menu = ({
  menuOpen,
}: {
  menuOpen: boolean;
}) => {
  return (
    <div className={`z-40 absolute ${menuOpen ? 'top-0' : '-top-full'} transition-all w-full h-full bg-shaoBlack/90 flex flex-col justify-center items-center text-shaoWhite`}>
      <div className='m-8 text-4xl inline-block transition-all hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-shaoPink hover:to-shaoOrange'>
        <Link href={'/'}>SOFTWARE DEVELOPER</Link>
      </div>
      <div className='m-8 text-4xl inline-block transition-all hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-shaoPink hover:to-shaoOrange'>
      <Link href={'/photography'}>PHOTOGRAPHY</Link>
      </div>
    </div>
  )
}