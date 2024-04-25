const Map = ({ address }) => {
  const googleMapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(
    address
  )}&hl=en&z=14&output=embed`;

  return (
    <div className="map-area-one p-30 mt-120 lg-mt-80" data-aos="fade-up">
      <div className="box-layout">
        <div className="mapouter">
          <div className="gmap_canvas">
            <iframe
              className="gmap_iframe"
              width="600"
              height="400"
              src={googleMapSrc}
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
