import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Dumbbell, Users, Heart, Timer } from 'lucide-react';

const services = [
  {
    icon: Dumbbell,
    title: 'Allenamento Personalizzato',
    description: 'Programmi su misura per i tuoi obiettivi'
  },
  {
    icon: Users,
    title: 'Corsi di Gruppo',
    description: 'Lezioni energizzanti e motivanti'
  },
  {
    icon: Heart,
    title: 'Wellness & Spa',
    description: 'Zona relax per il tuo benessere'
  },
  {
    icon: Timer,
    title: 'Aperto 24/7',
    description: 'Allenati quando vuoi'
  }
];

export function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-16"
        >
          I Nostri Servizi
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="p-6 text-center"
            >
              <div className="mb-4 flex justify-center">
                <service.icon className="w-12 h-12 text-gray-800" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}