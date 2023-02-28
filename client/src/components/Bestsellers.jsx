import { motion } from "framer-motion"
import { Typography, useMediaQuery } from "@mui/material"
import { bestGloves } from "../data"
import { useEffect, useRef, useState } from "react"

const Bestsellers = () => {
    const isNonMobileScreen = useMediaQuery("(min-width: 1000px)")


    const [width, setWidth] = useState(0)
    const carousel = useRef()

    useEffect(() => {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
    }, []);


  return (
    <div style={{ padding: "2rem 0",  }}>
        <Typography letterSpacing={3}  fontSize={ isNonMobileScreen ? "40px" : "20px"} sx={{ textAlign: "center", m: "1rem 0" }}>BEST SELLING <br /> MUAY THAI BOXING GLOVES </Typography>
        {/* <hr style={{ width: "70%", margin: "auto" }} ></hr> */}

        <motion.div ref={carousel} whileTap={{ cursor: "grabbing" }}  style={{ cursor: "grab", overflow: "hidden" }}>
            <motion.div drag="x" dragConstraints={{ right: 0, left: -width }} style={{ display: "flex" }}>
                {bestGloves.map((item) => (
                    <motion.div key={item.id} style={{ minHeight: "20rem", maxHeight: "20rem", minWidth: "30rem", padding: "40px" }}>
                        <img src={item.img} alt={item.price} style={{ width: "100%", height: "100%",  borderRadius: "2rem", pointerEvents: "none"  }} />
                    </motion.div>
                ))}
            </motion.div>
        </motion.div> 
    </div>
  )
}

export default Bestsellers