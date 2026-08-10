import "../styles/History.css";

function History() {
  return (
    <div className="history-main">
      {/*
      
      --------------------------- EDUCATION ----------------------------------------------------------------------
      
      */}

      <div className="history-section">
        <h1 className="section-title">Education</h1>

        <HistoryEntry
          title="Gimnazjum nr. 2 w Zielonej Górze"
          subtitle="Technical profile (mechanics/electronics)"
          date="2013.09 - 2016.06"
        />

        <HistoryEntry
          title="IV Liceum Ogólnokształcące w Zielonej Górze “Lotnik”"
          subtitle="Technical profile (mechanics/electronics)"
          date="2016.09 - 2019.06"
        />

        <HistoryEntry
          title="University of Zielona Góra"
          date="2020.10 - 2025.07"
        >
          <div className="education-degree">
            <h3>Engineer in Computer Science</h3>
            <p>
              <strong>Specialization:</strong> Inżynieria Systemów
              Mikroinformatycznych
            </p>
            <p>
              <strong>Thesis:</strong> Custom Smart Home Installation
            </p>
          </div>

          <div className="education-degree">
            <h3>Master's in Computer Science</h3>
            <p>
              <strong>Specialization:</strong> Inżynieria Systemów
              Informatycznych
            </p>
            <p>
              <strong>Thesis:</strong> Universal Smart Home Controller
            </p>
            <p>
              <strong>Focus:</strong> Embedded systems, Zigbee, Home Assistant,
              networking, cybersecurity.
            </p>
          </div>
        </HistoryEntry>
      </div>

      {/*
      
      --------------------------- WORK ----------------------------------------------------------------------
      
      */}
      <div className="history-section">
        <h1 className="section-title">Work experience</h1>

        <HistoryEntry
          title="Self-employed"
          subtitle="Bucks For Bucks Mateusz Banaszkiewicz"
          date="2024.02 - 2025.12"
          description="Ran an online shop selling animal bones and pelts."
        >
          <ul>
            <li>Customer support</li>
            <li>Advertising</li>
            <li>Bookkeeping</li>
            <li>Inventory management</li>
            <li>International shipping logistics</li>
          </ul>
        </HistoryEntry>

        <HistoryEntry
          title="Internship"
          subtitle="Helper in a Computer shop."
          date="2022.08 - 2022.09"
          description="Worked at Computer Partner Waldemar
          Łobaczewski Bohaterów Westerplatte 11/1A/2, 65-001 Zielona Góra."
        >
          <ul>
            <li>Quality control of imported equipment.</li>
            <li>Managing entries in the database.</li>
            <li>Documentation of warehouse stock.</li>
            <li>Preparation of orders for shipment.</li>
          </ul>
        </HistoryEntry>

        <HistoryEntry
          title="Warehouse Worker"
          subtitle="TJX Europe Distribution Center in Sulechów"
          date="2026.02 - Present"
        />
      </div>
    </div>
  );
}

export default History;

function HistoryEntry({ title, subtitle, date, description, children }) {
  return (
    <div className="history-entry">
      <div className="entry-header">
        <div>
          <h2 className="entry-title">{title}</h2>
          {subtitle && <h3 className="entry-subtitle">{subtitle}</h3>}
        </div>

        <span className="entry-date">{date}</span>
      </div>

      {description && <p>{description}</p>}

      {children}
    </div>
  );
}
