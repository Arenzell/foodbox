import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'reactstrap'

const NotFound = () =>
    <section className="not-found-section">
        <Container>
            <Row>
                <Col>
                    <article className="error-header">
                        <h1 className="text-light error-message-lg">404</h1>
                        <h2 className="text-light error-message-sm">Page not found!</h2>
                        <div className="error-actions">
                            <Link to='/' className="welcome-action">Home</Link>
                        </div>
                    </article>
                </Col>
            </Row>
        </Container>
    </section>

export default NotFound
