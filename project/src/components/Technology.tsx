import { Si365Datascience, SiWhatsapp, SiGreatlearning } from 'react-icons/si';

const Technology = () => {
  return (
    <section id="technologies" className="py-20 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center">Our Technology</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center">
            <Si365Datascience className="text-6xl text-gray-500 mb-4" />
            <h3 className="text-2xl font-semibold">Data Science</h3>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <SiGreatlearning className="text-6xl text-gray-500 mb-4" />
            <h3 className="text-2xl font-semibold">Machine Learning</h3>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <SiWhatsapp className="text-6xl text-gray-500 mb-4" />
            <h3 className="text-2xl font-semibold">WhatsApp Bot</h3>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;