import LanguageDirection from './locales/commponents/LanguageDirection';
import { AppRoutes } from './routes/AppRoutes';
import { AnimatePresence, motion } from 'motion/react';
import { useLocation } from 'react-router-dom';
const App = () => {
  const location = useLocation();

  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          <LanguageDirection />
          <AppRoutes />
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default App;
