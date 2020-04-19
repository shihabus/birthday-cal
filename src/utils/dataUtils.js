import _ from "lodash";

const sortBy = (dataSet = [], key = "") =>
  _.sortBy(dataSet, function(item) {
    return item[key];
  }).reverse();

const groupBy = (dataSet = [], callBack) => {
  return _.groupBy(dataSet, callBack);
};

export { sortBy, groupBy };
