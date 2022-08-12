import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

function Footer() {
  return (
    <footer>
      <Box
        px={{ xs: 3, sm: 10 }}
        py={{ xs: 5, sm: 10 }}
        bgcolor="#f5f5f5"
        color="#f5f5f5"
      >
        <Container maxWidth="lg"></Container>
      </Box>
    </footer>
  );
}
export default Footer;
