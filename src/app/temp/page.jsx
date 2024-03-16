'use client'

import {useRef, useEffect} from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Example = () => {
  const targetRef = useRef();
  const { scrollYProgress } = useScroll({ target: targetRef, });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);
  
  useEffect(() => {
    console.log('scrollYProgress changed')
    console.log(scrollYProgress)
  }, [scrollYProgress])

  return (
    <div className="wrapper" ref={targetRef}>
      <motion.div
        className="container"
        style={{
          
        }}
      >
        <motion.div
          className="item"
          style={{
            scaleY: scrollYProgress
          }}
        />
      </motion.div>
    </div>
  );
};

export default Example;