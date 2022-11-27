import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import pic from '../images/profile.webp'
import phone from '../images/phone.png'
import mail from '../images/mail.png'
import lodha from '../images/lodha.png'

function ProfileCard() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={lodha} style={{borderRadius: "50%", width: "180px", margin: "50px auto"}} />
      <Card.Body>
        <Card.Title>Lodha Group</Card.Title>
        <Card.Text>
          At Lodha, our passion is to create landmarks that meet global standards, 
          epitomise the values of our family, and are built on a legacy of trust 
          spanning four decades. We are guided by our vision of ‘Building a Better 
          Life’ and believe that homes transform lives. A home is a springboard for 
          the dreams and aspirations, for living a healthier and fulfilled life.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>
          <div>
            <span><img src={phone} alt="..." style={{width: "30px"}}/></span>
            <span style={{marginLeft: "10px", fontWeight: "bold"}}>(302) 555-0107</span>
          </div>
        </ListGroup.Item>
        <ListGroup.Item>
          <div>
            <span><img src={mail} alt="..." style={{width: "30px"}}/></span>
            <span style={{marginLeft: "10px", fontWeight: "bold"}}>Lodha@gmail</span>
          </div>
        </ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default ProfileCard;