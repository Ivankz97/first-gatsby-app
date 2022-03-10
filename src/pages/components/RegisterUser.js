import React, { useState } from 'react'
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap'
import { useForm } from 'react-hook-form'


const RegisterUser = () => {

    const initialState = {
        email: '',
        password: ''
    }

    const [user, setUser]  = useState(initialState)
    const { register, handleSubmit, formState: { errors } } = useForm();


    const onSubmit = (data) => {
        console.log(data.email, data.password);
        setUser(data);
    }

    return (
        <Container>
            <Row>
                <Col md={6}>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control {...register("email", {required: true})} type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                            {errors.email && <Alert variant='danger'>This field is required</Alert>}
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control {...register("password", {required: true})} type="password" placeholder="Password" />
                            <Form.Text className="text-muted">
                            {errors.password && <Alert variant='danger'>This field is required</Alert>}
                            </Form.Text>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
                <Col md={6}>
                    {
                        !user.email ?
                        (<Alert>No user submitted</Alert>) 
                        : <Alert variant='primary'> {user.email} </Alert>
                    }
                </Col>
            </Row>
        </Container>
    )
}

export default RegisterUser