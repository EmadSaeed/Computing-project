import { Col, Row } from "react-bootstrap"
import Product from "../Product"
import products from "../../data/dummy-data"

function HomePage() {
    return (
        <>
            <h1>Our Products</h1>
            <Row>
                {products.map(product => (
                    <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                        <Product product={product} />
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default HomePage