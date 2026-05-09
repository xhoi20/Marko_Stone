import { Menu, X, Phone, Mail, MapPin, Hammer, Home, Blocks } from 'lucide-react';
import { useState } from 'react';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const projects = [
    {
      title: "Residential Stone Home",
      description: "Complete stone exterior with natural finish",
      image: "https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      title: "Stone Foundation Work",
      description: "Professional foundation restoration",
      image: "https://images.pexels.com/photos/3935696/pexels-photo-3935696.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      title: "Decorative Stone Walls",
      description: "Custom garden and boundary walls",
      image: "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      title: "Stone Masonry Details",
      description: "Intricate stonework and finishes",
      image: "https://images.pexels.com/photos/3934623/pexels-photo-3934623.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      title: "Traditional Stone Construction",
      description: "Heritage building techniques",
      image: "https://images.pexels.com/photos/2398220/pexels-photo-2398220.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      title: "Modern Stone Architecture",
      description: "Contemporary stone design",
      image: "https://images.pexels.com/photos/3438839/pexels-photo-3438839.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
  ];

  const services = [
    {
      icon: Home,
      title: "Stone House Construction",
      description: "Complete residential stone building from foundation to roof"
    },
    {
      icon: Blocks,
      title: "Stone Masonry",
      description: "Professional stone laying and wall construction"
    },
    {
      icon: Hammer,
      title: "Restoration & Repair",
      description: "Expert restoration of existing stone structures"
    },
  ];

  return (
    <div className="w-full bg-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <Blocks className="w-8 h-8 text-blue-700" />
              <span className="font-bold text-xl text-gray-900">Marko Stone</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-8">
              <a href="#home" className="text-gray-700 hover:text-blue-700 transition">Home</a>
              <a href="#services" className="text-gray-700 hover:text-blue-700 transition">Services</a>
              <a href="#projects" className="text-gray-700 hover:text-blue-700 transition">Projects</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-700 transition">Contact</a>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4 space-y-2">
              <a href="#home" className="block py-2 text-gray-700 hover:text-blue-700">Home</a>
              <a href="#services" className="block py-2 text-gray-700 hover:text-blue-700">Services</a>
              <a href="#projects" className="block py-2 text-gray-700 hover:text-blue-700">Projects</a>
              <a href="#contact" className="block py-2 text-gray-700 hover:text-blue-700">Contact</a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-32 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                Premium Stone Construction
              </h1>
              <p className="text-xl text-gray-600">
                Expert stonework and masonry for residential and commercial projects. Building lasting structures with natural stone craftsmanship.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-blue-700 text-white px-8 py-3 rounded-lg hover:bg-blue-800 transition font-medium">
                  Get a Quote
                </button>
                <button className="border-2 border-blue-700 text-blue-700 px-8 py-3 rounded-lg hover:bg-blue-50 transition font-medium">
                  View Projects
                </button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=1000"
                alt="Stone construction"
                className="rounded-lg shadow-2xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">Comprehensive stone construction solutions</p>
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

      {/* Projects Gallery */}
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Recent Projects</h2>
            <p className="text-xl text-gray-600">Showcasing our finest stonework</p>
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

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-600">Let's discuss your stone construction project</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <Phone className="w-12 h-12 text-blue-700 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Phone</h3>
              <p className="text-gray-600">+355 356 887 527 03</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <Mail className="w-12 h-12 text-blue-700 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Email</h3>
              <p className="text-gray-600">info@markostone.com</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <MapPin className="w-12 h-12 text-blue-700 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Location</h3>
              <p className="text-gray-600">Albania</p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md max-w-2xl mx-auto">
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-700"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-700"
              />
              <textarea
                placeholder="Project Details"
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-700"
              />
              <button className="w-full bg-blue-700 text-white py-3 rounded-lg hover:bg-blue-800 transition font-medium">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2024 Marko Stone Group. All rights reserved.</p>
          <p className="mt-2 text-sm">Professional Stone Construction & Masonry</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
