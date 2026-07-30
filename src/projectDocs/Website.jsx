import {
  DocImage,
  DocVideo,
  DocChapter,
  DocCode,
  DocQuote,
  DocTable,
  DocFile,
} from "../components/ProjectDocumentation";

function Website() {
  return (
    <>
      <DocChapter title="Introduction">
        <p>
          This website is designed to be an online resume, alongside a
          portofolio of my original projects. I want to display my various
          skills, as well as interests. Written in React.js, hosted on GitHub.
        </p>
        <p>
          It has been in it's entirety made from scratch by me, with no outside
          tools like Wordpress.
        </p>

        <DocQuote title="Important:">
          Everything is still in development, meaning the design, as well as
          content is subject to change. Please don't judge me too hard based on
          the current functionality, this is my first time attempting to make
          such a complicated website :)
        </DocQuote>
      </DocChapter>

      <DocChapter title="Planned features">
        <ul>
          <li>Language selection (PL, ENG).</li>
          <li>Darkmode toggle.</li>
          <li>UI redesign for a better look.</li>
          <li>Improved mobile experience.</li>
          <li>Optimized file fetching to limit data usage.</li>
        </ul>
      </DocChapter>
    </>
  );
}

export default Website;
