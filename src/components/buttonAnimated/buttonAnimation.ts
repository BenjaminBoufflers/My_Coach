export const shadowAnimation = {
  visible: {
    boxShadow: "0px 0px 0px rgba(251, 146, 60, 0.8)",
    y: 0,
    x: 0,
    scale: 1,
    transition: { duration: 0.2 },
  },
  hover: {
    boxShadow: "-2px 5px 0px rgba(251, 146, 60, 0.8)",
    y: -2,
    x: 2,
    scale: 1.02,
    transition: { duration: 0.2 },
    backgroundColor: "#7c2d12",
  },
  tap: {
    scale: 1,
    y: 0,
    x: 0,
    boxShadow: "0px 0px 0px rgba(251, 146, 60, 0.8)",
  },
};

export const fillAnimation = {
  hidden: {
    background: "linear-gradient(45deg, #fb923c 50%, transparent 50%)",
    backgroundSize: "300% 100%",
    backgroundPosition: "100% 0%",
    color: "white",
    transition: { duration: 0.5 },
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: { duration: 0.5 }
  },

  hover: {
    backgroundPosition: "0% 0%",
    color: "black",
    transition: { duration: 0.3, backgroundPosition: { duration: 0.5 } },
  },
};
