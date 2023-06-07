import { List } from "@mui/material";
import { AdvertisingButton, HomePageNav, MenuButtons } from "./style";
import { useState } from "react";
import { SelectList } from "../selectList";
import { MinMaxMenuButtons } from "../minMaxMenu";
import { iAdvertising } from "./types";

export const FilterMenu = ({ advertising, setAdvertising }: iAdvertising) => {
  const carBrands = ["Porsche", "Ford", "Fiat", "Honda", "Toyota"];
  const carModels = [
    "Civic",
    "Corolla",
    "Cruize",
    "Fit",
    "Gol",
    "Ka",
    "Onix",
    "Porsche",
  ];
  const carColors = ["azul", "Branco", "Vermelho", "Preto", "Cinza", "Prata"];
  const carYears = ["2000", "2001", "2002"];
  const carFuels = ["Gasolina", "Alcool", "Flex", "Híbrido"];
  const stylesItems = {
    textAlign: "left",
    fontSize: 20,
    fontFamily: "Lexend",
    fontWeight: 600,
    color: "#000000",
  };
  const [actionOverCarBrand, setActionOverCarBrand] = useState<boolean>(false);
  const [actionOverCarModel, setActionOverCarModel] = useState<boolean>(false);
  const [actionOverCarColor, setActionOverCarColor] = useState<boolean>(false);
  const [actionOverCarYear, setActionOverCarYear] = useState<boolean>(false);
  const [actionOverCarFuel, setActionOverCarFuel] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<string>("");

  const handleClickBrand = () => {
    setActionOverCarBrand((actionOverCarBrand) => !actionOverCarBrand);
    setSelectedOption("brand");
    // setCategory("");
  };

  const handleClickModel = () => {
    setActionOverCarModel((actionOverCarModel) => !actionOverCarModel);
    setSelectedOption("model");
  };

  const handleClickColor = () => {
    setActionOverCarColor((actionOverCarColor) => !actionOverCarColor);
    setSelectedOption("color");
  };

  const handleClickYear = () => {
    setActionOverCarYear((actionOverCarYear) => !actionOverCarYear);
    setSelectedOption("year");
  };

  const handleClickFuel = () => {
    setActionOverCarFuel((actionOverCarFuel) => !actionOverCarFuel);
    setSelectedOption("fuel");
  };

  return (
    <>
      <HomePageNav>
        <List component="ul" disablePadding className="NavNestedListTitle">
          <SelectList
            open={actionOverCarBrand}
            arrayMap={carBrands}
            primary="Marca"
            onClickButton={handleClickBrand}
            // onClickItem={() => categoryChange("", "")}
          />
        </List>
        <List component="ul" disablePadding sx={stylesItems}>
          <SelectList
            open={actionOverCarModel}
            arrayMap={carModels}
            primary="Modelo"
            onClickButton={handleClickModel}
          />
        </List>
        <List component="ul" disablePadding sx={stylesItems}>
          <SelectList
            open={actionOverCarColor}
            arrayMap={carColors}
            primary="Cor"
            onClickButton={handleClickColor}
          />
        </List>
        <List component="ul" disablePadding sx={stylesItems}>
          <SelectList
            open={actionOverCarYear}
            arrayMap={carYears}
            primary="Ano"
            onClickButton={handleClickYear}
          />
        </List>
        <List component="ul" disablePadding sx={stylesItems}>
          <SelectList
            open={actionOverCarFuel}
            arrayMap={carFuels}
            primary="Combustível"
            onClickButton={handleClickFuel}
          />
        </List>
        <MenuButtons>
          <MinMaxMenuButtons type="Km" />
          <MinMaxMenuButtons type="Preço" />
        </MenuButtons>
        <AdvertisingButton>
          {!advertising && (
            <button
              onClick={() => setAdvertising((advertising) => !advertising)}
            >{`Ver anúncio`}</button>
          )}
        </AdvertisingButton>
      </HomePageNav>
    </>
  );
};
