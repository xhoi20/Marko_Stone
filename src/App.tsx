
import {
  Menu, X, Phone, MapPin, Hammer, Home, Blocks,
  Instagram, Play, ChevronRight, Award, Users, Building2
} from 'lucide-react';
import { useState, useEffect } from 'react';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const projects = [
    {
      title: "Shtëpi Guri",
      description: "Shtëpi e plotë guri me përfundim natyror",
      image: "/images/ShtepiGuri.jpg?auto=compress&cs=tinysrgb&w=800",
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
      title: "Veshje Guri",
      description: "Punime të holla guri dhe përfundime",
      image: "/images/VeshjeMuri.jpg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      title: "Ndërtim me Gur",
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
      description: "Ndërtim i plotë rezidencial nga themeli deri në çati, me materiale cilësore dhe punë të hollësishme.",
    },
    {
      icon: Blocks,
      title: "Muraturë Guri",
      description: "Vendosje profesionale e gurëve dhe ndërtim muresh dekorative dhe strukturore.",
    },
    {
      icon: Hammer,
      title: "Restaurim & Riparim",
      description: "Restaurim ekspert i strukturave ekzistuese të gurit, duke ruajtur karakterin origjinal.",
    },
  ];

  const stats = [
    { icon: Award, value: "15+", label: "Vite Eksperiencë" },
    { icon: Building2, value: "100+", label: "Projekte të Përfunduara" },
    { icon: Users, value: "100%", label: "Klientë të Kënaqur" },
  ];

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'video', label: 'Video' },
    { id: 'services', label: 'Shërbime' },
    { id: 'projects', label: 'Projekte' },
    { id: 'contact', label: 'Kontakt' },
  ];

  return (
    <div className="w-full bg-stone-50">
      {/* Navigimi */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'glass-nav shadow-sm' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <button onClick={() => scrollTo('home')} className="flex items-center gap-3 group">
              <div className={`p-2 rounded-xl transition-colors ${scrolled ? 'bg-amber-600' : 'bg-white/20 backdrop-blur-sm'}`}>
                <Blocks className={`w-6 h-6 ${scrolled ? 'text-white' : 'text-amber-400'}`} />
              </div>
              <div className="text-left">
                <span className={`font-display font-bold text-2xl block leading-none ${scrolled ? 'text-stone-900' : 'text-white'}`}>
                  Marko Stone
                </span>
                <span className={`text-xs tracking-widest uppercase ${scrolled ? 'text-stone-500' : 'text-stone-300'}`}>
                  Construction
                </span>
              </div>
            </button>

            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    scrolled
                      ? 'text-stone-600 hover:text-amber-600 hover:bg-amber-50'
                      : 'text-white/90 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <button onClick={() => scrollTo('contact')} className="ml-4 btn-primary text-sm !py-2.5 !px-6">
                Merr Ofertë
              </button>
            </div>

            <button
              className={`md:hidden p-2 rounded-lg ${scrolled ? 'text-stone-800' : 'text-white'}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden pb-6 space-y-1 bg-white/95 backdrop-blur-xl rounded-2xl mb-4 px-4 shadow-xl">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className="block w-full text-left py-3 px-4 text-stone-700 hover:text-amber-600 hover:bg-amber-50 rounded-xl transition"
                >
                  {link.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero me Video */}
      <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/images/Main.jpg"
          className="absolute inset-0 w-full h-full object-cover animate-slow-zoom"
        >
          <source src="/videos/showcase.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-gradient-to-br from-stone-900/80 via-stone-900/60 to-amber-900/40" />

        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-amber-300 text-sm font-medium px-4 py-2 rounded-full mb-6 animate-fade-up">
              <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
              Ndërtim Profesional me Gur në Shqipëri
            </span>

            <h1 className="font-display text-5xl md:text-7xl font-bold text-white leading-[1.1] mb-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
              Arti i Gurit,<br />
              <span className="text-amber-400">Bukuria e Përhershme</span>
            </h1>

            <p className="text-lg md:text-xl text-stone-200 leading-relaxed mb-10 max-w-2xl animate-fade-up" style={{ animationDelay: '0.2s' }}>
              Ndërtojmë shtëpi guri me cilësi të lartë, duke kombinuar traditën dhe modernitetin.
              Çdo gur vendoset me kujdes për të krijuar një shtëpi të bukur, të ngrohtë dhe të qëndrueshme për gjenerata.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: '0.3s' }}>
              <button onClick={() => scrollTo('contact')} className="btn-primary">
                Merr një Ofertë
              </button>
              <button onClick={() => scrollTo('video')} className="btn-outline flex items-center justify-center gap-2">
                <Play className="w-4 h-4 fill-current" />
                Shiko Videon
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-white/60 rounded-full" />
          </div>
        </div>
      </section>

      {/* Statistikat */}
      <section className="relative -mt-16 z-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-white rounded-2xl shadow-2xl shadow-stone-900/10 p-6 md:p-8 border border-stone-100">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div key={idx} className="text-center py-4 sm:py-0 sm:border-r last:border-r-0 border-stone-100">
                  <Icon className="w-8 h-8 text-amber-600 mx-auto mb-3" />
                  <div className="font-display text-4xl font-bold text-stone-900">{stat.value}</div>
                  <div className="text-stone-500 text-sm mt-1">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Seksioni Video */}
      <section id="video" className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="section-label">Video Prezantim</span>
              <h2 className="section-title mb-6">
                Shikoni Punimet<br />Tona në Veprim
              </h2>
              <p className="text-stone-600 text-lg leading-relaxed mb-8">
                Zbuloni procesin tonë të ndërtimit — nga zgjedhja e gurëve natyrorë deri te
                përfundimi final. Çdo projekt tregon pasionin dhe mjeshtërinë e ekipit tonë.
              </p>

              <div className="space-y-4">
                {['Gur natyror i zgjedhur me kujdes', 'Teknika tradicionale & moderne', 'Përfundim i përsosur në çdo detaj'].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-stone-700">
                    <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                      <ChevronRight className="w-4 h-4 text-amber-600" />
                    </div>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-br from-amber-400/20 to-stone-400/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-stone-900/20 ring-1 ring-stone-200">
                <video
                  controls
                  playsInline
                  poster="/images/Main.jpg"
                  className="w-full aspect-video object-cover bg-stone-900"
                >
                  <source src="/videos/showcase.mp4" type="video/mp4" />
                  Shfletuesi juaj nuk mbështet videon.
                </video>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-amber-600 text-white px-5 py-3 rounded-xl shadow-lg font-medium text-sm">
                Punime Guri Live
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shërbimet */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="section-label">Çfarë Ofrojmë</span>
            <h2 className="section-title mb-4">Shërbimet Tona</h2>
            <p className="text-xl text-stone-500 max-w-2xl mx-auto">
              Zgjidhje të plota për ndërtim me gur — nga ideja deri te realizimi
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div
                  key={idx}
                  className="group relative bg-stone-50 p-8 rounded-2xl card-hover border border-stone-100 overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-100/50 to-transparent rounded-bl-full transition-transform duration-500 group-hover:scale-150" />
                  <div className="relative">
                    <div className="w-14 h-14 bg-amber-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-amber-600/30 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="font-display text-2xl font-bold text-stone-900 mb-3">{service.title}</h3>
                    <p className="text-stone-600 leading-relaxed">{service.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projektet */}
      <section id="projects" className="py-24 bg-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="section-label">Portfolio</span>
            <h2 className="section-title mb-4">Projektet e Fundit</h2>
            <p className="text-xl text-stone-500">Punët tona më të mira me gur natyror</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-2xl shadow-lg card-hover bg-white"
              >
                <div className="relative overflow-hidden h-72">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-stone-900/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="font-display text-xl font-bold text-white mb-1">{project.title}</h3>
                    <p className="text-stone-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kontakti */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="section-label">Na Kontaktoni</span>
            <h2 className="section-title mb-4">Filloni Projektin Tuaj</h2>
            <p className="text-xl text-stone-500">
              Le të diskutojmë projektin tuaj të ndërtimit me gur
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <a
              href="tel:+355688752703"
              className="group bg-stone-50 p-8 rounded-2xl text-center card-hover border border-stone-100 hover:border-amber-200"
            >
              <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:bg-amber-600 transition-colors duration-300">
                <Phone className="w-7 h-7 text-amber-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="font-display text-xl font-bold text-stone-900 mb-2">Telefon</h3>
              <p className="text-stone-600">+355 68 875 2703</p>
            </a>

            <a
              href="https://www.instagram.com/marko_stone_group"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-stone-50 p-8 rounded-2xl text-center card-hover border border-stone-100 hover:border-amber-200"
            >
              <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:bg-amber-600 transition-colors duration-300">
                <Instagram className="w-7 h-7 text-amber-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="font-display text-xl font-bold text-stone-900 mb-2">Instagram</h3>
              <p className="text-stone-600">@marko_stone_group</p>
            </a>

            <a
              href="https://www.google.com/maps?q=Albania"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-stone-50 p-8 rounded-2xl text-center card-hover border border-stone-100 hover:border-amber-200"
            >
              <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:bg-amber-600 transition-colors duration-300">
                <MapPin className="w-7 h-7 text-amber-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="font-display text-xl font-bold text-stone-900 mb-2">Vendndodhja</h3>
              <p className="text-stone-600">Shqipëri</p>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-900 text-stone-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-amber-600 rounded-xl">
                <Blocks className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="font-display font-bold text-xl text-white block">Marko Stone</span>
                <span className="text-xs text-stone-500 tracking-widest uppercase">Construction Group</span>
              </div>
            </div>

            <div className="flex gap-6">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className="text-sm hover:text-amber-400 transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          <div className="border-t border-stone-800 mt-8 pt-8 text-center text-sm">
            <p>&copy;  Marko Stone Group. Të gjitha të drejtat e rezervuara.</p>
            <p className="mt-1 text-stone-500">Ndërtim Profesional me Gur & Muraturë</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
