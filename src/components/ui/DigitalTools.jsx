const DigitalTools = ({ setActiveTab }) => {
  return (
    <div className="text-center">
      <h2 className="text-5xl font-extrabold text-[#101727]">
        Premium Digital Tools
      </h2>
      <p className="text-[#627382] my-5">
        Choose from our curated collection of premium digital products designed{" "}
        <br />
        to boost your productivity and creativity.
      </p>

      <div className="flex justify-center mb-10">
        <div className="tabs tabs-box">
          <input
            type="radio"
            name="my_tabs_1"
            className="tab rounded-full w-40"
            aria-label="Products"
            defaultChecked
            onClick={() => setActiveTab("product")}
          />
          <input
            type="radio"
            name="my_tabs_1"
            className="tab rounded-full w-40"
            aria-label="Cart (2)"
            onClick={() => setActiveTab("cart")}
          />
        </div>
        
      </div>
    </div>
  );
};

export default DigitalTools;
