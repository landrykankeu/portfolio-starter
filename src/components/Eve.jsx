import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
function Eve(){
    const [isVisible, setIsVisible] = useState(false);

    const fadeIn = {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, type: 'spring', stiffness: 260, damping: 20 }
      };
    
      const fadeOut = {
        opacity: 0,
        y: -100, // Déplace l'élément vers le haut
        transition: { duration: 0.5, type: 'spring', stiffness: 260, damping: 20 }
      };

const handleToggle = () => {
    setIsVisible(!isVisible);
};

    return (
        <div className="section" id='eve'>
            <h4>Eve</h4>
            <button onClick={handleToggle}> Toggle</button>
            <AnimatePresence>
            {isVisible && (
                <motion.div
                initial={fadeOut}
                animate={fadeIn}
                exit={fadeOut}
                
                >
                Contenu à faire apparaître et disparaître en fondu avec amortissement depuis le haut
                </motion.div>
            )}
            </AnimatePresence>
        </div>
    )
}
export default Eve