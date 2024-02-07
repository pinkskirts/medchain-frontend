import { hash, compare } from 'bcryptjs';

export async function hashPassword(password) {
  return await hash(password, 15);
}

export function verifyPassword(password, hashedPassword) {
  return compare(password, hashedPassword);
}