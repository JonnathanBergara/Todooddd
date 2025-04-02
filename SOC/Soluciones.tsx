import React from 'react';
import { Shield, Eye, Activity, Zap, Clock, AlertCircle, Bot } from 'lucide-react';

const ManagedDetectionResponse = () => {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Encabezado principal */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Servicio de Ciberseguridad Integral
          </h1>
          <p className="text-xl text-gray-600">
            Detección y respuesta gestionada, respaldada por inteligencia artificial
          </p>
        </div>

        {/* Características del servicio */}
        <div className="space-y-8">
          {/* Visibilidad Integral */}
          <div className="flex flex-col md:flex-row gap-6 p-6 bg-gray-50 rounded-xl">
            <div className="flex-shrink-0">
              <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center text-green-700">
                <Eye className="h-6 w-6" />
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                Visibilidad Integral y Monitoreo Continuo
              </h2>
              <p className="text-gray-600">
                Ofrece una visión centralizada y en tiempo real de todos los eventos de seguridad, 
                facilitando la identificación y priorización de amenazas, y asegurando una vigilancia constante 24/7.
              </p>
            </div>
          </div>

          {/* Detección Proactiva */}
          <div className="flex flex-col md:flex-row gap-6 p-6 bg-gray-50 rounded-xl">
            <div className="flex-shrink-0">
              <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-700">
                <Activity className="h-6 w-6" />
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                Detección Proactiva y Caza de Amenazas
              </h2>
              <p className="text-gray-600">
                Emplea algoritmos avanzados para identificar amenazas emergentes y posibles ataques 
                antes de que afecten a la organización, permitiendo una protección anticipada y precisa.
              </p>
            </div>
          </div>

          {/* Inteligencia de Amenazas */}
          <div className="flex flex-col md:flex-row gap-6 p-6 bg-gray-50 rounded-xl">
            <div className="flex-shrink-0">
              <div className="h-12 w-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-700">
                <AlertCircle className="h-6 w-6" />
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                Inteligencia de Amenazas y Respuesta Rápida
              </h2>
              <p className="text-gray-600">
                Proporciona información contextual sobre cada amenaza, permitiendo a los equipos 
                de seguridad evaluar riesgos y responder eficazmente a incidentes, minimizando 
                el impacto de los ataques.
              </p>
            </div>
          </div>

          {/* Automatización */}
          <div className="flex flex-col md:flex-row gap-6 p-6 bg-gray-50 rounded-xl">
            <div className="flex-shrink-0">
              <div className="h-12 w-12 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-700">
                <Bot className="h-6 w-6" />
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                Automatización y Optimización de Procesos
              </h2>
              <p className="text-gray-600">
                Simplifica tareas repetitivas mediante la automatización de procesos de seguridad, 
                reduciendo la carga de trabajo del equipo y permitiendo un enfoque en actividades estratégicas.
              </p>
            </div>
          </div>
        </div>

        {/* Beneficios adicionales */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-green-50 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <Shield className="h-8 w-8 text-green-700 mr-3" />
              <h3 className="text-lg font-medium text-gray-900">Protección Avanzada</h3>
            </div>
            <p className="text-gray-600">
              Defensa multicapa contra amenazas conocidas y emergentes
            </p>
          </div>
          
          <div className="bg-blue-50 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <Clock className="h-8 w-8 text-blue-700 mr-3" />
              <h3 className="text-lg font-medium text-gray-900">Respuesta Inmediata</h3>
            </div>
            <p className="text-gray-600">
              Mitigación de incidentes en tiempo real con tiempos de respuesta mínimos
            </p>
          </div>
          
          <div className="bg-purple-50 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <Zap className="h-8 w-8 text-purple-700 mr-3" />
              <h3 className="text-lg font-medium text-gray-900">Eficiencia Operativa</h3>
            </div>
            <p className="text-gray-600">
              Optimización de recursos de seguridad con inteligencia artificial
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <button className="bg-green-700 hover:bg-green-800 text-white font-medium py-3 px-8 rounded-full inline-flex items-center transition-colors">
            Solicitar demostración
            <ChevronRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ManagedDetectionResponse;