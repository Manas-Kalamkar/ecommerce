import { FaMinus, FaPlus } from 'react-icons/fa'

const CartAmountToggle = ({amount,setDecrease,setIncrease}:{amount:number,setDecrease:() => void,setIncrease:() => void}) => {
  return (
    <div className="cart-button">
        <div className="amount-toggle">
            <button onClick={()=>{amount>1?setDecrease():""}}>
                <FaMinus />
            </button>
            <div className="amount-style">
                {amount}
            </div>
            <button onClick={()=>{setIncrease()}}>
                <FaPlus />
            </button> 
        </div>
    </div>
  )
}

export default CartAmountToggle