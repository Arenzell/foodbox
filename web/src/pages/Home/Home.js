import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import StoreCard from '../../components/StoreCard'
import FoodImages from '../../resources/images/foods'

const Home = () =>
    <section className="home-section">
        <Container>
            <Row>
                <Col>
                    <StoreCard image={FoodImages.food01} name="Naturally" headline="Fresh Fast Food"/>
                </Col>
                <Col>
                    <StoreCard image={FoodImages.food02} name="KFC" headline="A finger licking good meal " closed={true} />
                </Col>
                <Col>
                    <StoreCard image={FoodImages.food03} name="Los Immortales" headline="Cocina italiana de tradición"/>
                </Col>
                <Col>
                    <StoreCard image={FoodImages.food04} name="Whoopies" headline="Hamburguers and sandwiches"/>
                </Col>
                <Col>
                    <StoreCard image={FoodImages.food05} name="Jolie Bistró" headline="The best meal in the world"/>
                </Col>
                <Col>
                    <StoreCard image={FoodImages.food06} name="Sarkis" headline="The best burguer"/>
                </Col>
                <Col>
                    <StoreCard image={FoodImages.food07} name="Chori" headline="Everything you ever dream"/>
                </Col>
            </Row>
        </Container>
    </section>

export default Home
