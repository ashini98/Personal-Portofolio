import {motion} from "framer-motion";

const Contact = () => {
  return <div className="pb-20 border-b border-zinc-800">
  <motion.h2
  whileInView={{opacity: 1, y: 0}}
  initial={{opacity: 0, y: -100}}
  transition={{duration: 0.5}}
   className="my-10 text-4xl text-center">Get in Touch</motion.h2>
  <div className="tracking-tighter text-center">
    <motion.p
    whileInView={{opacity: 1, x: 0}}
  initial={{opacity: 0, x: -100}}
  transition={{duration: 1}}
   className="my-4">127/B, Veyangoda, SL 11100</motion.p>
    <motion.p
    whileInView={{opacity: 1, x: 0}}
  initial={{opacity: 0, x: 100}}
  transition={{duration: 1}}
   className="my-4">+94 7622222222</motion.p>
    <a href="#" className="border-b">ashiniparindya98@gmail.com</a>
  </div>
  </div>;
};

export default Contact;
