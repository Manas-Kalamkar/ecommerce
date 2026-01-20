import React from "react";
import styled from "styled-components";

interface MyTheme {
  media: {
    mobile: string
  }
}

const Wrapper = styled.section<{ theme: MyTheme }>`
.grid-filter-column {
  grid-template-columns: 0.2fr 1fr;
  }
  
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-filter-column {
      grid-template-columns: 1fr;
      }
      }
      `;

const Products = () => {
  return (
  <div>
    Products
  </div>);
};
export default Products;
