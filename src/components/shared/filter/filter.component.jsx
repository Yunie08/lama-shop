import React from "react";

import { FilterContainer, FilterText, Select, Option } from "./filter.styles";

const Filter = ({ filter }) => {
  return (
    <>
      <FilterContainer>
        <FilterText>{filter.title}</FilterText>
        {filter.select.map((filter, index) => (
          <Select key={index}>
            {filter.options.map((option, index) => {
              return index === 0 ? (
                option.disabled ? (
                  <Option key={index} disabled selected>
                    {option.disabled}
                  </Option>
                ) : (
                  <Option key={index} selected>
                    {option}
                  </Option>
                )
              ) : (
                <Option key={index}>{option}</Option>
              );
            })}
          </Select>
        ))}
      </FilterContainer>
    </>
  );
};

export default Filter;
