import {Card, ListGroup, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function SideBarItem(props) {
    const data = props.data;
    
  return (
    <Card className='sidebar-card'>
      <Card.Img variant="top" src={data.image}/>
      <Card.Title> {data.title}</Card.Title>
        <Card.Text>
        {data.subtitle}
        </Card.Text>
        <Card.Text style={{ textAlign: 'center', fontSize:'12px' }}>
        {data.tags.map((element, index) => (
          <Button className = 'cardItemLabels' variant="primary">{element}</Button>
        ))}
        </Card.Text>
       
     
    </Card>
  );
}

export default SideBarItem;

