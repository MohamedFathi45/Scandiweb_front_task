import '../../styles/body_grid.css'
import Products from '../../shared/Products';
const Body = ({products}) => {
    return (
        <div className = 'body-grid'>
            <Products products = {products} />
        </div>
    )
}

export default Body
