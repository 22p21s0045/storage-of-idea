import React from "react";

import Image from "next/image";
import { Box } from "@mui/material";
function login() {
  return (
    <div>
      <Box sx={{ position: "absolute", right: 0 }}>
        <Image src="/svg/login/curve.svg" alt="curve" width={815} height={1020} />
      </Box>
    </div>
  );
}

export default login;
