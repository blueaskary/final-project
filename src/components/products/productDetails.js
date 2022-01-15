import { useParams } from "react-router-dom";
import "./productDetails.css";

function ProductDetails() {
    const { productId } = useParams() //productId definit initial in App.js
    return <div> Product: {productId} </div>
}

export default ProductDetails;