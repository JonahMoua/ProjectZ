import styled from 'styled-components';
import './App.css'


const Container = styled.div`
 width: 20%; 
 display: flex; 
 padding:0px; 
 margin:0px
`;

const Column1 = styled.div`
grid-template-columns: auto auto auto auto;
`;
const Column2 = styled.div`
grid-template-columns: auto auto auto auto;
`;
const Column3 = styled.div`
grid-template-columns: auto auto auto auto;
`;
const Leo = styled.div`
height: 150px;
width: 254px;
float: left;
z-index: 1;
padding: 20px 0;
`;
const Aries = styled.div`
height: 150px;
width: 254px;
float: left;
z-index: 1;
padding: 20px 0;
`;
const Taurus = styled.div`
height: 150px;
width: 254px;
float: left;
z-index: 1;
padding: 20px 0;
`;
const Gemini = styled.div`
height: 150px;
width: 254px;
float: left;
z-index: 1;
padding: 20px 0;
`;
const Cancer = styled.div`
height: 150px;
width: 254px;
float: left;
z-index: 1;
padding: 20px 0;
`;
const Virgo = styled.div`
height: 150px;
width: 254px;
float: left;
z-index: 1;
padding: 20px 0;
`;
const Libra = styled.div`
height: 150px;
width: 265px;
float: left;
z-index: 1;
padding: 20px 0;
`;
const Scorpius = styled.div`
height: 150px;
width: 254px;
float: left;
z-index: 1;
padding: 20px 0;
`;
const Sagittarius = styled.div`
height: 150px;
width: 254px;
float: left;
z-index: 1;
padding: 20px 0;
`;
const Capricornus = styled.div`
height: 150px;
width: 254px;
float: left;
z-index: 1;
padding: 20px 0;
`;
const Aquarius = styled.div`
height: 150px;
width: 254px;
float: left;
z-index: 1;
padding: 20px 0;
`;
const Pisces = styled.div`
height: 150px;
width: 240px;
float: left;
z-index: 1;
padding: 20px 0;
`;


function App() {
  return (
    <Container>
        <Column1>
          <Leo> <img src= {require("./images/leo.png")} alt= ""/></Leo>
          <Aries> <img src= {require("./images/aries.png")} alt= ""/> </Aries>
          <Taurus> <img src= {require("./images/taurus.png")} alt= ""/> </Taurus>
          <Gemini> <img src= {require("./images/gemini.png")} alt= ""/> </Gemini>
        </Column1>
        <Column2>
          <Cancer> <img src= {require("./images/cancer.png")} alt= ""/> </Cancer>
          <Virgo> <img src= {require("./images/virgo.png")} alt= ""/> </Virgo>
          <Libra> <img src= {require("./images/libra.png")} alt= ""/> </Libra>
          <Scorpius> <img src= {require("./images/scorpius.png")} alt= ""/> </Scorpius>
        </Column2>
        <Column3>
          <Sagittarius> <img src= {require("./images/sagittarius.png")} alt= ""/> </Sagittarius>
          <Capricornus> <img src= {require("./images/capricorn.png")} alt= ""/> </Capricornus>
          <Aquarius> <img src= {require("./images/aquarius.png")} alt= ""/> </Aquarius>
          <Pisces> <img src= {require("./images/pisces.png")} alt= ""/> </Pisces>
        </Column3>
    </Container>
  );
}

export default App;
