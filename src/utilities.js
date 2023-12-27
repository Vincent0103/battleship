let ID;
const incrementalId = (defaultId) => {
  if (Number.isInteger(defaultId)) ID = defaultId;
  else if (ID === undefined) ID = 0;
  else ID += 1;
  return ID;
};

const containsSubArray = (rootArray, targetArray) => {
  const rootArrayString = rootArray.map((array) => array.toString());
  const targetArrayString = targetArray.toString();
  return rootArrayString.includes(targetArrayString);
};

export default incrementalId;
export { containsSubArray };
