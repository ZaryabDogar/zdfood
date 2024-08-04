import React, { useEffect, useState } from 'react';

const Orders = () => {
  const [orderData, setOrderData] = useState([]);
  const [user, setUser] = useState(false);

  useEffect(() => {
    const userEmail = localStorage.getItem("email");
    if (userEmail !== null) {
      setUser(true);
      fetchData(userEmail); // Fetch data if the user is logged in
    }
  }, []);

  const fetchData = async (email) => {
    try {
      let response = await fetch("https://zd-backend.vercel.app/api/myorder", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }), // Include email in the request body
      });

      const data = await response.json();
      if (data.success) {
        setOrderData(data.mydata || []); // Set data or an empty array
        console.log(data.mydata);
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  // Calculate total price for each order
  const calculateTotalPrice = (items) => {
    return items.reduce((total, item) => total + item.totalprice, 0);
  };

  // Sort orders by date (newest first)
  const sortedOrders = (orderData || []).slice().sort((a, b) => {
    const dateA = new Date(parseInt(a.orderNumber.split('-')[1])); // Extract timestamp
    const dateB = new Date(parseInt(b.orderNumber.split('-')[1]));
    return dateB - dateA; // Newest first
  });

  // Format timestamp into a readable date string
  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString("en-US", {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <div className="sm:pt-28 pt-20">
      {user ? (
        <div className="px-4 md:px-8">
          {sortedOrders.length > 0 ? (
            <div className="space-y-6">
              {sortedOrders.map((order, index) => (
                <div key={index} className="border-[5px] shadow-xl border-gray-900 p-4 rounded-md shadow-sm text-white">
                  <h3 className="text-lg font-semibold">Order Number: {order.orderNumber}</h3>
                  <p className="text-sm text-gray-500">Date: {formatDate(parseInt(order.orderNumber.split('-')[1]))}</p>
                  <p className="text-sm ">Total Price: PKR-{calculateTotalPrice(order.items)}</p>
                  <h4 className="mt-4 mb-2 font-medium">Items:</h4>
                  <ul className="space-y-2">
                    {order.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center space-x-4">
                        <img src={item.img} alt={item.name} className="w-16 h-16 rounded" />
                        <div>
                          <strong>{item.name}</strong> - PKR-{item.price} x {item.quantity} ({item.size})
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-xl text-white">No orders available.</p>
          )}
        </div>
      ) : (
        <div className="px-4 md:px-8">
          <p className="text-xl text-white">Please log in to see your orders.</p>
        </div>
      )}
    </div>
  );
}

export default Orders;
