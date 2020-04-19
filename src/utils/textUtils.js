import get from "lodash/get";
const extractInitials = str =>
  str
    .trim()
    .split(" ")
    .map(item => String(get(item, "[0]", "")).toUpperCase())
    .join("");

export default extractInitials;
