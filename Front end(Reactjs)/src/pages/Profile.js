import PropertyCard from '../components/Propertycard';
import ProfileCard from '../components/ProfileCard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import Mynavbar from '../components/Navbar';

const data = [
    {
        name: "Test1",
        description: "awdadawdaw",
        type: 2
    },
    {
        name: "Test2",
        description: "awdadawdaw",
        type: 3
    },
    {
        name: "Test3",
        description: "awdadawdaw",
        type: 1
    },
    {
        name: "Test4",
        description: "awdadawdaw",
        type: 2
    },
    {
        name: "Test4",
        description: "awdadawdaw",
        type: 2
    },
    {
        name: "Test4",
        description: "awdadawdaw",
        type: 2
    },
    {
        name: "Test4",
        description: "awdadawdaw",
        type: 2
    },
    {
        name: "Test4",
        description: "awdadawdaw",
        type: 2
    }
]

export default function Profile() {

    const [typeFilter, setTypeFilter] = useState([2, 3, 1]);

    return (
        <Container>
            {/* <Row>
                <Mynavbar />
            </Row> */}
            <Row>
                <Col xs={3} style={{ padding: "8px" }}>
                    <ProfileCard />
                </Col>
                <Col>
                    <Row>
                        <h1>Property Offered</h1>
                    </Row>
                    <Row>
                        {
                            data.filter(el => typeFilter.includes(el.type)).map((property) => {
                                return (
                                    <Col xs={12} sm={6} md={3} lg={3} style={{ padding: "8px" }}>
                                        <PropertyCard prop={property} />
                                    </Col>
                                )
                            })
                        }
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}