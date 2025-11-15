import React from 'react';
import { motion } from 'framer-motion';
import LogoSVG from '../../assets/logo-orange.svg';

const Loading = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700"
    >
      {/* Background Animated Circles - SLOWER */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.15, 0.35, 0.15],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-white/20 rounded-full blur-3xl"
        />
      </div>

      {/* Main Loading Content */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Logo Container - VERY SLOW ROTATION */}
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            rotate: {
              duration: 4,
              repeat: Infinity,
              ease: "linear"
            }
          }}
          className="relative mb-10"
        >
          {/* Outer Glow Ring - SLOWER */}
          <motion.div
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute inset-0 w-40 h-40 -left-4 -top-4 bg-white rounded-full blur-3xl"
          />
          
          {/* Middle Glow */}
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
            className="absolute inset-0 bg-orange-200 rounded-full blur-2xl opacity-40"
          />
          
          {/* Logo - GENTLE PULSE */}
          <motion.div 
            animate={{
              scale: [1, 1.08, 1],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="relative w-36 h-36 flex items-center justify-center"
          >
            <img
              src={LogoSVG}
              alt="Jawa Barat Journey"
              className="w-full h-full object-contain drop-shadow-2xl"
            />
          </motion.div>
        </motion.div>

        {/* Text - SLOW FADE IN */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            delay: 0.6,
            duration: 1,
            ease: "easeOut"
          }}
          className="text-center"
        >
          <h2 className="text-4xl font-heading font-bold text-white mb-3 tracking-wide">
            Jawa Barat Journey
          </h2>
          <motion.p
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="text-white/90 text-lg font-medium"
          >
            Menyiapkan pengalaman terbaik untuk Anda...
          </motion.p>
        </motion.div>

        {/* Progress Bar - REALISTIC SPEED */}
        <div className="mt-10 w-80 h-3 bg-white/20 rounded-full overflow-hidden backdrop-blur-sm shadow-lg">
          <motion.div
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{
              duration: 2.3,
              ease: "easeInOut"
            }}
            className="h-full bg-gradient-to-r from-white/70 via-white to-white/70 rounded-full shadow-xl"
          />
        </div>

        {/* Loading Text Animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-6 text-white/80 text-sm font-medium"
        >
          <motion.span
            animate={{ opacity: [0, 1, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatDelay: 0.3
            }}
          >
            Memuat konten
          </motion.span>
          <motion.span
            animate={{ opacity: [0, 1, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: 0.3
            }}
          >
            .
          </motion.span>
          <motion.span
            animate={{ opacity: [0, 1, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: 0.6
            }}
          >
            .
          </motion.span>
          <motion.span
            animate={{ opacity: [0, 1, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: 0.9
            }}
          >
            .
          </motion.span>
        </motion.div>

        {/* Dots Animation - SLOWER */}
        <div className="flex gap-3 mt-4">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -15, 0],
                scale: [1, 1.4, 1],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: i * 0.3,
                ease: "easeInOut"
              }}
              className="w-3.5 h-3.5 bg-white rounded-full shadow-xl"
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Loading;
