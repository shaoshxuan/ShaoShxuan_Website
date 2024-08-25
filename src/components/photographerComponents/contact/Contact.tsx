import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export const Contact = () => {
  return (
    <div className="my-40">
      <div className="mx-2 w-4/5 max-w-screen-md lg:max-w-screen-lg relative left-1/2 -translate-x-1/2">
        <div className="relative left-0">
          <div className="my-4 text-xl md:text-3xl font-bold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-shaoPink to-shaoOrange">
              SUPPORT HERE
            </span>
          </div>
          <div className="text-base md:text-xl font-light text-shaoWhite">
            <div className="my-4">
              If you’re captivated by my work and would like to bring some of it into your space, there are several upcoming ways to support and purchase my photos. Do look forward!
            </div>
            {/* <div className="my-4">
              You can visit my online store, where I <span className="text-transparent bg-clip-text bg-gradient-to-r from-shaoPink to-shaoOrange">offer a curated selection of prints available</span> in various sizes and finishes.
            </div> */}
            <div className="my-4">
              Your future support will not only helps <span className="text-transparent bg-clip-text bg-gradient-to-r from-shaoPink to-shaoOrange">sustain my passion</span> but also allows you to <span className="text-transparent bg-clip-text bg-gradient-to-r from-shaoPink to-shaoOrange">own a piece of art that resonates with you</span>.
            </div>
          </div>
          <div className="my-4 text-shaoWhite">
            <Link
              href="https://www.linkedin.com/in/shaoshxuanchua/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faEnvelope}
                className="m-4 ml-0 text-4xl lg:text-5xl transition-all hover:text-shaoOrange"
              />
            </Link>
            <Link
              href="https://www.linkedin.com/in/shaoshxuanchua/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                className="m-4 text-4xl lg:text-5xl transition-all hover:text-shaoOrange"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
