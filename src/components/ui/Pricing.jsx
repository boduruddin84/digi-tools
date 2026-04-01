const Pricing = () => {
  return (
    <div className="container mx-auto mb-20">
      <div className="text-center mb-5">
        <h3 className="text-5xl font-extrabold text-[#101727]">
          Simple, Transparent Pricing
        </h3>
        <p className="text-[16px] text-[#627382] my-5">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>
      </div>

      <div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10">
          <div className="card w-96 bg-base-100 shadow-sm">
            <div className="card-body">
              <div className="">
                <h2 className="text-2xl font-bold text-[#101727]">Starter</h2>
                <p className="text-[16px] text-[#627382]">Perfect for getting started</p>
              </div>
              <div className="flex items-end mt-5">
                <span className="text-4xl font-bold text-[#101727]">$0</span><span className="text-[20px] text-[#627382]">/month</span>
              </div>
              <ul className="mt-6 flex flex-col gap-2 text-xs">
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
                  <span className="text-[16px] text-[#627382] font-medium">Access to 10 free tools</span>
                </li>
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
                  <span className="text-[16px] text-[#627382] font-medium">Basic templates</span>
                </li>
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
                  <span className="text-[16px] text-[#627382] font-medium">Community support</span>
                </li>
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
                  <span className="text-[16px] text-[#627382] font-medium">1 project per month</span>
                </li>
                
              </ul>
              <div className="mt-6">
                <button className="btn btn-primary btn-block rounded-full">Get Started Free</button>
              </div>
            </div>
          </div>

          <div className="mt-10 md:mt-0 card w-96 shadow-sm bg-[#4F39F6] relative">
            <div className="text-center absolute ml-40 -mt-3">
                <span className="badge badge-xs bg-[#FEF3C6] text-[#BB4D00] text-[14px] font-medium">Most Popular</span>
            </div>
            <div className="card-body">
              <div className="">
                <h2 className="text-2xl font-bold text-[#FFFFFF]">Pro</h2>
                <p className="text-[16px] text-[#ffffffb7]">Best for professionals</p>
              </div>
              <div className="flex items-end mt-5">
                <span className="text-4xl font-bold text-[#FFFFFF]">$29</span><span className="text-[20px] text-[#ffffffb7]">/month</span>
              </div>
              <ul className="mt-6 flex flex-col gap-2 text-xs">
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
                  <span className="text-[16px] text-[#ffffffb7] font-medium">Access to all premium tools</span>
                </li>
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
                  <span className="text-[16px] text-[#ffffffb7] font-medium">Unlimited templates</span>
                </li>
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
                  <span className="text-[16px] text-[#ffffffb7] font-medium">Priority support</span>
                </li>
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
                  <span className="text-[16px] text-[#ffffffb7] font-medium">Unlimited projects</span>
                </li>
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
                  <span className="text-[16px] text-[#ffffffb7] font-medium">Cloud sync</span>
                </li>
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
                  <span className="text-[16px] text-[#ffffffb7] font-medium">Advanced analytics</span>
                </li>
                
              </ul>
              <div className="mt-6">
                <button className="btn btn-primary btn-block rounded-full bg-[#FFFFFF] text-[#4F39F6]">Start Pro Trial</button>
              </div>
            </div>
          </div>
          <div className="mt-10 lg:mt-0 card w-96 bg-base-100 shadow-sm">
            <div className="card-body">
              <div className="">
                <h2 className="text-2xl font-bold text-[#101727]">Enterprise</h2>
                <p className="text-[16px] text-[#627382]">For teams and businesses</p>
              </div>
              <div className="flex items-end mt-5">
                <span className="text-4xl font-bold text-[#101727]">$99</span><span className="text-[20px] text-[#627382]">/month</span>
              </div>
              <ul className="mt-6 flex flex-col gap-2 text-xs">
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
                  <span className="text-[16px] text-[#627382] font-medium">Everything in Pro</span>
                </li>
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
                  <span className="text-[16px] text-[#627382] font-medium">Team collaboration</span>
                </li>
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
                  <span className="text-[16px] text-[#627382] font-medium">Custom integrations</span>
                </li>
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
                  <span className="text-[16px] text-[#627382] font-medium">Dedicated support</span>
                </li>
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
                  <span className="text-[16px] text-[#627382] font-medium">SLA guarantee</span>
                </li>
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
                  <span className="text-[16px] text-[#627382] font-medium">Custom branding</span>
                </li>
                
              </ul>
              <div className="mt-6">
                <button className="btn btn-primary btn-block rounded-full">Contact Sales</button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Pricing;
