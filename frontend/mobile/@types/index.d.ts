export type CoordinationType = {
  latitude: number;
  longitude: number;
};

export interface DataType {
  business_status: string;
  geometry: {
    location: {
      lat: number;
      lng: number;
    };
  };
  icon: string;
  name: string;
  place_id: string;
  rating: number;
  vicinity: string;
}
