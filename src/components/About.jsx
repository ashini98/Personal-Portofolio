import about from "../assets/about.jpeg";
import {motion} from "framer-motion";

const About = () => {
  return <div className="pb-4 border-b border-zinc-900">
    <h2 className="my-20 text-4xl text-center ">About
    <span className="text-zinc-500"> Me</span></h2>
    <div className="flex flex-wrap">
        <motion.div
        whileInView={{opacity: 1, x:0}}
        initial={{opacity: 0, x: -100}}
        transition={{duration: 0.5}} 
        className="w-full lg:w-1/2 lg:p-8">
            <div className="flex items-center justify-center">
                <img className="rounded-2xl" src={about} alt="about"/>
            </div>            
        </motion.div>
        <motion.div
        whileInView={{opacity: 1, x: 0}}
        initial={{opacity: 0, x: 100}}
        transition={{duration: 0.5}} 
        className="w-full lg:w-1/2">
                <div className="flex justify-center lg:justify-start">
                    <p className="max-w-xl py-6 my-2 text-justify">
                        I am a dedicated and versatile Full Stack Developer
                        with a passion for creating efficient and user-friendly
                        web applications. With my experience, I have worked with
                        a variety of technologies, including React, Next.js,
                        Node.js, MySQL, PostgreSQL and Spring Boot. My journey in 
                        web development began with a deep curiosity for how things
                        work, and it has evolved into a career where I can continuously
                        strive to learn and adapt to new challenges. I thrive in 
                        collaborative environments and enjoy solving complex problems
                        to deliver high-quality solutions. Outside of coding, I enjoy
                        staying active, exploring new technologies and contributing
                        to open-source projects.
                    </p>
                </div>
            </motion.div>
    </div>
  </div>;
};

export default About;
