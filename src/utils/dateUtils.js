import moment from "moment";

const fromEpoch = epoch => moment(epoch).format("DD/MM/YYYY");
const fromEpochToDay = epoch => moment(epoch).format("ddd");

export { fromEpoch, fromEpochToDay };
