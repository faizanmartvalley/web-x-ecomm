import bcrypt from "bcrypt";

const SALT_ROUNDS = 12; // balanced for security & performance

/**
 * Hash a plain-text password
 */
export const hashPassword = async (plainPassword) => {
  if (!plainPassword) {
    throw new Error("Password is required for hashing");
  }

  return bcrypt.hash(plainPassword, SALT_ROUNDS);
};

/**
 * Compare plain-text password with hashed password
 */
export const comparePassword = async (
  plainPassword,
  hashedPassword
) => {
  if (!plainPassword || !hashedPassword) {
    return false;
  }

  return bcrypt.compare(plainPassword, hashedPassword);
};
