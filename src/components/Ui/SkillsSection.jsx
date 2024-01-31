import { Html, Text } from "@react-three/drei";
import React from "react";
import { motion } from "framer-motion";
import { useThree } from "@react-three/fiber";
export default function SkillsSection(props) {
  const { navigate, setNavigate, onMobile } = props;

  const Section = (props) => {
    const { children, mobileTop } = props;

    return (
      <motion.section
        className={`
  h-screen 
  flex flex-col items-start
  ${mobileTop ? "justify-start md:justify-center" : "justify-center"}
  `}
        initial={{
          opacity: 0,
          y: 50,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 1,
            delay: 0.6,
          },
        }}
      >
        {children}
      </motion.section>
    );
  };

  const skills = [
    {
      title: "JavaScript",
      level: 90,
    },
    {
      title: "Threejs / React Three Fiber",
      level: 50,
    },
    {
      title: "React / React Native",
      level: 90,
    },
    {
      title: "Nodejs",
      level: 90,
    },
    {
      title: "Typescript",
      level: 60,
    },
    {
      title: "Express",
      level: 80,
    },
    {
      title: "Sequalize-CLI",
      level: 80,
    },
  ];
  const languages = [
    {
      title: "🇷🇺 Russian",
      level: 100,
    },
    {
      title: "🇺🇸 English",
      level: 80,
    },
  ];

  return (
    <Section>
      {navigate === 1 && (
        <motion.div
          whileInView={"visible"}
          animate={{
            duration: 0.1,

            scaleX: onMobile ? 0.6 : 0.8,
            scaleY: onMobile ? 0.6 : 0.8,
            scaleZ: onMobile ? 0.6 : 0.8,
          }}
        >
          <h2 className="text-5xl font-bold text-white">Skills</h2>
          <div className=" mt-8 space-y-4">
            {skills.map((skill, index) => (
              <div className="w-64" key={index}>
                <motion.h3
                  className="text-xl font-bold text-gray-100"
                  initial={{
                    opacity: 0,
                  }}
                  variants={{
                    visible: {
                      opacity: 1,
                      transition: {
                        duration: 1,
                        delay: 1 + index * 0.2,
                      },
                    },
                  }}
                >
                  {skill.title}
                </motion.h3>
                <div className="h-2 w-full bg-gray-200 rounded-full mt-2">
                  <motion.div
                    className="h-full bg-red-600 rounded-full "
                    style={{ width: `${skill.level}%` }}
                    initial={{
                      scaleX: 0,
                      originX: 0,
                    }}
                    variants={{
                      visible: {
                        scaleX: 1,
                        transition: {
                          duration: 1,
                          delay: 1 + index * 0.2,
                        },
                      },
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
          <div>
            <h2 className="text-5xl font-bold mt-10 text-white">Languages</h2>
            <div className=" mt-8 space-y-4">
              {languages.map((lng, index) => (
                <div className="w-64" key={index}>
                  <motion.h3
                    className="text-xl font-bold text-gray-100"
                    initial={{
                      opacity: 0,
                    }}
                    variants={{
                      visible: {
                        opacity: 1,
                        transition: {
                          duration: 1,
                          delay: 2 + index * 0.2,
                        },
                      },
                    }}
                  >
                    {lng.title}
                  </motion.h3>
                  <div className="h-2 w-full bg-gray-200 rounded-full mt-2">
                    <motion.div
                      className="h-full bg-red-600 rounded-full "
                      style={{ width: `${lng.level}%` }}
                      initial={{
                        scaleX: 0,
                        originX: 0,
                      }}
                      variants={{
                        visible: {
                          scaleX: 1,
                          transition: {
                            duration: 1,
                            delay: 2 + index * 0.2,
                          },
                        },
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </Section>
  );
}
