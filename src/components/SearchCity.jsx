import {
  Autocomplete,
  IconButton,
  Input,
  InputAdornment,
  InputBase,
  OutlinedInput,
  TextField,
} from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import cities from "../utils/cities.json";
const SearchCity = ({ setInputValue }) => {
  const [value, setValue] = React.useState("");

  const [search, setSearch] = React.useState("");

  console.log("value-" + value);

  return (
    <div className="w-full">
      <Autocomplete
        disablePortal
        options={cities}
        sx={{ borderRadius: 100 }}
        renderInput={(params) => <TextField {...params} label="Şehir Seçiniz" />}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
      />
    </div>
  );
};

export default SearchCity;
