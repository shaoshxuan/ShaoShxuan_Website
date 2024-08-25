export const Experience = () => {
  const placeholderJobs = [
    "UBS",
    "Macquarie Group",
    "Credid.io",
    "Rajah & Tann Technologies",
  ];
  const placeholderTech = [
    "React",
    "Redux",
    "Cypress",
    "Storybook",
    "Spring Boot",
  ];

  return (
    <div className="h-screen min-h-screen">
      <div className="mx-2 w-4/5 max-w-screen-md lg:max-w-screen-lg relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="absolute left-0 top-1/2 -translate-y-1/2">
          <div className="my-4 text-xl md:text-3xl font-bold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-shaoPink to-shaoOrange">
              PROFESSIONAL EXPERIENCE
            </span>
            <div className="my-8 flex flex-col">
              <div className="my-4 w-auto max-w-5xl text-shaoWhite">
                <div className="flex justify-start items-center">
                  <div className="hidden w-80 mr-2 lg:flex flex-col justify-start items-center">
                    <div className="flex flex-col justify-start items-center text-base font-extralight">
                      {"PRESENT"}
                      <div className="mt-2 w-2 h-2 rounded bg-shaoPink"></div>
                    </div>
                    <div className="h-[200px] w-px bg-gradient-to-r from-shaoPink to-shaoOrange"></div>
                    <div className="flex flex-col justify-start items-center text-base font-extralight">
                      <div className="mb-2 w-2 h-2 rounded bg-shaoOrange"></div>
                      {"AUG 2022"}
                    </div>
                  </div>
                  <div>
                    <div className="text-normal md:text-2xl font-normal">{"UBS"} <span className="px-4 inline-block lg:hidden text-xs md:text-sm font-extralight text-shaoWhite">{"AUG 2022"} - {"PRESENT"}</span></div>
                    <div className="my-4 text-sm md:text-normal font-extralight">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </div>
                    <div className="flex flex-wrap justify-start items-center">
                      {placeholderTech.map((tech) => {
                        return (
                          <div className="mr-2 my-1 p-2 text-sm font-light rounded bg-gradient-to-r from-shaoPink to-shaoOrange">
                            {tech.toUpperCase()}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
              <div className="my-4 w-auto max-w-5xl text-shaoWhite">
                <div className="flex justify-start items-center">
                  <div className="hidden w-80 mr-2 lg:flex flex-col justify-start items-center">
                    <div className="flex flex-col justify-start items-center text-base font-extralight">
                      {"PRESENT"}
                      <div className="mt-2 w-2 h-2 rounded bg-shaoPink"></div>
                    </div>
                    <div className="h-[200px] w-px bg-gradient-to-r from-shaoPink to-shaoOrange"></div>
                    <div className="flex flex-col justify-start items-center text-base font-extralight">
                      <div className="mb-2 w-2 h-2 rounded bg-shaoOrange"></div>
                      {"AUG 2022"}
                    </div>
                  </div>
                  <div>
                    <div className="text-normal md:text-2xl font-normal">{"UBS"} <span className="px-4 inline-block lg:hidden text-xs md:text-sm font-extralight text-shaoWhite">{"AUG 2022"} - {"PRESENT"}</span></div>
                    <div className="my-4 text-sm md:text-normal font-extralight">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </div>
                    <div className="flex flex-wrap justify-start items-center">
                      {placeholderTech.map((tech) => {
                        return (
                          <div className="mr-2 my-1 p-2 text-sm font-light rounded bg-gradient-to-r from-shaoPink to-shaoOrange">
                            {tech.toUpperCase()}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
