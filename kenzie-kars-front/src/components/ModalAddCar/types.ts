import { Dispatch, SetStateAction } from "react";
import { iVehicle } from "../../pages/profileView/types";

export interface iModalAddCarProps {
  toggleModal: () => void;
  setVehicles: Dispatch<SetStateAction<Array<iVehicle> | null>>;
  brands: Array<string>;
}

export interface iVehicleFipeApi {
  id: string;
  name: string;
  brand: string;
  year: string;
  fuel: number;
  value: number;
}

export interface iVehicleFormRequest {
  brand: string;
  model: string;
  mileage: string;
  color: string;
  price: string;
  description: string;
  cover_image: string;
  image1?: string;
  image2?: string;
  image3?: string;
  image4?: string;
  image5?: string;
  image6?: string;
}
