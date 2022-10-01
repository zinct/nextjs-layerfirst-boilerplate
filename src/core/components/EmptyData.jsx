const EmptyData = ({ width = 12, text = "Data tidak ditemukan.", className, style = {} }) => {
  function getClasses(customClasses) {
    let classes = "p-2 d-flex empty-data flex-column justify-content-center align-items-center m-auto ";
    if (customClasses) classes += customClasses;

    return classes;
  }

  return (
    <div className={getClasses(className)} style={style}>
      <img src="/images/data-empty.png" style={{ width: `${width}rem` }} alt="Data Empty" />
      <h2 className="mt-2 font-weight-normal" style={{ fontSize: `${width}px` }}>
        {text}
      </h2>
    </div>
  );
};

export default EmptyData;
