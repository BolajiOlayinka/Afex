import React from "react";
import styles from './Home.module.css';
// import phone from './images/phone4.png';
import laptop from './images/Laptop afex.png';
import { Row, Col } from "reactstrap";
import Navigate from './Navbar';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
export default function Home() {
  return (
    <div className={styles.bannerContent}>
    <Navigate/>
    {/* <Container> */}
       <Row>
          <Col md="6" sm="12" xs="12">
            <div className={styles.bannerLeft}>
              <h3>
                 Manage Transactions with accuracy as an Afex Agent.
              </h3>
              <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
         Molestias ipsa necessitatibus quae! Voluptas ullam hic autem 
        
              </p>
              <p>Download and use the App on the go!</p>
              <ButtonContainer>
                <Link to = "/main"><Button className="btn btn-danger">Start</Button></Link>
              </ButtonContainer>
          
            </div>
            </Col>

            <Col md="6" sm="12" xs="12">
            <div className={styles.bannerRight}>
              <img className={styles.phone} src={laptop} alt="phone" />
            </div>
          
          </Col>
        
        </Row>
        {/* </Container> */}
        </div>
     
  );
}

const ButtonContainer= styled.div `
text-align:left;
margin-top:2.5em;
@media (max-width:992px){
  margin-top:1.2em;
  text-align:center;
}
`
const Button = styled.button `
width:10em;
padding:0.5em 2em;
border-radius:1.5em;
border-style:none;
border-color:none;
background-color:#c71e25;
color:white;

`

