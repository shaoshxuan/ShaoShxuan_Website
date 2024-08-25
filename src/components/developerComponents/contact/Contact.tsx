import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export const Contact = () => {
  return (
    <div className="h-screen overflow-hidden">
      <div className="mx-2 w-4/5 max-w-screen-md lg:max-w-screen-lg relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="absolute left-0 top-1/2 -translate-y-1/2">
          <div className="my-4 text-xl md:text-3xl font-bold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-shaoPink to-shaoOrange">
              CONTACT
            </span>
          </div>
          <div className="text-normal md:text-xl font-light text-shaoWhite">
            <div className="my-4">
              I'm passionate about{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-shaoPink to-shaoOrange">
                crafting intuitive and responsive web and mobile applications
              </span>{" "}
              that meet users' needs.
            </div>
            <div className="my-4">
              Whether you have a project in mind, need help with front-end
              development, or just want to connect,{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-shaoPink to-shaoOrange">
                I'd love to hear from you
              </span>
              !
            </div>
            <div className="my-4">
              Feel free to reach out via email or LinkedIn, and let's bring your
              ideas to life!
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
