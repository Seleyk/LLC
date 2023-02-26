import { useState } from 'react';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import IconButton from '@mui/material/IconButton';
import SlideContainer from '../styledComponents/SlideContainer';
import sliderItems from '../data.js' 
import { AnimatePresence, motion } from 'framer-motion'

const variants = {
  enter: direction => {
    return {
      x: direction > 0 ? -1000 : 1000,
      opacity: 0
    };
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      x: { type: 'spring', stiffness: 300, damping: 30 },
      opacity: { duration: 0.2 },
    }
  },
  exit: direction => {
    return {
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      }
    };
  }
};


const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)


  const nextSlide = () => {
    setDirection(1)
    if (currentIndex === sliderItems.length - 1) {
      setCurrentIndex(0)
      return
    }
    setCurrentIndex(currentIndex + 1)
  }

  const prevSlide = () => {
    setDirection(-1)
    if (currentIndex === 0) {
      setCurrentIndex(sliderItems.length - 1)
      return
    }
    setCurrentIndex(currentIndex - 1)
  }
  

  return (
    
    <SlideContainer>
      <IconButton onClick={prevSlide}
        style={{
          height: "50px",
          width: "50px",
          position: "absolute",
          color: "#ffffff",
          left: "10px",
          top: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
          <ArrowBackIosNewRoundedIcon />
      </IconButton>
      <div style={{ width: "100%", height: "100%" }}>
        <AnimatePresence initial={false} custom={direction}>
          <motion.img 
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            src={sliderItems[currentIndex].img}
            alt="slides"
            key={sliderItems[currentIndex].id}
            custom={direction}
            style={{minWidth: "100%", objectFit: "cover" }}
          />
        </AnimatePresence>
      </div>
      <IconButton onClick={nextSlide}
       style={{
        height: "50px",
        width: "50px",
        position: "absolute",
        color: "#ffffff",
        right: "10px",
        top: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
       }}
      > 
        <ArrowForwardIosRoundedIcon />
      </IconButton>
    </SlideContainer>
  )
}

export default Slider