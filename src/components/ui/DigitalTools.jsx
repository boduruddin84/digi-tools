const DigitalTools = () => {
  return (
    <div className="text-center">
      <h2 className="text-5xl font-extrabold text-[#101727]">Premium Digital Tools</h2>
      <p className="text-[#627382] my-5">
        Choose from our curated collection of premium digital products designed <br />
        to boost your productivity and creativity.
      </p>

      <div className="flex justify-center mb-10">
        <div role="tablist" className="tabs tabs-box">
          <button role="tab" className="bg-blue-600 text-white tab tab-active">
            Products
          </button>
          <button role="tab" className="tab">
            Cart (2)
          </button>
        </div>
      </div>
    </div>
  );
};

export default DigitalTools;
