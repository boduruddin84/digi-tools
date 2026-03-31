import { use } from "react";
import Card from "./Card";

const Models = ({productPromise}) => {
    const products = use(productPromise)
    

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 container mx-auto">
            {
                products.map(product => <div>
                    <Card key={product.id} product={product} />
                </div> )
            }
        </div>
    );
};

export default Models;