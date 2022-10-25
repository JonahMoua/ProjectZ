import styled from 'styled-components';
import './App.css'


const Container = styled.div`
 display: inline; 
 padding: 0px; 
 margin: auto;
 `;

 const ServicesWrapper = styled.div`
 max-width: 1000px;
 margin: auto;
 display: grid;
 grid-template-columns: 1fr 1fr 1fr;
 grid-gap: 16px;
 padding: 0;
 
 @media screen and (max-width: 1000px) {
     grid-template-columns: 1fr;
     max-width: 200px;
     }
 
 `
const Column = styled.div`
background: #fff;
display: flex;
flex-direction: column;
justify-content: flex-start;
border-radius: 15px;
max-height: 1000px;
padding: 30px;
`


const Leo = styled.div`
height: 150px;
width: 254px;
float: left;
padding: 25px 0;
`;
const Aries = styled.div`
height: 150px;
width: 254px;
float: left;
padding: 25px 0;
`;
const Taurus = styled.div`
height: 150px;
width: 254px;
float: left;
padding: 25px 0;
`;
const Gemini = styled.div`
height: 150px;
width: 254px;
float: left;
padding: 25px 0;
`;
const Cancer = styled.div`
height: 150px;
width: 254px;
float: left;
padding: 25px 0;
`;
const Virgo = styled.div`
height: 150px;
width: 254px;
float: left;
padding: 25px 0;
`;
const Libra = styled.div`
height: 150px;
width: 254px;
float: left;
padding: 25px 0;
`;
const Scorpius = styled.div`
height: 150px;
width: 254px;
float: left;
padding: 25px 0;
`;
const Sagittarius = styled.div`
height: 150px;
width: 254px;
float: left;
padding: 25px 0;
`;
const Capricornus = styled.div`
height: 150px;
width: 254px;
float: left;
padding: 25px 0;
`;
const Aquarius = styled.div`
height: 150px;
width: 254px;
float: left;
padding: 25px 0;
`;
const Pisces = styled.div`
height: 150px;
width: 254px;
float: left;
padding: 25px 0;
`;


function App() {
  return (
    <Container>
        <ServicesWrapper>
        <Column>
          <Leo> <img src= {require("./images/leo.png")} alt= ""/></Leo>
          <Aries> <img src= {require("./images/aries.png")} alt= ""/> </Aries>
          <Taurus> <img src= {require("./images/taurus.png")} alt= ""/> </Taurus>
          <Gemini> <img src= {require("./images/gemini.png")} alt= ""/> </Gemini>
        </Column>
        <Column>
          <Cancer> <img src= {require("./images/cancer.png")} alt= ""/> </Cancer>
          <Virgo> <img src= {require("./images/virgo.png")} alt= ""/> </Virgo>
          <Libra> <img src= {require("./images/libra.png")} alt= ""/> </Libra>
          <Scorpius> <img src= {require("./images/scorpius.png")} alt= ""/> </Scorpius>
        </Column>
        <Column>
          <Sagittarius> <img src= {require("./images/sagittarius.png")} alt= ""/> </Sagittarius>
          <Capricornus> <img src= {require("./images/capricorn.png")} alt= ""/> </Capricornus>
          <Aquarius> <img src= {require("./images/aquarius.png")} alt= ""/> </Aquarius>
          <Pisces> <img src= {require("./images/pisces.png")} alt= ""/> </Pisces>
        </Column>
        </ServicesWrapper>
    </Container>
  );
}

export default App;
