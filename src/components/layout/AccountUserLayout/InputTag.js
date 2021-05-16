import React from "react";
import { TextField } from "@material-ui/core";
import { useStyles } from "./UseStyleCreatePage";
import { InputAdornment, Chip } from "@material-ui/core";
import { MdAddCircle } from "react-icons/md";

import { useState } from "react";
import { Paper } from "@material-ui/core";
function InputTag({ tags, setTags }) {
  const classes = useStyles();

  const [tagInput, setTagInput] = useState();
  const OnChangeTag = (e) => {
    setTagInput(e.target.value);
  };
  const addTags = (event) => {
    if (event.key === "Enter" && event.target.value !== "") {
      setTags([...tags, event.target.value]);
      event.target.value = "";
      setTagInput("");
    }
  };
  const addTagsOnClick = (value) => {
    setTags([...tags, value]);
    setTagInput("");
  };

  const handleDelete = (chipToDelete) => () => {
    setTags((chips) => chips.filter((chip) => chip !== chipToDelete));
  };

  return (
    <>
      <TextField
        variant="outlined"
        type="text"
        label="Tags"
        value={tagInput}
        onChange={OnChangeTag}
        // helperText="Optional. Limit: 10"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <MdAddCircle
                className={classes.iconTag}
                onClick={() => addTagsOnClick(tagInput)}
              />
            </InputAdornment>
          ),
        }}
        className={classes.InputTag}
        onKeyUp={(event) => addTags(event)}
      />
      <div className={classes.paperTag}>
        {tags.map((tag, index) => (
          <li key={index}>
            <Chip
              label={tag}
              onDelete={handleDelete(tag)}
              className={classes.chipTags}
            />
          </li>
        ))}
      </div>
    </>
  );
}

export default InputTag;
