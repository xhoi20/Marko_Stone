
import { Menu, X, Phone, Mail, MapPin, Hammer, Home, Blocks } from 'lucide-react';
import { useState } from 'react';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const projects = [
    {
      title: "Shtëpi Guri ",
      description: "Shtepi e plotë guri me përfundim natyror",
     image: "/images/ShtepiGuri.jpg?auto=compress&cs=tinysrgb&w=800"
        
    },
    {
      title: "Punime Themeli me Gur",
      description: "Restaurim profesional i themeleve",
      image: "/images/PunimeThemel.jpg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      title: "Mure Guri Dekorative",
      description: "Mure kopshti dhe kufizuese me porosi",
      image: "/images/MureDekorative.jpg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      title: "Veshje  Guri",
      description: "Punime të holla guri dhe përfundime",
      image: "/images/VeshjeMuri.jpg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      title: "Ndërtim  me Gur",
      description: "Teknika të trashëguara ndërtimi",
      image: "/images/NdertimeGuri.jpg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      title: "Arkitekturë Moderne me Gur",
      description: "Dizajn bashkëkohor me gur natyror",
      image: "/images/NdertimeModerne.jpg?auto=compress&cs=tinysrgb&w=800",
    },
  ];

  const services = [
    {
      icon: Home,
      title: "Ndërtim Shtëpish Guri",
      description: "Ndërtim i plotë rezidencial nga themeli deri në çati"
    },
    {
      icon: Blocks,
      title: "Muraturë Guri",
      description: "Vendosje profesionale e gurëve dhe ndërtim muresh"
    },
    {
      icon: Hammer,
      title: "Restaurim & Riparim",
      description: "Restaurim ekspert i strukturave ekzistuese të gurit"
    },
  ];

  return (
    <div className="w-full bg-white">
      {/* Navigimi */}
      <nav className="fixed w-full bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <Blocks className="w-8 h-8 text-blue-700" />
              <span className="font-bold text-xl text-gray-900">Marko Stone</span>
            </div>

            {/* Menu Desktop */}
            <div className="hidden md:flex gap-8">
              <a href="#home" className="text-gray-700 hover:text-blue-700 transition">Home</a>
              <a href="#services" className="text-gray-700 hover:text-blue-700 transition">Service</a>
              <a href="#projects" className="text-gray-700 hover:text-blue-700 transition">Project</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-700 transition">Contact</a>
            </div>

            {/* Butoni Menu Mobile */}
            <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Menu Mobile */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4 space-y-2">
              <a href="#home" className="block py-2 text-gray-700 hover:text-blue-700">Home</a>
              <a href="#services" className="block py-2 text-gray-700 hover:text-blue-700">Service</a>
              <a href="#projects" className="block py-2 text-gray-700 hover:text-blue-700">Project</a>
              <a href="#contact" className="block py-2 text-gray-700 hover:text-blue-700">Contact</a>
            </div>
          )}
        </div>
      </nav>

      {/* Seksioni Hero */}
      {/* <section id="home" className="pt-24 pb-32 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                Marko Stone Construction
              </h1>
              <p className="text-xl text-gray-600">
                Ndërtojmë shtëpi guri me cilësi të lartë, duke kombinuar traditën dhe modernitetin. Çdo gur vendoset me kujdes për të krijuar një shtëpi të bukur, të ngrohtë dhe të qëndrueshme për gjenerata.
              </p>
      */}
      <section
  id="home"
  className="relative pt-24 pb-32 min-h-screen flex items-center"
  style={{
    backgroundImage: 'url(/images/Main.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
>
  {/* Overlay blur + errësim */}
  <div className="absolute inset-0 bg-black/55 backdrop-blur-sm" />

  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="max-w-2xl space-y-6">
      <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
        Marko Stone Construction
      </h1>
      <p className="text-xl text-gray-200">
        Ndërtojmë shtëpi guri me cilësi të lartë, duke kombinuar traditën dhe modernitetin. Çdo gur vendoset me kujdes për të krijuar një shtëpi të bukur, të ngrohtë dhe të qëndrueshme për gjenerata.
      </p>
              <div className="flex flex-col sm:flex-row gap-4">
  <button
    onClick={() => {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    }}
    className="bg-blue-700 text-white px-8 py-3 rounded-lg hover:bg-blue-800 transition font-medium"
  >
    Merr një Ofertë
  </button>
  <button
    onClick={() => {
      document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
    }}
    className="border-2 border-blue-700 text-blue-700 px-8 py-3 rounded-lg hover:bg-blue-50 transition font-medium"
  >
    Shiko Projektet
  </button>
</div>
            {/* </div>
            <div className="relative">
              <img
                src="/images/Main.jpg"
                alt="Ndërtim me gur"
                className="rounded-lg shadow-2xl w-full h-96 object-cover"
              />
            </div> */}
          </div>
        </div>
      </section>

      {/* Seksioni Shërbimeve */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Shërbimet Tona</h2>
            <p className="text-xl text-gray-600">Zgjidhje të plota për ndërtim me gur</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div key={idx} className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition">
                  <Icon className="w-12 h-12 text-blue-700 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Galeria e Projekteve */}
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Projektet e Fundit</h2>
            <p className="text-xl text-gray-600">Punët tona më të mira me gur natyror</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((project, idx) => (
              <div key={idx} className="group overflow-hidden rounded-lg shadow-md hover:shadow-2xl transition">
                <div className="relative overflow-hidden h-64">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  />
                </div>
                <div className="p-4 bg-white">
                  <h3 className="font-bold text-lg text-gray-900">{project.title}</h3>
                  <p className="text-gray-600 text-sm">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seksioni Kontaktit */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Na Kontaktoni</h2>
            <p className="text-xl text-gray-600">Le të diskutojmë projektin tuaj të ndërtimit me gur</p>
          </div>

         <div className="grid md:grid-cols-3 gap-8 mb-12">
  
  {/* Telefon - kur shtyp hapet telefoni */}
  <a href="tel:+35568875270" className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-xl transition cursor-pointer">
    <Phone className="w-12 h-12 text-blue-700 mx-auto mb-4" />
    <h3 className="font-bold text-lg mb-2">Telefon</h3>
    <p className="text-gray-600">+355 68 875 2703</p>
  </a>

  {/* Instagram - kur shtyp hapet Instagram */}
  <a href="https://www.instagram.com/marko_stone_group" target="_blank" rel="noopener noreferrer" className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-xl transition cursor-pointer">
    <Mail className="w-12 h-12 text-blue-700 mx-auto mb-4" />
    <h3 className="font-bold text-lg mb-2">Instagram</h3>
    <p className="text-gray-600">marko_stone_group</p>
  </a>

  {/* Vendndodhja - kur shtyp hapet Google Maps */}
  <a href="https://www.google.com/maps?q=Albania" target="_blank" rel="noopener noreferrer" className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-xl transition cursor-pointer">
    <MapPin className="w-12 h-12 text-blue-700 mx-auto mb-4" />
    <h3 className="font-bold text-lg mb-2">Vendndodhja</h3>
    <p className="text-gray-600">Shqipëri</p>
  </a>


          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2024 Marko Stone Group. Të gjitha të drejtat e rezervuara.</p>
          <p className="mt-2 text-sm">Ndërtim Profesional me Gur & Muraturë</p>
        </div>
      </footer>
    </div>
  );
}

export default App;