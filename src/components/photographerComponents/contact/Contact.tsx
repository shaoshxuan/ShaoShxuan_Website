import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"

export const Contact = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div className="py-4 w-2/3 max-w-screen-md">
        <span className="text-xl lg:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-shaoPink to-shaoOrange">SUPPORT HERE</span>
      </div>
      <div className="w-2/3 max-w-screen-md text-sm lg:text-2xl font-light text-shaoWhite">
        <div className="py-4">
          If you’re captivated by my work and would like to bring some of it into your space, there are several ways to support and purchase my photos. 
        </div>
        <div className="py-4">
          You can visit my online store, where I <span className="text-transparent bg-clip-text bg-gradient-to-r from-shaoPink to-shaoOrange">offer a curated selection of prints</span> available in various sizes and finishes.
        </div>
        <div className="py-4">
          Your support not only <span className="text-transparent bg-clip-text bg-gradient-to-r from-shaoPink to-shaoOrange">helps sustain my passion</span> but also allows you to <span className="text-transparent bg-clip-text bg-gradient-to-r from-shaoPink to-shaoOrange">own a piece of art that resonates with you</span>.
        </div>
      </div>
      <div className="m-4 cursor-pointer text-shaoWhite">
        <Link href='mailto:shaoshxuan.chua@gmail.com'><FontAwesomeIcon icon={faEnvelope} className="m-4 text-5xl transition-all hover:text-shaoOrange" /></Link>
        <Link href='https://www.linkedin.com/in/shaoshxuanchua/' target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} className="m-4 text-5xl transition-all hover:text-shaoOrange" /></Link>
      </div>
    </div>
  )
}