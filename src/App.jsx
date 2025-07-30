import Button from "./components/Button";

const App = () => {
  return (
    <div className="bg-yellow-300 font-sans overflow-x-hidden scroll-smooth">
      {/* Navbar */}
      <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-yellow-300 to-orange-400 shadow z-50 flex justify-between items-center px-6 md:px-10 py-4 rounded-full w-[90%] max-w-5xl">
        <div className="text-white font-bold text-xl">Portofolio</div>
        <div className="hidden md:flex gap-6 text-sm font-semibold text-white">
          <a href="#about" className="hover:text-yellow-100">
            About Me
          </a>
          <a href="#skills" className="hover:text-yellow-100">
            Skills
          </a>
          <a href="#project" className="hover:text-yellow-100">
            Project
          </a>
          <a href="#contact" className="hover:text-yellow-100">
            Contact
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="about"
        className="min-h-screen flex flex-col-reverse md:flex-row justify-around items-center px-6 md:px-10 pt-28 text-center bg-gradient-to-b from-[#FFF] to-[#FFA800]"
      >
        <div className="flex flex-col max-w-xl text-start">
          <h1 className="text-3xl md:text-4xl font-bold text-orange-500">
            Hi, Faza Alega's Here
          </h1>
          <h2 className="text-lg md:text-xl font-semibold text-orange-600">
            Web Designer
          </h2>
          <p className="text-black text-justify mt-2">
            I am a Front End Developer and UI/UX Designer focused on creating
            intuitive interfaces and optimal user experiences. Based in Depok,
            West Java, I am currently studying at Universitas Pamulang and have
            expertise in interactive design and modern web development.
          </p>
          <Button className="mt-4 mb-4 w-full md:w-32 text-sm bg-orange-500 hover:bg-orange-600 text-white">
            Download CV
          </Button>
          <div className="flex gap-3 justify-start">
            <a
              href="https://www.instagram.com/fazaalega?igsh=MXZsd3pjbHIzNm9lbw=="
              className="w-fit p-2 rounded-full bg-white hover:scale-105 transition-all duration-300 ease-in-out"
            >
              <img src="images/icons/ig.png" alt="" className="w-9" />
            </a>
            <a
              href="https://bit.ly/LinkedInFazaAlegaYahya"
              className="w-fit p-2 rounded-full bg-white hover:scale-105 transition-all duration-300 ease-in-out"
            >
              <img src="images/icons/linkedin.png" alt="" className="w-8" />
            </a>
            <a
              href="https://github.com/Faza-coding"
              className="w-fit p-2 rounded-full bg-white hover:scale-105 transition-all duration-300 ease-in-out"
            >
              <img src="images/icons/github.png" alt="" className="w-9" />
            </a>
          </div>
        </div>
        <div className="mt-6 mb-6 md:mb-0">
          <img
            src="/images/me.jpeg"
            className="mx-auto rounded-full w-60 h-60 md:w-80 md:h-80 object-cover hover:scale-105 transition-all duration-300 ease-in-out"
          />
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="bg-orange-400 px-6 md:px-10 py-16 text-white text-center"
      >
        <h2 className="text-3xl font-bold mb-8">Skills</h2>
        <div className="bg-white text-orange-600 p-6 rounded-xl max-w-md mx-auto">
          <ul className="text-left space-y-2 font-medium">
            <li>• Responsive UI Design</li>
            <li>• Design System</li>
            <li>• Prototyping</li>
            <li>• Wireframing</li>
            <li>• Accessibility & Inclusive Design</li>
          </ul>
          <div className="mt-4">
            <span className="font-semibold">Tools:</span>
            <div className="flex justify-center flex-wrap gap-3 mt-2">
              <img
                src="/images/icons/figma1.png"
                className="w-12 hover:scale-105 transition-all duration-300 ease-in-out"
              />
              <img
                src="/images/icons/adobe.png"
                className="w-10 hover:scale-105 transition-all duration-300 ease-in-out"
              />
              <img
                src="/images/icons/vscode.png"
                className="w-10 hover:scale-105 transition-all duration-300 ease-in-out"
              />
              <img
                src="/images/icons/sketch.jpg"
                className="w-10 hover:scale-105 transition-all duration-300 ease-in-out"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="project"
        className="bg-white px-6 md:px-10 py-16 text-center"
      >
        <h2 className="text-3xl font-bold text-orange-500 mb-8">Project</h2>
        <div className="flex md:grid md:grid-cols-3 gap-10 p-2 md:p-6 overflow-x-auto md:overflow-visible scroll-smooth snap-x">
          {[
            "Tour & Travel",
            "Padi Emas",
            "Japan Tour",
            "Redesign Klinik Budhi Pratama",
            "The Jek",
            "Japan Trip",
            "Laundryku",
          ].map((title, index) => (
            <div
              key={index}
              className="bg-[#FFAF02] flex flex-col items-center rounded-xl min-w-[250px] md:min-w-0 p-4 flex-shrink-0 snap-start hover:scale-105 transition-all duration-300 ease-in-out"
            >
              <h3 className="text-white font-bold text-lg">{title}</h3>
              <img
                src={`/images/slider/${index + 1}.png`}
                className="w-52 h-52 mt-2 rounded object-contain"
                alt={title}
              />
              <Button className="mt-2 bg-orange-600 hover:bg-orange-700 w-full text-white">
                Detail
              </Button>
            </div>
          ))}
        </div>
      </section>
      <section id="contact">
        <footer className="bg-orange-500 text-white py-10 px-6">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-10">
            {/* Kiri: Nama / Info */}
            <div className="text-center md:text-left">
              <h2 className="text-xl font-bold">Faza Portofolio</h2>
              <p className="text-sm">
                © {new Date().getFullYear()} All rights reserved.
              </p>
            </div>

            {/* Kanan: Kontak */}
            <div className="flex justify-center md:justify-end">
              <div className="flex gap-3 flex-col">
                <strong>
                  <h1>Contact Me</h1>
                </strong>
                <div className="flex gap-2 items-center">
                  <img src="images/icons/mail.png" className="w-6 h-4" alt="" />
                  <p>
                    <strong>Email:</strong> fazaalega14@gmail.com
                  </p>
                </div>
                <div className="flex gap-2 items-center">
                  <img
                    src="images/icons/telepon.png"
                    className="w-6 h-4"
                    alt=""
                  />
                  <p>
                    <strong>Phone:</strong> +62 xxx-xxx-xxx
                  </p>
                </div>
                <div className="flex gap-2 items-center">
                  <img src="images/icons/ig-2.png" className="w-6 h-5" alt="" />
                  <p>
                    <strong>Instagram:</strong> @fazaalega
                  </p>
                </div>
                <div className="flex gap-2 items-center">
                  <img
                    src="images/icons/link-2.png"
                    className="w-6 h-6"
                    alt=""
                  />
                  <p>
                    <strong>Linkedin:</strong> Faza Alega Yahya
                  </p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </section>
    </div>
  );
};

export default App;
