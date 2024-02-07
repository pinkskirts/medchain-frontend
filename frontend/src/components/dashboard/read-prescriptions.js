import { useEffect, useState } from "react";

function ReadPrescriptions() {
  const [data, setData] = useState([]);

  const loadPrescriptionsHandler = async () => {
    await fetch("api/prescription", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setData(data.payload);
      });
  };

  useEffect(() => { //todo: fix component props to show results dinamically
    loadPrescriptionsHandler();
  }, []);

  return (
    <div>
      <section>
        <h1>Available Prescriptions</h1>
        <ul>
          {data.map((item) => (
            <li key={item.ID}>
              ID: {item.ID} <br />
              CRM: {item.CRM} <br />
              Patient: {item.patient} <br />
              Medicine: {item.medicine} <br />
              DOI: {item.date} <br />
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

// todo: getStaticProps

export default ReadPrescriptions;
