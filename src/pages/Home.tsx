import React, { useState } from 'react';
import { 
  Shield, 
  Cloud, 
  Code2, 
  Monitor, 
  Users,
  ChevronRight,
  ArrowRight,
  Target,
  Eye,
  Send,
  CheckCircle,
  Award,
  Building2,
  Linkedin,
  Instagram,
  Facebook,
  Lock,
  ShieldAlert,
  Wifi,
  MapPin,
  Mail,
  Phone
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { sanitizeFormData, validateEmail, validatePhone } from '../utils/security';

function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    position: '',
    country: '',
    message: ''
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (formErrors[name]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = (): boolean => {
    const errors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      errors.name = 'El nombre es requerido';
    }
    
    if (!validateEmail(formData.email)) {
      errors.email = 'Email inválido';
    }
    
    if (!validatePhone(formData.phone)) {
      errors.phone = 'Teléfono inválido';
    }
    
    if (!formData.company.trim()) {
      errors.company = 'La empresa es requerida';
    }
    
    if (!formData.position.trim()) {
      errors.position = 'El puesto es requerido';
    }
    
    if (!formData.country.trim()) {
      errors.country = 'El país es requerido';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    const sanitizedData = sanitizeFormData(formData);
    
    try {
      console.log('Sanitized form data:', sanitizedData);
      
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        position: '',
        country: '',
        message: ''
      });
      
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const LatinAmericaPresenceSection = () => (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Presencia en Latinoamérica
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Grupo Intelector tiene presencia en Guatemala, El Salvador, Honduras, Nicaragua, 
              Costa Rica, Panamá, Colombia y Ecuador. Déjanos tus datos y nuestro equipo de ingenieros 
              te contactará para enviarte más información.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[600px] w-full flex items-center justify-center rounded-xl overflow-hidden shadow-lg">
              <div className="absolute inset-0 flex items-center justify-center">
                <iframe
                  src="https://www.openstreetmap.org/export/embed.html?bbox=-95.00000000000001%2C-5.000000000000003%2C-70.00000000000001%2C20.000000000000004&amp;layer=mapnik"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  className="rounded-xl"
                ></iframe>
              </div>
              
              <div className="absolute bottom-4 left-0 right-0">
                <div className="flex flex-wrap justify-center gap-2 px-4">
                  {[
                    'Guatemala', 
                    'El Salvador', 
                    'Honduras', 
                    'Nicaragua', 
                    'Costa Rica', 
                    'Panamá', 
                    'Colombia', 
                    'Ecuador'
                  ].map((country) => (
                    <span 
                      key={country} 
                      className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium shadow-md whitespace-nowrap"
                    >
                      {country}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg h-full flex flex-col justify-center">
              <div className="bg-green-50 p-4 rounded-lg mb-8">
                <p className="text-green-800 text-sm">
                  Llena el formulario y nuestro equipo de ingenieros certificados te dará mayor información
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {Object.entries({
                  name: 'Nombre completo',
                  email: 'Correo electrónico',
                  phone: 'Número de celular',
                  company: 'Empresa',
                  position: 'Puesto',
                  country: 'País'
                }).map(([field, label]) => (
                  <div key={field}>
                    <label htmlFor={field} className="block text-sm font-medium text-gray-700">
                      {label}
                    </label>
                    <input
                      type={field === 'email' ? 'email' : 'text'}
                      id={field}
                      name={field}
                      value={formData[field as keyof typeof formData]}
                      onChange={handleChange}
                      className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 ${
                        formErrors[field] ? 'border-red-500' : ''
                      }`}
                      required
                    />
                    {formErrors[field] && (
                      <p className="mt-1 text-sm text-red-600">{formErrors[field]}</p>
                    )}
                  </div>
                ))}

                <button
                  type="submit"
                  className="w-full bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800 transition-colors flex items-center justify-center"
                >
                  <span>GUARDAR</span>
                  <Send className="ml-2 h-5 w-5" />
                </button>
              </form>

              <div className="mt-8 space-y-4">
                <div className="flex items-center text-gray-600">
                  <MapPin className="h-5 w-5 mr-2 text-green-700" />
                  <span>Ecuador</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Mail className="h-5 w-5 mr-2 text-green-700" />
                  <span>administracion.ec@intelector.net</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Phone className="h-5 w-5 mr-2 text-green-700" />
                  <span>+593 99 202 3186</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm fixed w-full z-50">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <img 
                src="https://cdn.discordapp.com/attachments/1219816078588076042/1219816133722157076/image.png?ex=660c9e86&is=65fa2986&hm=a6d3c3e9c7c7c5c8f7d9d3f447f1f2f2f2f2f2f2f2f2f2f2f2f2f2f2f2f2f2&" 
                alt="Intelector Ecuador" 
                className="h-12"
              />
            </div>
            <div className="hidden md:flex space-x-8">
              <Link to="/" className="text-gray-600 hover:text-green-800">Inicio</Link>
              <Link to="/soluciones" className="text-gray-600 hover:text-green-800">Soluciones</Link>
              <Link to="/services-brands" className="text-gray-600 hover:text-green-800">Servicios y Marcas</Link>
            </div>
            <div className="flex items-center space-x-4">
              <a href="#contact" className="bg-green-800 text-white px-6 py-2 rounded-full hover:bg-green-900 transition duration-300">
                Contáctanos
              </a>
              <div className="flex space-x-3">
                <a 
                  href="https://www.linkedin.com/company/grupointelector/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a 
                  href="https://www.instagram.com/grupointelector/?hl=en" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-pink-600 transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a 
                  href="https://www.facebook.com/p/Grupo-Intelector-61567309621283/?locale=tl_PH" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-800 transition-colors"
                >
                  <Facebook className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section with Security Background */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        {/* Background image with green overlay */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80" 
            alt="Cybersecurity background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-green-900 opacity-80"></div>
        </div>
        
        {/* Animated icons */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 animate-bounce">
            <Lock className="h-12 w-12 text-white" />
          </div>
          <div className="absolute top-40 right-20 animate-pulse">
            <ShieldAlert className="h-12 w-12 text-white" />
          </div>
          <div className="absolute bottom-20 left-1/4 animate-spin-slow">
            <Wifi className="h-12 w-12 text-white" />
          </div>
        </div>
        
        <div className="container mx-auto px-6 relative">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-5xl font-bold text-white mb-6">
                Protegiendo y Optimizando tu Infraestructura Digital
              </h1>
              <p className="text-xl text-green-100 mb-8">
                Somos la mejor alternativa como empresa especializada en el área de infraestructura y seguridad informática
              </p>
              <div className="flex space-x-4">
                <Link to="/soluciones" className="bg-white text-green-800 px-8 py-3 rounded-full hover:bg-green-100 transition duration-300 flex items-center font-semibold">
                  Empezar ahora <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
                <a 
                  href="#contact" 
                  className="border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-green-800 transition duration-300 flex items-center font-semibold"
                >
                  Contacto
                </a>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=600&q=80" 
                  alt="Cybersecurity" 
                  className="rounded-lg shadow-xl border-4 border-white"
                />
                <div className="absolute -bottom-4 -right-4 bg-green-800 p-4 rounded-lg shadow-lg animate-pulse border-2 border-white">
                  <Shield className="h-8 w-8 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
              Sobre Nosotros
            </h2>
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <p className="text-xl text-gray-600 leading-relaxed">
                  Intelector Ecuador es una empresa líder en soluciones de seguridad y tecnología, 
                  con presencia en toda América Latina. Nos especializamos en proporcionar servicios 
                  integrales de ciberseguridad, consultoría IT y soluciones empresariales adaptadas 
                  a las necesidades específicas de cada cliente.
                </p>
              </div>
              <div className="md:w-1/2">
                <img 
                  src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
                  alt="Cybersecurity Operations"
                  className="w-full rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Vision Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Misión */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300 border-t-4 border-green-800">
              <div className="flex items-center mb-6">
                <Target className="h-12 w-12 text-green-800" />
                <h2 className="text-3xl font-bold text-gray-900 ml-4">Misión</h2>
              </div>
              <p className="text-xl text-gray-600 leading-relaxed">
                Ser el aliado estratégico de nuestros clientes en su transformación digital, 
                proporcionando soluciones tecnológicas innovadoras y servicios de alta calidad 
                que impulsen su crecimiento y éxito empresarial en América Latina.
              </p>
            </div>

            {/* Visión */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300 border-t-4 border-green-800">
              <div className="flex items-center mb-6">
                <Eye className="h-12 w-12 text-green-800" />
                <h2 className="text-3xl font-bold text-gray-900 ml-4">Visión</h2>
              </div>
              <p className="text-xl text-gray-600 leading-relaxed">
                Ser reconocidos como líderes en la industria de tecnología y seguridad informática 
                en América Latina, destacándonos por nuestra excelencia en el servicio, innovación 
                constante y compromiso con el éxito de nuestros clientes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                  <img 
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                    alt="Team collaboration" 
                    className="rounded-lg shadow-lg"
                  />
                  <img 
                    src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                    alt="Technology solutions" 
                    className="rounded-lg shadow-lg mt-8"
                  />
                </div>
                <div className="absolute -bottom-10 -right-10 bg-white p-6 rounded-lg shadow-xl">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-8 w-8 text-green-800" />
                    <div>
                      <p className="text-2xl font-bold text-green-800">30+</p>
                      <p className="text-gray-600">Empresas que confían en nosotros</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Contamos con más de 30 años de experiencia combinada en Ciberseguridad
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Otra muestra del respaldo que tendrás al trabajar con nosotros
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <Award className="h-8 w-8 text-green-800 mr-4" />
                  <div>
                    <h3 className="text-xl font-semibold">Marcas líderes en tecnología</h3>
                    <p className="text-gray-600">Trabajamos con las mejores soluciones del mercado para proteger tu empresa</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Building2 className="h-8 w-8 text-green-800 mr-4" />
                  <div>
                    <h3 className="text-xl font-semibold">Ingenieros Certificados</h3>
                    <p className="text-gray-600"> Todo nuestro equipo está altamente capacitado y certificados</p>
                  </div>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                  <p className="text-lg text-blue-900 italic">
                    "En un mundo digital en constante evolución, la seguridad no es una opción, es una necesidad. Nuestro compromiso es proteger lo que más importa: la información y la confianza de nuestros clientes."
                  </p>
                  <div className="mt-4 flex items-center">
                    <img 
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=100&h=100&q=80" 
                      alt="CEO" 
                      className="h-12 w-12 rounded-full"
                    />
                    <div className="ml-4">
                      <p className="font-semibold">Marrio Arriaza</p>
                      <p className="text-sm text-gray-600">CEO</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Replace the contact section with LatinAmericaPresenceSection */}
      <LatinAmericaPresenceSection />

      {/* Footer with Social Media */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <img 
                  src="https://cdn.discordapp.com/attachments/1219816078588076042/1219816133722157076/image.png?ex=660c9e86&is=65fa2986&hm=a6d3c3e9c7c7c5c8f7d9d3f447f1f2f2f2f2f2f2f2f2f2f2f2f2f2f2f2f2f2&" 
                  alt="Intelector Ecuador " 
                  className="h-8"
                />
              </div>
              <p className="text-gray-400">
                La ciberseguridad no es solo tecnología, es confianza. Protegemos tu negocio para que crezca sin límites
              </p>
              <div className="flex space-x-4 mt-4">
                <a 
                  href="https://www.linkedin.com/company/grupointelector/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
                <a 
                  href="https://www.instagram.com/grupointelector/?hl=en" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-pink-400 transition-colors"
                >
                  <Instagram className="h-6 w-6" />
                </a>
                <a 
                  href="https://www.facebook.com/p/Grupo-Intelector-61567309621283/?locale=tl_PH" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-600 transition-colors"
                >
                  <Facebook className="h-6 w-6" />
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Servicios</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/soluciones" className="hover:text-green-400">Consultoria</Link></li>
                <li><Link to="/soluciones" className="hover:text-green-400">Centro de Operaciones de Seguridad (SOC)</Link></li>
                <li><Link to="/soluciones" className="hover:text-green-400">Centro de Operaciones de Red (NOC)</Link></li>
                <li><Link to="/soluciones" className="hover:text-green-400">Ethical Hacking</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contacto</h4>
              <ul className="space-y-2 text-gray-400">
                <li>administracion.ec@intelector.net</li>
                <li>+593 99 202 3186</li>
                <li>Quito, Ecuador</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Intelector Ecuador . Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;