import React, { useRef, useState } from "react";
import { withGoogleMap, GoogleMap, withScriptjs, InfoWindow, Marker } from "react-google-maps";
import StandaloneSearchBox from "react-google-maps/lib/components/places/StandaloneSearchBox";

const Maps = withScriptjs(
  withGoogleMap(({ children, placeholder, position, error, name, readOnly = false, onChange }) => {
    const searchBoxRef = useRef();
    const [viewPort, setViewPort] = useState({
      lat: Number(position?.lat ?? -6.9064866),
      lng: Number(position?.lng ?? 107.7073688),
      address: position?.address,
    });

    function getClasses() {
      let classes = "form-control border-custom mt-2 maps-input stand-alone";
      if (error?.[name]) classes += "border-danger is-invalid";

      return classes;
    }

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
      <>
        <GoogleMap defaultZoom={17} defaultCenter={viewPort}>
          <Marker position={viewPort}>
            <InfoWindow options={{ maxWidth: 100 }}>
              <span>{viewPort?.address ?? "Current Location"}</span>
            </InfoWindow>
          </Marker>
          {children}
          <input type="hidden" name="longitude" value={viewPort?.lng} />
          <input type="hidden" name="latitude" value={viewPort?.lat} />
        </GoogleMap>
        {!readOnly && (
          <StandaloneSearchBox ref={searchBoxRef} onPlacesChanged={handlePlaceSelected}>
            <>
              <input name="address_map" className={getClasses()} onChange={handleChange} type="text" placeholder={placeholder} value={viewPort?.address} />
              <small className="invalid-feedback">error</small>
              {error?.[name] && <small className="invalid-feedback">{error[name]}</small>}
            </>
          </StandaloneSearchBox>
        )}
      </>
    );
  })
);

export default Maps;
