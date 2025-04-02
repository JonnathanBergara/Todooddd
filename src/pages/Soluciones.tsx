import React from 'react';
import { 
  Shield, Network, Terminal, Users, 
  ArrowLeft, Lock, ShieldAlert, Wifi,
  ChevronRight, Zap, Activity, Eye, Code, Server,
  Bot, Clock, AlertCircle, Settings, Database,
  FileSearch, Laptop, Cloud, Target, Workflow,
  LineChart, Layers, GitBranch, Bug, CheckCircle,
  HardDrive, Router, Cpu
} from 'lucide-react';
import { Link } from 'react-router-dom';

function Soluciones() {
  const solutions = [
    {
      icon: Users,
      title: "Consultoría IT",
      description: "Asesoramiento estratégico para optimizar su infraestructura tecnológica y procesos de negocio.",
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=800&q=80",
      features: [
        "Análisis de infraestructura",
        "Planificación estratégica",
        "Optimización de recursos",
        "Roadmap tecnológico"
      ],
      animation: "animate-bounce",
      showDetails: true
    },
    {
      icon: Shield,
      title: "Centro de Operaciones de Seguridad (SOC)",
      description: "Monitoreo continuo y gestión de seguridad 24/7 para proteger su organización contra amenazas cibernéticas.",
      image: "https://images.unsplash.com/photo-1563986768494-4dee9b76b5b7?auto=format&fit=crop&w=800&q=80",
      features: [
        "Monitoreo en tiempo real",
        "Detección de amenazas",
        "Respuesta a incidentes",
        "Análisis forense"
      ],
      animation: "animate-pulse",
      showDetails: true
    },
    {
      icon: Network,
      title: "Centro de Operaciones de Red (NOC)",
      description: "Supervisión y gestión proactiva de su infraestructura de red para garantizar un rendimiento óptimo.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
      features: [
        "Monitoreo de red 24/7",
        "Gestión de rendimiento",
        "Resolución proactiva",
        "Optimización de ancho de banda"
      ],
      animation: "animate-spin-slow",
      showDetails: true
    },
    {
      icon: Terminal,
      title: "Ethical Hacking",
      description: "Evaluación exhaustiva de seguridad para identificar y corregir vulnerabilidades antes de que sean explotadas.",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
      features: [
        "Pruebas de penetración",
        "Análisis de vulnerabilidades",
        "Auditorías de seguridad",
        "Simulación de ataques"
      ],
      animation: "animate-pulse",
      showDetails: true
    },
    {
      icon: Server,
      title: "Infraestructura Segura",
      description: "Diseño e implementación de arquitecturas de TI resistentes y seguras.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80",
      features: [
        "Arquitectura Zero Trust",
        "Seguridad perimetral",
        "Hardening de sistemas",
        "Protección de endpoints"
      ],
      animation: "animate-pulse",
      showDetails: true
    }
  ];

  const [selectedSolution, setSelectedSolution] = React.useState(null);

  const handleSolutionClick = (solution) => {
    setSelectedSolution(solution);
    window.scrollTo(0, 0);
  };

  const detailsContent = {
    "Consultoría IT": {
      features: [
        {
          icon: FileSearch,
          title: "Evaluación y Diagnóstico",
          description: "Análisis exhaustivo de su infraestructura tecnológica actual, identificando áreas de mejora y oportunidades de optimización."
        },
        {
          icon: Target,
          title: "Planificación Estratégica",
          description: "Desarrollo de roadmaps tecnológicos alineados con sus objetivos empresariales y presupuesto."
        },
        {
          icon: Workflow,
          title: "Optimización de Procesos",
          description: "Mejora de flujos de trabajo y automatización de procesos para aumentar la eficiencia operativa."
        },
        {
          icon: LineChart,
          title: "Gestión del Cambio",
          description: "Acompañamiento en la implementación de nuevas tecnologías y transformación digital."
        }
      ],
      benefits: [
        {
          icon: Layers,
          title: "Eficiencia Operativa",
          description: "Optimización de recursos y procesos"
        },
        {
          icon: GitBranch,
          title: "Innovación Tecnológica",
          description: "Adopción de nuevas tecnologías"
        },
        {
          icon: CheckCircle,
          title: "Mejores Prácticas",
          description: "Implementación de estándares"
        }
      ]
    },
    "Centro de Operaciones de Red (NOC)": {
      features: [
        {
          icon: Router,
          title: "Monitoreo de Red 24/7",
          description: "Supervisión continua de la infraestructura de red, garantizando disponibilidad y rendimiento óptimo."
        },
        {
          icon: Activity,
          title: "Análisis de Rendimiento",
          description: "Evaluación constante del desempeño de la red y detección temprana de problemas."
        },
        {
          icon: HardDrive,
          title: "Gestión de Infraestructura",
          description: "Administración proactiva de equipos de red, servidores y sistemas críticos."
        },
        {
          icon: Cpu,
          title: "Optimización de Recursos",
          description: "Ajuste y mejora continua del rendimiento de la infraestructura de red."
        }
      ],
      benefits: [
        {
          icon: Clock,
          title: "Alta Disponibilidad",
          description: "Servicio ininterrumpido 24/7"
        },
        {
          icon: Zap,
          title: "Respuesta Rápida",
          description: "Resolución proactiva de incidentes"
        },
        {
          icon: LineChart,
          title: "Rendimiento Optimizado",
          description: "Máxima eficiencia operativa"
        }
      ]
    },
    "Ethical Hacking": {
      features: [
        {
          icon: Bug,
          title: "Pruebas de Penetración",
          description: "Evaluación exhaustiva de vulnerabilidades mediante técnicas avanzadas de hacking ético."
        },
        {
          icon: Shield,
          title: "Análisis de Seguridad",
          description: "Identificación y evaluación de riesgos en su infraestructura tecnológica."
        },
        {
          icon: FileSearch,
          title: "Auditorías de Código",
          description: "Revisión de código fuente para detectar vulnerabilidades de seguridad."
        },
        {
          icon: Laptop,
          title: "Simulación de Ataques",
          description: "Recreación de escenarios de ataque para evaluar la respuesta de seguridad."
        }
      ],
      benefits: [
        {
          icon: Shield,
          title: "Seguridad Proactiva",
          description: "Identificación temprana de riesgos"
        },
        {
          icon: CheckCircle,
          title: "Cumplimiento Normativo",
          description: "Alineación con estándares"
        },
        {
          icon: Lock,
          title: "Protección Reforzada",
          description: "Mejora continua de seguridad"
        }
      ]
    },
    "Infraestructura Segura": {
      features: [
        {
          icon: Cloud,
          title: "Arquitectura Zero Trust",
          description: "Implementación de modelo de seguridad basado en la verificación continua."
        },
        {
          icon: Shield,
          title: "Seguridad Perimetral",
          description: "Protección avanzada contra amenazas externas e internas."
        },
        {
          icon: Server,
          title: "Hardening de Sistemas",
          description: "Fortalecimiento de la seguridad en sistemas operativos y aplicaciones."
        },
        {
          icon: Laptop,
          title: "Protección de Endpoints",
          description: "Seguridad integral para dispositivos finales y puntos de acceso."
        }
      ],
      benefits: [
        {
          icon: Lock,
          title: "Defensa Integral",
          description: "Protección multinivel"
        },
        {
          icon: Shield,
          title: "Resistencia a Ataques",
          description: "Mayor resiliencia"
        },
        {
          icon: CheckCircle,
          title: "Cumplimiento",
          description: "Estándares de seguridad"
        }
      ]
    },
    "Centro de Operaciones de Seguridad (SOC)": {
      features: [
        {
          icon: Eye,
          title: "Monitoreo 24/7",
          description: "Vigilancia continua de su infraestructura de seguridad con análisis en tiempo real."
        },
        {
          icon: Shield,
          title: "Detección de Amenazas",
          description: "Identificación proactiva de amenazas y vulnerabilidades potenciales."
        },
        {
          icon: Activity,
          title: "Respuesta a Incidentes",
          description: "Protocolos de respuesta rápida ante eventos de seguridad críticos."
        },
        {
          icon: FileSearch,
          title: "Análisis Forense",
          description: "Investigación detallada de incidentes para prevenir futuros ataques."
        }
      ],
      benefits: [
        {
          icon: Shield,
          title: "Protección Continua",
          description: "Seguridad ininterrumpida"
        },
        {
          icon: Clock,
          title: "Tiempo de Respuesta",
          description: "Reacción inmediata"
        },
        {
          icon: CheckCircle,
          title: "Cumplimiento",
          description: "Estándares de seguridad"
        }
      ]
    }
  };

  const renderSolutionDetails = () => {
    if (!selectedSolution) return null;

    const content = detailsContent[selectedSolution.title];

    if (!content) {
      return (
        <div className="pt-16">
          <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                  {selectedSolution.title}
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  {selectedSolution.description}
                </p>
                <button 
                  onClick={() => setSelectedSolution(null)}
                  className="bg-green-700 hover:bg-green-800 text-white font-medium py-3 px-8 rounded-full inline-flex items-center transition-colors"
                >
                  <ArrowLeft className="mr-2 h-5 w-5" />
                  Volver a Soluciones
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="pt-16">
        <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                {selectedSolution.title}
              </h1>
              <p className="text-xl text-gray-600">
                {selectedSolution.description}
              </p>
            </div>

            {/* Features */}
            <div className="space-y-8">
              {content.features.map((feature, index) => (
                <div key={index} className="flex flex-col md:flex-row gap-6 p-6 bg-gray-50 rounded-xl">
                  <div className="flex-shrink-0">
                    <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center text-green-700">
                      <feature.icon className="h-6 w-6" />
                    </div>
                  </div>
                  <div>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                      {feature.title}
                    </h2>
                    <p className="text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Benefits */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
              {content.benefits.map((benefit, index) => (
                <div key={index} className="bg-green-50 p-6 rounded-lg">
                  <div className="flex items-center mb-4">
                    <benefit.icon className="h-8 w-8 text-green-700 mr-3" />
                    <h3 className="text-lg font-medium text-gray-900">{benefit.title}</h3>
                  </div>
                  <p className="text-gray-600">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Return Button */}
            <div className="mt-12 text-center">
              <button 
                onClick={() => setSelectedSolution(null)}
                className="bg-green-700 hover:bg-green-800 text-white font-medium py-3 px-8 rounded-full inline-flex items-center transition-colors"
              >
                <ArrowLeft className="mr-2 h-5 w-5" />
                Volver a Soluciones
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-lg fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <Link to="/" className="flex items-center text-green-700 hover:text-green-800 transition-colors group">
                <ArrowLeft className="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform" />
                <span className="font-medium">Regresar a Inicio</span>
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-gray-700 hover:text-green-700 transition-colors font-medium">Inicio</Link>
              <Link to="/soluciones" className="text-green-700 font-medium border-b-2 border-green-700">Soluciones</Link>
              <Link to="/services-brands" className="text-gray-700 hover:text-green-700 transition-colors font-medium">Servicios y Marcas</Link>
            </div>
          </div>
        </div>
      </nav>

      {selectedSolution ? (
        renderSolutionDetails()
      ) : (
        <>
          {/* Hero Section */}
          <section className="bg-gradient-to-r from-green-800 to-emerald-900 py-32 mt-16 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-20 left-10 animate-float">
                <Lock className="h-16 w-16 text-white" />
              </div>
              <div className="absolute top-40 right-20 animate-float-delay">
                <ShieldAlert className="h-16 w-16 text-white" />
              </div>
              <div className="absolute bottom-20 left-1/4 animate-float">
                <Wifi className="h-16 w-16 text-white" />
              </div>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
              <h1 className="text-5xl font-extrabold text-white mb-6 animate-fade-in">
                Soluciones de Seguridad IT
              </h1>
              <p className="mt-4 text-xl text-green-100 max-w-3xl mx-auto animate-slide-up">
                Protección integral y gestión proactiva para salvaguardar su infraestructura tecnológica
              </p>
              <div className="mt-8 flex justify-center space-x-4">
                <Link
                  to="/#contact"
                  className="px-8 py-3 bg-white text-green-800 font-medium rounded-lg shadow-lg hover:bg-gray-100 hover:shadow-xl transition-all transform hover:-translate-y-1"
                >
                  Contactar ahora
                </Link>
                <Link
                  to="/services-brands"
                  className="px-8 py-3 border-2 border-white text-white font-medium rounded-lg hover:bg-white hover:bg-opacity-10 transition-all"
                >
                  Nuestros servicios
                </Link>
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div className="bg-gray-50 p-6 rounded-xl">
                  <div className="flex justify-center">
                    <Zap className="h-10 w-10 text-green-700 mb-4" />
                  </div>
                  <h3 className="text-4xl font-bold text-gray-900">24/7</h3>
                  <p className="mt-2 text-gray-600">Monitoreo continuo</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <div className="flex justify-center">
                    <Activity className="h-10 w-10 text-green-700 mb-4" />
                  </div>
                  <h3 className="text-4xl font-bold text-gray-900">99.9%</h3>
                  <p className="mt-2 text-gray-600">Disponibilidad</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <div className="flex justify-center">
                    <Eye className="h-10 w-10 text-green-700 mb-4" />
                  </div>
                  <h3 className="text-4xl font-bold text-gray-900">360°</h3>
                  <p className="mt-2 text-gray-600">Visibilidad</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <div className="flex justify-center">
                    <Shield className="h-10 w-10 text-green-700 mb-4" />
                  </div>
                  <h3 className="text-4xl font-bold text-gray-900">100+</h3>
                  <p className="mt-2 text-gray-600">Amenazas bloqueadas diarias</p>
                </div>
              </div>
            </div>
          </section>

          {/* Solutions Grid */}
          <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Nuestro Portafolio de Soluciones</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Servicios diseñados para proteger su negocio en un entorno digital cada vez más complejo
                </p>
              </div>

              <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
                {solutions.map((solution, index) => (
                  <div 
                    key={index}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-gray-100"
                  >
                    <div className="relative">
                      <img 
                        src={solution.image} 
                        alt={solution.title} 
                        className="w-full h-56 object-cover"
                      />
                      <div className="absolute top-4 left-4 bg-green-700 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {index % 2 === 0 ? "Seguridad" : "Operaciones"}
                      </div>
                    </div>
                    <div className="p-8">
                      <div className="flex items-center mb-6">
                        <solution.icon className={`h-10 w-10 text-green-700 ${solution.animation}`} />
                        <h2 className="text-2xl font-bold text-gray-900 ml-4">{solution.title}</h2>
                      </div>
                      <p className="text-gray-600 mb-6">{solution.description}</p>
                      <ul className="space-y-3 mb-8">
                        {solution.features.map((feature, i) => (
                          <li key={i} className="flex items-center text-gray-700 group">
                            <ChevronRight className="h-4 w-4 text-green-700 mr-2 group-hover:translate-x-1 transition-transform" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <button
                        onClick={() => handleSolutionClick(solution)}
                        className="inline-flex items-center text-green-700 font-medium hover:text-green-800 group"
                      >
                        Más información
                        <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-gradient-to-r from-green-800 to-emerald-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl font-bold text-white mb-6">¿Listo para fortalecer su seguridad IT?</h2>
              <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
                Nuestros expertos están listos para evaluar sus necesidades y recomendar la mejor solución
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  to="/#contact"
                  className="px-8 py-3 bg-white text-green-800 font-medium rounded-lg shadow-lg hover:bg-gray-100 hover:shadow-xl transition-all transform hover:-translate-y-1"
                >
                  Solicitar consulta
                </Link>
                <Link
                  to="/services-brands"
                  className="px-8 py-3 border-2 border-white text-white font-medium rounded-lg hover:bg-white hover:bg-opacity-10 transition-all"
                >
                  Conocer nuestros servicios
                </Link>
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  );
}

export default Soluciones;