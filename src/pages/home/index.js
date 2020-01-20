import React from 'react';

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import logo from '../../logo.svg'

const Index = () => {
    return (
        <div>
            Anasayfa
            <Row>
                <Col md = {3}><img src = {logo} alt = 'logo' /></Col>
                <Col md = {3}>2 of 3 (wider)</Col>
                <Col md = {3}>3 of 3</Col>
                <Col md = {3}>3 of 3</Col>
            </Row>
        </div>
    );
}

export default Index;
