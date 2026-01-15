import {
  motion,
  Variants,
  animate,
  useMotionValue,
  useTransform,
} from "motion/react";
import { useEffect } from "react";

interface Props {
  lang: [string, number];
  total: number;
}

export const PieChart2 = (props: Props) => {
  const { lang, total } = props;

  const draw: Variants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: number) => {
      const delay = i * 0.5;
      return {
        pathLength: lang[1] / total,
        opacity: 1,
        transition: {
          pathLength: { delay, type: "spring", duration: 5, bounce: 0 },
          opacity: { delay, duration: 0.1 },
        },
      };
    },
  };

  const count = useMotionValue(0);
  const rounded = useTransform(() => Math.round(count.get()));

  useEffect(() => {
    const controls = animate(count, (lang[1] / total) * 100, {
      duration: 3,
      delay: 0.5,
    });
    return () => controls.stop();
  }, []);

  return (
    <motion.svg
      width="300"
      height="200"
      viewBox="0 0 300 200"
      className="-rotate-90 w-1/3"
      /**motionの記述 */
      animate="visible"
      initial="hidden"
    >
      <circle
        cx="100"
        cy="100"
        r="80"
        stroke="#FFF"
        style={{
          strokeWidth: 20,
          strokeLinecap: "square",
          fill: "none",
        }}
      />
      <motion.circle
        cx="100"
        cy="100"
        r="80"
        stroke="#FF0055"
        style={{
          strokeWidth: 20,
          strokeLinecap: "square",
          fill: "none",
        }}
        /**motionの記述 */
        variants={draw}
        custom={1}
      />
      <motion.text x="90" y="-90" fill="red" className="rotate-90">
        {rounded}
      </motion.text>
      <text className="rotate-90" fill="white">
        {lang[0]}
      </text>
    </motion.svg>
  );
};
