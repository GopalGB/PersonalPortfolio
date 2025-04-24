import { motion } from "framer-motion";

type AnimatedSectionTitleProps = {
  title: string;
  colorScheme?: 'blue' | 'teal' | 'purple' | 'amber' | 'emerald' | 'rose';
};

export default function AnimatedSectionTitle({ 
  title, 
  colorScheme = 'blue' 
}: AnimatedSectionTitleProps) {
  
  // Color mappings for different themes
  const colorMap = {
    blue: {
      from: "rgba(59,130,246,0.1)",
      via: "rgba(59,130,246,0.2)",
      to: "rgba(59,130,246,0.1)",
      bgFrom: "from-blue-500/20",
      bgVia: "via-blue-400/20",
      bgTo: "to-blue-500/20"
    },
    teal: {
      from: "rgba(20,184,166,0.1)",
      via: "rgba(20,184,166,0.2)",
      to: "rgba(20,184,166,0.1)",
      bgFrom: "from-teal-500/20",
      bgVia: "via-teal-400/20",
      bgTo: "to-teal-500/20"
    },
    purple: {
      from: "rgba(139,92,246,0.1)",
      via: "rgba(139,92,246,0.2)",
      to: "rgba(139,92,246,0.1)",
      bgFrom: "from-purple-500/20",
      bgVia: "via-purple-400/20",
      bgTo: "to-purple-500/20"
    },
    amber: {
      from: "rgba(245,158,11,0.1)",
      via: "rgba(245,158,11,0.2)",
      to: "rgba(245,158,11,0.1)",
      bgFrom: "from-amber-500/20",
      bgVia: "via-amber-400/20",
      bgTo: "to-amber-500/20"
    },
    emerald: {
      from: "rgba(16,185,129,0.1)",
      via: "rgba(16,185,129,0.2)",
      to: "rgba(16,185,129,0.1)",
      bgFrom: "from-emerald-500/20",
      bgVia: "via-emerald-400/20",
      bgTo: "to-emerald-500/20"
    },
    rose: {
      from: "rgba(236,72,153,0.1)",
      via: "rgba(236,72,153,0.2)",
      to: "rgba(236,72,153,0.1)",
      bgFrom: "from-rose-500/20",
      bgVia: "via-rose-400/20",
      bgTo: "to-rose-500/20"
    }
  };

  const colors = colorMap[colorScheme];
  
  return (
    <motion.div
      className="relative inline-block w-full text-center mb-12"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        initial={{ 
          background: `linear-gradient(90deg, ${colors.from} 0%, ${colors.via} 50%, ${colors.to} 100%)`,
          width: "100px" 
        }}
        animate={{ 
          background: [
            `linear-gradient(90deg, ${colorMap.blue.from} 0%, ${colorMap.blue.via} 50%, ${colorMap.blue.to} 100%)`,
            `linear-gradient(90deg, ${colorMap.rose.from} 0%, ${colorMap.rose.via} 50%, ${colorMap.rose.to} 100%)`,
            `linear-gradient(90deg, ${colorMap.emerald.from} 0%, ${colorMap.emerald.via} 50%, ${colorMap.emerald.to} 100%)`,
            `linear-gradient(90deg, ${colorMap.amber.from} 0%, ${colorMap.amber.via} 50%, ${colorMap.amber.to} 100%)`,
            `linear-gradient(90deg, ${colorMap.purple.from} 0%, ${colorMap.purple.via} 50%, ${colorMap.purple.to} 100%)`,
            `linear-gradient(90deg, ${colorMap.teal.from} 0%, ${colorMap.teal.via} 50%, ${colorMap.teal.to} 100%)`,
            `linear-gradient(90deg, ${colorMap.blue.from} 0%, ${colorMap.blue.via} 50%, ${colorMap.blue.to} 100%)`
          ],
          width: "300px" 
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          repeatType: "reverse",
          ease: "easeInOut"
        }}
        className="h-1 mx-auto rounded-full mb-4"
      />
      <motion.h2 
        initial={{ y: -10 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold font-accent relative inline-block px-6 py-2"
      >
        <motion.span 
          className={`absolute -z-10 inset-0 rounded-lg bg-gradient-to-r ${colors.bgFrom} ${colors.bgVia} ${colors.bgTo} blur-sm`}
          animate={{ 
            scale: [1, 1.05, 1],
            opacity: [0.7, 0.9, 0.7]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        {title}
      </motion.h2>
      <motion.div
        initial={{ 
          background: `linear-gradient(90deg, ${colors.from} 0%, ${colors.via} 50%, ${colors.to} 100%)`,
          width: "100px" 
        }}
        animate={{ 
          background: [
            `linear-gradient(90deg, ${colorMap.blue.from} 0%, ${colorMap.blue.via} 50%, ${colorMap.blue.to} 100%)`,
            `linear-gradient(90deg, ${colorMap.rose.from} 0%, ${colorMap.rose.via} 50%, ${colorMap.rose.to} 100%)`,
            `linear-gradient(90deg, ${colorMap.emerald.from} 0%, ${colorMap.emerald.via} 50%, ${colorMap.emerald.to} 100%)`,
            `linear-gradient(90deg, ${colorMap.amber.from} 0%, ${colorMap.amber.via} 50%, ${colorMap.amber.to} 100%)`,
            `linear-gradient(90deg, ${colorMap.purple.from} 0%, ${colorMap.purple.via} 50%, ${colorMap.purple.to} 100%)`,
            `linear-gradient(90deg, ${colorMap.teal.from} 0%, ${colorMap.teal.via} 50%, ${colorMap.teal.to} 100%)`,
            `linear-gradient(90deg, ${colorMap.blue.from} 0%, ${colorMap.blue.via} 50%, ${colorMap.blue.to} 100%)`
          ],
          width: "300px" 
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          repeatType: "reverse",
          ease: "easeInOut"
        }}
        className="h-1 mx-auto rounded-full mt-4"
      />
    </motion.div>
  );
}