import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, animate } from 'framer-motion';

const AnimatedCounter = ({ value, prefix = '', suffix = '' }) => {
  const nodeRef = React.useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = React.useState(false);

  React.useEffect(() => {
    const node = nodeRef.current;

    if (node && !hasAnimated) {
      const controls = animate(0, value, {
        duration: 2.5,
        onUpdate(value) {
          node.textContent = `${prefix}${Math.round(value)}${suffix}`;
        },
        ease: 'easeOut',
        onComplete: () => {
          setHasAnimated(true);
        }
      });

      return () => controls.stop();
    }
  }, [value, prefix, suffix, hasAnimated]);

  return <span ref={nodeRef}>{prefix}0{suffix}</span>;
};

const Stats = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <section className="py-20 bg-gradient-to-b from-orange-50 to-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0 }}
          >
            <div className="text-3xl font-bold text-orange-600 mb-1">
              {inView && <AnimatedCounter value={100} prefix="+" />}
            </div>
            <p className="text-sm text-gray-600">Palestras Realizadas</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="text-3xl font-bold text-orange-600 mb-1">
              {inView && <AnimatedCounter value={5} prefix="+" suffix="k" />}
            </div>
            <p className="text-sm text-gray-600">Pessoas Impactadas</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="text-3xl font-bold text-orange-600 mb-1">
              {inView && <AnimatedCounter value={200} prefix="+" />}
            </div>
            <p className="text-sm text-gray-600">Empresas Atendidas</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className="text-3xl font-bold text-orange-600 mb-1">
              {inView && <AnimatedCounter value={97} suffix="%" />}
            </div>
            <p className="text-sm text-gray-600">Satisfação dos Clientes</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Stats