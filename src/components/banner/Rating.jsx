const Rating = () => {
  return (
    <div className="bg-[#4F39F6] py-10 mb-20">
      <div className="text-center md:text-left md:flex justify-around container mx-auto">
        <div className="space-y-3">
          <h2 className="font-extrabold text-6xl text-[#FFFFFF]">50K+</h2>
          <p className="text-2xl text-[#ffffffbc] font-medium">Active Users</p>
        </div>

        <div className="border-l-4 text-[#ffffffbc]"></div>

        <div className="space-y-3">
          <h2 className="font-extrabold text-6xl text-[#FFFFFF]">200+</h2>
          <p className="text-2xl text-[#ffffffbc] font-medium">Premium Tools</p>
        </div>

        <div className="border-l-4 text-[#ffffffbc]"></div>

        <div className="space-y-3">
          <h2 className="font-extrabold text-6xl text-[#FFFFFF]">4.9</h2>
          <p className="text-2xl text-[#ffffffbc] font-medium">Rating</p>
        </div>
      </div>
    </div>
  );
};

export default Rating;
