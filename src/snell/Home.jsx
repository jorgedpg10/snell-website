import Navbar from "../components/Navbar";
import { Apple, Smartphone, Globe, KanbanSquare, BugPlay, Workflow  } from "lucide-react";
import Bussiness from "../assets/bussiness.png";
import Web from "../assets/web2.png";
import Footer from "../components/Footer";
import HeroCarousel from "../components/HeroCarousel";
import { useRef } from "react";

export const Home = () => {
    const footerRef = useRef(null);

      const slides = [
    {
      title: "Bienvenido a la Transformación Digital",
      description:
        "Somos una empresa especialista en desarrollo de software a la medida.",
      image: Bussiness,
      reverse: false, // texto izq / imagen der
    },
    {
      title: "Zero Downtime",
      description:
        "Implementamos estrategias de despliegue que aseguran 100% de continuidad operativa.",
      image: Web,
      reverse: true, // texto der / imagen izq
    },
  ];

  const goToFooter = () => {
    footerRef.current?.scrollIntoView({ behavior: "smooth" });
  };


  return (
    <>
      <Navbar onContactClick={goToFooter} />

      <HeroCarousel slides={slides} />

      {/* Nuestras Soluciones */}
    <section className="py-10 bg-white">
    <h1 className="text-4xl font-bold text-center mb-16 text-gray-900 tracking-tight">
        Nuestras Soluciones
    </h1>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto px-6">
        
        <div className="border border-gray-200 rounded-3xl p-10 text-center shadow-sm hover:shadow-md transition">
        <Apple size={50} className="text-[#FCA311] mx-auto mb-5" />
        <h2 className="text-xl font-semibold text-gray-900 mb-3">Apps iOS</h2>
        <p className="text-gray-600 leading-relaxed">
            Aplicaciones móviles nativas con alto rendimiento y experiencia premium.
        </p>
        </div>

        <div className="border border-gray-200 rounded-3xl p-10 text-center shadow-sm hover:shadow-md transition">
        <Smartphone size={50} className="text-[#FCA311] mx-auto mb-5" />
        <h2 className="text-xl font-semibold text-gray-900 mb-3">Apps Android</h2>
        <p className="text-gray-600 leading-relaxed">
            Desarrollo mobile optimizado para una amplia variedad de dispositivos.
        </p>
        </div>

        <div className="border border-gray-200 rounded-3xl p-10 text-center shadow-sm hover:shadow-md transition">
        <Globe size={50} className="text-[#FCA311] mx-auto mb-5" />
        <h2 className="text-xl font-semibold text-gray-900 mb-3">Apps Web</h2>
        <p className="text-gray-600 leading-relaxed">
            Aplicaciones web modernas, escalables y completamente responsivas.
        </p>
        </div>

    </div>
    </section>


      

    {/* Poster Calidad y valores */}

    <section
        className="relative min-h-[350px] bg-[url('/src/assets/lights.jpg')] bg-cover bg-no-repeat bg-fixed text-white flex items-center justify-center p-5"
    >
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <div className="container mx-auto pt-5 text-center">
            <h1 className="text-3xl md:text-4xl font-bold drop-shadow-[2px_2px_5px_rgba(0,0,0,0.8)]">
                La Calidad y los Valores no se negocian
            </h1>

            <p className="hidden md:block mt-4 drop-shadow-[2px_2px_5px_rgba(0,0,0,0.8)]">
                Somos un equipo profesional, comprometido, entusiasta y,
                sobre todo, con un sentido crítico capaz de ofrecer las
                mejores soluciones ante problemas complejos de empresas y
                personas.
            </p>
            </div>
        </div>
    </section>

    {/* Nuestras Herramientas */}
    <section className="py-24 bg-[#111]">
    <h1 className="text-4xl font-bold text-center mb-14 text-white tracking-tight">
        Nuestras Herramientas
    </h1>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto px-6">

        <div className="bg-[#1a1a1a] rounded-3xl p-10 shadow-xl border border-gray-800 hover:border-[#FCA311] transition">
        <KanbanSquare size={45} className="text-[#FCA311] mb-5" />
        <h2 className="text-xl font-semibold text-white mb-3">Scrum</h2>
        <p className="text-gray-400 leading-relaxed">
            Somos expertos aplicando Scrum de manera rigurosa y eficaz.
        </p>
        </div>

        <div className="bg-[#1a1a1a] rounded-3xl p-10 shadow-xl border border-gray-800 hover:border-[#FCA311] transition">
        <BugPlay size={45} className="text-[#FCA311] mb-5" />
        <h2 className="text-xl font-semibold text-white mb-3">Pruebas Automatizadas</h2>
        <p className="text-gray-400 leading-relaxed">
            Unitarias, Integración y E2E para asegurar calidad y estabilidad.
        </p>
        </div>

        <div className="bg-[#1a1a1a] rounded-3xl p-10 shadow-xl border border-gray-800 hover:border-[#FCA311] transition">
        <Workflow size={45} className="text-[#FCA311] mb-5" />
        <h2 className="text-xl font-semibold text-white mb-3">CI/CD</h2>
        <p className="text-gray-400 leading-relaxed">
            Pipelines profesionales que aceleran entregas y minimizan errores.
        </p>
        </div>

    </div>
    </section>

    <Footer ref={footerRef} />
     
    </>
  );
};
