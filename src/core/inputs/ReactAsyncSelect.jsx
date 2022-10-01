import AsyncSelect from "react-select/async";

const ReactAsyncSelect = (props) => {
  function handleChange(e) {}

  return <AsyncSelect {...props} onChange={handleChange} cacheOptions />;
};

export default ReactAsyncSelect;
