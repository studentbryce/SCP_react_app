import React from "react";
import { useParams } from "react-router-dom";
import "./App.css"; // Import the CSS file

const Card = ({ data }) => {
  const { id } = useParams(); // Get the ID from the URL

  // Find the item based on the title from the route
  const selectedItem = data.find((i) => i.title === id);

  // Directly use path from `public/images/`
  const getImagePath = (selectedItem) => {
    return `/SCP_react_app/images/${selectedItem}`;  // Direct path from `public/images/`
  };

  if (!selectedItem) return <div>Item not found</div>;

  return (
    <div className="card">
      <h2>Title: {selectedItem.title}</h2>
      <h3>Object Class: {selectedItem.object_class}</h3>

      {/* Display Image */}
      {selectedItem.image && <img src={getImagePath(selectedItem.image)} alt={selectedItem.title} className="scp-image" />}

      {/* Special Containment Procedures */}
      <h3>Special Containment Procedures:</h3>
      <p>{selectedItem.special_containment_procedures}</p>

      {/* Description */}
      <h3>Description:</h3>
      <p>{selectedItem.description}</p>

      {/* Addenda Section */}
      {selectedItem.addenda && Object.keys(selectedItem.addenda).length > 0 && (
        <AddendaSection addenda={selectedItem.addenda} />
      )}

      {/* History Section */}
      {selectedItem.history && Object.keys(selectedItem.history).length > 0 && (
        <HistorySection history={selectedItem.history} />
      )}

      {/* Anomalies Section */}
      {selectedItem.anomalies && (
        <>
          <h3>Anomalies:</h3>
          <p>{selectedItem.anomalies}</p>
        </>
      )}

      {/* Additional Notes Section */}
      {selectedItem.additional_notes && (
        <>
          <h3>Additional Notes:</h3>
          <p>{selectedItem.additional_notes}</p>
        </>
      )}
    </div>
  );
};

const AddendaSection = ({ addenda }) => (
  <>
    <h3>Addenda:</h3>
    <ul>
      {Object.entries(addenda).map(([key, value]) => (
        <li key={key}>
          <strong>{key}:</strong>{" "}
          {Array.isArray(value) ? (
            <ul>{value.map((item, index) => <li key={index}>{item}</li>)}</ul>
          ) : (
            value
          )}
        </li>
      ))}
    </ul>
  </>
);

const HistorySection = ({ history }) => (
  <>
    <h3>History:</h3>
    <ul>
      {Object.values(history).map((entry, index) => (
        <ul key={index}>
          <strong>Date:</strong> {entry.date} <br />
          <strong>Event:</strong> {entry.event} <br /><br />
        </ul>
      ))}
    </ul>
  </>
);

export default Card;