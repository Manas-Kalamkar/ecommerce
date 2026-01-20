import styled from "styled-components";

// 1. Define an interface for your theme if you haven't already
// This ensures TypeScript knows what 'theme.colors.btn' and 'theme.media.mobile' are.
interface MyTheme {
  colors: {
    btn: string;
  };
  media: {
    mobile: string;
  };
}

// 2. Define the Styled Component BEFORE the main component (or use a separate file)
// This avoids the "Wrapper used before it was defined" error.
const Wrapper = styled.section<{ theme?: MyTheme }>`
  .container {
    padding: 9rem 0;
  }
  .product-data {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 2rem;

    .product-data-warranty {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #ccc;
      margin-bottom: 1rem;

      .product-warranty-data {
        text-align: center;

        .warranty-icon {
          background-color: rgba(220, 220, 220, 0.5);
          border-radius: 50%;
          width: 4rem;
          height: 4rem;
          padding: 0.6rem;
        }
        p {
          font-size: 1.4rem;
          padding-top: 0.4rem;
        }
      }
    }

    .product-data-price {
      font-weight: bold;
    }
    .product-data-real-price {
      /* Added optional chaining and fallback for safety */
      color: ${({ theme }) => theme?.colors?.btn || "blue"};
    }
    .product-data-info {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      font-size: 1.8rem;

      span {
        font-weight: bold;
      }
    }

    hr {
      max-width: 100%;
      width: 90%;
      border: 0.1rem solid #000;
    }
  }

  .product-images {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: ${({ theme }) => theme?.media?.mobile || "768px"}) {
    padding: 0 2.4rem;
  }
`;

const SingleProduct = () => {
  return (
    <>
    <Wrapper>
      {/* Your content goes here */}
      <div className="container">
        <div className="product-data">
          {/* Example content */}
          SingleProduct
        </div>
      </div>
    </Wrapper>
    </>
  );
};

export default SingleProduct;