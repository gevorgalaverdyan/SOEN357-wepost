import Leaflet from "@/Components/Map/map";

export default function DeliveryItem() {
  const address = "1455 Blvd. De Maisonneuve Ouest, Montreal, Quebec H3G 1M8";
  return (
    <div className="w-1/2">
      <Leaflet address={address}/>
    </div>
  );
}
