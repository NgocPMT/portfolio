import TextType from "./TextType";

const App = () => {
  return (
    <div className="bg-secondary min-h-svh">
      <div className="max-w-5xl p-4 lg:mx-auto ">
        <nav className="w-full mt-5">
          <ul className="flex justify-center gap-20 text-primary">
            <li>
              <a href="#project" className="text-xl">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="text-xl">
                Contact
              </a>
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
            className="text-accent text-4xl font-semibold"
          />
          <div className="text-primary text-lg mt-10">
            <p>
              I’m passionate about building complete web applications from front
              to back.
            </p>
            <p>
              My goal is to start as a Full-Stack Developer, deepen my expertise
              in Backend Development, and grow into a Solution Architect who can
              design and lead complex technical systems.
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
                  className="text-green-500 hover:opacity-80"
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
              <p className="text-secondary px-5 text-lg">
                &#91;"nathanpham.pdf"&#93;
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

          <section id="projects" className="mt-10">
            <div className="flex flex-col items-center">
              <h3 className="text-2xl text-primary font-semibold">Projects</h3>
              <div className="w-14 h-2 bg-accent mt-5 mb-10"></div>
            </div>
            <div className="w-full min-h-96 shadow-xl shadow-gray-300 ring ring-[#5c1c0a] rounded-lg bg-white p-8 text-primary">
              <h5 className="text-2xl font-semibold mb-5 text-tertiary">
                Blog Platform API (On Working)
              </h5>
              <p>
                Developed a backend API that mimics the core behavior of
                Medium.com, allowing users to register, publish articles, follow
                other users, and interact through likes and comments. The
                project focuses on building a clean, scalable RESTful
                architecture with secure authentication and efficient database
                design.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default App;
