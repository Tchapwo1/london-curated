import { useEffect, useState } from "react";
import { Map, MapControls, MapMarker, MarkerTooltip } from "@/components/ui/map";

interface Restaurant {
  id: string;
  name: string;
  lat: number;
  lng: number;
  url: string;
}

interface DirectoryMapProps {
  mapData: Restaurant[];
}

export default function DirectoryMap({ mapData }: DirectoryMapProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  useEffect(() => {
    const handleHover = (e: any) => {
      const { id, isHovering } = e.detail;
      setHoveredId(isHovering ? id : null);
    };

    window.addEventListener("restaurant-hover", handleHover);
    return () => window.removeEventListener("restaurant-hover", handleHover);
  }, []);

  return (
    <div className="w-full h-full relative overflow-hidden bg-[#e5e3df]">
      <Map
        center={[-0.0794, 51.5033]}
        zoom={13}
        styles={{ light: "https://tiles.openfreemap.org/styles/positron" }}
        theme="light"
      >
        <MapControls position="bottom-right" showZoom />
        
        {mapData.map((restaurant) => {
          const isHovered = hoveredId === restaurant.id;
          
          return (
            <MapMarker
              key={restaurant.id}
              longitude={restaurant.lng}
              latitude={restaurant.lat}
              onClick={() => window.location.href = restaurant.url}
            >
              <div 
                className={`w-4 h-4 rounded-full border-2 border-white shadow-md transition-all duration-300 transform cursor-pointer relative ${
                  isHovered ? 'scale-150 bg-action z-50' : 'bg-primary z-10 hover:scale-150 hover:bg-action hover:z-50'
                }`}
              />
              <MarkerTooltip>
                {restaurant.name}
              </MarkerTooltip>
            </MapMarker>
          );
        })}
      </Map>
    </div>
  );
}
