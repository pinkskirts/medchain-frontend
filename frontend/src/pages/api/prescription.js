import connectToDatabase from "@/lib/dbconnect";

export default async function handler(req, res) {
  const client = await connectToDatabase();
  const db = client.db();
  const data = req.body;

  //.env var
  const medicalPrescriptionsCollection = process.env.MONGODB_COLLECTION_PRESCRIPTIONS;
  
  try {
    switch (req.method) {
      case "POST":
        const { integerCRM, patientName, medicineName } = data;
        const generatedID = Math.floor(Math.random() * 1000) + 1;

        var options = { day: "2-digit", month: "2-digit", year: "numeric" };
        var formattedDate = new Intl.DateTimeFormat("pt-BR", options).format(
          new Date()
        );

        await db.collection(medicalPrescriptionsCollection).insertOne({
          ID: generatedID,
          CRM: integerCRM,
          patient: patientName,
          medicine: medicineName,
          date: formattedDate,
        });

        res.status(201).json({
          message: "Prescription added to database.",
        });

        break;

      case "DELETE":
        const { prescriptionID } = data;
        const integerID = parseInt(prescriptionID);

        const existingPrescription = await db
          .collection(medicalPrescriptionsCollection)
          .findOne({ ID: integerID });

        if (!existingPrescription) {
          res.status(422).json({
            message: "invalid input - prescription id could not be found!",
          });

          return;
        }

        await db
          .collection(medicalPrescriptionsCollection)
          .deleteOne(existingPrescription);

        res.status(201).json({
          message: "Prescription removed from database.",
        });

        break;

      case "GET":
        const data = await db
          .collection(medicalPrescriptionsCollection)
          .find(
            {},
            {
              _id: 0,
              ID: 1,
              CRM: 1,
              patient: 1,
              medicine: 1,
              date: 1,
            }
          )
          .toArray();

        res.status(200).json({
          payload: data,
        });

        break;
    }
  } catch (error) {
    console.log(error);
  }

  client.close();
}
