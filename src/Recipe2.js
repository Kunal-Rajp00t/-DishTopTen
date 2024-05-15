import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import './mycss.css';

const Recipe2 = (props) => {
    const { image} = props;
    return (
        <>
            {/* <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                <Card className='card' >
                    <Card.Img variant="top" src={""} />
                </Card>
            </div> */}
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                <Card className='card' >
                    <Card.Img variant="top" src={image} />
                </Card>
            </div>
            {/* <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                <Card className='card' >
                    <Card.Img variant="top" src={image0} />
                </Card>
            </div> */}
        </>
    )
}

export default Recipe2;