import styled from "styled-components"
import Chart from "../components/Chart"
import Featured from "../components/Featured"

const Container = styled.div`
  flex: 4;
  height: "100vh";
`

const Home = () => {
  return (
    <Container>
        <Featured />
        <Chart />
    </Container>  
  )
}

export default Home