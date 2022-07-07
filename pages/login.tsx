import React from "react";

import Image from "next/image";
import { Box, Grid, Stack, TextField } from "@mui/material";

function login() {
  return (
    <div>
      <Box sx={{ position: "absolute", right: 0, zIndex: -1 }}>
        <Image
          src="/svg/login/curve.svg"
          alt="curve"
          width={815}
          height={1020}
        />
      </Box>
      <Grid container sx={{ position: "absolute", top: "30%", left: "10%" }}>
        <Grid
          item
          xs={9}
          sm={12}
          md={6}
          lg={4}
          sx={{
            backgroundColor: "#C7C6FA",
            borderRadius: "100px",
            height: "50vh",
          }}
        >
          <Stack
            sx={{ width: "100%", marginTop: "10%" }}
            alignItems="center"
            justifyContent="center"
          >
            <TextField
              sx={{ width: "70%", input: { color: "black" } }}
              color="success"
              label="username"
              variant="outlined"
              InputLabelProps={{
                style: { fontFamily: "Mitr", color: "#D0D5DD" },
              }}
            />
          </Stack>
        </Grid>
      </Grid>
    </div>
  );
}

export default login;
