import { motion, Variants } from "motion/react";

const draw: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: number) => {
    const delay = i * 0.5;
    return {
      pathLength: 7 / 10,
      opacity: 1,
      transition: {
        pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
        opacity: { delay, duration: 0.01 },
      },
    };
  },
};

export const PieChart = () => {
  return (
    <motion.svg
      width="600"
      height="300"
      viewBox="0 0 width height"
      style={{
        maxWidth: "80vw",
        transformOrigin: "center",
        transform: "rotate(-90deg)",
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
      <div>
        <p className="text-red-600">100</p>
      </div>

      {/* More shapes would go here */}
    </motion.svg>
  );
};
