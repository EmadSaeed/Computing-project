import { Link, useParams } from 'react-router-dom'
import products from '../../data/dummy-data'
import { Col, Row, ListGroup, Image, Card } from 'react-bootstrap'

function ProductPage() {
    const { id: prodId } = useParams()
    const product = products.find(p => p._id === prodId)
    console.log(product.productName)
    return (
        <>
            <Link to="/" className='btn btn-light my-3'>Home /</Link>
            <Row>
                <Col md={6}><Image src={product.image} alt={product.productName} fluid /></Col>
                <Col md={6}>
                    <ListGroup variant='flush'>
                        <ListGroup.Item><h1 className='mb-5'>{product.productName}</h1></ListGroup.Item>
                        <ListGroup.Item>Description: {product.description}</ListGroup.Item>
                    </ListGroup>
                    <Card className='mt-5'>
                        <ListGroup variant='flush'>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Price:</Col>
                                    <Col><strong>£{product.price}</strong></Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Status:</Col>
                                    <Col>{product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}</Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item><button className='btn btn-block' type='button' style={{ width: '100%', background: ' #2c1f01', color: '#fff' }} disabled={product.countInStock === 0}>Add to Cart</button></ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Stock:</Col>
                                    <Col>{product.countInStock}</Col>
                                </Row>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default ProductPage