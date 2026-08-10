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

function SmartHomeCentralUnitDoc() {
  return (
    <>
      <DocChapter title="Introduction">
        <p>
          This project strated because of a birthday gift from my friend. It was
          a wooden army chest for handgrenade storage from 1986. Even though I
          like army equippment, I did not have a real idea what to do with it.
        </p>

        <p>
          After a while I figured it reminds me a bit of a bomb defuser from a
          video game{" "}
          <a
            className="doc-text-link"
            href="https://en.wikipedia.org/wiki/Tom_Clancy%27s_Rainbow_Six_Siege"
            target="_blank"
            rel="noopener noreferrer"
          >
            Rainbow 6 Siege
          </a>{" "}
          . That's when I decided to create something alike, but with more
          realistic use: a smarthome server, with built-in screen, keyboard,
          speakers and physical controls.
        </p>

        <DocImage
          src="/assets/projectsData/smarthomeCentralUnit/defuser.webp"
          title="The project inspiration - a defuser from Rainbow 6 Siege."
          size="50%"
        />
      </DocChapter>

      <DocChapter title="Implementation">
        <p>
          At the core of the project is a Raspberry Pi 4, and a 100W 12V
          PowerSupply. I needed 12V specifically, because of the screen used. It
          was difficult to find an lcd panel which would be just the right size
          to fit and not be too small. I decided to purchase a full TV, which
          was meant to install in cars and trucks, and salvaghe components from
          it. This approach offered to not only provide me with a screen, but
          also proper driver board for it, as well as speakers.
        </p>
        <p>
          With these parts ready, only a keyboard was needed for somewhat crude
          but functional version. I needed it to be small enough to fit the
          larger of the two spaces inside the container. I also wanted it to
          have a low profile, as to have it occupy as little vertical space as
          possible, to leave breathing room for the electronics, as well as not
          to interfere with the screen upon closing the lid.
        </p>
        <p>
          Having a base functionality covered, everything else is for esthetics
          and creativity. For example, I wanted to have an unique way of
          switching the device on. For this I installed a key operated switch,
          which is similiar to a car ignition. This alone added a lot to the
          character of the build.
        </p>

        <p>
          Another big part of the design is a panel with 7 On-Off flip switches,
          equipped with LEDs, displaying their states. The switches are meant to
          control whichever parameters the user decides in finished Smart Home
          installation. I've designed the bracket to cover the screen's
          controller board. Big part of the final shape of the board bracket is
          the length of the wire tape between it and the lcd panel. Also, it
          needs to be low enough to leave room for the switches, which have
          their own size and wires. It's worth pointing out that with lid
          closed, switches need to be low enough not to touch it, so all these
          things add up and create a tricky situation, where the controller
          needs to be at a specific angle. One part high enough for the wire
          tape to reach the screen. The second as low as possible to make room
          for the switches. The angle cannot be too big, because the cables
          going into the controller for power and signal won't be able to reach
          their sockets.
        </p>

        <DocImage
          src="/assets/projectsData/smarthomeCentralUnit/brackets1.png"
          title="The switches bracket and the screen controller bracket underneeth - models."
          size="100%"
        />
      </DocChapter>

      <DocChapter title="Current state.">
        <p>
          As of today, the project is suspended, since I lack the time it needs
          for further refinement.
        </p>
      </DocChapter>
    </>
  );
}

export default SmartHomeCentralUnitDoc;
