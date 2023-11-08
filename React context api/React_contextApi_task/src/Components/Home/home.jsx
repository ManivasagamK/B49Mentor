import "./home.css";
import Header from "../Header/header";
import ProductCard from "../ProductCard/productCard";
import { useContext } from "react";
import { AppContext } from "../../App";

const Home = () => {
    const { products } = useContext(AppContext);
    return (
        <div>
            <Header />
            <div className="products">
                {products.map((product, index) => {
                    return <ProductCard product={product} key={index} />
                }
                )}
            </div></div>

    );
}

export default Home;