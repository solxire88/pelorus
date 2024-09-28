import "./css/aboutUs.css";
import ReactPlayer from "react-player";
import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

export default function AboutUs() {

    const ref = useRef(null);
    const isInViews = useInView(ref, {once: true});
    const mainControls = useAnimation();


    useEffect(() => {
        if (isInViews) {
            mainControls.start('visible')
        }
    }, [isInViews]);



  return (
    <div className="aboutUs">
      <motion.div
        className="aboutUsLeft"
        ref={ref}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 1.5, delay: 0.25 }}
      >
        <div className="aboutUsLeftTitle">ABOUT US</div>
        <p className="aboutUsLeftText">
          A production team based in Algeria. We concentrate in the creation of
          visual content. Our approach includes Commercials, Events, Real Estate
          showcase, Short Films and Interviews. The Production team work also
          involves professional Photography capturing Models, Properties, Events
          and Products with precision. We are equipped to deliver visuals that
          enhance and elevate the final presentation with a careful approach and
          attention to detail. We ensure each project is executed with high
          standard quality.
        </p>
        <div className="aboutUsLowerText">
          THE CONTENT SHOWN ON THE WEBSITE IS NOT OFFICIAL. ALL THE VISUAL
          CONTENT WAS MADE AS A SPEC COMMERCIAL MADE FOR CREATIVE EXERCISE.
        </div>
      </motion.div>
      <div className="aboutUsRight">
        <div className="aboutUsVideo">
          <ReactPlayer
            url="https://vimeo.com/1012185692?share=copy#t=0"
            controls={true}
            width="100%"
            loop={true}
          ></ReactPlayer>
        </div>
      </div>
    </div>
  );
}
