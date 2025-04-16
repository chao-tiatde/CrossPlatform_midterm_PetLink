import { useParams } from "react-router";

export default function Product() {
    const { productSpecies, productId } = useParams();

    const data = productSpecies === "dog" ? require("../json/dog.json") : require("../json/cat.json");
    const product = data.find((item) => item.id === parseInt(productId, 10));

    if (!product) {
        return <div>找不到對應的商品資料</div>;
    }

    return (
        <>
            {/* <PetDetail product={product} /> */}
            <h1>Product</h1>
        </>
    );
}
