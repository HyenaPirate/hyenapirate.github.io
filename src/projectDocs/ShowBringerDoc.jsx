import {
  DocImage,
  DocVideo,
  DocChapter,
  DocCode,
  DocQuote,
  DocTable,
  DocFile,
  DocYoutube,
  DocImageSet,
  DocLink,
} from "../components/ProjectDocumentation";

function ShowBringerDoc() {
  return (
    <>
      <DocChapter title="Introduction">
        <p>
          One day when I was in highschool, a pen to my drawing tablet broke. I
          didn't have projects at the time which didn't include drawing, so I
          figured I'd try to learn something new. I ended up installing Unity 3D
          and attempting to make a game.
        </p>

        <p>
          After few hours and with basic knowledge in my pocket I began creating
          an original game. I based my idea off of an old screenshot, which
          represented{" "}
          <a
            className="doc-text-link"
            href="https://freddy-fazbears-pizza.fandom.com/wiki/Funtime_Foxy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Funtime Foxy
          </a>{" "}
          with a bazooka in a game{" "}
          <a
            className="doc-text-link"
            href="https://en.wikipedia.org/wiki/Garry%27s_Mod"
            target="_blank"
            rel="noopener noreferrer"
          >
            Garry's Mod
          </a>
          , on it's iconic map gm_construct.
        </p>

        <p>
          Assets I've eventually drawn for the game were made in Gimp with mouse
          and keyboard, but I think they ended up looking pretty good and in my
          opinion add to the character and charm of the project.
        </p>

        <p>
          The game was never meant to be officially published, therefore it
          contains a lot of copyrighted material, as well as excess amount of
          profanities in the dialogues. Just something to keep in mind if you
          wish to play it.
        </p>

        <DocLink href="https://github.com/HyenaPirate/Archive/tree/main/Games/ShowBringer" />

        <DocQuote title="Watch out for spoilers!">
          The game is free for you to download and try out. The rest of the
          document describes gameplay and features, which can impact the little
          experience it offers.
        </DocQuote>

        <DocImage
          src="/assets/projectsData/showBringer/aaaaaa.jpg"
          title="The original screenshot."
        />
      </DocChapter>

      <DocChapter title="Features">
        <h1>Main menu</h1>
        <p>
          This has to be my favourite part of the game. I know it's not really
          an impressive display of coding abilities, but I still love how it
          turned out. It features the main character, which has two states,
          borrowing a bit from the original FNaF esthetic. The logo was meant to
          bounce in the rythm of the music, which it did in one of the builds,
          before I remade the audio system. And speaking of music: although I am
          not any good at making it, the theme I came up with here has to be a
          strong candidate as my favourite track. Below you can see a
          reacreation of the main menu, with the bouncing logo, the way God
          intended.
        </p>
        <DocYoutube
          link="https://youtu.be/HrCj5FEy4fM"
          title="Main Menu recreation"
        />
        <h1>Character movement</h1>
        <p>
          Something that I'm particularly proud of is the way I made the
          character react to player input. The model consists of two parts, a
          lower and upper torso. This way legs can be animated to represent
          running, but the character can also correctly aim. Depending on where
          the cursor is, Foxy aims left, right, or above. This part also pivots
          around shoulders, which adjusts perfectly towards the cursor's
          position. This was something I came up and programmed myself, and I
          was super happy when it ended up working.
        </p>

        <DocImageSet title="Foxy aiming at different angles.">
          <DocImage src="/assets/projectsData/showBringer/lookleft.png"></DocImage>
          <DocImage src="/assets/projectsData/showBringer/lookup.png"></DocImage>
          <DocImage src="/assets/projectsData/showBringer/lookright.png"></DocImage>
        </DocImageSet>

        <h1>Weapons</h1>
        <p>
          Even though originally there was only supposed to be a rocket
          launcher, I've been following tutorials on how to make different
          weapons, and it resulted in them being a part of the game. Very basic
          implementations, with pistol being probably the weakest, since it
          didn't really work like a firearm should. It ended up being kmore of a
          stone tossing device, with very limited range. I also didn't have the
          time to make separate sprites to represent each weapon being equipped.
        </p>

        <h1>Unlockables</h1>
        <p>
          This is one thing I really liked. I implemented a system that allowed
          to change some parts of the game, basically making skins. By unlocking
          an item, you could not only change appearance of the player model, but
          also the main menu, with different assets, fonts and sound. It's not
          very revolutionary, but having the ability to alter the game just by
          unlocking stuff (not by microtransactions) is always fun in my
          opinion.
        </p>

        <h1>Other</h1>
        <p>
          Here's a list of different things worth pointing out, but ones that
          are pretty self explonatory:
        </p>
        <ul>
          <li>
            Settings menu, including volume sliders, screen resolution and
            refreshrate.
          </li>
          <li>Save and load file system.</li>
          <li>
            Killplane (Not very obvious in some modern productions it seems).
          </li>
          <li>Dialogue system.</li>
          <li>Healthbars.</li>
          <li>Cheat codes redeeming system.</li>
        </ul>
      </DocChapter>

      <DocChapter title="Gameplay">
        <p>
          The whole idea for the game was to have Funtime Foxy run around with a
          rocket launcher. Because of this there was not much in terms of story,
          and considering the fact I was still figuring out how to do basic
          mechanics, the game ended up quite lacking. It features a few test
          levels, including one for each weapon; a pistol, a sniper rifle, and a
          rocket launcher (obviously). Half of them don't even include the
          proper player model.
        </p>

        <p>
          Besides jumping and shooting there's not really much to do for a
          player. I think I spent way more time creating fun additions and UI
          design then thinking ahead for actual levels. I still managed to add a
          bunch of features that I think are great ideas, which I would
          definately reuse in other projects.
        </p>

        <p>
          The final release (Alpha 2.2) does not include all of the features
          that were worked on. Before I stopped working on the project, I
          implemented a separate location for buying items, as well as player
          death mechanism. I tried to add ai to the enemies, to create actual
          challange, and this is the final nail in the coffin, since I didn't
          get it to work correctly. Being a different person at that time, I
          prefered to cancel the whole thing, rather than spend more time
          getting a single piece to work.
        </p>
      </DocChapter>

      <DocChapter title="Current state">
        <p>
          Project has been abandonned for years. I won't be coming back to it,
          for sure not the original. If I ever decide to revisit the idea, I
          will redo everything from ground up, since it being my first game, the
          code is very much a mess.
        </p>

        <p>
          For now it stands as a testament to my creativity and passion. I'm
          proud of what I accomplished and look back at it fondly.
        </p>

        <DocImage
          src="/assets/projectsData/showBringer/screenshot2.jpg"
          title="The less known second screenshot, taken on the same day."
        />
      </DocChapter>
    </>
  );
}

export default ShowBringerDoc;
