import {
  DocImage,
  DocVideo,
  DocChapter,
  DocCode,
  DocQuote,
  DocTable,
  DocFile,
} from "../components/ProjectDocumentation";

function MotionLedSystem() {
  return (
    <>
      <DocChapter title="Introduction">
        <p>
          This is a project requested by my parents, who wanted LED lights in
          the staircase. Additionally, the lights were to be motion triggered. I
          took upon myself to also add a control for brightness, and implement a
          light sensor, which allowed the system not to be active during the
          day, which would save up on electricity.
        </p>

        <p>
          I've designed the circuit myself, wired everything up, wrote the code
          and enclosed the electronics in custom designed 3D printed box.
        </p>
      </DocChapter>

      <DocChapter title="Circuit">
        <p>
          Below you can see the circuit diagram and the list of parts used.
          Notice that in the final version I added a potentiometer, which
          allowed for adjusting the sensitivity of day-night cycle of the
          system. I also do not remember the values of resistors used for the
          LEDs, but that should not be a concern for anyone trying to replicate
          the project.
        </p>
        <DocImage
          src="/assets/projectsData/motionLedSystem/diagram.jpg"
          title="Early circuit diagram."
        ></DocImage>

        <ul>
          <li>12V 6,25A 150W Power Supply</li>
          <li>Motion sensors PIR HC-SR501</li>
          <li>Light intensity sensor BH1750 GY-302</li>
          <li>Rocker switch</li>
          <li>Red, Blue and Yellow 5mm LEDs</li>
          <li>LED Strips Neon COB 24V 320 led/m 4000K 8MM</li>
          <li>LED DIMMER regulator 12V 24V 30A 360W</li>
          <li>Arduino Nano clone - ATmega328P CH340G V3.0</li>
          <li>DC-DC LM2596S 5V 5A Step-Down 9-26V</li>
          <li>5V relay</li>
          <li>Rotary potentiometer B10K</li>
        </ul>

        <p>
          It's also important to adress the wiring, as the width of cables
          directly impacts the brightness of the strips over a long distance. I
          also opted for thicker cables running to the sensors. Now I know I
          could use a signal amplifier, but it was not something I worked with
          before, and I also wanted to make sure the sensors get proper power.
        </p>
      </DocChapter>

      <DocChapter title="Photos">
        <DocImage
          src="/assets/projectsData/motionLedSystem/standby.jpg"
          title="System detected brightness below the threshold and is awaiting motion."
        ></DocImage>
        <DocImage
          src="/assets/projectsData/motionLedSystem/hallway.jpg"
          title="Staircase illuminated, with a motion sensor visible in the picture."
        ></DocImage>
        <DocImage
          src="/assets/projectsData/motionLedSystem/open1.jpg"
          title="Electronics inside the casing. Wiring is a bit of a mess, since I left myself very little room when designing the enclosure."
        ></DocImage>
      </DocChapter>
    </>
  );
}
export default MotionLedSystem;
