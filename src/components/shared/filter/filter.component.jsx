import React from "react";

import { FilterContainer, FilterText, Select, Option } from "./filter.styles";

const Filter = ({ filter }) => {
  return (
    <>
      <FilterContainer>
        <FilterText>{filter.title}</FilterText>
        {filter.select.map((filter) => (
          <Select>
            {filter.options.map((option, index) => {
              return index === 0 ? (
                option.disabled ? (
                  <Option disabled selected>
                    {option.disabled}
                  </Option>
                ) : (
                  <Option selected>{option}</Option>
                )
              ) : (
                <Option>{option}</Option>
              );
            })}
          </Select>
        ))}
      </FilterContainer>
    </>
  );
};

export default Filter;
