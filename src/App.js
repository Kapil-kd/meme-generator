import { Box, Container, Stack } from "@mui/material";
import { Leftmenu } from "./components/leftmenu";
import { Navbar } from "./components/navbar";


function App() {
  return (
    <Box>
      <Navbar />
      <Container maxWidth="xl" >
        <Stack direction="row" spacing={6} justifyContent="space-between" mt={2}>
          <Leftmenu/>
        </Stack>
      </Container>
    </Box>
  );
}

export default App;
