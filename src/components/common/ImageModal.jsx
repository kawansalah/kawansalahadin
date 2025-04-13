import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

/**
 * ImageModal Component
 * A responsive modal for displaying and interacting with images
 * 
 * @param {Object} props
 * @param {boolean} props.isOpen - Controls the visibility of the modal
 * @param {Function} props.onClose - Callback function to close the modal
 * @param {string} props.imageSrc - Source URL of the image to display
 * @param {string} [props.alt="Image"] - Alt text for the image
 */
const ImageModal = ({ isOpen, onClose, imageSrc, alt = "Image" }) => {
  // State management
  const [scale, setScale] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);

  // Event handlers
  const handleZoomIn = () => {
    setScale(prev => Math.min(prev + 0.2, 3));
  };

  const handleZoomOut = () => {
    setScale(prev => Math.max(prev - 0.2, 1));
  };

  const handleReset = () => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
  };

  const handleMouseDown = (e) => {
    if (scale > 1) {
      setIsDragging(true);
    }
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      setPosition(prev => ({
        x: prev.x + e.movementX,
        y: prev.y + e.movementY
      }));
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Control buttons component
  const ControlButtons = () => (
    <div className="absolute top-2 right-2 sm:top-4 sm:right-4 flex gap-1 sm:gap-2 z-10">
      <ControlButton onClick={handleZoomIn} title="Zoom In">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
        </svg>
      </ControlButton>
      <ControlButton onClick={handleZoomOut} title="Zoom Out">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clipRule="evenodd" />
        </svg>
      </ControlButton>
      <ControlButton onClick={handleReset} title="Reset">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
        </svg>
      </ControlButton>
      <ControlButton onClick={onClose} title="Close">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </ControlButton>
    </div>
  );

  // Loading spinner component
  const LoadingSpinner = () => (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-6 h-6 sm:w-8 sm:h-8 border-4 border-white/20 border-t-white rounded-full animate-spin"></div>
    </div>
  );

  // Zoom percentage indicator component
  const ZoomIndicator = () => (
    <div className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-sm px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-white text-xs sm:text-sm">
      {Math.round(scale * 100)}%
    </div>
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-6 md:p-8"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="relative w-full max-w-[95vw] sm:max-w-[90vw] md:max-w-[85vw] lg:max-w-[80vw] xl:max-w-[70vw] 2xl:max-w-[60vw] h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <ControlButtons />
            
            <div className="relative flex-1 overflow-hidden rounded-lg bg-black/50">
              {isLoading && <LoadingSpinner />}
              <motion.img
                src={imageSrc}
                alt={alt}
                className="w-full h-full object-contain rounded-lg shadow-2xl cursor-grab active:cursor-grabbing"
                style={{
                  transform: `scale(${scale}) translate(${position.x}px, ${position.y}px)`,
                  transition: isDragging ? 'none' : 'transform 0.2s ease-out'
                }}
                onLoad={() => setIsLoading(false)}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                onTouchStart={handleMouseDown}
                onTouchMove={handleMouseMove}
                onTouchEnd={handleMouseUp}
              />
            </div>

            <ZoomIndicator />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// Reusable control button component
const ControlButton = ({ onClick, title, children }) => (
  <button
    onClick={onClick}
    className="p-1.5 sm:p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
    title={title}
  >
    {children}
  </button>
);

export default ImageModal; 