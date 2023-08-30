/* eslint-disable react/prop-types */
import { Autocomplete, Button } from "@mui/joy";
import { ButtonGroup } from "@mui/material";
import DriveEtaIcon from "@mui/icons-material/DriveEta";
import { carBrands } from "../constants";
const SearchBar = ({selectedMotor,setSelectedMotor}) => {
  return (
    <div className="searchBar__wrapper">
      <div className="searchBar__input">
        <ButtonGroup size="lg" aria-label="outlined button group">
          <Button variant="outlined">
            <DriveEtaIcon />
          </Button>
          <Autocomplete options={carBrands} defaultValue={selectedMotor} onChange={(e,value)=>setSelectedMotor(value || (carBrands[Math.floor(Math.random()*carBrands.length)]))} />
        </ButtonGroup>
      </div>
    </div>
  );
};

export default SearchBar;
