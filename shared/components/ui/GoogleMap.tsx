"use client";

import { useMemo } from "react";
import { GoogleMap as GoogleMapReact, useJsApiLoader, Marker } from "@react-google-maps/api";
import { cn } from "@/lib/utils";

// Default: 71 Vazha-Pshavela Avenue, Tbilisi (override via props or NEXT_PUBLIC_MAP_LAT / NEXT_PUBLIC_MAP_LNG)
const DEFAULT_CENTER = { lat: 41.7151, lng: 44.7794 };
const DEFAULT_ZOOM = 15;
const DEFAULT_MARKER_TITLE = "71 Vazha-Pshavela Avenue, Tbilisi";

interface GoogleMapProps {
  className?: string;
  /** Map center. Override if the default address is wrong. */
  center?: { lat: number; lng: number };
  /** Zoom level 1–20 */
  zoom?: number;
  /** Marker tooltip text */
  markerTitle?: string;
}

export function GoogleMap({ className, center, zoom = DEFAULT_ZOOM, markerTitle = DEFAULT_MARKER_TITLE }: GoogleMapProps) {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  // Use props, then env (NEXT_PUBLIC_MAP_LAT, NEXT_PUBLIC_MAP_LNG), then default
  const mapCenter = useMemo(() => {
    if (center) return center;
    const envLat = process.env.NEXT_PUBLIC_MAP_LAT;
    const envLng = process.env.NEXT_PUBLIC_MAP_LNG;
    if (envLat != null && envLng != null) {
      const lat = parseFloat(envLat);
      const lng = parseFloat(envLng);
      if (!Number.isNaN(lat) && !Number.isNaN(lng)) return { lat, lng };
    }
    return DEFAULT_CENTER;
  }, [center]);

  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: apiKey ?? "",
    id: "google-map-script",
  });

  const mapContainerStyle = useMemo(
    () => ({
      width: "100%",
      height: "100%",
      minHeight: "256px",
    }),
    []
  );

  const mapOptions = useMemo(
    () => ({
      disableDefaultUI: false,
      zoomControl: true,
      mapTypeControl: false,
      streetViewControl: false,
      fullscreenControl: true,
    }),
    []
  );

  if (!apiKey) {
    return (
      <div
        className={cn(
          "w-full h-64 rounded overflow-hidden bg-gray-200 flex items-center justify-center text-gray-600 text-sm",
          className
        )}
      >
        Add NEXT_PUBLIC_GOOGLE_MAPS_API_KEY to .env.local
      </div>
    );
  }

  if (loadError) {
    return (
      <div
        className={cn(
          "w-full h-64 rounded overflow-hidden bg-gray-200 flex items-center justify-center text-gray-600 text-sm",
          className
        )}
      >
        Failed to load map. Check your API key and referrer restrictions.
      </div>
    );
  }

  if (!isLoaded) {
    return (
      <div
        className={cn(
          "w-full h-64 rounded overflow-hidden bg-gray-200 flex items-center justify-center text-gray-500 text-sm",
          className
        )}
      >
        Loading map...
      </div>
    );
  }

  return (
    <div className={cn("w-full h-64 rounded overflow-hidden", className)}>
      <GoogleMapReact
        mapContainerStyle={mapContainerStyle}
        center={mapCenter}
        zoom={zoom}
        options={mapOptions}
      >
        <Marker position={mapCenter} title={markerTitle} />
      </GoogleMapReact>
    </div>
  );
}
