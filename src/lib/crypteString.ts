

const SHIFT = 3

const crypteString = (str: string) => {
  return str
    .split("")
    .map((char) => {
      const code = char.charCodeAt(0)
      if (code >= 65 && code <= 90) {
        return String.fromCharCode(((code - 65 + SHIFT) % 26) + 65)
      }
      if (code >= 97 && code <= 122) {
        return String.fromCharCode(((code - 97 + SHIFT) % 26) + 97)
      }
      return char
    })
    .join("")
}

const decipherString = (str: string) => {
  return str
    .split("")
    .map((char) => {
      const code = char.charCodeAt(0)
      if (code >= 65 && code <= 90) {
        return String.fromCharCode(((code - 65 - SHIFT + 26) % 26) + 65)
      }
      if (code >= 97 && code <= 122) {
        return String.fromCharCode(((code - 97 - SHIFT + 26) % 26) + 97)
      }
      return char
    })
    .join("")
}

export { crypteString, decipherString }