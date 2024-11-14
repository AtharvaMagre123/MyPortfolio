import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import styles from "./style.module.scss";
import Image from "next/image";
import Rounded from "../../common/RoundedButton";

const slider1 = [
  {
    color: "#e3e5e7",
    src: "ts.png",
  },
  {
    color: "#d6d7dc",
    src: "nextjs.png",
  },
  {
    color: "#e3e3e3",
    src: "react0.png",
  },
  {
    color: "#e5e0e1",
    src: "redux.png",
  },
  //   {
  //     color: "#d4e3ec",
  //     src: "node-js.png",
  //   },
  {
    color: "#e1dad6",
    src: "gsapo.jpg",
  },
  {
    color: "#e1dad6",
    src: "framer.png",
  },
  {
    color: "#e1dad6",
    src: "mui.png",
  },
  {
    color: "#d4e3ec",
    src: "js.png",
  },
];

const slider2 = [
  {
    color: "#d4e3ec",
    src: "js.png",
  },
  {
    color: "#e5e0e1",
    src: "js.png",
  },
  {
    color: "#d7d4cf",
    src: "java.png",
  },
  {
    color: "#e1dad6",
    src: "html.png",
  },
  {
    color: "#e1dad6",
    src: "tailwind.png",
  },
  {
    color: "#e1dad6",
    src: "ws.png",
  },
  {
    color: "#e1dad6",
    src: "prisma.webp",
  },
  {
    color: "#e1dad6",
    src: "stripe.webp",
  },
  {
    color: "#e1dad6",
    src: "jwt.png",
  },
];

const slider3 = [
  {
    color: "#d4e3ec",
    src: "node-js.png",
  },
  {
    color: "#e5e0e1",
    src: "express.png",
  },
  {
    color: "#d7d4cf",
    src: "mongodb.png",
  },
  {
    color: "#e1dad6",
    src: "firebase.png",
  },
  {
    color: "#e1dad6",
    src: "postger.png",
  },
  {
    color: "#e1dad6",
    src: "mysql.png",
  },
  {
    color: "#e1dad6",
    src: "docker.webp",
  },
  {
    color: "#e1dad6",
    src: "postman.svg",
  },
];

const slider4 = [
  {
    color: "#e3e5e7",
    src: "ts.png",
  },
  {
    color: "#d6d7dc",
    src: "nextjs.png",
  },
  {
    color: "#e3e3e3",
    src: "react0.png",
  },
  {
    color: "#e5e0e1",
    src: "redux.png",
  },
  //   {
  //     color: "#d4e3ec",
  //     src: "node-js.png",
  //   },
  {
    color: "#e1dad6",
    src: "gsapo.jpg",
  },
  {
    color: "#e1dad6",
    src: "framer.png",
  },
  {
    color: "#e1dad6",
    src: "mui.png",
  },
  {
    color: "#d4e3ec",
    src: "js.png",
  },
  {
    color: "#d4e3ec",
    src: "node-js.png",
  },
  {
    color: "#e5e0e1",
    src: "express.png",
  },
  {
    color: "#d7d4cf",
    src: "mongodb.png",
  },
  {
    color: "#e1dad6",
    src: "firebase.png",
  },
  {
    color: "#e1dad6",
    src: "postger.png",
  },
  {
    color: "#e1dad6",
    src: "mysql.png",
  },
  {
    color: "#e1dad6",
    src: "docker.webp",
  },
  {
    color: "#e1dad6",
    src: "postman.svg",
  },
  {
    color: "#d4e3ec",
    src: "js.png",
  },
  {
    color: "#d7d4cf",
    src: "java.png",
  },
  {
    color: "#e1dad6",
    src: "html.png",
  },
  {
    color: "#e1dad6",
    src: "tailwind.png",
  },
  {
    color: "#e1dad6",
    src: "ws.png",
  },
  {
    color: "#e1dad6",
    src: "prisma.webp",
  },
  {
    color: "#e1dad6",
    src: "stripe.webp",
  },
  {
    color: "#e1dad6",
    src: "jwt.png",
  },
];

export default function index() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const height = useTransform(scrollYProgress, [0, 0.9], [50, 0]);

  return (
    <div ref={container} className={styles.slidingImages} id="skills">
      
      <div className={styles.skill}>
        <Rounded >
          <p>Skills</p>
        </Rounded>
      </div>
      <motion.div style={{ x: x1 }} className={styles.slider}>
        {slider1.map((project, index) => {
          return (
            <div
              key={index}
              className={styles.project}
              style={{ backgroundColor: project.color }}
            >
              <div className={styles.imageContainer}>
                <Image
                  fill={true}
                  alt={"image"}
                  src={`/images/${project.src}`}
                  style={{
                    objectFit: "contain",
                  }}
                />
              </div>
            </div>
          );
        })}
      </motion.div>
      <motion.div style={{ x: x2 }} className={styles.slider}>
        {slider2.map((project, index) => {
          return (
            <div
              key={index}
              className={styles.project}
              style={{ backgroundColor: project.color }}
            >
              <div key={index} className={styles.imageContainer}>
                <Image
                  fill={true}
                  alt={"image"}
                  src={`/images/${project.src}`}
                  style={{
                    objectFit: "contain",
                  }}
                />
              </div>
            </div>
          );
        })}
      </motion.div>
      <motion.div style={{ x: x1 }} className={styles.slider}>
        {slider3.map((project, index) => {
          return (
            <div
              key={index}
              className={styles.project}
              style={{ backgroundColor: project.color }}
            >
              <div className={styles.imageContainer}>
                <Image
                  fill={true}
                  alt={"image"}
                  src={`/images/${project.src}`}
                  style={{
                    objectFit: "contain",
                  }}
                />
              </div>
            </div>
          );
        })}
      </motion.div>

      <div className={styles.vertical}>
        {slider4.map((item, index) => (
          <div
            key={index}
            className={styles.slideitem}
            style={{ backgroundColor: item.color }}
          >
            <div className={styles.imageContainernew}>
                <Image
                  fill={true}
                  alt={"image"}
                  src={`/images/${item.src}`}
                  style={{
                    objectFit: "contain",
                  }}
                />
              </div>
          </div>
        ))}
      </div>
      <motion.div style={{ height }} className={styles.circleContainer}>
        <div className={styles.circle}></div>
      </motion.div>
    </div>
  );
}
