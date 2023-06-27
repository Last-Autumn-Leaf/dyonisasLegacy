import Image from 'next/image'

import FeatImage01 from 'public/images/features-03-image-01.png';
import FeatImage02 from 'public/images/features-03-image-02.png';
import FeatImage03 from 'public/images/features-03-image-03.png';

export default function Zigzag() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-green-600 bg-green-200 rounded-full mb-4">Reach goals that matter</div>
            <h1 className="h2 mb-4">Constant adaptativity</h1>
            <p className="text-xl text-gray-400">Make informed decisions for your business and optimize rentability</p>
          </div>

          {/* Items */}
          <div className="grid gap-20">

            {/* 1st item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
              <Image  className="max-w-full mx-auto md:max-w-none h-auto" src={FeatImage01} width={540} height={405}  alt={"Features 01"} />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <div className="font-architects-daughter text-xl text-purple-600 mb-2">Montreal-based IT Consulting Startup</div>
                  <h3 className="h3 mb-3">About us</h3>
                  <p className="text-xl text-gray-400 mb-4">
                  Dionysos is a Montreal-based IT consulting startup specializing in data science and machine learning. 
                  We offer innovative solutions tailored to meet your unique business needs. Our goal is to optimize your tech infrastructure, 
                  enhance operational efficiency, and drive informed decision-making through cutting-edge strategies.
                  </p>
                </div>
              </div>
            </div>

            {/* 2nd item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl" data-aos="fade-up">
              <Image  className="max-w-full mx-auto md:max-w-none h-auto" src={FeatImage02} width={540} height={405}  alt={"Features 01"} />
                
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-left">
                <div className="md:pl-4 lg:pl-12 xl:pl-16">
                  <div className="font-architects-daughter text-xl text-purple-600 mb-2">Harnessing the Power of Data Science and Machine Learning</div>
                  <h3 className="h3 mb-3">Our Expertise</h3>
                  <p className="text-xl text-gray-400 mb-4">
                  At Dionysos, we believe in the transformative potential of data science and machine learning. 
                  Our team of experts leverages these technologies to their fullest extent. 
                  We provide customized solutions that align with your goals, optimizing tech infrastructure,
                   amplifying operational efficiency, and enabling informed decision-making.
                  </p>
                </div>
              </div>
            </div>

            {/* 3rd item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
              <Image  className="max-w-full mx-auto md:max-w-none h-auto" src={FeatImage03} width={540} height={405}  alt={"Features 01"} />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <div className="font-architects-daughter text-xl text-purple-600 mb-2">Partnership for Success</div>
                  <h3 className="h3 mb-3">Our Approach</h3>
                  <p className="text-xl text-gray-400 mb-4">
                  Dionysos goes beyond offering services – we build partnerships. Collaboration and mutual understanding are key to achieving success. 
                  When you choose Dionysos, you can expect our commitment to propelling your business towards its goals. We work closely with you, understanding your objectives and challenges, 
                  to create innovative solutions that drive real results. 
                  Together, we can unlock your business's full potential and achieve sustainable growth.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
