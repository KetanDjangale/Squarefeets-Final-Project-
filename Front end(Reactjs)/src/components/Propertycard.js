import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import pic from '../images/02.webp'

export default function PropertyCard({prop}) {
    return(
        <Card style={{ width: '100%' }}>
            <Card.Img variant="top" src={pic} />
            <Card.Body>
                <Card.Title>{prop.name}</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                <Button style={{margin: "5px", backgroundColor: "#fd390e", borderColor:"#fd390e", color: "#fff"}}>Update</Button>
                <Button style={{margin: "5px", backgroundColor: "#fd390e", borderColor:"#fd390e", color: "#fff"}}>Remove</Button>
            </Card.Body>
        </Card>
    )
}
