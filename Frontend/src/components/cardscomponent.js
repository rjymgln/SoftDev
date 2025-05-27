export default function CardComponent({data, type}) { 
  let cardComponent;
  
  if(type==='Orders'){
    cardComponent=(
      <>
        <h3>Order ID# {data.Id} </h3>
        <div className='colcontainer'>
          <div className='column1'>
            <p className='accID'>Account ID: </p>
            <p className='custName'>Name: </p>
            <p className='orders'>Orders: </p>
          </div>
          <div className='column2'>
            <p className='accID'>{data.accountId} </p>
            <p className='custName'>{data.name} </p>
            <p className='orders'>{data.count} </p>
          </div>
        </div>
        <div className='product-details'>
          <p><strong>Product name: {data.products.name} </strong></p>
          <p><strong>Amt: {data.products.amount}</strong></p>
          <p><strong>Price: {data.products.price}</strong> </p>
        </div>
        <p className="total"><strong>Total: ₱{data.total}</strong></p>
        <button className="finishBtn"><strong>Finish</strong></button>
      </>
    )
  } else if (type ==='Products'){
    cardComponent =(
      <>
        <h3> {data.productName} </h3>
        <div className='colcontainer'>
          <img src={data.productImg} />
        </div>
        <div className='product-details'>
          <p><strong>Product name: {data.productId} </strong></p>
          <p><strong>Price: {data.price}</strong> </p>
        </div>
        <p className="total"><strong>Price: ₱{data.total}</strong></p>
        <button className="finishBtn"><strong>Finish</strong></button>
      </>
    )
  }else {
    cardComponent=(
      <>
      <h3>Unknown card type</h3>
      <p>Type "{type}" is not supported</p>
      </>
    )
  }
  
  return(
    <div className="cards">
      {cardComponent}
    </div>
  )


}

