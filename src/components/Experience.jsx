import {motion} from "framer-motion";

const Experience = () => {
  return <div className="pb-4 border-b border-zinc-800">
  <motion.h2 whileInView={{opacity: 1, y:0}}
  initial={{opacity: 0, y: -100}}
  transition={{duration: 0.5}}
  className="my-20 text-4xl text-center">Experience</motion.h2>
  <div>
  <div className="flex flex-wrap mb-8 lg:justify-center">
  <motion.div
  whileInView={{opacity: 1, x: 0}}
  initial={{opacity: 0, x: -100}}
  transition={{duration: 1}}
   className="w-full lg:w-1/4">
  <p className="mb-2 text-sm text-zinc-400">
    Year: September(2023) - June (2024)   
    </p>
  </motion.div>
  <motion.div
  whileInView={{opacity: 1, x: 0}}
  initial={{opacity: 0, x: 100}}
  transition={{duration: 1}} className="w-full max-w-xl lg-w-3/4">
    <h6 className="mb-2 font-semibold">
        <p>Role: Trainee Full Stack Developer</p>
        <span className="text-sm text-blue-100">Company: Callidora Technologies</span>
    </h6>
    <p className="mb-4 text-justify text-zinc-400">
    Description: Led a team in developing and maintaining web applications
    using Angular.js, and Node.js. Implemented Restful APIs and integrated
    with PostgreSQL databases. Collaborated with stakeholders to define
    project requirements and timeline.</p>
    <span className="px-2 py-1 mt-4 mr-2 text-sm font-medium text-blue-800 rounded bg-zinc-900">Technologies: Angular.js, Node.js, PostgreSQL</span>
  </motion.div>
  </div>     
  </div>
  </div>;
};

export default Experience;
