let ID;
const incrementalId = (defaultId) => {
  if (Number.isInteger(defaultId)) ID = defaultId;
  else if (ID === undefined) ID = 0;
  else ID += 1;
  return ID;
};

export default incrementalId;
