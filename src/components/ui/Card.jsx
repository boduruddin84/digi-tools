import { toast, ToastContainer } from "react-toastify";

const Card = ({ product, carts, setCarts }) => {
  const handelButton = () => {
    const isFound = carts.find(item => item.id === product.id);
    if(isFound) {
      toast.error("Product already in cart!");
      return;
    }
    setCarts([...carts, product]);
    toast.success("Product added to cart!");
  }

  return (
    <div className="mb-10">
      <div className="card w-96 bg-base-100 shadow-sm">
        <div className="card-body">
          <div className="flex justify-between mb-3">
            <img className="w-10 h-10" src={product.image} alt="" />
            <span className="badge badge-xs badge-warning">
              {product.tagType}
            </span>
          </div>
          <div className="space-y-3">
            <h2 className="text-2xl font-bold text-[#101727]">{product.name}</h2>
            <p className="text-[16px] text-[#627382]">{product.description}</p>
            <p className="text-xl">
              <span className="text-[#101727] text-2xl font-bold">
                ${product.price}
              </span>
              /
              <span className="text-[16px] text-[#627382]">
                {product.period}
              </span>{" "}
            </p>
          </div>
          <ul className="mt-6 flex flex-col gap-2 text-xs">
            {product.features.map((feature, index) => (
              <div key={index}>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 me-2 inline-block text-success"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>{feature}</span>
                </li>
              </div>
            ))}
          </ul>
          <div className="mt-6">
            <button onClick={handelButton} className="btn btn-primary btn-block rounded-full">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
