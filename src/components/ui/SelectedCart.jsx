import { toast, ToastContainer } from "react-toastify";
import cartImg from "../../assets/products/shopping-cart.png"

const SelectedCart = ({ carts, setCarts }) => {
  const totalPrice = carts.reduce((sum, item) => sum + item.price, 0);

  const handelPayment = () => {
    setCarts([]);
    toast.success("Payment successful!")
  };

  const handelDelete = (item) => {
    const filteredArray = carts.filter(cart => cart.id !== item.id)
    setCarts(filteredArray);
    toast.success("Product deleted from cart!")
    
  };

  return (
    <div className="container mx-auto bg-[#FFFFFF] rounded-lg shadow-2xl p-10 mb-10">
      <h2 className="text-3xl text-[#101727] font-bold mb-10">Your Cart</h2>

      {carts.length === 0 ? (
        <div className="flex flex-col justify-center items-center py-20">
            <img className="w-20 h-20" src={cartImg} alt="" />
            <p className="mt-5 text-[#627382] text-2xl">Your cart is empty</p>
        </div>
      ) : (
        <>
          {carts.map((item) => (
            <div key={item.id}>
              <div className="flex justify-between mt-5 p-5 bg-[#F9FAFC] rounded-lg">
                <div className="flex gap-5">
                  <img className="w-10 h-10" src={item.image} alt="" />
                  <div>
                    <h3 className="text-xl font-bold">{item.name}</h3>
                    <p className="text-[16px] text-[#627382]">${item.price}</p>
                  </div>
                </div>
                <button onClick={() => handelDelete(item)} className="btn rounded-full text-[#FF3980]">
                  Remove
                </button>
              </div>
            </div>
          ))}
          <div className="flex justify-between mt-10">
            <h3 className="text-[16px] text-[#627382]">Total</h3>
            <p className="text-2xl text-[#101727] font-bold">${totalPrice}</p>
          </div>
          <button
            onClick={handelPayment}
            className="btn btn-primary w-full mt-10 rounded-full py-2"
          >
            Proceed to Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default SelectedCart;
