const SelectInput = (props) => {
  const { items, error, placeholder, name, idField, labelField, customValue, customLabel } = props;

  function getValue(data) {
    if (customValue) return customValue(data);
    return idField ? data[idField] : data.id;
  }

  function getlabel(data) {
    if (customLabel) return customLabel(data);
    return data.name;
  }

  return (
    <>
      <select {...props}>
        {placeholder ? <option value="">{placeholder}</option> : null}
        {items?.map((row) => (
          <option key={idField ? row[idField] : row.id} value={getValue(row)}>
            {getlabel(row)}
          </option>
        ))}
      </select>
      {error?.[name] && <small className="invalid-feedback">{error[name]}</small>}
    </>
  );
};

export default SelectInput;
