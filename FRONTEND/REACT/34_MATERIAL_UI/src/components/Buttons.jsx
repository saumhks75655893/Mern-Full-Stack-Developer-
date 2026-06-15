import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function Buttons() {
  return (
    <Stack direction="row" spacing={2}>
      <Button color="secondary">Secondary</Button>
      <Button
        sx={{ width: 500, height: 50 }}
        variant="contained"
        color="success"
      >
        Success
      </Button>
      <Button variant="outlined" color="error">
        Error
      </Button>
    </Stack>
  );
}
