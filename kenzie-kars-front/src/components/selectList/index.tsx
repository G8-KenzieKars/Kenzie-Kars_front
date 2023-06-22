import {
  ListItemButton,
  ListItemText,
  Collapse,
  List,
  Box,
} from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { ISelectProps } from "./types";
import { iFilterConditions } from "../../contexts/productContext/types";
import { useContext } from "react";
import { ProductContext } from "../../contexts/productContext";

export const SelectList = ({
  open,
  arrayMap,
  primary,
  onClickButton,
}: //   onClickItem,
ISelectProps) => {
  const stylesSubItems = {
    textAlign: "left",
    fontSize: 20,
    fontFamily: "Lexend",
    fontWeight: 500,
  };
  const { filterConditions, setFilterConditions } = useContext(ProductContext);

  const filterItemSelect = (primary: string, e: string) => {
    switch (primary) {
      case "Marca": {
        const newFilterConditions = { ...filterConditions, brand: e };
        setFilterConditions(newFilterConditions);
        break;
      }
      case "Modelo": {
        const newFilterConditions = { ...filterConditions, model: e };
        setFilterConditions(newFilterConditions);
        break;
      }
      case "Cor": {
        const newFilterConditions = { ...filterConditions, color: e };
        setFilterConditions(newFilterConditions);
        break;
      }
      case "Ano": {
        const newFilterConditions = { ...filterConditions, year: e };
        setFilterConditions(newFilterConditions);
        break;
      }
      case "Combustível": {
        const newFilterConditions = { ...filterConditions, fuel: e };
        setFilterConditions(newFilterConditions);
        break;
      }

      default: {
        const newFilterConditions = { ...filterConditions, brand: e };
        setFilterConditions(newFilterConditions);
        break;
      }
    }
  };

  return (
    <Box sx={{ fontSize: 3 }}>
      <ListItemButton onClick={onClickButton}>
        <ListItemText primary={primary} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse
        in={open}
        timeout="auto"
        unmountOnExit
        style={{ maxInlineSize: 0.2 }}
      >
        <List component="ul" disablePadding>
          {arrayMap.map((e, index) => {
            return (
              <ListItemButton
                key={index}
                defaultValue={e}
                sx={{ pl: 4 }}
                onClick={() => filterItemSelect(primary, e)}
              >
                <ListItemText
                  primary={e}
                  sx={{
                    color: "#868E96",
                    fontFamily: "Lexend, sans-serif",
                  }}
                />
              </ListItemButton>
            );
          })}
        </List>
      </Collapse>
    </Box>
  );
};
