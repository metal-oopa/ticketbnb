const OrderIndex = ({ orders, currentUser }) => {
  const orderList = Object.values(orders).map((order) => {
    return (
      <tr>
        <td>{order.ticket.title}</td> <td>{order.ticket.price}</td>{" "}
        <td>{order.status}</td>
      </tr>
    );
  });
  return (
    <div className="container">
      <div
        style={{
          margin: "8vh 15vh",
          backgroundColor: "orange",
          color: "white",
          padding: "2rem",
          borderRadius: "3%",
        }}
      >
        <h1>Orders List</h1>
        <table className="table">
          <thead
            style={{
              textAlign: "center",
              color: "white",
              fontFamily: "monospace",
              fontSize: "1.5rem",
            }}
          >
            <tr>
              <th>Title</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody style={{ textAlign: "center", color: "whitesmoke" }}>
            {orderList}
          </tbody>
        </table>
      </div>
    </div>
  );
};

OrderIndex.getInitialProps = async (context, client) => {
  const { data } = await client.get("/api/orders");
  return { orders: data };
};

export default OrderIndex;
