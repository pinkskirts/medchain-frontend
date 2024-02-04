import { useEffect, useState } from "react";

function ReadPrescriptions() {
  const [data, setData] = useState([]);

  return (
    <div>
      <section>
        <h1>Available Prescriptions</h1>
        <ul>
        </ul>
      </section>
    </div>
  );
}

// todo: getStaticProps

export default ReadPrescriptions;
