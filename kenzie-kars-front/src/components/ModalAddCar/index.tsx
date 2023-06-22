import { SyntheticEvent, useState } from "react";
import { StyledText } from "../../styles/tipography";
import { Modal } from "../modal";
import { useForm, Controller } from "react-hook-form";
import { StyledButton } from "../../styles/buttons";
import { zodResolver } from "@hookform/resolvers/zod";
import { fipeApi } from "../../services/fipeApi";
import { AxiosResponse } from "axios";
import { CssTextField } from "../forms/muiStyle";
import { Autocomplete } from "@mui/material";
import { AiOutlineClose } from "react-icons/ai";
import {
  StyledForm,
  StyledHeaderModal,
  StyledBodyModal,
  Flex,
  FlexEnd,
} from "./style";
import {
  iModalAddCarProps,
  iVehicleFipeApi,
  iVehicleFormRequest,
} from "./types";
import { vehicleSchema } from "./validators";

export const ModalAddCar = ({
  brands,
  toggleModal,
  setVehicles,
}: iModalAddCarProps) => {
  const [cars, setCars] = useState([] as Array<iVehicleFipeApi>);
  const [models, setModels] = useState([] as Array<string>);
  const [year, setYear] = useState("");
  const [fuel, setFuel] = useState(0);
  const [fipePrice, setFipePrice] = useState("");

  const fuelsOptions = ["flex", "híbrido", "elétrico"];

  const [imagesNumber, setImagesNumber] = useState(2);

  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm({
    mode: "onSubmit",
    reValidateMode: "onChange",
    resolver: zodResolver(vehicleSchema),
    defaultValues: {
      brand: "",
      model: "",
      mileage: "",
      color: "",
      price: "",
      description: "",
      cover_image: "",
      image1: "",
      image2: "",
    },
  });

  const handleBrandChange = async (
    _: SyntheticEvent<Element, Event>,
    value: string | null
  ) => {
    setValue("brand", value || "");
    setValue("model", "");
    setModels([]);
    setYear("");
    setFuel(0);
    setFipePrice("");

    if (value) {
      try {
        const { data }: AxiosResponse<Array<iVehicleFipeApi>> =
          await fipeApi.get(`/cars?brand=${value}`);
        setCars(data);
        const models = data.map((car) => car.name);
        setModels([...models, ""]);
      } catch (error) {
        console.error("Error fetching models", error);
      }
    }
  };

  const handleModelChange = (
    _: SyntheticEvent<Element, Event>,
    value: string | null
  ) => {
    setValue("model", value || "");

    let car;
    if (value) {
      car = cars.find((car) => car.name === value);
    } else {
      setYear("");
      setFuel(0);
      setFipePrice("");
    }

    if (car) {
      setYear(car.year);
      setFuel(car.fuel);
      setFipePrice(String(car.value));
    }
  };

  const onSubmit = async (data: iVehicleFormRequest) => {
    console.log(data);
    const newData = {
      ...data,
      fipe_price: fipePrice,
      year: year,
      fuel: fuel,
      mileage: Number(data.mileage),
      price: Number(data.price),
      images: [data.image1, data.image2],
    };

    console.log(data);
    // try {
    //   const token = localStorage.getItem("@KenzieKars:token");
    //   api.defaults.headers.common.authorization = `Bearer ${token}`;

    //   const response = await api.post("vehicles", data);
    //   setVehicles((previousVehicles) => [
    //     ...(previousVehicles || []),
    //     response.data,
    //   ]);
    //   toggleModal();
    // } catch (error) {
    //   console.error(error);
    // }
  };

  return (
    <Modal toggleModal={toggleModal}>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <StyledHeaderModal>
          <StyledText tag="h3" textStyle="heading-7-500" textColor="grey1">
            Criar anúncio
          </StyledText>
          <button onClick={toggleModal} type="button">
            <AiOutlineClose />
          </button>
        </StyledHeaderModal>
        <StyledBodyModal>
          <StyledText tag="h4" textStyle="body-2-500" textColor="grey1">
            Informações do veículo
          </StyledText>
          <Controller
            control={control}
            name="brand"
            render={({ field }) => (
              <Autocomplete
                options={brands}
                noOptionsText="Sem carros com essa marca no momento"
                renderInput={(params) => (
                  <CssTextField
                    {...params}
                    label="Marca"
                    error={!!errors.brand}
                    helperText={errors.brand?.message}
                    variant="outlined"
                    size="medium"
                    type="text"
                  />
                )}
                onChange={(event, value) => {
                  const selectedValue = typeof value === "string" ? value : "";
                  field.onChange(selectedValue);
                  handleBrandChange(event, value);
                }}
              />
            )}
          />
          <Controller
            control={control}
            name="model"
            render={({ field }) => (
              <Autocomplete
                {...field}
                options={models}
                renderInput={(params) => (
                  <CssTextField
                    {...params}
                    label="Modelo"
                    error={!!errors.model}
                    helperText={errors.model?.message}
                    variant="outlined"
                    size="medium"
                    type="text"
                  />
                )}
                onChange={(event, value) => {
                  const selectedValue = typeof value === "string" ? value : "";
                  field.onChange(selectedValue);
                  handleModelChange(event, value);
                }}
                disabled={!watch("brand")}
              />
            )}
          />
          <Flex>
            <CssTextField
              value={year}
              label="Ano"
              variant="outlined"
              size="medium"
              type="text"
              InputProps={{
                readOnly: true,
              }}
            />
            <CssTextField
              value={fuel !== 0 ? fuelsOptions[fuel - 1] : ""}
              label="Combustível"
              variant="outlined"
              size="medium"
              type="text"
              InputProps={{
                readOnly: true,
              }}
            />
          </Flex>
          <Flex>
            <Controller
              control={control}
              name="mileage"
              render={({ field }) => (
                <CssTextField
                  {...field}
                  label="Quilometragem"
                  error={!!errors.mileage}
                  helperText={errors.mileage?.message}
                  variant="outlined"
                  size="medium"
                  type="text"
                />
              )}
            />
            <Controller
              control={control}
              name="color"
              render={({ field }) => (
                <CssTextField
                  {...field}
                  label="Cor"
                  error={!!errors.color}
                  helperText={errors.color?.message}
                  variant="outlined"
                  size="medium"
                  type="text"
                />
              )}
            />
          </Flex>
          <Flex>
            <CssTextField
              value={fipePrice}
              label="Preço tabela FIPE"
              variant="outlined"
              size="medium"
              type="text"
              InputProps={{
                readOnly: true,
              }}
            />
            <Controller
              control={control}
              name="price"
              render={({ field }) => (
                <CssTextField
                  {...field}
                  label="Preço"
                  error={!!errors.price}
                  helperText={errors.price?.message}
                  variant="outlined"
                  size="medium"
                  type="text"
                />
              )}
            />
          </Flex>
          <Controller
            control={control}
            name="description"
            render={({ field }) => (
              <CssTextField
                {...field}
                label="Descrição"
                error={!!errors.description}
                helperText={errors.description?.message}
                multiline
                rows={3}
                variant="outlined"
                size="medium"
                type="text"
              />
            )}
          />
          <Controller
            control={control}
            name="cover_image"
            render={({ field }) => (
              <CssTextField
                {...field}
                label="Imagem de capa"
                error={!!errors.cover_image}
                helperText={errors.cover_image?.message}
                variant="outlined"
                size="medium"
                type="text"
              />
            )}
          />
          <Controller
            control={control}
            name="image1"
            render={({ field }) => (
              <CssTextField
                {...field}
                label="1° Imagem da galeria"
                error={!!errors.image1}
                helperText={errors.image1?.message}
                variant="outlined"
                size="medium"
                type="text"
              />
            )}
          />
          <Controller
            control={control}
            name="image2"
            render={({ field }) => (
              <CssTextField
                {...field}
                label="2° Imagem da galeria"
                error={!!errors.image2}
                helperText={errors.image2?.message}
                variant="outlined"
                size="medium"
                type="text"
              />
            )}
          />
          <StyledButton
            buttonStyle="sm"
            buttonColor="brandOpacity"
            style={{ maxWidth: "max-content" }}
          >
            Adicionar campo para imagem da galeria
          </StyledButton>
          <FlexEnd>
            <StyledButton
              onClick={toggleModal}
              type="button"
              buttonStyle="bg"
              buttonColor="negative"
            >
              Cancelar
            </StyledButton>
            <StyledButton buttonStyle="bg" buttonColor="brand1">
              Criar anúncio
            </StyledButton>
          </FlexEnd>
        </StyledBodyModal>
      </StyledForm>
    </Modal>
  );
};
