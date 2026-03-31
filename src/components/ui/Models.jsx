import { use } from "react";
import Card from "./Card";

const Models = ({modelPromise}) => {
    const models = use(modelPromise)
    

    return (
        <div className="grid grid-cols-3 container mx-auto">
            {
                models.map(model => <div>
                    <Card key={model.id} model={model} />
                </div> )
            }
        </div>
    );
};

export default Models;