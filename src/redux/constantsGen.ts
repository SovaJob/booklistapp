/* MODELS */
import { IActionType } from "src/models"

const generateTypes = (type: string) => {
  const results = ["REQUEST", "SUCCESS", "FAILURE"];
  const types: IActionType = {};

  results.forEach((item) => { types[item] = `${type}_${item}`; });
  return types;
};

export default generateTypes;
