export const parseMarkdown = rawMarkdown =>
  JSON.parse(`{"data": "${rawMarkdown}"}`).data;
export const stringifyMarkdown = markdown => JSON.stringify(markdown);
