import { GEO_API_KEY } from "@/global";
import { LatLng } from "leaflet";
import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import Spinner from "../utils/Spinner";

type Geolocation = {
  lat: number;
  lon: number;
};

const getGeolocation = async (address: string) => {
  const res = await fetch(
    `https://geocode.maps.co/search?q=${address}&api_key=${GEO_API_KEY}`
  );
  const data = await res.json();
  const { lat, lon } = data[0] as Geolocation;
  return { lat, lng: lon };
};

function isEmpty(value: string) {
  return (
    value == null || (typeof value === "string" && value.trim().length === 0)
  );
}

export default function Leaflet({ address }: { address: string }) {
  const [position, setPosition] = useState<{ lat: number; lng: number }>();
  useEffect(() => {
    if (!isEmpty(address)) {
      const fetchData = async () => {
        const newPosition = await getGeolocation(address);
        setPosition(newPosition);
      };

      fetchData();
    } else {
      setPosition({ lat: 45.689222, lng: -73.67471 });
    }
  }, [address]);

  if (!position) {
    return <Spinner />;
  }

  return (
    <>
      <MapContainer
        center={position}
        zoom={13}
        scrollWheelZoom={true}
        style={{ aspectRatio: "2 / 1", width: "100%" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={position as LatLng}>
          <Popup>{address}</Popup>
        </Marker>
      </MapContainer>
    </>
  );
}
