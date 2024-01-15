import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Product({ product }) {
    return (
        <Card clasName='my-3 p-3 rounded'>
            <Link to={`/product/${product._id}`}>
                <Card.Img src={product.image} variant='top' />
            </Link>

            <Card.Body>
                <Link to={`/product/${product._id}`}>
                    <Card.Title as='div'>
                        <strong style={{ color: '#000' }}>{product.productName}</strong>
                    </Card.Title>
                </Link>

                <Card.Text as='h4'>
                    £{product.price}
                </Card.Text>
            </Card.Body>

        </Card>
    )
}

export default Product