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

function GasMaskDoc() {
  return (
    <>
      <DocChapter title="Documentation comming soon.">
        <DocImage
          src="/assets/projectsData/gasmask/ConceptArt_1.png"
          title="The concept art sketches."
        />
      </DocChapter>
    </>
  );
}

export default GasMaskDoc;
