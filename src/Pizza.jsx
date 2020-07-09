import React from 'react';
import { Button, Container, Alert, Col, Card, Form } from 'react-bootstrap';

const Pizza = ({count, slices, result, slicesHandler, countHandler, resetHandler, calculateHandler}) =>{
    return (
        <div className="box">
            <Card className="box" style={{ width: '60vw' }}>
            <Card.Img variant="top" src="/assets/pizza2.jpg" />
            <Card.Body>
                <Card.Title>Calculadora de pizzas
                <Alert variant="success">
                       Necesitas {result} Pizzas 🍕🍕🍕
                </Alert>
                </Card.Title>
                <Card.Text>
                    <Form style={{ width: '50vw' }}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Número de Invitados</Form.Label>
                            <Form.Control type="number" placeholder="No de Invitados" value={count}
                            onChange={countHandler}/>
                            <Form.Text className="text-muted">
                            Recuerda mantener la distancia social de 1m
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Porciones por Invitado</Form.Label>
                            <Form.Control type="number" placeholder="Porciones por Invitado" value={slices}
                            onChange={slicesHandler}/>
                        </Form.Group>
                        <Button variant="danger" type="button" onClick={resetHandler}>
                            Reset
                        </Button>
                        <Button variant="primary" type="button" onClick={calculateHandler}>
                            Calcular
                        </Button>
                    </Form>
                    
                    
                </Card.Text>
            </Card.Body>
            </Card>
        </div>
        
    )

}

export default Pizza;