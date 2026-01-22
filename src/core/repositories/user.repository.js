import User from "#core/models/User.js";

export const userRepository = {
  findByEmail(email) {
    return User.findOne({ email });
  }
};
