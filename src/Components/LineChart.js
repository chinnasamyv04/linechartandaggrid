import {Container, Row, Col} from 'react-bootstrap';
import SideBarItem from './SideBar';
import '../App.css';

import SalesChart from './SalesChart';
import JsonData from './data.json';
function LineChart() {
  const data = JsonData[0];

  return (
    <Container fluid>
      <Row style={{maringTop:'10px'}}>
        <Col sm={2} className='side-bar-items'  >
            <SideBarItem data={data}/>
        </Col>
        <Col sm={10} className='chart-content'>
            <SalesChart data={data} />
        </Col>
      </Row>
    </Container>
  );
}

export default LineChart;