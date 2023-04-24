import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom'

const Welcome = () =>
    <section className="welcome-section">
        <Container>
            <Row>
                <Col>
                    <article className="welcome-header">
                        <h1 className="text-light header-lg">Never spend time getting your food again</h1>
                        <h2 className="text-light header-sm">Order your box and be surprised every day!</h2>
                        <div className="welcome-actions">
                            <Link to='/signin' className="welcome-action">Sign In</Link>
                            <Link to='/signup' className="welcome-action">Sign Up</Link>
                            <Link to="/home" className="welcome-action">Sample</Link>
                        </div>
                    </article>
                </Col>
            </Row>
        </Container>
    </section>

export default Welcome
