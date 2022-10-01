import React, { useRef, useState } from "react";
import { withScriptjs } from "react-google-maps";
import StandaloneSearchBox from "react-google-maps/lib/components/places/StandaloneSearchBox";

const MapsSearchBox = withScriptjs(({ children, placeholder, position, error, name, readOnly = false, onChange, className }) => {
  const searchBoxRef = useRef();
  const [viewPort, setViewPort] = useState({
    lat: Number(position?.lat ?? -6.9064866),
    lng: Number(position?.lng ?? 107.7073688),
    address: position?.address,
  });
  function handlePlaceSelected() {
    const place = searchBoxRef.current.getPlaces()[0];

    setViewPort({
      lat: place.geometry?.location.lat(),
      lng: place.geometry?.location.lng(),
      address: place.formatted_address,
    });

    onChange({
      lat: place.geometry?.location.lat(),
      lng: place.geometry?.location.lng(),
      address: place.formatted_address,
    });
  }

  function handleChange({ target }) {
    setViewPort({
      address: target.value,
    });
  }

  return (
    <StandaloneSearchBox ref={searchBoxRef} onPlacesChanged={handlePlaceSelected}>
      <>
        <input name="address_map" className={className} onChange={handleChange} type="text" placeholder={placeholder} value={viewPort?.address} />
        <small className="invalid-feedback">error</small>
        {error?.[name] && <small className="invalid-feedback">{error[name]}</small>}
      </>
    </StandaloneSearchBox>
  );
});
export default MapsSearchBox;
