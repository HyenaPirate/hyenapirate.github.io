import {
  DocImage,
  DocVideo,
  DocChapter,
  DocCode,
  DocQuote,
  DocTable,
  DocFile,
} from "../components/ProjectDocumentation";

function CustomSmartHomeInstallationDoc() {
  return (
    <>
      <DocChapter title="TLDR">
        <p>
          The focus of the project was to create a Smart Home system that would
          be as easy as possible for any user to understand, interact with, and
          change to their liking. While the end result was not ready for
          everyday use, my thesis proved a good design is a step in right
          direction in terms of making Smart Homes that are fully in user's
          control.
        </p>

        <p>
          It features a Raspberry Pi server and several example devices that can
          be connected and automated, including addressable LED strips, motion
          sensors, status LEDs and stepper motors, all configurable through an
          Android application.
        </p>

        <p>
          For more indepth project analysis I recommend reading the actual
          paper, which can be downloaded below.
        </p>

        <DocFile
          src="/assets/projectsData/customSmartHomeInstallation/Mateusz-Banaszkiewicz-engineering-thesis.pdf"
          description="Complete thesis PL (PDF)"
          size="0.98 MB"
        />
      </DocChapter>

      <DocChapter title="Project Goals">
        <p>
          Existing Smart Home ecosystems often lock users into specific
          manufacturers, require multiple mobile applications, cloud accounts
          and internet connectivity. The purpose of this project was to explore
          an alternative approach where the entire installation is owned,
          understandable and extendable by the user.
        </p>

        <p>The system was designed around several key ideas:</p>

        <ul>
          <li>Single server controlling every connected device.</li>
          <li>No cloud dependency.</li>
          <li>Easy hardware expansion.</li>
          <li>Simple software architecture suitable for beginners.</li>
          <li>User-defined automation instead of manufacturer limitations.</li>
        </ul>
      </DocChapter>

      <DocChapter title="Architecture">
        <p>
          The installation is centered around a Raspberry Pi 4 running a Python
          server. Every physical device is represented by a software object,
          making the whole system modular and independent from specific
          hardware.
        </p>

        <p>Devices are divided into two categories:</p>

        <ul>
          <li>
            <strong>Outputs</strong> – hardware controlled by the server, such
            as LEDs, LED strips or motors.
          </li>

          <li>
            <strong>Inputs</strong> – sensors providing information to the
            system, such as motion detectors.
          </li>
        </ul>

        <p>
          An Android application communicates with the server over WebSockets,
          allowing the user to configure devices, synchronize data and create
          automation rules without directly modifying server files.
        </p>
      </DocChapter>

      <DocChapter title="Automation System">
        <p>
          Rather than hardcoding behavior into individual devices, the project
          introduces an event-driven architecture built around several reusable
          components.
        </p>

        <ul>
          <li>
            <strong>Triggers</strong> define when something should happen
            (specific time or sensor activation).
          </li>

          <li>
            <strong>Summons</strong> describe what a device should do once
            activated.
          </li>

          <li>
            <strong>Events</strong> connect Triggers with Summons, creating
            automation rules.
          </li>

          <li>
            <strong>Calendar</strong> continuously monitors every trigger and
            executes the appropriate events.
          </li>
        </ul>

        <p>
          This separation allows the same trigger or action to be reused across
          multiple devices while keeping the implementation clean and easy to
          extend.
        </p>
      </DocChapter>

      <DocChapter title="Interesting Engineering Challenges">
        <ul>
          <li>
            Designing a modular object hierarchy capable of supporting arbitrary
            hardware devices.
          </li>

          <li>
            Implementing persistent configuration using JSON instead of a
            traditional database to maximize readability.
          </li>

          <li>
            Creating a responsive Android application communicating with the
            server through WebSockets.
          </li>

          <li>
            Evaluating two different methods of controlling WS2812B LED strips:
            directly from Raspberry Pi and through an Arduino coprocessor.
          </li>

          <li>
            Implementing asynchronous device control while allowing long-running
            animations to be interrupted immediately by higher-priority events.
          </li>
        </ul>
      </DocChapter>

      <DocChapter title="Hardware Used">
        <ul>
          <li>Raspberry Pi 4 Model B (8 GB)</li>
          <li>Arduino Uno</li>
          <li>WS2812B addressable LED strips</li>
          <li>28BYJ-48 stepper motor with ULN2003 driver</li>
          <li>PIR motion sensor (HC-SR501)</li>
          <li>5 V 150 W power supply</li>
          <li>Status LEDs and supporting electronics</li>
        </ul>
      </DocChapter>

      <DocChapter title="Results">
        <p>
          The finished system successfully demonstrated that a Smart Home can be
          built around transparency instead of vendor lock-in. Users could add
          devices, define automation rules, synchronize them with an Android
          application and control every component from a single interface.
        </p>

        <p>
          While the project was created as an engineering thesis rather than a
          commercial product, it validated the proposed architecture and
          provided a solid foundation for future development, including support
          for additional hardware and more advanced automation.
        </p>
      </DocChapter>

      <DocChapter title="Skills Demonstrated">
        <ul>
          <li>Python</li>
          <li>Java (Android)</li>
          <li>Raspberry Pi GPIO</li>
          <li>Arduino</li>
          <li>Embedded systems</li>
          <li>WebSockets</li>
          <li>Multithreaded programming</li>
          <li>JSON data serialization</li>
          <li>Object-oriented architecture</li>
          <li>Hardware integration</li>
          <li>Android application development</li>
        </ul>
      </DocChapter>
    </>
  );
}

export default CustomSmartHomeInstallationDoc;
