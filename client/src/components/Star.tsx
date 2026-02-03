import { AiOutlineStar } from "react-icons/ai"
import { FaStar, FaStarHalfAlt } from "react-icons/fa"
import styled from "styled-components";

const Star = ({ rate, count }:{ rate:number, count:number }) => {

    const ratingStar = Array.from({ length: 5 }, (e,index) => {
        let number = index + 0.5;
        return (
            <span>
                {rate >= index + 1 ? (
                    <FaStar className="icon" />
                ) :
                    rate >=number ? (
                        <FaStarHalfAlt className="icon" />
                    ) :
                        <AiOutlineStar className="icon" />
                }
            </span>
        )

    })

    // const arr: Array<number> = [];

    // for (let index = 1; index < 6; index++) {
    //     if (rate - index > 0) {
    //         arr.push(1);
    //     }
    //     else if (rate - index > -1 && rate - index < 0) {

    //         arr.push(1 + Math.floor((rate - index) * 100) / 100);
    //         console.log("value:", Math.floor((rate - index) * 100) / 100);
    //     }
    //     else if (rate - index <= 0) {
    //         arr.push(0);
    //     }
    // }



    return (
        <Wrapper>
            <div className="icon-style">
                {rate}
                {
                    ratingStar
                    // arr.map((star) => {
                    //     if (star === 1) { return <FaStar className="icon" /> }
                    //     if (star >= 0.5 && star < 1) { return <FaStarHalfAlt className="icon" /> }
                    //     if (star <= 0) { return <AiOutlineStar className="icon" /> }
                    // })
                }
                <p>({count} customer reviews)</p>

            </div>
        </Wrapper>
    )
}



const Wrapper = styled.section`
  .icon-style {
    display: flex;
    gap: 0.2rem;
    align-items: center;
    justify-content: flex-start;

    .icon {
      font-size: 2rem;
      color: orange;
    }

    .empty-icon {
      font-size: 2.6rem;
    }
    p {
      margin: 0;
      padding-left: 1.2rem;
    }
  }
`;


export default Star