import { motion, Variants } from "motion/react";

const draw: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: number) => {
    const delay = i * 0.5;
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
        opacity: { delay, duration: 0.01 },
      },
    };
  },
};

export const CircleTutorial = () => {
  return (
    <motion.svg
      width="600"
      height="300"
      viewBox="0 0 600 300"
      style={{ maxWidth: "80vw" }}
      /**motionの記述 */
      animate="visible"
      initial="hidden"
>
      <motion.circle
        cx="100"
        cy="100"
        r="80"
        stroke="#FF0055"
        style={{
          strokeWidth: 10,
          strokeLinecap: "round",
          fill: "transparent",
        }}
        /**motionの記述 */
        variants={draw}
        custom={1}
      />
      <motion.line
        x1="220"
        y1="30"
        x2="360"
        y2="170"
        stroke="#7700FF"
        style={{
          strokeWidth: 10,
          strokeLinecap: "round",
          fill: "transparent",
        }}
        /**motionの記述 */
        variants={draw}
        custom={2}
      />
      {/* More shapes would go here */}
    </motion.svg>
  );
};
