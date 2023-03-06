import { Stack } from "@mui/material"
import styled from "styled-components"
import Chart from "../components/Chart"
import Featured from "../components/Featured"
import WidgetLg from "../components/WidgetLg"
import WidgetSm from "../components/WidgetSm"

const Container = styled.div`
  flex: 4;
  height: "100vh";
`

const Home = () => {
  return (
    <Container>
      <Featured />
      <Chart />
      <Stack direction='row' m='20px'>
        <WidgetSm />
        <WidgetLg />
      </Stack>
    </Container>  
  )
}

export default Home