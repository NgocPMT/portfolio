import projects from "../projects";
import Link from "./Link";
import Project from "./Project";
import TextType from "./TextType";

const App = () => {
  return (
    <div className="bg-secondary min-h-svh">
      <div className="max-w-5xl p-4 lg:mx-auto">
        <nav className="w-full mt-5">
          <ul className="flex justify-center gap-20 text-primary md:justify-end md:pr-10">
            <li>
              <Link title="Projects" href="#projects" />
            </li>
            <li>
              <Link title="Contacts" href="#contacts" />
            </li>
          </ul>
        </nav>
        <div className="mt-20">
          <TextType
            text={"> Nathan Pham"}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="|"
            textColors={["#0a5c1c"]}
            cursorClassName="ml-2"
            className="text-accent text-4xl font-semibold md:text-6xl"
          />
          <div className="text-primary text-lg mt-10 md:text-xl">
            <p>
              I’m passionate about building complete web applications from front
              to back.
            </p>
            <p>
              My goal is to start as a Full-Stack Developer, deepen my expertise
              in Backend Development, and grow into a Solution Architect who can
              design and lead complex technical systems.
            </p>
            <p>
              Check out my{" "}
              <a
                href="#projects"
                className="text-accent font-bold hover:opacity-70"
              >
                projects
              </a>{" "}
              below
            </p>
          </div>

          <div className="w-full min-h-96 bg-primary rounded-lg overflow-hidden mt-14">
            <div className="w-full min-h-8 bg-gray-300 mb-5 flex justify-end items-center px-2 gap-3">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="size-5"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M6 12L18 12"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>{" "}
                </g>
              </svg>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="size-4"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <rect
                    x="4"
                    y="4"
                    width="16"
                    height="16"
                    rx="2"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></rect>{" "}
                </g>
              </svg>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="size-5"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z"
                    fill="#0F1729"
                  ></path>{" "}
                </g>
              </svg>
            </div>
            <div className="pb-5">
              <p className="text-white px-5 text-lg">&gt; Nathan.languages</p>
              <p className="text-secondary px-5 text-lg">
                &#91;"Javascript", "Typescript", "English", "Vietnamese"&#93;
              </p>
            </div>
            <div className="pb-5">
              <p className="text-white px-5 text-lg">&gt; Nathan.contact</p>
              <p className="text-secondary px-5 text-lg">
                &#91;"nathan.pham1505@gmail.com",{" "}
                <a
                  target="_blank"
                  href="https://github.com/NgocPMT"
                  className="text-green-600 hover:opacity-80"
                >
                  "Github"
                </a>
                &#93;
              </p>
            </div>
            <div className="pb-5">
              <p className="text-white px-5 text-lg">&gt; Nathan.location</p>
              <p className="text-secondary px-5 text-lg">
                &#91;"Can Tho, Viet Nam"&#93;
              </p>
            </div>
            <div className="pb-5">
              <p className="text-white px-5 text-lg">&gt; Nathan.resume</p>
              <p className="text-secondary px-5 text-lg ">
                &#91;
                <a
                  className="text-green-600 hover:opacity-80"
                  href="/resume.pdf"
                  target="_blank"
                >
                  "nathanpham.pdf"
                </a>
                &#93;
              </p>
            </div>
            <div className="pb-5">
              <p className="text-white px-5 text-lg">&gt; Nathan.interests</p>
              <p className="text-secondary px-5 text-lg">
                &#91;"badminton", "playing guitar"&#93;
              </p>
            </div>

            <div className="pb-5">
              <TextType
                text={">"}
                typingSpeed={75}
                pauseDuration={1500}
                showCursor={true}
                cursorCharacter="|"
                textColors={["white"]}
                className="text-white px-5 text-lg"
              />
            </div>
          </div>

          <section id="projects" className="mt-20">
            <div className="flex flex-col items-center mb-12">
              <h3 className="text-2xl text-primary font-semibold">Projects</h3>
              <div className="w-14 h-2 bg-accent mt-5 mb-10"></div>
            </div>
            {projects.map((project) => (
              <Project
                key={project.id}
                title={project.title}
                description={project.description}
                imgURL={project.imgURL}
                techStack={project.techStack}
                livePreviewURL={project.livePreviewURl}
                sourceURL={project.sourceURL}
              />
            ))}
          </section>
          <section id="contacts" className="mt-20">
            <div className="flex flex-col items-center mb-12">
              <h3 className="text-2xl text-primary font-semibold">Contacts</h3>
              <div className="w-14 h-2 bg-accent mt-5 mb-10"></div>
              <div className="text-primary flex flex-col items-center gap-6 md:flex-row">
                <p className="text-lg">nathan.pham1505@gmail.com</p>
                <p className="max-md:hidden">||</p>
                <Link href="https://github.com/NgocPMT">
                  <svg
                    fill="currentColor"
                    viewBox="0 -0.5 25 25"
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-7"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path d="m12.301 0h.093c2.242 0 4.34.613 6.137 1.68l-.055-.031c1.871 1.094 3.386 2.609 4.449 4.422l.031.058c1.04 1.769 1.654 3.896 1.654 6.166 0 5.406-3.483 10-8.327 11.658l-.087.026c-.063.02-.135.031-.209.031-.162 0-.312-.054-.433-.144l.002.001c-.128-.115-.208-.281-.208-.466 0-.005 0-.01 0-.014v.001q0-.048.008-1.226t.008-2.154c.007-.075.011-.161.011-.249 0-.792-.323-1.508-.844-2.025.618-.061 1.176-.163 1.718-.305l-.076.017c.573-.16 1.073-.373 1.537-.642l-.031.017c.508-.28.938-.636 1.292-1.058l.006-.007c.372-.476.663-1.036.84-1.645l.009-.035c.209-.683.329-1.468.329-2.281 0-.045 0-.091-.001-.136v.007c0-.022.001-.047.001-.072 0-1.248-.482-2.383-1.269-3.23l.003.003c.168-.44.265-.948.265-1.479 0-.649-.145-1.263-.404-1.814l.011.026c-.115-.022-.246-.035-.381-.035-.334 0-.649.078-.929.216l.012-.005c-.568.21-1.054.448-1.512.726l.038-.022-.609.384c-.922-.264-1.981-.416-3.075-.416s-2.153.152-3.157.436l.081-.02q-.256-.176-.681-.433c-.373-.214-.814-.421-1.272-.595l-.066-.022c-.293-.154-.64-.244-1.009-.244-.124 0-.246.01-.364.03l.013-.002c-.248.524-.393 1.139-.393 1.788 0 .531.097 1.04.275 1.509l-.01-.029c-.785.844-1.266 1.979-1.266 3.227 0 .025 0 .051.001.076v-.004c-.001.039-.001.084-.001.13 0 .809.12 1.591.344 2.327l-.015-.057c.189.643.476 1.202.85 1.693l-.009-.013c.354.435.782.793 1.267 1.062l.022.011c.432.252.933.465 1.46.614l.046.011c.466.125 1.024.227 1.595.284l.046.004c-.431.428-.718 1-.784 1.638l-.001.012c-.207.101-.448.183-.699.236l-.021.004c-.256.051-.549.08-.85.08-.022 0-.044 0-.066 0h.003c-.394-.008-.756-.136-1.055-.348l.006.004c-.371-.259-.671-.595-.881-.986l-.007-.015c-.198-.336-.459-.614-.768-.827l-.009-.006c-.225-.169-.49-.301-.776-.38l-.016-.004-.32-.048c-.023-.002-.05-.003-.077-.003-.14 0-.273.028-.394.077l.007-.003q-.128.072-.08.184c.039.086.087.16.145.225l-.001-.001c.061.072.13.135.205.19l.003.002.112.08c.283.148.516.354.693.603l.004.006c.191.237.359.505.494.792l.01.024.16.368c.135.402.38.738.7.981l.005.004c.3.234.662.402 1.057.478l.016.002c.33.064.714.104 1.106.112h.007c.045.002.097.002.15.002.261 0 .517-.021.767-.062l-.027.004.368-.064q0 .609.008 1.418t.008.873v.014c0 .185-.08.351-.208.466h-.001c-.119.089-.268.143-.431.143-.075 0-.147-.011-.214-.032l.005.001c-4.929-1.689-8.409-6.283-8.409-11.69 0-2.268.612-4.393 1.681-6.219l-.032.058c1.094-1.871 2.609-3.386 4.422-4.449l.058-.031c1.739-1.034 3.835-1.645 6.073-1.645h.098-.005zm-7.64 17.666q.048-.112-.112-.192-.16-.048-.208.032-.048.112.112.192.144.096.208-.032zm.497.545q.112-.08-.032-.256-.16-.144-.256-.048-.112.08.032.256.159.157.256.047zm.48.72q.144-.112 0-.304-.128-.208-.272-.096-.144.08 0 .288t.272.112zm.672.673q.128-.128-.064-.304-.192-.192-.32-.048-.144.128.064.304.192.192.32.044zm.913.4q.048-.176-.208-.256-.24-.064-.304.112t.208.24q.24.097.304-.096zm1.009.08q0-.208-.272-.176-.256 0-.256.176 0 .208.272.176.256.001.256-.175zm.929-.16q-.032-.176-.288-.144-.256.048-.224.24t.288.128.225-.224z"></path>
                    </g>
                  </svg>
                </Link>
              </div>
            </div>
          </section>
        </div>
        <footer className="text-center text-sm text-primary mt-10">
          Made by Nathan Pham &copy; 2025
        </footer>
      </div>
    </div>
  );
};

export default App;
