import React from 'react';
import { Shield, Network, Terminal, Users, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

function Soluciones() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-lg fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center text-blue-600 hover:text-blue-700 transition-colors">
                <ArrowLeft className="h-5 w-5 mr-2" />
                <span>Back to Home</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="bg-blue-600 py-20 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold text-white text-center animate-fade-in">
            Nuestras Soluciones
          </h1>
          <p className="mt-4 text-xl text-blue-100 text-center max-w-3xl mx-auto animate-slide-up">
            Ofrecemos servicios integrales de seguridad y tecnología para proteger y optimizar su negocio
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Consultoría */}
          <div className="bg-white rounded-xl shadow-xl p-8 border border-gray-100 transform hover:scale-105 transition-transform duration-300 hover:shadow-2xl">
            <div className="flex items-center mb-6">
              <Users className="h-10 w-10 text-blue-600 animate-bounce" />
              <h2 className="text-2xl font-bold text-gray-900 ml-4">Consultoría IT</h2>
            </div>
            <p className="text-gray-600 mb-6">
              Nuestro equipo de expertos proporciona asesoramiento estratégico para optimizar su infraestructura tecnológica y procesos de negocio.
            </p>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center transform hover:translate-x-2 transition-transform">
                <span className="h-2 w-2 bg-blue-600 rounded-full mr-3"></span>
                Análisis de infraestructura
              </li>
              <li className="flex items-center transform hover:translate-x-2 transition-transform">
                <span className="h-2 w-2 bg-blue-600 rounded-full mr-3"></span>
                Planificación estratégica
              </li>
              <li className="flex items-center transform hover:translate-x-2 transition-transform">
                <span className="h-2 w-2 bg-blue-600 rounded-full mr-3"></span>
                Optimización de recursos
              </li>
            </ul>
          </div>

          {/* SOC */}
          <div className="bg-white rounded-xl shadow-xl p-8 border border-gray-100 transform hover:scale-105 transition-transform duration-300 hover:shadow-2xl">
            <div className="flex items-center mb-6">
              <Shield className="h-10 w-10 text-blue-600 animate-pulse" />
              <h2 className="text-2xl font-bold text-gray-900 ml-4">Centro de Operaciones de Seguridad (SOC)</h2>
            </div>
            <p className="text-gray-600 mb-6">
              Monitoreo continuo y gestión de seguridad 24/7 para proteger su organización contra amenazas cibernéticas.
            </p>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center transform hover:translate-x-2 transition-transform">
                <span className="h-2 w-2 bg-blue-600 rounded-full mr-3"></span>
                Monitoreo en tiempo real
              </li>
              <li className="flex items-center transform hover:translate-x-2 transition-transform">
                <span className="h-2 w-2 bg-blue-600 rounded-full mr-3"></span>
                Detección de amenazas
              </li>
              <li className="flex items-center transform hover:translate-x-2 transition-transform">
                <span className="h-2 w-2 bg-blue-600 rounded-full mr-3"></span>
                Respuesta a incidentes
              </li>
            </ul>
          </div>

          {/* NOC */}
          <div className="bg-white rounded-xl shadow-xl p-8 border border-gray-100 transform hover:scale-105 transition-transform duration-300 hover:shadow-2xl">
            <div className="flex items-center mb-6">
              <Network className="h-10 w-10 text-blue-600 animate-spin-slow" />
              <h2 className="text-2xl font-bold text-gray-900 ml-4">Centro de Operaciones de Red (NOC)</h2>
            </div>
            <p className="text-gray-600 mb-6">
              Supervisión y gestión proactiva de su infraestructura de red para garantizar un rendimiento óptimo.
            </p>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center transform hover:translate-x-2 transition-transform">
                <span className="h-2 w-2 bg-blue-600 rounded-full mr-3"></span>
                Monitoreo de red 24/7
              </li>
              <li className="flex items-center transform hover:translate-x-2 transition-transform">
                <span className="h-2 w-2 bg-blue-600 rounded-full mr-3"></span>
                Gestión de rendimiento
              </li>
              <li className="flex items-center transform hover:translate-x-2 transition-transform">
                <span className="h-2 w-2 bg-blue-600 rounded-full mr-3"></span>
                Resolución proactiva
              </li>
            </ul>
          </div>

          {/* Ethical Hacking */}
          <div className="bg-white rounded-xl shadow-xl p-8 border border-gray-100 transform hover:scale-105 transition-transform duration-300 hover:shadow-2xl">
            <div className="flex items-center mb-6">
              <Terminal className="h-10 w-10 text-blue-600 animate-pulse" />
              <h2 className="text-2xl font-bold text-gray-900 ml-4">Ethical Hacking</h2>
            </div>
            <p className="text-gray-600 mb-6">
              Evaluación exhaustiva de seguridad para identificar y corregir vulnerabilidades antes de que sean explotadas.
            </p>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center transform hover:translate-x-2 transition-transform">
                <span className="h-2 w-2 bg-blue-600 rounded-full mr-3"></span>
                Pruebas de penetración
              </li>
              <li className="flex items-center transform hover:translate-x-2 transition-transform">
                <span className="h-2 w-2 bg-blue-600 rounded-full mr-3"></span>
                Análisis de vulnerabilidades
              </li>
              <li className="flex items-center transform hover:translate-x-2 transition-transform">
                <span className="h-2 w-2 bg-blue-600 rounded-full mr-3"></span>
                Auditorías de seguridad
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 animate-fade-in">¿Necesita ayuda con su seguridad IT?</h2>
            <p className="mt-4 text-xl text-gray-600 animate-slide-up">
              Contáctenos hoy para una consulta gratuita
            </p>
            <Link
              to="/#contact"
              className="mt-8 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 transform hover:scale-105 transition-all"
            >
              Contactar ahora
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Soluciones;