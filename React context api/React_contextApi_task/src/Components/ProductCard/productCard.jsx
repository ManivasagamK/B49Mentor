import './productCard.css';
import Button from '../Button/button';

const productCard = (props) => {

    const { product } = props;

    return (
        <div className="col-md-8 col-lg-6 col-xl-4 mb-3">
            <div className="card">
                <img className="pImage card-img-top" src={product.thumbnail} alt={product.title} />
                <div className="pBody card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">{product.description}</p>
                    <p>${product.price}</p>
                    <div>
                        <Button product={product} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default productCard;