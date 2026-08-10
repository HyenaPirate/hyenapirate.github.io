const ProjectsDatabase = [
  {
    id: 0,
    title: "This website",
    bannerPath: "/assets/projectsData/website/qrCode.png",
    summary:
      "The website you are currently visiting, written from scratch in React.js.",
    tags: ["coding"],
    docPath: "../projectDocs/WebsiteDoc.jsx",
    state: "ongoing",
  },
  {
    id: 1,
    title: "Pod Kartonem",
    bannerPath: "/assets/projectsData/podKartonem/Logo1.png",
    summary:
      "Podcast YouTube channel created and hosted in cooperation with Bartłomiej ZGbart Szkudlarski.",
    tags: ["personal"],
    state: "ongoing",
    hide: true,
  },
  {
    id: 2,
    title: "Custom Smart Home Installation",
    bannerPath: "/assets/projectsData/customSmartHomeInstallation/Diagram1.png",
    summary:
      "This is a project I made for my engineering thesis; A Raspberry Pi / Arduino based system, focused on customization and ease of use, complete with a mobile app.",
    tags: [
      "arduino",
      "electronics",
      "coding",
      "raspberrypi",
      "university",
      "android",
    ],
    docPath: "../projectDocs/CustomSmartHomeInstallationDoc.jsx",

    state: "completed",
  },
  {
    id: 3,
    title: "Universal Zigbee Module",
    bannerPath: "/assets/projectsData/universalZigbeeModule/zigbeeTest.png",
    summary:
      "This is a project I made for my master's thesis; An ESP-32 based module, capable of adding Smart Home compatibility to any electronics.",
    tags: ["university", "electronics", "coding"],
    docPath: "../projectDocs/UniversalZigbeeModuleDoc.jsx",
    state: "completed",
  },
  {
    id: 4,
    title: "Cat Pirates",
    bannerPath: "/assets/projectsData/catPirates/ue_logo.webp",
    summary: "Gatos de la cartel.",
    tags: ["game", "unrealengine", "personal"],
    docPath: "../projectDocs/CatPiratesDoc.jsx",
    state: "canceled",
  },
  {
    id: 5,
    title: "Astral Prisoners",
    bannerPath: "/assets/projectsData/astralPrisoners/icon.png",
    summary:
      "An Unity game made in cooperation with Dawid Błaszczyk for one of engineering classes.",
    tags: ["university", "game", "unity3D"],
    docPath: "../projectDocs/AstralPrisonersDoc.jsx",
    state: "completed",
  },
  {
    id: 6,
    title: "Zero to Mechanic",
    bannerPath: "/assets/projectsData/zeroToMechanic/golf1.jpg",
    summary:
      "A series of mechanical works I made to mine and other's cars, in order to learn and improve.",
    tags: ["mechanics"],
    docPath: "../projectDocs/ZeroToMechanicDoc.jsx",
    state: "completed",
  },
  {
    id: 7,
    title: "Motion Activated Light System",
    bannerPath: "/assets/projectsData/motionLedSystem/open1.jpg",
    summary:
      "A custom setup I made for my parents, consisting of motion activated LED lights, equipped with brightness control and day-night cycle sensors.",
    tags: ["arduino", "coding", "electronics", "print3D"],
    docPath: "../projectDocs/MotionLedSystemDoc.jsx",
    state: "completed",
  },
  {
    id: 8,
    title: "LED shelves",
    bannerPath: "/assets/projectsData/roomLedShelves/photo2.jpg",
    tags: ["arduino", "coding", "electronics"],
    docPath: "../projectDocs/RoomLedShelvesDoc.jsx",
    state: "suspended",
  },
  {
    id: 9,
    title: "MCC",
    bannerPath: "/assets/projectsData/mcc/ss1.png",
    tags: ["electronics", "mechanics", "personal", "coding"],
    state: "planned",
    docPath: "../projectDocs/MCCDoc.jsx",
  },
  {
    id: 10,
    title: "Smart Home Central Unit",
    bannerPath: "/assets/projectsData/smarthomeCentralUnit/photo2.png",
    tags: ["personal", "raspberrypi", "coding", "electronics", "print3D"],
    docPath: "../projectDocs/SmartHomeCentralUnitDoc.jsx",
    summary:
      "A self designed and assembled laptop-like device, meant to serve as a Master Unit for my local Smart Home, with field-operational esthetic.",
    state: "suspended",
  },
  {
    id: 11,
    title: "Workstation",
    bannerPath: "/assets/projectsData/workstation/desk1.jpg",
    tags: ["personal"],
    docPath: "../projectDocs/WorkstationDoc.jsx",
    state: "ongoing",
  },
  {
    id: 12,
    title: "Zigbee Smart Home Installation",
    bannerPath: "/assets/projectsData/zigbeeSmartHome/devices1.png",
    tags: ["coding", "electronics"],
    docPath: "../projectDocs/ZigbeeSmartHomeDoc.jsx",
    state: "ongoing",
  },
  {
    id: 13,
    title: "Customized Gasmask",
    bannerPath: "/assets/projectsData/gasmask/ss1.png",
    tags: ["personal", "print3D"],
    docPath: "../projectDocs/GasMaskDoc.jsx",
    state: "suspended",
  },
  {
    id: 14,
    title: "Show Bringer",
    bannerPath: "/assets/projectsData/showBringer/icon.png",
    summary:
      "My first ever Unity project, a small 2D game, with main character being Funtime Foxy from Five Nights at Freddy's franchise, inspired by the screenshot I took years before.",
    tags: ["game", "unity3D", "personal", "coding"],
    docPath: "../projectDocs/ShowBringerDoc.jsx",
    state: "canceled",
  },
  {
    id: 15,
    title: "V8 engine model",
    bannerPath: "/assets/projectsData/printedV8/photo1.jpg",
    summary:
      "A self designed, modeled, printed and assembled scaled model of an V8 engine, running on a small DC motor.",
    tags: ["personal", "mechanics", "print3D"],
    docPath: "../projectDocs/PrintedV8Doc.jsx",
    state: "completed",
  },
  {
    id: 16,
    title: "Key hanger",
    bannerPath: "/assets/projectsData/printedKeyHanger/keyhanger1.jpg",
    summary:
      "My first 3D printed project; a custom-shaped hanger for house and car keys.",
    tags: ["personal", "print3D"],
    docPath: "../projectDocs/PrintedKeyHangerDoc.jsx",
    state: "completed",
  },
  {
    id: 17,
    title: "M9 Bayonet display",
    bannerPath: "/assets/projectsData/printedBayonetStand/bayonet.jpg",
    summary:
      "A custom 3D printed bracket that holds a replica of a Counter-Strike knife.",
    tags: ["personal", "print3D"],
    docPath: "../projectDocs/PrintedBayonetStandDoc.jsx",
    state: "completed",
  },
  {
    id: 18,
    title: "UZ Memory",
    bannerPath: "/assets/projectsData/uzMemory/ssMenu.png",
    summary:
      "A game of memory made for a teamwork based class, part of my master's degree major in University of Zielona Góra, with appropriate theme, made in Unity3D.",
    tags: ["university", "game", "unity3D"],
    docPath: "../projectDocs/UzMemoryDoc.jsx",
    state: "completed",
  },
  {
    id: 19,
    title: "UZ Poker",
    bannerPath: "/assets/projectsData/uzPoker/Poker_logo_glowing.png",
    summary:
      "A game of poker made for a Unity3D based class, part of my master's degree major in University of Zielona Góra.",
    tags: ["university", "game", "unity3D"],
    docPath: "../projectDocs/UzPokerDoc.jsx",
    state: "completed",
  },
  {
    id: 20,
    title: "Music player",
    bannerPath: "/assets/projectsData/musicPlayer/unity_logo.jpg",
    summary:
      "A piece of softaware deisgned to play imported songs with a visualiser, made for a Unity3D based class, part of my master's degree major in University of Zielona Góra.",
    tags: ["university", "unity3D", "coding"],
    docPath: "../projectDocs/MusicPlayerDoc.jsx",
    state: "completed",
  },
  {
    id: 21,
    title: "SkyCam",
    bannerPath: "/assets/projectsData/skyCam/pic2.png",
    summary:
      "An Arduino scale recreation of an over-field camera system used at stadiums and arenas.",
    tags: ["university", "arduino", "electronics", "mechanical", "coding"],
    docPath: "../projectDocs/SkyCamDoc.jsx",
    state: "completed",
  },
  {
    id: 22,
    title: "Protein Manager",
    bannerPath: "/assets/projectsData/proteinManager/android_logo.svg",
    summary:
      "An app to track an intake of protein, callories etc., made as an university project",
    tags: ["university", "coding", "android"],
    docPath: "../projectDocs/ProteinManagerDoc.jsx",
    state: "completed",
  },
];

export default ProjectsDatabase;
