const randomString = (length) => {
  const x = 36 ** (length + 1);
  const y = 36 ** length;
  return Math.round(x - (Math.random() * y)).toString(36).slice(1);
};

const pages = [
  {
    route: '/',
    title: 'testName',
    heading: 'ABOUT THIS SITE',
  },
  {
    route: '/about',
    title: 'About | testName',
    heading: 'ABOUT ME',
  },
  {
    route: '/projects',
    title: 'Projects | testName',
    heading: 'PROJECTS',
  },
  {
    route: '/stats',
    title: 'Stats | testName',
    heading: 'STATS',
  },
  {
    route: '/contact',
    title: 'Contact | testName',
    heading: 'CONTACT',
  },
];

export { pages, randomString };
