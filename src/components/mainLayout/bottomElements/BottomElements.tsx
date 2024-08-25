import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faCodepen,
  faDribbble,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import "./BottomElements.css";

export const BottomElements = () => {
  return (
    <div className="hidden xl:block">
      <div className="fixed bottom-12 left-6 text-shaoWhite">
        <div className="cursor-pointer flex flex-col justify-start items-center">
          <Link
            href="https://www.instagram.com/shaoshxuan/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faInstagram}
              className="my-2 text-4xl transition-all hover:text-shaoOrange"
            />
          </Link>
          <Link
            href="https://dribbble.com/shaoshxuan"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faDribbble}
              className="my-2 text-4xl transition-all hover:text-shaoOrange"
            />
          </Link>
          <Link
            href="https://codepen.io/shaoshxuan"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faCodepen}
              className="my-2 text-4xl transition-all hover:text-shaoOrange"
            />
          </Link>
          <Link
            href="https://www.linkedin.com/in/shaoshxuanchua/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className="my-2 text-4xl transition-all hover:text-shaoOrange"
            />
          </Link>
          <Link
            href="https://github.com/shaoshxuan"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithub}
              className="my-2 text-4xl transition-all hover:text-shaoOrange"
            />
          </Link>
        </div>
      </div>
      <div className="fixed bottom-12 right-0 flex justify-center items-center text-shaoWhite">
        <div className="pr-2 text-sm font-extralight">
          SHAOSHXUAN.CHUA@GMAIL.COM
        </div>
        <div className="w-16 h-px bg-shaoWhite"></div>
      </div>
    </div>
  );
};
