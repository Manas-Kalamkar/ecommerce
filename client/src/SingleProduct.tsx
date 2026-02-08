import { useEffect } from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import { useProductContext } from "./context/ProductContext";
import type { product, ProductContextType } from "./types";
import PageNavigation from "./components/PageNavigation";
import { Container } from "./styles/Container";
import FormatPrice from "./Helpers/FormatPrice";
import { TbTruckDelivery, TbReplace } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import MyImage from "./components/MyImage";
import Star from "./components/Star";
import AddToCart from "./components/AddToCart";



const API = "https://fakestoreapi.com/products/"

const SingleProduct = () => {
  const { getSingleProduct, isSingleLoading, singleProduct }: ProductContextType = useProductContext();
  const firstThreeWords = singleProduct.title.split(" ").at(0) +" "+ singleProduct.title.split(" ").at(1) +" "  + singleProduct.title.split(" ").at(2) 

  const {
    id,
    title,
    price,
    description,
    category,
    image,
    rating: { rate, count }

  }: product = singleProduct;

  const idNew = useParams().id;
  useEffect(() => {
    getSingleProduct(`${API}/${idNew}`)
  }, [])

  if (isSingleLoading) { return (<div>...Loading...</div>) }

  return (
    <>
      <Wrapper>
        <PageNavigation title={firstThreeWords} />
        {/* Your content goes here */}
        <Container >
          <div className="grid grid-two-column">
            {/* product Images  */}
            <div className="product_images">
              <MyImage imgs={image} />
            </div>

            {/* product dAta  */}
            <div className="product-data">
              <h2>{title}</h2>
              <Star rate={rate} count={count} />
              <p className="product-data-price">
                MRP:
                <del>
                  <FormatPrice price={price + (price / 2)} />
                </del>
              </p>
              <p className="product-data-price product-data-real-price">
                Deal of the Day: <FormatPrice price={price} />
              </p>
              <p>{description}</p>
              <div className="product-data-warranty">
                <div className="product-warranty-data">
                  <TbTruckDelivery className="warranty-icon" />
                  <p>Free Delivery</p>
                </div>

                <div className="product-warranty-data">
                  <TbReplace className="warranty-icon" />
                  <p>30 Days Replacement</p>
                </div>

                <div className="product-warranty-data">
                  <TbTruckDelivery className="warranty-icon" />
                  <p>Thapa Delivered </p>
                </div>

                <div className="product-warranty-data">
                  <MdSecurity className="warranty-icon" />
                  <p>2 Year Warranty </p>
                </div>
              </div>

              <div className="product-data-info">
                <p>
                  Available:
                  <span> {count > 0 ? "In Stock" : "Not Available"}</span>
                </p>
                <p>
                  ID : <span> {id} </span>
                </p>
                <p>
                  Brand :<span> {category} </span>
                </p>
              </div>
              <hr />
              {count > 0 && <AddToCart product={singleProduct} />}
            </div>
          </div>
        </Container>
      </Wrapper>
    </>
  );
};

export default SingleProduct;

const Wrapper = styled.section`
  .container {
    padding: 9rem 0;
  }
    .product_images{
    display: flex;
    justify-content: center;
    align-items: center;
    margin:auto;
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

  @media (max-width: ${({ theme }) => theme?.media?.tab || "768px"}) {


    .grid-two-column{

    h2{
    font-weight:500;
    font-size:4rem;
    }


    .product_images{
    scale:0.5;
    margin-left:-40px
    }
    }
  }
  @media (max-width: ${({ theme }) => theme?.media?.mobile || "768px"}) {
    padding: 0 2.4rem;

  }

`;
