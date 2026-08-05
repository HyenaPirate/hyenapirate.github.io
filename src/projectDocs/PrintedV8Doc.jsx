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

function PrintedV8Doc() {
  return (
    <>
      <DocChapter title="Introduction">
        <p>
          This is the most complicated 3D printing project I did as of today.
          After a few easier ones, I decided to create an engine assembly,
          including crankshaft and pistons. The result is an operational model,
          which can be run with a motor, simulating a real engine. Both the
          motor and the white sprocket I salvaged from an old toy helicopter,
          then modeled an adapter and baseplate to connect them with the engine.
        </p>

        <p>
          The project was made in Onshape, which was my first software for 3D
          engineering. You can visit the document, as well as download the STL
          files below.
        </p>

        <DocQuote title="Important:">
          I am unsure of the state of the document. I remember I was messing
          around with the crankshaft for the prints, and am not confident if the
          files are ready to print. The assembly is definetly broken and won't
          simulate with redoing the joints.
        </DocQuote>

        <DocLink
          text="Visit Onshape Document"
          color="#1B7727"
          icon="/assets/icons/onshape-dark.svg"
          href="https://cad.onshape.com/documents/8188376c01120fbe4a7626c1/w/2e6b2662e729dbdfe38ca9f1/e/e8470ccecc2b9dddb8afe9ad"
        />

        <DocLink href="https://github.com/HyenaPirate/Archive/tree/main/Prints3D/V8_Engine" />
      </DocChapter>

      <DocChapter title="Demonstration">
        <p>
          Below you can see a video showing the engine running, proving I can
          design, print and assemble real enginnering components. This is before
          I ran too much current into the motor trying to rev the engine to the
          limit and ultimately burning it. To my surprise, the actual print held
          up great and with a new DC motor it is ready to be run again.
        </p>
        <DocYoutube
          link="https://youtu.be/5SNOzGgebBo"
          title="Model running showcase"
        />
      </DocChapter>
    </>
  );
}

export default PrintedV8Doc;
