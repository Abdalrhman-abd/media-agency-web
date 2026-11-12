import LanguageDirection from './locales/commponents/LanguageDirection';
import { AppRoutes } from './routes/AppRoutes';
import { AnimatePresence, motion } from 'motion/react';
import { useLocation } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'; 

const queryClient = new QueryClient();

const App = () => {
  const location = useLocation();

  return (
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>
  );
};

export default App;