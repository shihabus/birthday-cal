import React from "react";
import {
  Layout,
  JSONViewer,
  SearchDiv,
  CardSection,
  Header
} from "./components";
import data from "./data/birthDayData.json";
import useSearch from "./useSearch";

function App() {
  const [result, onSearchChange] = useSearch(data);

  return (
    <Layout>
      <Header header="Work Area" />
      <CardSection data={result} />
      <JSONViewer data={data} />
      <SearchDiv onSubmitCallBack={onSearchChange} />
    </Layout>
  );
}

export default App;
