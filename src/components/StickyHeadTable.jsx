import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { Box, Stack, Typography } from "@mui/material";
import {
  ArrowDownward,
  ArrowUpward,
  ShowChart,
  SystemUpdateAlt,
} from "@mui/icons-material";

export default function StickyHeadTable() {
  return (
    <div style={{ margin: "12px" }}>
      <TableContainer sx={{ maxHeight: 400 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell
                sx={{ backgroundColor: "#f5f5f5", borderTopLeftRadius: "12px" }}
              >
                Script
              </TableCell>
              <TableCell sx={{ backgroundColor: "#f5f5f5" }}>Bid</TableCell>
              <TableCell
                sx={{
                  backgroundColor: "#f5f5f5",
                  borderTopRightRadius: "12px",
                }}
              >
                Ask
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>
                <Box>
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <ShowChart sx={{ color: "black", fontSize: 16 }} />
                    <Typography variant="body2" sx={{ color: "black" }}>
                      0.022 (0.06%)
                    </Typography>
                  </Stack>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 500, marginTop: 0.5 }}
                  >
                    Silver Mar
                  </Typography>
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <Typography variant="body2" sx={{ fontWeight: 500 }}>
                      22:54:59.859
                    </Typography>
                    <Typography variant="body2" sx={{ color: "grey" }}>
                      Σ 6470
                    </Typography>
                  </Stack>
                  <Typography variant="body2" sx={{ marginTop: 0.5 }}>
                    O: 34.305
                  </Typography>
                </Box>
              </TableCell>
              <TableCell>
                {" "}
                <Box sx={{ padding: 2, fontFamily: "Roboto, sans-serif" }}>
                  <Box sx={{ display: "flex", alignItems: "baseline" }}>
                    <Typography
                      variant="h5"
                      sx={{ color: "red", fontWeight: 500 }}
                    >
                      29.
                    </Typography>
                    <Typography
                      variant="h3"
                      sx={{ color: "red", fontWeight: 500 }}
                    >
                      51
                    </Typography>
                    <Typography
                      variant="h5"
                      sx={{ color: "red", fontWeight: 500 }}
                    >
                      0
                    </Typography>
                  </Box>
                  <Stack
                    direction="row"
                    alignItems="center"
                    spacing={1}
                    sx={{ marginTop: 0.5 }}
                  >
                    <SystemUpdateAlt sx={{ color: "black", fontSize: 16 }} />
                    <Typography variant="body1">33.995</Typography>
                  </Stack>
                  <Typography variant="body2" sx={{ marginTop: 0.5 }}>
                    C: 34.033
                  </Typography>
                </Box>
              </TableCell>
              <TableCell>
                {" "}
                <Box sx={{ padding: 2, fontFamily: "Roboto, sans-serif" }}>
                  <Box sx={{ display: "flex", alignItems: "baseline" }}>
                    <Typography
                      variant="h5"
                      sx={{ color: "#00f", fontWeight: 500 }}
                    >
                      35.
                    </Typography>
                    <Typography
                      variant="h3"
                      sx={{ color: "#00f", fontWeight: 500 }}
                    >
                      98
                    </Typography>
                    <Typography
                      variant="h5"
                      sx={{ color: "#00f", fontWeight: 500 }}
                    >
                      0
                    </Typography>
                  </Box>
                  <Stack
                    direction="row"
                    alignItems="center"
                    spacing={1}
                    sx={{ marginTop: 0.5 }}
                  >
                    <ArrowUpward sx={{ color: "black", fontSize: 16 }} />
                    <Typography variant="body1">34.305</Typography>
                  </Stack>
                  <Typography variant="body2" sx={{ marginTop: 0.5 }}>
                    L: 34.055
                  </Typography>
                </Box>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Box>
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <ShowChart sx={{ color: "black", fontSize: 16 }} />
                    <Typography variant="body2" sx={{ color: "black" }}>
                      0.022 (0.06%)
                    </Typography>
                  </Stack>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 500, marginTop: 0.5 }}
                  >
                    Silver Mar
                  </Typography>
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <Typography variant="body2" sx={{ fontWeight: 500 }}>
                      22:54:59.859
                    </Typography>
                    <Typography variant="body2" sx={{ color: "grey" }}>
                      Σ 6470
                    </Typography>
                  </Stack>
                  <Typography variant="body2" sx={{ marginTop: 0.5 }}>
                    O: 34.305
                  </Typography>
                </Box>
              </TableCell>
              <TableCell>
                {" "}
                <Box sx={{ padding: 2, fontFamily: "Roboto, sans-serif" }}>
                  <Box sx={{ display: "flex", alignItems: "baseline" }}>
                    <Typography
                      variant="h5"
                      sx={{ color: "red", fontWeight: 500 }}
                    >
                      29.
                    </Typography>
                    <Typography
                      variant="h3"
                      sx={{ color: "red", fontWeight: 500 }}
                    >
                      51
                    </Typography>
                    <Typography
                      variant="h5"
                      sx={{ color: "red", fontWeight: 500 }}
                    >
                      0
                    </Typography>
                  </Box>
                  <Stack
                    direction="row"
                    alignItems="center"
                    spacing={1}
                    sx={{ marginTop: 0.5 }}
                  >
                    <SystemUpdateAlt sx={{ color: "black", fontSize: 16 }} />
                    <Typography variant="body1">33.995</Typography>
                  </Stack>
                  <Typography variant="body2" sx={{ marginTop: 0.5 }}>
                    C: 34.033
                  </Typography>
                </Box>
              </TableCell>
              <TableCell>
                {" "}
                <Box sx={{ padding: 2, fontFamily: "Roboto, sans-serif" }}>
                  <Box sx={{ display: "flex", alignItems: "baseline" }}>
                    <Typography
                      variant="h5"
                      sx={{ color: "#00f", fontWeight: 500 }}
                    >
                      35.
                    </Typography>
                    <Typography
                      variant="h3"
                      sx={{ color: "#00f", fontWeight: 500 }}
                    >
                      98
                    </Typography>
                    <Typography
                      variant="h5"
                      sx={{ color: "#00f", fontWeight: 500 }}
                    >
                      0
                    </Typography>
                  </Box>
                  <Stack
                    direction="row"
                    alignItems="center"
                    spacing={1}
                    sx={{ marginTop: 0.5 }}
                  >
                    <ArrowUpward sx={{ color: "black", fontSize: 16 }} />
                    <Typography variant="body1">34.305</Typography>
                  </Stack>
                  <Typography variant="body2" sx={{ marginTop: 0.5 }}>
                    L: 34.055
                  </Typography>
                </Box>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Box>
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <ShowChart sx={{ color: "black", fontSize: 16 }} />
                    <Typography variant="body2" sx={{ color: "black" }}>
                      0.022 (0.06%)
                    </Typography>
                  </Stack>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 500, marginTop: 0.5 }}
                  >
                    Silver Mar
                  </Typography>
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <Typography variant="body2" sx={{ fontWeight: 500 }}>
                      22:54:59.859
                    </Typography>
                    <Typography variant="body2" sx={{ color: "grey" }}>
                      Σ 6470
                    </Typography>
                  </Stack>
                  <Typography variant="body2" sx={{ marginTop: 0.5 }}>
                    O: 34.305
                  </Typography>
                </Box>
              </TableCell>
              <TableCell>
                {" "}
                <Box sx={{ padding: 2, fontFamily: "Roboto, sans-serif" }}>
                  <Box sx={{ display: "flex", alignItems: "baseline" }}>
                    <Typography
                      variant="h5"
                      sx={{ color: "red", fontWeight: 500 }}
                    >
                      29.
                    </Typography>
                    <Typography
                      variant="h3"
                      sx={{ color: "red", fontWeight: 500 }}
                    >
                      51
                    </Typography>
                    <Typography
                      variant="h5"
                      sx={{ color: "red", fontWeight: 500 }}
                    >
                      0
                    </Typography>
                  </Box>
                  <Stack
                    direction="row"
                    alignItems="center"
                    spacing={1}
                    sx={{ marginTop: 0.5 }}
                  >
                    <SystemUpdateAlt sx={{ color: "black", fontSize: 16 }} />
                    <Typography variant="body1">33.995</Typography>
                  </Stack>
                  <Typography variant="body2" sx={{ marginTop: 0.5 }}>
                    C: 34.033
                  </Typography>
                </Box>
              </TableCell>
              <TableCell>
                {" "}
                <Box sx={{ padding: 2, fontFamily: "Roboto, sans-serif" }}>
                  <Box sx={{ display: "flex", alignItems: "baseline" }}>
                    <Typography
                      variant="h5"
                      sx={{ color: "#00f", fontWeight: 500 }}
                    >
                      35.
                    </Typography>
                    <Typography
                      variant="h3"
                      sx={{ color: "#00f", fontWeight: 500 }}
                    >
                      98
                    </Typography>
                    <Typography
                      variant="h5"
                      sx={{ color: "#00f", fontWeight: 500 }}
                    >
                      0
                    </Typography>
                  </Box>
                  <Stack
                    direction="row"
                    alignItems="center"
                    spacing={1}
                    sx={{ marginTop: 0.5 }}
                  >
                    <ArrowUpward sx={{ color: "black", fontSize: 16 }} />
                    <Typography variant="body1">34.305</Typography>
                  </Stack>
                  <Typography variant="body2" sx={{ marginTop: 0.5 }}>
                    L: 34.055
                  </Typography>
                </Box>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Box>
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <ShowChart sx={{ color: "black", fontSize: 16 }} />
                    <Typography variant="body2" sx={{ color: "black" }}>
                      0.022 (0.06%)
                    </Typography>
                  </Stack>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 500, marginTop: 0.5 }}
                  >
                    Silver Mar
                  </Typography>
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <Typography variant="body2" sx={{ fontWeight: 500 }}>
                      22:54:59.859
                    </Typography>
                    <Typography variant="body2" sx={{ color: "grey" }}>
                      Σ 6470
                    </Typography>
                  </Stack>
                  <Typography variant="body2" sx={{ marginTop: 0.5 }}>
                    O: 34.305
                  </Typography>
                </Box>
              </TableCell>
              <TableCell>
                {" "}
                <Box sx={{ padding: 2, fontFamily: "Roboto, sans-serif" }}>
                  <Box sx={{ display: "flex", alignItems: "baseline" }}>
                    <Typography
                      variant="h5"
                      sx={{ color: "red", fontWeight: 500 }}
                    >
                      29.
                    </Typography>
                    <Typography
                      variant="h3"
                      sx={{ color: "red", fontWeight: 500 }}
                    >
                      51
                    </Typography>
                    <Typography
                      variant="h5"
                      sx={{ color: "red", fontWeight: 500 }}
                    >
                      0
                    </Typography>
                  </Box>
                  <Stack
                    direction="row"
                    alignItems="center"
                    spacing={1}
                    sx={{ marginTop: 0.5 }}
                  >
                    <SystemUpdateAlt sx={{ color: "black", fontSize: 16 }} />
                    <Typography variant="body1">33.995</Typography>
                  </Stack>
                  <Typography variant="body2" sx={{ marginTop: 0.5 }}>
                    C: 34.033
                  </Typography>
                </Box>
              </TableCell>
              <TableCell>
                {" "}
                <Box sx={{ padding: 2, fontFamily: "Roboto, sans-serif" }}>
                  <Box sx={{ display: "flex", alignItems: "baseline" }}>
                    <Typography
                      variant="h5"
                      sx={{ color: "#00f", fontWeight: 500 }}
                    >
                      35.
                    </Typography>
                    <Typography
                      variant="h3"
                      sx={{ color: "#00f", fontWeight: 500 }}
                    >
                      98
                    </Typography>
                    <Typography
                      variant="h5"
                      sx={{ color: "#00f", fontWeight: 500 }}
                    >
                      0
                    </Typography>
                  </Box>
                  <Stack
                    direction="row"
                    alignItems="center"
                    spacing={1}
                    sx={{ marginTop: 0.5 }}
                  >
                    <ArrowUpward sx={{ color: "black", fontSize: 16 }} />
                    <Typography variant="body1">34.305</Typography>
                  </Stack>
                  <Typography variant="body2" sx={{ marginTop: 0.5 }}>
                    L: 34.055
                  </Typography>
                </Box>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
