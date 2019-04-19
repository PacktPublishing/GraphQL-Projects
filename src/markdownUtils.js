const md = require("md-2-json");
export const fromDb = markdownFromDb => md.toMd(JSON.parse(markdownFromDb));
export const toDb = stringToBeConverted =>
  JSON.stringify(md.parse(stringToBeConverted));
