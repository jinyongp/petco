import { useState } from "react";
import axios from "axios";
import { MAPS_API_KEY } from "@env";
import { CoordinationType, DataType } from "../@types";

const getUrl = (options: {
  radius: number;
  location: string;
  type: string;
}) => {
  const { radius, location, type } = options;
  return `https://maps.googleapis.com/maps/api/place/nearbysearch/json?language=ko&radius=${radius}&location=${location}&type=${type}&key=${MAPS_API_KEY}`;
};

type RequestPlacesFunc = (
  coords: CoordinationType,
  radius: number,
  type: string
) => void;

const usePlaceSearch = (): [
  RequestPlacesFunc,
  {
    loading: boolean;
    data: DataType[];
    error: string;
  }
] => {
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<DataType[]>(null);
  const [error, setError] = useState<string>(null);

  const requestPlaces: RequestPlacesFunc = (coords, radius, type) => {
    const { latitude, longitude } = coords;
    (async () => {
      try {
        const {
          data: { results },
        } = await axios.get(
          getUrl({
            radius,
            location: `${latitude},${longitude}`,
            type,
          })
        );
        setData(results);
      } catch (error) {
        console.log(error);
        setError(error?.message);
      } finally {
        setLoading(false);
      }
    })();
  };

  return [requestPlaces, { loading, data, error }];
};

export default usePlaceSearch;
