/* eslint-disable guard-for-in */
/* eslint-disable no-param-reassign */
export default function appendToEachArrayValue(array, appendString) {
  const samplearray = [];
  for (const item of array) {
    samplearray.push(appendString + item);
  }

  return samplearray;
}
