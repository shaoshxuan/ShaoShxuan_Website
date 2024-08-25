import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"

export const Contact = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div className="py-4 w-2/3 max-w-screen-md">
        <span className="text-xl lg:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-shaoPink to-shaoOrange">CONTACT</span>
      </div>
      <div className="w-2/3 max-w-screen-md text-sm lg:text-2xl font-light text-shaoWhite">
        <div className="py-4">
          I'm passionate about <span className="text-transparent bg-clip-text bg-gradient-to-r from-shaoPink to-shaoOrange">crafting intuitive and responsive web and mobile applications that meet users' needs.</span>
        </div>
        <div className="py-4">
          Whether you have a project in mind, need help with front-end development, or just want to connect, <span className="text-transparent bg-clip-text bg-gradient-to-r from-shaoPink to-shaoOrange">I'd love to hear from you!</span>
        </div>
        <div className="py-4">
          Feel free to reach out via email or LinkedIn, and let's bring your ideas to life!
        </div>
      </div>
      <div className="m-4 cursor-pointer text-shaoWhite">
        <Link href='mailto:shaoshxuan.chua@gmail.com'><FontAwesomeIcon icon={faEnvelope} className="m-4 text-4xl md:text-5xl transition-all hover:text-shaoOrange" /></Link>
        <Link href='https://www.linkedin.com/in/shaoshxuanchua/' target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} className="m-4 text-4xl md:text-5xl transition-all hover:text-shaoOrange" /></Link>
      </div>
    </div>
  )
}