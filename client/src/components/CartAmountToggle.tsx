import { FaMinus, FaPlus } from 'react-icons/fa'

const CartAmountToggle = ({id,amount,setDecrease,setIncrease}:{id:number,amount:number,setDecrease:({id,amount}:{id:number,amount:number}) => void,setIncrease:({id,amount}:{id:number,amount:number}) => void}) => {
  
    return (
    <div className="cart-button">
        <div className="amount-toggle">
            <button onClick={()=>{amount>1?setDecrease({id,amount}):""}}>
                <FaMinus />
            </button>
            <div className="amount-style">
                {amount}
            </div>
            <button onClick={()=>{setIncrease({id,amount})}}>
                <FaPlus />
            </button> 
        </div>
    </div>
  )
}

export default CartAmountToggle