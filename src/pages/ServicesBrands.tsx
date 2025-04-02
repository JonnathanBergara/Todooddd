import React, { useState } from 'react';
import { ArrowLeft, Shield, Server, Cloud, Database, Code, Lock, ShieldAlert, Wifi, Users, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

function ServicesBrands() {
  const [flippedCards, setFlippedCards] = useState<Record<string, boolean>>({});

  const toggleFlip = (id: string) => {
    setFlippedCards(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const partners = [
    { 
      id: 'manage-engine',
      name: 'ManageEngine', 
      logo: 'https://www.manageengine.com/images/me-logo.svg',
      description: 'ManageEngine ofrece soluciones de gestión de TI para empresas de todos los tamaños. Sus productos ayudan a administrar redes, servidores, aplicaciones y más.'
    },
    { 
      id: 'trend-micro',
      name: 'TrendMicro', 
      logo: 'https://www.trendmicro.com/content/dam/trendmicro/global/en/core/images/trend-micro-logo-red-white.svg',
      description: 'Trend Micro es líder en soluciones de seguridad cibernética, protegiendo a organizaciones contra amenazas digitales con su avanzada tecnología XGen.'
    },
    { 
      id: 'kaspersky',
      name: 'Kaspersky', 
      logo: 'https://www.kaspersky.com/content/en-global/images/repository/pr/kaspersky-logo.png',
      description: 'Kaspersky proporciona seguridad endpoint y soluciones de ciberseguridad para proteger contra malware, ransomware y otras amenazas avanzadas.'
    },
    { 
      id: 'sophos',
      name: 'Sophos', 
      logo: 'https://www.sophos.com/sites/default/files/2021-06/sophos-logo-rgb.png',
      description: 'Sophos ofrece soluciones de seguridad sincronizadas que protegen endpoints, redes, correo electrónico y la nube con inteligencia artificial.'
    },
    { 
      id: 'cato-networks',
      name: 'Cato Networks', 
      logo: 'https://www.catonetworks.com/wp-content/themes/cato/assets/images/logo.svg',
      description: 'Cato Networks proporciona una plataforma SASE que converge redes y seguridad en la nube para una protección unificada.'
    },
    { 
      id: 'Secpod',
      name: 'Secpod', 
      logo: 'https://www.f5.com/content/dam/f5-com/global/logo.svg',
      description: 'SecPod ofrece soluciones avanzadas para la gestión de vulnerabilidades, protección de endpoints y cumplimiento de normativas. Sus productos ayudan a detectar, evaluar y mitigar riesgos de forma proactiva.'
    },
    { 
      id: 'lumu',
      name: 'Lumu', 
      logo: 'https://lumu.io/wp-content/uploads/2020/03/lumu-logo.svg',
      description: 'Lumu es una plataforma de inteligencia de amenazas que ayuda a las organizaciones a medir y neutralizar compromisos en tiempo real.'
    },
    { 
      id: 'wazuh',
      name: 'Wazuh', 
      logo: 'https://wazuh.com/wp-content/themes/wazuh-v3/assets/images/wazuh_logo.svg',
      description: 'Wazuh es una plataforma de seguridad open source que proporciona detección de intrusiones, monitoreo de integridad y respuesta a incidentes.'
    },
  ];

  const certifications = [
    { 
      name: 'Lead Cybersecurity Professional Certification', 
      logo: 'https://certiprof.com/images/certifications/scrum-foundation-badge.png' 
    },
    { 
      name: 'ISO 27001 Lead Implementer Professional Certification', 
      logo: 'https://certiprof.com/images/certifications/devops-essentials-badge.png' 
    },
    { 
      name: 'Data Science Foundation Professional Certificate', 
      logo: 'https://certiprof.com/images/certifications/data-science-foundation-badge.png' 
    },
    { 
      name: 'Cybersecurity Essentials Professional Certificate', 
      logo: 'https://certiprof.com/images/certifications/cybersecurity-essentials-badge.png' 
    },
    { 
      name: 'Big Data Professional Certification', 
      logo: 'https://certiprof.com/images/certifications/blockchain-essentials-badge.png' 
    },
    { 
      name: 'Artificial Intelligence Foundation Professional Certificate', 
      logo: 'https://certiprof.com/images/certifications/ai-foundation-badge.png' 
    },
    { 
      name: 'Cloud Computing Essentials Professional Certificate', 
      logo: 'https://certiprof.com/images/certifications/Ethical-Hacking-Professional-badge.png' 
    },
    { 
      name: 'Ethical Hacking Professional Certification', 
      logo: 'https://certiprof.com/images/certifications/digital-transformation-badge.png' 
    }
  ];

  const services = [
    {
      icon: Shield,
      name: "Capacitaciones y Certificaciones sobre Ciberseguridad",
      description: "La ciberseguridad es clave en la protección de la información y la prevención de amenazas digitales. A través de capacitaciones y certificaciones especializadas, los profesionales pueden adquirir y validar sus conocimientos en seguridad informática.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: Server,
      name: "Consultoria ITSM",
      description: "En Intelector Ecuador, ofrecemos consultoría especializada en ITSM (Gestión de Servicios de TI) para ayudar a las organizaciones a optimizar sus procesos tecnológicos, mejorar la eficiencia operativa y garantizar un servicio alineado con los objetivos del negocio.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: Database,
      name: "Protección de EndPoints",
      description: "La protección de endpoints es esencial para resguardar dispositivos como computadoras, servidores, móviles y tablets contra amenazas cibernéticas. Un enfoque robusto en seguridad previene ataques de malware, ransomware, accesos no autorizados y fugas de datos.",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: Cloud,
      name: "Servicios Gestionados",
      description: "Ofrecemos Servicios Gestionados de TI para garantizar la operación eficiente, segura y optimizada de tu infraestructura tecnológica, permitiéndote enfocarte en tu negocio mientras nosotros gestionamos tu entorno IT.",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <nav className="bg-white shadow-lg fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center text-green-800 hover:text-green-900 transition-colors">
                <ArrowLeft className="h-5 w-5 mr-2" />
                <span className="hidden sm:inline">Regresar a Inicio</span>
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-green-800 hover:text-green-900">Inicio</Link>
              <Link to="/soluciones" className="text-green-800 hover:text-green-900">Soluciones</Link>
              <Link to="/services-brands" className="text-green-800 hover:text-green-900">Servicios y Marcas</Link>
            </div>
          </div>
        </div>
      </nav>

      <section 
        className="pt-24 pb-16 relative overflow-hidden"
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(20, 83, 45, 0.85), 
              rgba(20, 83, 45, 0.85)
            ),
            url(https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=2000&q=80)
          `,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 opacity-10">
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <h2 className="text-4xl font-bold text-center text-white mb-12">
            Nuestros Servicios
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-8 transform hover:scale-105 transition-all duration-300"
              >
                <service.icon className="h-12 w-12 text-green-800 mb-4" />
                <img 
                  src={service.image}
                  alt={service.name}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.name}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Nuestras Marcas
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {partners.map((partner) => (
              <div 
                key={partner.id}
                onClick={() => toggleFlip(partner.id)}
                className="relative h-48 cursor-pointer transition-transform duration-700"
                style={{ 
                  perspective: '1000px',
                  transformStyle: 'preserve-3d',
                  transform: flippedCards[partner.id] ? 'rotateY(180deg)' : 'rotateY(0)'
                }}
              >
                <div 
                  className="absolute inset-0 bg-white p-6 rounded-lg shadow-md flex items-center justify-center backface-hidden"
                  style={{ 
                    backfaceVisibility: 'hidden',
                    transform: 'rotateY(0deg)',
                    opacity: flippedCards[partner.id] ? 0 : 1,
                    transition: 'opacity 0.3s'
                  }}
                >
                  <img 
                    src={partner.logo} 
                    alt={partner.name} 
                    className="h-16 w-auto mx-auto object-contain"
                  />
                </div>
                
                <div 
                  className="absolute inset-0 bg-green-800 text-white p-6 rounded-lg shadow-md flex flex-col items-center justify-center backface-hidden"
                  style={{ 
                    backfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)',
                    opacity: flippedCards[partner.id] ? 1 : 0,
                    transition: 'opacity 0.3s'
                  }}
                >
                  <h3 className="text-lg font-bold mb-2 text-center">{partner.name}</h3>
                  <p className="text-sm text-center text-green-100">{partner.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section 
        className="py-16 relative"
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(20, 83, 45, 0.90), 
              rgba(20, 83, 45, 0.90)
            ),
            url(https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=2000&q=80)
          `,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center mb-4 bg-white/10 backdrop-blur-sm px-6 py-2 rounded-full">
              <Users className="h-5 w-5 text-white mr-2" />
              <span className="text-white font-medium">Alianzas estratégicas</span>
            </div>
            
            <h2 className="text-4xl font-bold text-white mb-6">
              Certificaciones Reconocidas
            </h2>
            
            <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-sm mb-8">
              <p className="text-lg text-white">
                Como <span className="font-semibold text-green-300">Partner Oficial de Certiprof</span>, 
                ofrecemos formación y certificación en las tecnologías más demandadas del mercado. 
                Nuestros programas de capacitación están avalados internacionalmente y son impartidos 
                por instructores certificados.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {certifications.map((certification, index) => (
              <div 
                key={index} 
                className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center border border-white/20"
              >
                <div className="mb-4 p-2 bg-green-800/50 rounded-full">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <img 
                  src={certification.logo} 
                  alt={certification.name} 
                  className="h-20 w-auto mx-auto object-contain mb-4"
                />
                <h3 className="text-sm font-medium text-center text-gray-800">{certification.name}</h3>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a 
              href="https://certiprof.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 border border-white text-base font-medium rounded-md shadow-sm text-white hover:bg-white hover:text-green-800 transition-colors"
            >
              Ver más certificaciones
              <ArrowLeft className="ml-2 h-5 w-5 transform rotate-180" />
            </a>
          </div>
        </div>
      </section>

      <style jsx>{`
        .backface-hidden {
          backface-visibility: hidden;
        }
      `}</style>
    </div>
  );
}

export default ServicesBrands;