export default function CardComponent({orders}) { 
  return (
    <div className='cards'>
      <h3>Order ID# {orders.Id} </h3>
      <div className='colcontainer'>
        <div className='column1'>
          <p className='accID'>Account ID: </p>
          <p className='custName'>Name: </p>
          <p className='orders'>Orders: </p>
        </div>
        <div className='column2'>
          <p className='accID'>{orders.accountId} </p>
          <p className='custName'>{orders.name} </p>
          <p className='orders'>{orders.count} </p>
        </div>
      </div>
      <div className='product-details'>
        <p><strong>Product name: {orders.products.name} </strong></p>
        <p><strong>Amt: {orders.products.amount}</strong></p>
        <p><strong>Price: {orders.products.price}</strong> </p>
      </div>
      <p className="total"><strong>Total: ₱{orders.total}</strong></p>
      <button className="finishBtn"><strong>Finish</strong></button>
    </div>
  );
}

