import crypto from "crypto";

const ALGO = "aes-256-gcm";
const KEY = crypto.randomBytes(32);
const IV = crypto.randomBytes(16);

export const encryptData = (data: string) => {
  const cipher = crypto.createCipheriv(ALGO, KEY, IV);
  let encrypted = cipher.update(data, "utf8", "hex");
  encrypted += cipher.final("hex");
  return encrypted;
};

export const decryptData = (data: string) => {
  const decipher = crypto.createDecipheriv(ALGO, KEY, IV);
  let decrypted = decipher.update(data, "hex", "utf8");
  decrypted += decipher.final("utf8");
  return decrypted;
};
