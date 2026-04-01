const SelectedCart = ({carts}) => {
    return (
        <div className="container mx-auto bg-[#FFFFFF] rounded-lg shadow-2xl p-10">
            <h2 className="text-3xl text-[#101727] font-bold mb-10">Your Cart</h2>
            {
                carts.map(item => <div key={item.id}>
                    <div className="flex justify-between mt-5 p-5 bg-[#F9FAFC] rounded-lg">
                        <div className="flex gap-5">
                            <img className="w-10 h-10" src={item.image} alt="" />
                            <div>
                                <h3 className="text-xl font-bold">{item.name}</h3>
                                <p className="text-[16px] text-[#627382]">${item.price}</p>
                            </div>
                        </div>
                        <button className="btn rounded-full text-[#FF3980]">Remove</button>
                    </div>
                </div> )
            }
        </div>
    );
};

export default SelectedCart;