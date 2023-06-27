import {HERO_BG} from '@/constante'; 
import Link from 'next/link';
export default function Hero() {
  return (
    <section>
      <div className="mt-20  mx-auto px-4 sm:px-6 relative">

        {/* Illustration behind hero content */}
        <div className="left-0 bottom-0 lg:block pointer-events-none" aria-hidden="true" data-aos="fade-up" data-aos-delay="400">
          <HERO_BG/>
        </div>

        {/* Hero content */}
        <div className="relative pt-32 pb-10 md:pt-40 md:pb-16">
          {/* Section header */}
          <div className="max-w-3xl mx-auto  pb-12 md:pb-16">
            <h1 className="h1 text-white mb-4" data-aos="fade-up">DionySas: Unleashing the Power of Data</h1>
            <p className="h2 text-xl text-white mb-8" data-aos="fade-up" data-aos-delay="200">Unlock unprecedented growth with DionySas, 
            your partner in premier IT consulting and data-driven solutions. Empower your business to reach new heights of productivity and 
            efficiency</p>
            <div className="max-w-xs mx-auto sm:max-w-none sm:flex ">
              <div data-aos="fade-up" data-aos-delay="400">
              <Link 
                className="btn text-white bg-purple-600 hover:bg-purple-700 w-full mb-4 sm:w-auto sm:mb-0"
                href="#contact">
                Contact
                </Link>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
