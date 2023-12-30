import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { motion } from 'framer-motion';
import { styles } from "../styles";
import { textVariant } from "../utils/motion";

const Tech = () => {
  return (
    <>
      <motion.div
        variants={textVariant()}>
        <p className={styles.sectionSubText}>What I build with</p>
        <h2 className={styles.sectionHeadText}>Technologies.</h2>
        <br />
      </motion.div>
      <div className="flex flex-row flex-wrap justify-center gap-10 mt-10">
        {technologies.map((technology) => (
          <div className="w-28 h-40"
            key={technology.name}
          >
            <img
              className=""
              src={technology.icon}
              alt={technology.name}
            />
          </div>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Tech, '');