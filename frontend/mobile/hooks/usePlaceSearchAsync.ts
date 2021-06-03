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

type RequestPlacesFuncAsync = (
  coords: CoordinationType,
  radius: number,
  type: string
) => Promise<DataType[]>;

const usePlaceSearchAsync = () => {
  const requestPlacesAsync: RequestPlacesFuncAsync = async (
    coords: CoordinationType,
    radius: number,
    type: string
  ) => {
    const { latitude, longitude } = coords;
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
      return results;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  return requestPlacesAsync;
};

export default usePlaceSearchAsync;
