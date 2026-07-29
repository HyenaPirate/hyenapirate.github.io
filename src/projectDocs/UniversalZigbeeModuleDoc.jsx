import {
  DocImage,
  DocVideo,
  DocChapter,
  DocCode,
  DocQuote,
  DocTable,
  DocFile,
} from "../components/ProjectDocumentation";

function UniversalZigbeeModuleDoc() {
  return (
    <>
      <DocChapter title="TLDR">
        <p>
          This engineering thesis focused on designing and building a universal
          Zigbee controller capable of integrating virtually any electronic
          device into existing Smart Home ecosystems. Instead of replacing
          hardware with expensive smart alternatives, the module acts as a
          bridge between conventional electronics and platforms such as Home
          Assistant.
        </p>

        <p>
          The project included market research, security analysis of modern
          Smart Home protocols, hardware design based on the ESP32-C6, firmware
          development using ESP-IDF and practical integration with Zigbee2MQTT
          and Home Assistant.
        </p>

        <p>
          For more indepth project analysis I recommend reading the actual
          paper, which can be downloaded below.
        </p>

        <DocFile
          src="/assets/projectsData/universalZigbeeModule/Mateusz-Banaszkiewicz-masters-thesis.pdf"
          description="Complete thesis PL (PDF)"
          size="8.71 MB"
        />
      </DocChapter>

      <DocChapter title="Project Goals">
        <p>
          Modern Smart Home ecosystems suffer from vendor lock-in, high hardware
          costs and limited compatibility between manufacturers. The objective
          was to create a universal Zigbee module that could expose arbitrary
          sensors and actuators as native Smart Home devices while remaining
          inexpensive, compact and energy efficient.
        </p>

        <ul>
          <li>
            Integrate custom electronics with existing Smart Home systems.
          </li>
          <li>Support Home Assistant through Zigbee2MQTT.</li>
          <li>Reduce the need for proprietary hubs and cloud services.</li>
          <li>
            Keep power consumption low enough for battery-powered devices.
          </li>
          <li>Create reusable firmware for future projects.</li>
        </ul>
      </DocChapter>

      <DocChapter title="Research">
        <p>
          Before designing the hardware, a comprehensive study of the Smart Home
          market was performed. Existing commercial solutions were compared in
          terms of price, physical size, energy consumption, compatibility and
          user experience.
        </p>

        <p>
          Different communication protocols including Wi-Fi, Bluetooth LE,
          Zigbee, Z-Wave, Thread and Matter were analyzed. Their bandwidth,
          latency, network topology, security mechanisms and practical
          limitations were evaluated before selecting Zigbee as the most
          suitable protocol for the project.
        </p>
      </DocChapter>

      <DocChapter title="Security Analysis">
        <p>
          One major part of the thesis focused on Smart Home security and
          privacy. Common attacks against wireless protocols were analyzed,
          including replay attacks, MITM, insecure pairing, spoofing and known
          protocol vulnerabilities.
        </p>

        <p>
          The project also investigated privacy risks introduced by cloud-based
          ecosystems and discussed why locally hosted systems such as Home
          Assistant provide users with significantly greater control over their
          own devices and data.
        </p>
      </DocChapter>

      <DocChapter title="Hardware">
        <ul>
          <li>ESP32-C6 microcontroller</li>
          <li>Zigbee 3.0 radio</li>
          <li>GPIO expansion for sensors and actuators</li>
          <li>Relay outputs</li>
          <li>Battery and external power support</li>
          <li>
            Designed for compact installation behind switches or inside
            enclosures
          </li>
        </ul>
      </DocChapter>

      <DocChapter title="Software">
        <p>
          Firmware was developed using Espressif's ESP-IDF framework together
          with the official Zigbee SDK. The controller dynamically exposes its
          capabilities to the Zigbee coordinator, allowing it to behave as
          different types of Smart Home devices depending on the connected
          hardware.
        </p>

        <p>
          Testing was performed using Home Assistant with Zigbee2MQTT,
          validating interoperability with commercial Zigbee ecosystems.
        </p>
      </DocChapter>

      <DocChapter title="Testing">
        <ul>
          <li>Relay switching</li>
          <li>Battery power consumption measurements</li>
          <li>Sensor station implementation</li>
          <li>Zigbee communication reliability</li>
          <li>Integration with Home Assistant automations</li>
          <li>Comparison against commercial Smart Home devices</li>
        </ul>
      </DocChapter>

      <DocChapter title="Results">
        <p>
          The prototype successfully integrated with Home Assistant through
          Zigbee2MQTT and demonstrated that a single universal controller can
          replace numerous dedicated Smart Home modules. Testing showed
          competitive dimensions and low power consumption while maintaining
          compatibility with existing Zigbee infrastructure.
        </p>

        <p>
          Although several advanced security features such as Install Codes,
          frame counters and additional pairing protections remain future work,
          the project validated the proposed architecture and established a
          solid foundation for future development.
        </p>
      </DocChapter>

      <DocChapter title="Skills Demonstrated">
        <ul>
          <li>Embedded Systems</li>
          <li>ESP32-C6</li>
          <li>ESP-IDF</li>
          <li>Zigbee 3.0</li>
          <li>Zigbee2MQTT</li>
          <li>Home Assistant</li>
          <li>IoT Architecture</li>
          <li>Low-power Electronics</li>
          <li>C Programming</li>
          <li>Wireless Communication</li>
          <li>Security Research</li>
          <li>Hardware Prototyping</li>
        </ul>
      </DocChapter>
    </>
  );
}

export default UniversalZigbeeModuleDoc;
