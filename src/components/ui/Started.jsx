import userImg from "../../assets/user.png";
import productImg from "../../assets/package.png";
import startImg from "../../assets/rocket.png";

const Started = () => {
  return (
    <div className="bg-[#F9FAFC] my-20 py-20">
      <div className="container mx-auto">
        <div className="text-center">
          <h2 className="text-5xl font-extrabold text-[#101727] mb-5">
            Get Started in 3 Steps
          </h2>
          <p className="text-[16px] text-[#627382]">
            Start using premium digital tools in minutes, not hours.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 mt-10">
          <div className="m-5">
            <div className="card bg-base-100 w-96 shadow-sm">
              <div className="pt-10 pr-5 flex justify-end">
                <span className="w-10 h-10 bg-[#4F39F6] rounded-full text-[16px] p-3 text-white">
                  01
                </span>
              </div>
              <div className="flex justify-center">
                <img src={userImg} alt="" />
              </div>
              <div className="card-body text-center pb-20">
                <h2 className="text-2xl font-bold text-[#101727]">
                  Create Account
                </h2>
                <p className="text-[16px] text-[#627382]">
                  Sign up for free in seconds. No credit card required to get
                  started.
                </p>
              </div>
            </div>
          </div>

          <div className="m-5">
            <div className="card bg-base-100 w-96 shadow-sm">
              <div className="pt-10 pr-5 flex justify-end">
                <span className="w-10 h-10 bg-[#4F39F6] rounded-full text-[16px] p-3 text-white">
                  02
                </span>
              </div>
              <div className="flex justify-center">
                <img src={productImg} alt="" />
              </div>
              <div className="card-body text-center pb-20">
                <h2 className="text-2xl font-bold text-[#101727]">
                  Choose Products
                </h2>
                <p className="text-[16px] text-[#627382]">
                  Browse our catalog and select the tools that fit your needs.
                </p>
              </div>
            </div>
          </div>

          <div className="m-5">
            <div className="card bg-base-100 w-96 shadow-sm">
              <div className="pt-10 pr-5 flex justify-end">
                <span className="w-10 h-10 bg-[#4F39F6] rounded-full text-[16px] p-3 text-white">
                  03
                </span>
              </div>
              <div className="flex justify-center">
                <img src={startImg} alt="" />
              </div>
              <div className="card-body text-center pb-20">
                <h2 className="text-2xl font-bold text-[#101727]">
                  Start Creating
                </h2>
                <p className="text-[16px] text-[#627382]">
                  Download and start using your premium tools immediately.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Started;
