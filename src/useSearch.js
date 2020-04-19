import { useState, useEffect } from "react";
import { groupBy, sortBy } from "./utils/dataUtils";
import moment from "moment";

const groupByYear = data =>
  groupBy(data, function(data) {
    return moment(data.birthday)
      .startOf("year")
      .format();
  });

const groupByDate = data =>
  groupBy(data, function(data) {
    return moment(data.birthday)
      .startOf("day")
      .format();
  });

const useSearch = data => {
  const [searchString, onSearchChange] = useState("");
  const [result, onResultChange] = useState({});

  // sort data by birthday
  const sortedData = sortBy(data, "birthday");

  // group sorted data by year
  const groupedByYear = groupByYear(sortedData);

  // search
  useEffect(() => {
    let result = Object.keys(groupedByYear).filter(key =>
      key.includes(searchString)
    );

    // group result by date
    const groupedByDate = groupByDate(groupedByYear[result]);

    onResultChange(groupedByDate);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchString]);

  return [result, onSearchChange];
};

export default useSearch;
