import { motion, Variants } from "motion/react";

const draw: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: number) => {
    const delay = i * 0.5;
    return {
      pathLength: 0.75,
      opacity: 1,
      transition: {
        pathLength: { delay, type: "spring", duration: 1, bounce: 0 },
        opacity: { delay, duration: 0.1 },
      },
    };
  },
};

export const PieChart = () => {
  return (
    <motion.svg
      width="200"
      height="200"
      viewBox="0 0 width height"
      style={{
        transform: "rotate(-90deg)",
        maxWidth: "80vw",
      }}
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
          strokeWidth: 20,
          strokeLinecap: "round",
          fill: "none",
        }}
        /**motionの記述 */
        variants={draw}
        custom={2}
      />
      <text x="85" y="-95" style={{ transform: "rotate(90deg)" }}>
        75%
      </text>

      {/* More shapes would go here */}
    </motion.svg>
  );
};
