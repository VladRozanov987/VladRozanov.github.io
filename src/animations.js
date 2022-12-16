export const pageAnim = {
  hidden: {
    opacity: 1,
    y: 0,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.5,
      when: "beforeChildren",
    },
  },
};

export const listAnim = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.25,
      staggerChildren: 0.25,
      when: "beforeChildren",
    },
  },
};

export const listItemAnim = {
  hidden: {
    y: 1000,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
  show: {
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export const edItemAnim = {
  hidden: {
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};
