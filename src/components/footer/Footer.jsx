import instagramImg from "../../assets/Instagram.png";
import facbookImg from "../../assets/Facebook.png";
import twitterImg from "../../assets/Twitter.png";

const Footer = () => {
    return (
        <div className="bg-[#101727]">
            <div className="container mx-auto">
                <div className="pt-30 pb-20 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 ml-5">
                    <div className="space-y-4">
                        <h3 className="text-[#FFFFFF] text-4xl font-extrabold">DigiTools</h3>
                        <p className="text-[#FAFAFA]">Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.</p>
                    </div>
                    <div className="space-y-4">
                        <h4 className="text-[#FFFFFF] font-medium text-[20px]">Product</h4>
                        <p className="text-[#FAFAFA]">Features</p>
                        <p className="text-[#FAFAFA]">Pricing</p>
                        <p className="text-[#FAFAFA]">Templates</p>
                        <p className="text-[#FAFAFA]">Integrations</p>
                    </div>
                    <div className="space-y-4">
                        <h4 className="text-[#FFFFFF] font-medium text-[20px]">Company</h4>
                        <p className="text-[#FAFAFA]">About</p>
                        <p className="text-[#FAFAFA]">Blog</p>
                        <p className="text-[#FAFAFA]">Careers</p>
                        <p className="text-[#FAFAFA]">Press</p>
                    </div>
                    <div className="space-y-4">
                        <h4 className="text-[#FFFFFF] font-medium text-[20px]">Resources</h4>
                        <p className="text-[#FAFAFA]">Documentation</p>
                        <p className="text-[#FAFAFA]">Help Center</p>
                        <p className="text-[#FAFAFA]">Community</p>
                        <p className="text-[#FAFAFA]">Contact</p>
                    </div>
                    <div className="space-y-4">
                        <h4 className="text-[#FFFFFF] font-medium text-[20px]">Social Links</h4>
                        <div className="flex gap-2">
                            <img src={instagramImg} alt="" />
                            <img src={facbookImg} alt="" />
                            <img src={twitterImg} alt="" />
                        </div>
                    </div>
                </div>

                <hr className="text-[#E5E7EB]" />

                <div className="pb-10 ml-5 lg:ml-0 lg:flex lg:justify-between mt-10">
                    <p className="text-[16px] text-[#FAFAFA]">© 2026 Digitools. All rights reserved.</p>
                    <div className="flex gap-10">
                        <p className="text-[16px] text-[#FAFAFA]">Privacy Policy</p>
                        <p className="text-[16px] text-[#FAFAFA]">Terms of Service</p>
                        <p className="text-[16px] text-[#FAFAFA]">Cookies</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Footer;