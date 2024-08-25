import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Landing = () => {
  return (
    <div className="h-screen overflow-hidden">
      <div className="mx-2 w-4/5 max-w-screen-md lg:max-w-screen-lg relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="absolute left-0 top-1/2 -translate-y-1/2">
          <div className="text-2xl md:text-4xl font-bold text-shaoWhite">
            HEY, I'M SHAO SHXUAN!
            <br />A{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-shaoPink to-shaoOrange">
              PHOTOGRAPHER
            </span>
            !
            <br />
            HERE ARE MY FAVOURITE SHOTS! ENJOY!
          </div>
        </div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2">
          <FontAwesomeIcon
            icon={faCamera}
            className="text-[200px] md:text-[400px] text-shaoWhite/[0.02] rotate-[30deg]"
          />
        </div>
      </div>
    </div>
  );
};
