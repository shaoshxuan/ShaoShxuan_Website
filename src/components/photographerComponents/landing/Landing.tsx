import { faCamera } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const Landing = () => {
  return (
    <div className="overflow-hidden h-screen flex flex-col justify-center items-center">
      <div className="z-30 w-2/3 max-w-screen-md text-xl md:text-4xl font-bold text-shaoWhite">
        HEY, I'M SHAO SHXUAN!
        <br/>
        A <span className="text-transparent bg-clip-text bg-gradient-to-r from-shaoPink to-shaoOrange">PHOTOGRAPHER</span>!
        <br/>
        HERE ARE MY FAVORITE SHOTS! ENJOY!
      </div>
      <div className="z-20 absolute top-1/2 left-1/2 -translate-y-1/2 rotate-[30deg]">
        <FontAwesomeIcon icon={faCamera} className="text-[200px] md:text-[400px] text-shaoWhite/[.02]" />
      </div>
    </div>
  )
}