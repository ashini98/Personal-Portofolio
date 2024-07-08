import hostel from "../assets/hostel.png";
import inventory from "../assets/inventory.png";
import portofolio from "../assets/portofolio.png";
import todo from "../assets/todo.png";
import {motion} from "framer-motion";

const Projects = () => {
  return <div className="pb-4 border-b border-zinc-800">
  <motion.h2
  whileInView={{opacity: 1, y: 0}}
  initial={{opacity: 0, y: -100}}
  transition={{duration: 1}} 
  className="my-20 text-4xl text-center">Projects</motion.h2>
  <div className="flex flex-wrap">
  <div className="flex flex-wrap w-full mb-8 lg:justify-center lg:w-1/2 lg:p-8">
  <motion.div
  whileInView={{opacity: 1, x: 0}}
  initial={{opacity: 0, x: -100}}
  transition={{duration: 1}} 
  className="flex items-center justify-center w-full lg:w-1/4">
  <img className="mb-6 rounded" src={hostel} width={150} height={150} 
  alt="hostel"/>
  </motion.div>
  </div>
  <div className="w-full max-w-xl lg:w-3/4">
  <motion.div
  whileInView={{opacity: 1, x: 0}}
  initial={{opacity: 0, x: 100}}
  transition={{duration: 1}}
   className="flex justify-center lg:justify-start">
  <p className="mb-4 text-justify text-zinc-400">
  <h6 className="mb-2 font-bold">Hostel Management System</h6>    
    Description: Developed a Hostel Management System using Java and MySQL
    database. Implemented functionalities such as user login, search,
    update and delete user details. Update, delete order details, food
    details and create an invoice.<br/>
    <span className="px-2 py-1 mr-2 text-sm font-medium text-blue-300 bg-blue-900 rounded">
    Technologies: Java, MySQL</span>
    </p>
  </motion.div>
  </div>    
  </div>

  <div className="flex flex-wrap">
  <div className="flex flex-wrap w-full mb-8 lg:justify-center lg:w-1/2 lg:p-8">
  <motion.div
  whileInView={{opacity: 1, x: 0}}
  initial={{opacity: 0, x: -100}}
  transition={{duration: 1}}
   className="flex items-center justify-center w-full lg:w-1/4">
  <img className="mb-6 rounded" src={inventory} width={150} height={150} alt="inventory"/>
  </motion.div>
  </div>
  <div className="w-full lg:w-1/2">
  <motion.div
  whileInView={{opacity: 1, x: 0}}
  initial={{opacity: 0, x: 100}}
  transition={{duration: 1}}
   className="flex justify-center lg:justify-start">
  <p className="mb-4 text-justify text-zinc-400">
    <h6 className="mb-2 font-bold">Inventory Management System</h6>
    Description: Developed a web application using Angular, Spring Boot,
        PostgreSQLfor managing inventory in a retail store. Implemented APIs
        for data management. Integrated  user authentication and role-based
        access control.
    <br/>
    <span className="px-2 py-1 mr-2 text-sm font-medium text-blue-300 bg-blue-900 rounded">
    Technologies: Angular, Spring Boot, PostgreSQL</span>
    </p>
  </motion.div>
  </div>    
  </div>

  <div className="flex flex-wrap">
  <div className="flex flex-wrap w-full mb-8 lg:justify-center lg:w-1/2 lg:p-8">
  <motion.div
  whileInView={{opacity: 1, x: 0}}
  initial={{opacity: 0, x: -100}}
  transition={{duration: 1}}
  className="flex items-center justify-center w-full lg:w-1/4">
  <img className="mb-6 rounded" src={portofolio} width={150} height={150} alt="portofolio"/>
  </motion.div>
  </div>
  <div className="w-full lg:w-1/2">
  <motion.div 
  whileInView={{opacity: 1, x: 0}}
  initial={{opacity: 0, x: 100}}
  transition={{duration: 1}}
  className="flex justify-center lg:justify-start">
  <p className="mb-4 text-justify text-zinc-400">
    <h6 className="mb-2 font-bold">Personal Portofolio</h6>  
    Description: Developed a Personal portofolio website using React.js and
        Tailwind CSS to showcase my projects and skills. Implemented 
        responsive design to ensure the website is accessible on various
        devices. Integrated to Github to display my latest repositories dynamically.
    <br/>
    <span className="px-2 py-1 mr-2 text-sm font-medium text-blue-300 bg-blue-900 rounded">
    Technologies: React, Tailwind CSS</span>
    </p>
  </motion.div>
  </div>    
  </div>

  <div className="flex flex-wrap">
  <div className="flex flex-wrap w-full mb-8 lg:justify-center lg:w-1/2 lg:p-8">
  <motion.div
  whileInView={{opacity: 1, x: 0}}
  initial={{opacity: 0, x: -100}}
  transition={{duration: 1}}
   className="flex items-center justify-center w-full lg:w-1/4">
  <img className="mb-6 rounded" src={todo} width={150} height={150} alt="todo"/>
  </motion.div>
  </div>
  <div className="w-full lg:w-1/2">
  <motion.div 
  whileInView={{opacity: 1, x: 0}}
  initial={{opacity: 0, x: 100}}
  transition={{duration: 1}}
  className="flex justify-center lg:justify-start">
  <p className="mb-4 text-justify text-zinc-400">
    <h6 className="mb-2 font-bold">To-do List Application</h6>  
    Description: Developed a To-do List application using React,allowing 
        users to add, edit and delete tasks. Implemented local storage
        to save tasks between sessions.
    <br/>
    <span className="px-2 py-1 mr-2 text-sm font-medium text-blue-300 bg-blue-900 rounded">
    Technologies: React</span>
    </p>
  </motion.div>
  </div>    
  </div>
  </div>;

};

export default Projects;
