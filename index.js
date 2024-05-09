function swapnoneelInfo() {
  const intro =
    "Hello, I'm Swapnoneel Saha, a Web Developer, UI/UX designer, and Technical Writer based in Kolkata, India.";
  const work =
    "Currently, I'm working as a Technical Writer at Tutorials Point.";
  const website = "https://swapnoneel.vercel.app";
  const twitter = "https://twitter.com/swapnoneel123";
  const github = "https://github.com/Swpn0neel";
  const linkedin = "https://www.linkedin.com/in/swapnoneel-saha-14a3161b6/";
  const leetcode = "https://leetcode.com/u/Swapnoneel/";
  const email = "swapnoneelsaha111@gmail.com";
  const contact =
    "If you want to contact me, consider dropping me an email at swapnoneelsaha111@gmail.com";
  const bye = "Bye! Have a nice day!!";

  const message = `
\x1b[38;5;105m${intro}
${work}\x1b[38;5;51m

\x1b[38;5;93mPortfolio:\x1b[0m  \x1b[38;5;39m${website}\x1b[38;5;51m
\x1b[38;5;93mTwitter:\x1b[0m \x1b[38;5;39m${twitter}\x1b[38;5;51m
\x1b[38;5;93mLinkedIn:\x1b[0m \x1b[38;5;39m${linkedin}\x1b[38;5;51m
\x1b[38;5;93mGitHub:\x1b[0m \x1b[38;5;39m${github}\x1b[38;5;51m
\x1b[38;5;93mLeetcode:\x1b[0m \x1b[38;5;39m${leetcode}\x1b[38;5;51m

\x1b[38;5;105mIf you want to contact me, consider dropping me an email at\x1b[0m \x1b[38;5;39m${email}\x1b[38;5;51m
\x1b[38;5;105m${bye}\x1b[0m`;

  console.log(message);
}

swapnoneelInfo();
