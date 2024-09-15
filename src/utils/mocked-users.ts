import { Role, User } from "types/auth";

const mockedPharmacy: User = {
  email: "pharmacy@admin.com",
  password: "admin",
  role: Role["PHARMACY"],
};

const mockedMedic: User = {
  email: "medic@admin.com",
  password: "admin",
  role: Role["MEDIC"],
};

const mockedPatient: User = {
  email: "patient@admin.com",
  password: "admin",
  role: Role["PATIENT"],
};

export const mockedUsers: User[] = [mockedPharmacy, mockedMedic, mockedPatient];
