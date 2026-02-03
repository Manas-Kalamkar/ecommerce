
const FormatPrice = ({price}:{price:number}) => {
  const priceInINR = new Intl.NumberFormat("en-IN",{style:"currency",currency:"INR",maximumFractionDigits:2}).format(price*91.65);
  return (
    <>
      {priceInINR}
    </>
  )
}

export default FormatPrice