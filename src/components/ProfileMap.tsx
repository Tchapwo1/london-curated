import { Map, MapMarker } from "@/components/ui/map";

interface ProfileMapProps {
  lat: number;
  lng: number;
  name: string;
}

export default function ProfileMap({ lat, lng, name }: ProfileMapProps) {
  return (
    <div className="w-full h-32 rounded-lg border border-border relative overflow-hidden bg-[#e5e3df] group">
      <Map
        center={[lng, lat]}
        zoom={15}
        styles={{ light: "https://tiles.openfreemap.org/styles/positron" }}
        theme="light"
        interactive={false}
      >
        <MapMarker longitude={lng} latitude={lat}>
          <div className="w-4 h-4 bg-action rounded-full border-2 border-white shadow-md transition-transform duration-300 transform group-hover:scale-125" />
        </MapMarker>
      </Map>
      <span className="absolute bottom-2 right-2 font-sans text-[10px] bg-card px-2 py-1 rounded text-primary z-10 pointer-events-none shadow-sm">View Map</span>
    </div>
  );
}
