import styled from 'styled-components';

const Container = styled.div`
max-width: 100%;
display: flex;
`;

const Row1 = styled.div`
grid-template-columns: auto auto auto auto;
`;
const Row2 = styled.div`
grid-template-columns: auto auto auto auto;
`;
const Row3 = styled.div`
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
        <Row1>
          <Leo> <h1> l </h1> </Leo>
          <Aries> <h1> e </h1> </Aries>
          <Taurus> <h1> o </h1> </Taurus>
          <Gemini> <h1> s </h1> </Gemini>
        </Row1>
        <Row2>
          <Cancer> <h1> c </h1> </Cancer>
          <Virgo> <h1> a </h1> </Virgo>
          <Libra> <h1> c </h1> </Libra>
          <Scorpius> <h1> n </h1> </Scorpius>
        </Row2>
        <Row3>
          <Sagittarius> <h1> 1 </h1> </Sagittarius>
          <Capricornus> <h1> 2 </h1> </Capricornus>
          <Aquarius> <h1> 3 </h1> </Aquarius>
          <Pisces> <h1> 4 </h1> </Pisces>
        </Row3>
    </Container>
  );
}

export default App;
