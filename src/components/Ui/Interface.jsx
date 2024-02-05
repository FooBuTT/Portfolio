import { Html, Text } from "@react-three/drei";
import React from "react";
import { motion } from "framer-motion";
import { useThree } from "@react-three/fiber";
import { ValidationError, useForm } from "@formspree/react";

export default function Interface(props) {
  const { navigate, setNavigate, onMobile } = props;
  const [state, handleSubmit] = useForm("xjvnyvlv");
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
          x: onMobile ? 15 : 100,
          scale: onMobile ? 1.2 : 1,
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
      {navigate === 1 ? (
        <motion.div
          whileInView={"visible"}
          animate={{
            duration: 0.1,

            scaleX: onMobile ? 0.6 : 1.2,
            scaleY: onMobile ? 0.6 : 0.9,
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
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  setNavigate(0);
                }}
                className="bg-indigo-600 text-white py-4 px-8 rounded-lg font-bold text-lg mt-16 ml-20 "
              >
                Home
              </button>
            </div>
          </div>
        </motion.div>
      ) : navigate === 2 ? (
        <Section>
          <motion.div
            whileInView={"visible"}
            animate={{
              duration: 0.1,
              scaleX: onMobile ? 0.6 : 1.2,
              scaleY: onMobile ? 0.6 : 1.1,
              scaleZ: onMobile ? 0.6 : 1,
            }}
          >
            <h2 className="text-3xl md:text-5xl font-bold ml-16">Contact me</h2>
            <div className="mt-8 p-8 rounded-md bg-white bg-opacity-50 w-96 max-w-full">
              {state.succeeded ? (
                <>
                  <p className="text-gray-900 text-center">
                    Thanks for your message !
                  </p>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      setNavigate(0);
                    }}
                    className="bg-indigo-600 text-white py-4 px-20 rounded-lg font-bold text-lg ml-14  "
                  >
                    Home
                  </button>
                </>
              ) : (
                <>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      setNavigate(0);
                    }}
                    className="bg-indigo-600 text-white py-0 px-1 rounded-lg font-bold text-xl ml-80    "
                  >
                    X
                  </button>
                  <form onSubmit={handleSubmit} autoComplete="off">
                    <label
                      htmlFor="name"
                      className="font-medium text-gray-900 block mb-1"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3"
                    />
                    <label
                      htmlFor="email"
                      className="font-medium text-gray-900 block mb-1 mt-8"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3"
                    />
                    <ValidationError
                      className="mt-1 text-red-500"
                      prefix="Email"
                      field="email"
                      errors={state.errors}
                    />
                    <label
                      htmlFor="email"
                      className="font-medium text-gray-900 block mb-1 mt-8"
                    >
                      Message
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      className="h-32 block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3"
                    />
                    <ValidationError
                      className="mt-1 text-red-500"
                      errors={state.errors}
                    />
                    <button
                      disabled={state.submitting}
                      className="bg-indigo-600 text-white py-4 px-8 rounded-lg font-bold text-lg ml-24 "
                    >
                      Submit
                    </button>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </Section>
      ) : null}
    </Section>
  );
}
