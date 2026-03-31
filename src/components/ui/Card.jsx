const Card = ({ model }) => {
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-sm">
        <div className="card-body">
          <div className="flex justify-between mb-3">
            <img className="w-10 h-10" src={model.image} alt="" />
            <span className="badge badge-xs badge-warning">
              {model.tagType}
            </span>
          </div>
          <div className="space-y-3">
            <h2 className="text-2xl font-bold text-[#101727]">{model.name}</h2>
            <p className="text-[16px] text-[#627382]">{model.description}</p>
            <p className="text-xl">
              <span className="text-[#101727] text-2xl font-bold">
                ${model.price}
              </span>
              /
              <span className="text-[16px] text-[#627382]">
                {model.period}
              </span>{" "}
            </p>
          </div>
          <ul className="mt-6 flex flex-col gap-2 text-xs">
            {model.features.map((feature) => (
              <div>
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
            <button className="btn btn-primary btn-block rounded-full">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
