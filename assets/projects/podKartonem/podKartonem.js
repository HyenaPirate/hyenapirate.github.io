export function loadProject(){

    const container = document.getElementById("overlayCustom");

    createChapter(
        container,
        "Overview",
        "This project is my ESP32-C6 Zigbee smart home module."
    );

    createImage(
        container,
        "assets/projects/zigbee/board.jpg"
    );

    createChapter(
        container,
        "Demo"
    );

    createYoutube(
        container,
        "abc123"
    );
}