import {
  DocImage,
  DocVideo,
  DocChapter,
  DocCode,
  DocQuote,
  DocTable,
  DocFile,
} from "../components/ProjectDocumentation";

function ZeroToMechanicDoc() {
  return (
    <>
      <DocChapter title="Introduction">
        <p>
          Once my bussiness required me to own a car, I bought a 2000 1.6l
          petrol Volkswagen Golf mk.4, and immediately fell in love with it. I
          began to learn specifics of how cars work even though I never had any
          similiar interests prior to this moment.
        </p>
        <p>
          Being an old car, there was plenty of problems with it, which allowed
          me to test my skills and fix them on my own. I did everything I could
          with limited funds, tools and space for this kind of work.
        </p>
        <p>
          Unfortunately the car turned out to be in too bad of a condition to
          justify working on it further; mainly rusted frame and worn out
          engine. The golf was scrapped in july 2026 and as of today, I do not
          own any other vehicle, mainly since my daily needs do not require me
          to purchase one yet.
        </p>
        <p>
          In the future I plan to get a motorbike licence with a nice bike to go
          with it. For cars, I would love to own a Subaru Impreza 22B STI, VW
          Golf mk.2 or pre-facelift BMW M3 E46, and customize it to look like
          the GTR from Need For Speed Most Wanted 2005.
        </p>
      </DocChapter>
      <DocChapter title="Jobs done">
        <h3>Jobs I have done to my own Volkswagen Golf 4:</h3>
        <ul>
          <li>Replaced oil.</li>
          <li>Replaced oil filter.</li>
          <li>Replaced air filter.</li>
          <li>Replaced cabin filter.</li>
          <li>Replaced fuel filter.</li>
          <li>Replaced breakpads and rotors.</li>
          <li>Replaced rear beam bushings.</li>
          <li>Cleaned throttle body.</li>
          <li>Thoroughly cleaned interior.</li>
          <li>Replaced battery.</li>
          <li>Removed and inspected starter motor.</li>
          <li>Disconnected faulty passenger side speaker.</li>
          <li>
            Run new ground wiring between battery, engine block and common
            ground (body).
          </li>
          <li>Touched-up paint job in spots of minor scratches.</li>
          <li>Cut out the catalytic converter.</li>
        </ul>

        <h3>Jobs I have done to my dad's Opel Insygnia:</h3>
        <ul>
          <li>Replaced V-belt.</li>
          <li>Replaced V-belt tensioner.</li>
          <li>Replaced alternator.</li>
        </ul>

        <h3>Jobs I have helped do to my friend's Skoda Octavia:</h3>
        <ul>
          <li>Replaced oil.</li>
          <li>Replaced oil filter.</li>
        </ul>
      </DocChapter>
    </>
  );
}

export default ZeroToMechanicDoc;
