import { useState } from 'react';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import IconButton from '@mui/material/IconButton';
import SlideContainer from '../styledComponents/SlideContainer';
import sliderItems from '../data.js' 
import { AnimatePresence, motion } from 'framer-motion'

const variants = {
  initial: {
      x: 200,
      opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
  },
  exit: {
      x: -200,
      opacity: 0,
  },
}


const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    currentIndex === sliderItems.length - 1 ? setCurrentIndex(0) : setCurrentIndex(currentIndex + 1)
  }

  const prevSlide = () => {
    currentIndex === 0 ? setCurrentIndex(sliderItems.length - 1) : setCurrentIndex(currentIndex - 1)
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
        <AnimatePresence initial={false} custom={currentIndex}>
          <motion.img 
            variants={variants}
            src={sliderItems[currentIndex].img}
            alt="slides"
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            key={sliderItems[currentIndex]}
            style={{width: "100%", objectFit: "cover" }}
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