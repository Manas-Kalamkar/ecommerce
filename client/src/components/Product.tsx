import { NavLink } from 'react-router';
import type { product } from '../types';
import FormatPrice from '../Helpers/FormatPrice';

const Product = (curElem: product) => {
  const { id, title, image, price, category } = curElem;
  const firstThreeWords = title.split(" ").at(0) +" "+ title.split(" ").at(1) +" "  + title.split(" ").at(2) 
  return (
    <NavLink to={`/singleproduct/${id}`}>
      <div className="card">
        <figure>
          <img src={image} alt={title} />
          <figcaption className='caption'>{category}</figcaption>
        </figure>
        <div className="card-data">
          <div className="card-data-flex">
            <h3>
              {firstThreeWords}
            </h3>
            <p className="card-data--price">
              <FormatPrice price={price} />
            </p>
          </div>
        </div>
      </div>
    </NavLink>

  )
}

export default Product