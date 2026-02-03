import styled from 'styled-components';
import { useFilterContext } from '../context/FilterContext';
import { BsFillGridFill, BsList } from 'react-icons/bs';
const Sort = () => {
  const { filteredProducts, grid_view, list_view, setListView, setGridView, sorting } = useFilterContext();
  return (
    <Wrapper className='sort-section'>
      <div className="sorting-list--grid">
        <button className={grid_view ? "active sort-btn" : "sort-btn"} onClick={setGridView}>
          <BsFillGridFill />
        </button>
        <button className={list_view ? "active sort-btn" : "sort-btn"} onClick={setListView}>
          <BsList />
        </button>

      </div>

      <div className='product_data'>
        <p>
          {filteredProducts.length} products available
        </p>
      </div>
      <div className="sort" id='sort-selection'>
        <form action="#">
          <label htmlFor="sort"></label>
          <select id='sort' name='sort' className='sort-selection--style' onChange={sorting}>
            <option value="select"  >Select</option>
            <option value="lowest"  >Price(lowest)</option>
            <option value="highest" >Price(highest)</option>
            <option value="a-z" >Price(A-Z)</option>
            <option value="z-a" >Price(Z-A) </option>
          </select>
        </form>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  margin-top: 5rem;

  select{
  padding:5px;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};
  }

  .sorting-list--grid {
    display: flex;
    gap: 2rem;

    .sort-btn {
      padding: 0.8rem 1rem;
      border: none;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }

    .icon {
      font-size: 1.6rem;
    }
    .active {
      background-color: ${({ theme }) => theme.colors.black};
      color: #fff;
    }
  }

  .sort-selection .sort-selection--style {
    padding: 0.5rem;
    cursor: pointer;

    .sort-select--option {
      padding: 0.5rem 0;
      cursor: pointer;
      height: 2rem;
      padding: 10px;
    }
  }
`;


export default Sort