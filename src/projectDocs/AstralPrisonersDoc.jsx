import {
  DocImage,
  DocVideo,
  DocChapter,
  DocCode,
  DocQuote,
  DocTable,
  DocImageSet,
} from "../components/ProjectDocumentation";

function AstralPrisonersDoc() {
  return (
    <>
      <DocChapter title="Introduction">
        <p>
          Astral Prisoners is a 2D game made in Unity3D Engine. It was a project
          for a team-orientated class in part of my engineering major in the
          University of Zielona Góra. It was made in cooperation with my friend
          inż. mgr Dawid Błaszczyk.
        </p>
        <p>
          Since this class put a strong emphasis on teamwork, we had to split
          the tasks with both of our abilities in mind. As the result, Dawid
          managed the logic part of the gameplay, and I was in charge of all the
          assets, as well as menus design. In the end I have created several
          music tracks, sound effects, as well as all the sprites for the
          characters, objects and UI elements. I have also made the animations
          alongside their logic. The main menu with it's graphics is also my
          work, as well as all the ingame UI.
        </p>
      </DocChapter>

      <DocChapter title="Assets">
        <DocImageSet title="Characters">
          <DocImage
            src="/assets/projectsData/astralPrisoners/Cat.png"
            title="The 'Cat'"
          ></DocImage>
          <DocImage
            src="/assets/projectsData/astralPrisoners/Demon.png"
            title="The 'Demon'"
          ></DocImage>
          <DocImage
            src="/assets/projectsData/astralPrisoners/Robot.png"
            title="The 'Robot'"
          ></DocImage>
        </DocImageSet>

        <DocImage
          src="/assets/projectsData/astralPrisoners/menu4k000.jpg"
          title="The menu graphic"
        ></DocImage>
      </DocChapter>
    </>
  );
}

export default AstralPrisonersDoc;
