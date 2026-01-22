import { userRepository } from "#core/repositories/user.repository.js";
import { generateTokens } from "#shared/utils/jwt.js";
import { ApiError } from "#shared/utils/ApiError.js";
import { comparePassword } from "#shared/utils/password.js";

export const login = async (req, res) => {
  const { email, password } = req.body;

  // 1️⃣ Fetch user
  const user = await userRepository.findByEmail(email);

  if (!user) {
    throw new ApiError(
      401,
      "INVALID_CREDENTIALS",
      "Invalid email or password"
    );
  }

  // 2️⃣ Verify password
  const validPassword = await comparePassword(
    password,
    user.password
  );

  if (!validPassword) {
    throw new ApiError(
      401,
      "INVALID_CREDENTIALS",
      "Invalid email or password"
    );
  }

  // 3️⃣ Generate tokens
  const { accessToken, refreshToken } = generateTokens({
    id: user._id,
  });

  // 4️⃣ Success response
  res.status(200).json({
    success: true,
    data: {
      id: user._id,
      email: user.email,
      accessToken,
      refreshToken,
    },
  });
};
