import React from 'react';
import {Col, Container, Modal, Row} from "react-bootstrap";

const DetailsModal = (props) => {
    const rows = Object.entries(props.myObject).map(value => {
        return (
            <Row>
                <Col xs={5} md={5}>
                    <span className={"modal-label"}>{value[0]} </span>
                </Col>
                <Col xs={5} md={4}>
                    <span className={"modal-label"}>{value[1]} </span>
                </Col>
            </Row>
        );
    });
    return (
        <div>
            <Modal
                show={props.show}
                onHide={props.handleClose}
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>{props.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>
                        {rows}
                    </Container>
                </Modal.Body>
            </Modal>
        </div>
    );
}
export default DetailsModal;