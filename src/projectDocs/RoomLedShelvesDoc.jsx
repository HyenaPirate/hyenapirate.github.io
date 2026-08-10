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

function RoomLedShelvesDoc() {
  return (
    <>
      <DocChapter title="Documentation comming soon.">
        <DocImage src="/assets/projectsData/roomLedShelves/photo4.jpeg" />
        <DocImage src="/assets/projectsData/roomLedShelves/photo3.jpeg" />
        <DocImage src="/assets/projectsData/roomLedShelves/photo1.jpg" />
      </DocChapter>
    </>
  );
}

export default RoomLedShelvesDoc;
