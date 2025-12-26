import {motion} from 'motion/react'

const text="for taking logs of your daily activities";

const outer={
  hidden:{opacity:0},
  visible:{opacity:1,transition:{staggerChildren:0.09 }}
}

const inner={
  hidden:{opacity:0,y:10,},
  visible:{opacity:1,y:0,transtion:{delay:1}}
}

const TodoHero = ({todos_completed,total_todos}) => {

  return (
    <motion.div
    initial={{opacity:0,y:-100}}
    animate={{opacity:1,y:0}}
    transition={{delay:.3,duration:.5,type:"spring",stiffness:100,damping:10}}
    className="flex w-full items-center justify-between px-10 md:px-25">
      <div>
      <h2 className='text-5xl font-semibold text-neutral-400 font-mono flex gap-1'>A Local Todo</h2>

      <motion.p
      variants={outer}
      initial='hidden'
      animate="visible"
      className="text-sm ">
        {text.split("").map((word,i)=>(
          <motion.span key={i}
          variants={inner}>{word}</motion.span>
        ))}
      </motion.p>

      </div>
      
      <motion.div
      initial={{opacity:0,width:"0px",height:"0px"}}
      animate={{opacity:1,width:"60px",height:"60px"}}
      transition={{delay:.8,duration:.4,ease:"easeInOut"
      }}
      className='w-15 h-15 glass flex items-center justify-center'>
      <span className="text-2xl font-bold">{todos_completed}</span>
      <span className="text-black text-3xl font-semibold">/</span>
      <span className="text-2xl font-bold ">{total_todos}</span>
      </motion.div>
    </motion.div>
    
  )
}

export default TodoHero