import styled from "styled-components";
import Products from "../components/Products";

const Container = styled.div``;

const Title = styled.h2`
  margin: 20px 50px;
  letter-spacing: 1px;
  font-weight: 400;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 40px;
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.h4``;

const Select = styled.select`
  padding: 7px 10px;
  margin-right: 10px;
  background-color: #fff;
  cursor: pointer;
  color: gray;
`;

const Option = styled.option``;

const Sort = styled.div`
  display: flex;
  align-items: center;
`;

const SortTitle = styled.h4``;

const Categories = () => {
  return (
    <Container>
      <Title>Dresses</Title>

      <FilterContainer>
        <Filter>
          <FilterTitle>Filter Products: &nbsp;</FilterTitle>
          <Select>
            <Option disabled selected>
              Color
            </Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Green</Option>
          </Select>
          <Select>
            <Option disabled selected>
              Size
            </Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Sort>
          <SortTitle>Sort Products: &nbsp;</SortTitle>
          <Select>
            <Option selected>Price (asc)</Option>
            <Option>Newest</Option>
            <Option>Black (asc)</Option>
          </Select>
        </Sort>
      </FilterContainer>
      <Products />
    </Container>
  );
};

export default Categories;
