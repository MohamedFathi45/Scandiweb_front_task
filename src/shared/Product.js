import '../styles/product.css'

const Product = ({product , onCheckBoxChanged}) => {     //design of each product
    return (
        <div className = 'product'>
            <div className = 'delete-checkbox'>  <input type ='checkbox' value = {product.id} onChange = {onCheckBoxChanged}  /> </div>
            <div className ='text-container'  >
                <div>{product.sku}</div>
                <div>{product.name}</div>
                <div>{product.price} $</div>
                <div>{product.displayString}</div>
            </div>
        </div>
    )
}

export default Product
