import jwt from 'jsonwebtoken';

export type TokenPayload = {
  email: string;
};

const JWT_SECRET = process.env.JWT_SECRET || 'dev-secret-change-me';
const TOKEN_EXPIRES_IN = '7d';

export function signToken(payload: TokenPayload) {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: TOKEN_EXPIRES_IN });
}

export function verifyToken(token: string) {
  try {
    return jwt.verify(token, JWT_SECRET) as TokenPayload;
  } catch (e) {
    return null;
  }
}

// Very small user validator for demo purposes.
// In production, replace with a proper user store and hashed passwords.
export function validateUser(email: string, password: string) {
  const ADMIN_EMAIL = process.env.AUTH_EMAIL || 'admin@example.com';
  const ADMIN_PASSWORD = process.env.AUTH_PASSWORD || 'password';
  return email === ADMIN_EMAIL && password === ADMIN_PASSWORD;
}
