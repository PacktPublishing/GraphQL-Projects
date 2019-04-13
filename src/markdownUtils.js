const md = require("md-2-json");
export const fromDb = markdownFromDb => {
  let markdownString = markdownFromDb;
  try {
    markdownString = JSON.parse(markdownFromDb);
    return md.toMd(markdownString);
  } catch (SyntaxError) {
    // presume it is not a json and saved as string instead
    return markdownString;
  }
};
export const toDb = stringToBeConverted =>
  JSON.stringify(md.parse(stringToBeConverted));
