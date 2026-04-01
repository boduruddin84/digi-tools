import BannerImg from "../../assets/banner.png";
import PlayImg from "../../assets/Play.png"

const Banner = () => {
  return (
    <div className="container mx-auto my-12 lg:flex lg:gap-75">
      <div className="flex flex-col justify-center mr-25">
        <p className="bg-[#E1E7FF] rounded-full md:w-1/2 px-4 py-1 flex justify-center items-center gap-2 text-[#4F39F6]"><span className="w-2.5 h-2.5 bg-[#4F39F6] rounded-full"></span> New: AI-Powered Tools Available</p>
        <h2 className="font-extrabold text-3xl md:text-7xl/[84px] mt-5 mb-2 text-[#101727]">
          Supercharge Your <br /> Digital Workflow
        </h2>
        <p className="text-[#627382]">
          Access premium AI tools, design assets, templates, and productivity <br />
          software—all in one place. Start creating faster today. <br /> Explore
          Products
        </p>
        <div className="flex mt-5">
            <button className="btn btn-primary mr-4 rounded-full">Explore Products</button>
            <button className="btn btn-outline rounded-full text-[#4F39F6]"><img src={PlayImg} alt="" /> Watch Demo</button>
        </div>
      </div>
      <div className="mt-10 lg:mt-0">
        <img src={BannerImg} alt="" />
      </div>
    </div>
  );
};

export default Banner;
