import profilepic from "../assets/profilepic.jpeg";
import { motion } from "framer-motion";

const container = (delay) => ({
    hidden: {x: -100, opacity: 0},
    visible: {x: 0, opacity: 1, transition: {duration: 0.5, delay: delay},},
});

const Hero = () => {
  return <div className="pb-4 border-b border-zinc-900 lg:mb-36">
    <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
            <div className="flex flex-col items-center lg:items-start">
                <motion.h1 
                variants={container(0)}
                initial="hidden"
                animate="visible"
                className="pb-16 text-4xl font-medium tracking-tight lg:mt-16 lg:text-6xl">Ashini Parindya</motion.h1>
                <motion.span
                variants={container(0.5)}
                initial="hidden"
                animate="visible"
                className="text-3xl tracking-tight text-transparent bg-gradient-to-r from-slate-300 via-sky-500 to-teal-500 bg-clip-text">Full Stack Developer</motion.span>
                 <motion.p
                 variants={container(1)}
                initial="hidden"
                animate="visible"
                 className="max-w-xl py-6 my-2 font-light tracking-tighter">
                    I am a passionate Full Stack Developer with a knack for crafting
                    robust and scalable web applications. With hands-on experience,
                    I have honed my skills in front-end technologies like React, 
                    Angular and Next.js, as well as back-end technologies like 
                    Node.js, MySQL, PostgreSQl, Java, Spring Boot and MongoDB. My 
                    goal is to leverage my expertise to create innovative solutions
                    that drive business growth and deliver exceptional user experiences.
                 </motion.p>
            </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
            <div className="flex justify-center">
                <motion.img
                initial={{x: 100, opacity: 0}}
                animate={{x: 0, opacity: 1}}
                transition={{duration: 1, delay: 1.5}} src={profilepic} alt="Ashini Parindya"/>
            </div>
        </div>
    </div>
  </div>;
};

export default Hero;
