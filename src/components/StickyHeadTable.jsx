import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Box, Stack, Typography } from "@mui/material";
import { ArrowUpward, ShowChart, SystemUpdateAlt } from "@mui/icons-material";

const tableData = [
  {
    script: "Silver Mar",
    change: "0.022 (0.06%)",
    time: "22:54:59.859",
    volume: "Σ 6470",
    open: "34.305",
    bid: {
      whole: "29.",
      fraction: "51",
      decimal: "0",
      price: "33.995",
      close: "34.033",
    },
    ask: {
      whole: "35.",
      fraction: "98",
      decimal: "0",
      price: "34.305",
      low: "34.055",
    },
  },
  ...Array(10).fill({
    script: "Silver Mar",
    change: "0.022 (0.06%)",
    time: "22:54:59.859",
    volume: "Σ 6470",
    open: "34.305",
    bid: {
      whole: "29.",
      fraction: "51",
      decimal: "0",
      price: "33.995",
      close: "34.033",
    },
    ask: {
      whole: "35.",
      fraction: "98",
      decimal: "0",
      price: "34.305",
      low: "34.055",
    },
  }),
];

const ScriptCell = ({ script, change, time, volume, open }) => (
  <Box sx={{ overflow: "hidden" }}>
    <Stack direction="row" alignItems="center" spacing={1}>
      <ShowChart sx={{ color: "black", fontSize: 16 }} />
      <Typography variant="body2" noWrap sx={{ color: "black" }}>
        {change}
      </Typography>
    </Stack>
    <Typography variant="h6" noWrap sx={{ fontWeight: 500, marginTop: 0.5 }}>
      {script}
    </Typography>
    <Stack direction="row" alignItems="center" spacing={1}>
      <Typography variant="body2" noWrap sx={{ fontWeight: 500 }}>
        {time}
      </Typography>
      <Typography variant="body2" noWrap sx={{ color: "grey" }}>
        {volume}
      </Typography>
    </Stack>
    <Typography variant="body2" noWrap sx={{ marginTop: 0.5 }}>
      O: {open}
    </Typography>
  </Box>
);

const PriceCell = ({ value, color, icon, label, subValue }) => (
  <Box
    sx={{
      padding: 2,
      fontFamily: "Roboto, sans-serif",
      overflow: "hidden",
    }}
  >
    <Box sx={{ display: "flex", alignItems: "baseline" }}>
      <Typography variant="h5" noWrap sx={{ color, fontWeight: 500 }}>
        {value.whole}
      </Typography>
      <Typography variant="h3" noWrap sx={{ color, fontWeight: 500 }}>
        {value.fraction}
      </Typography>
      <Typography variant="h5" noWrap sx={{ color, fontWeight: 500 }}>
        {value.decimal}
      </Typography>
    </Box>
    <Stack
      direction="row"
      alignItems="center"
      spacing={1}
      sx={{ marginTop: 0.5 }}
    >
      {icon}
      <Typography variant="body1" noWrap>
        {value.price}
      </Typography>
    </Stack>
    <Typography variant="body2" noWrap sx={{ marginTop: 0.5 }}>
      {label}: {subValue}
    </Typography>
  </Box>
);

export default function StickyHeadTable() {
  return (
    <Box
      sx={{
        margin: "12px",
        height: "100%",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <TableContainer
        sx={{
          flex: 1,
          overflowY: "auto",
          overflowX: "hidden",
          "&::-webkit-scrollbar": {
            width: "0.4em",
          },
          "&::-webkit-scrollbar-track": {
            boxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "rgba(0,0,0,.1)",
            borderRadius: "4px",
          },
        }}
      >
        <Table
          stickyHeader
          aria-label="sticky table"
          sx={{
            tableLayout: "fixed",
            width: "100%",
          }}
        >
          <TableHead>
            <TableRow>
              <TableCell
                sx={{
                  backgroundColor: "#f5f5f5",
                  borderTopLeftRadius: "12px",
                  width: "33%",
                  overflow: "hidden",
                }}
              >
                <Typography noWrap>Script</Typography>
              </TableCell>
              <TableCell
                sx={{
                  backgroundColor: "#f5f5f5",
                  width: "33%",
                  overflow: "hidden",
                }}
              >
                <Typography noWrap>Bid</Typography>
              </TableCell>
              <TableCell
                sx={{
                  backgroundColor: "#f5f5f5",
                  borderTopRightRadius: "12px",
                  width: "33%",
                  overflow: "hidden",
                }}
              >
                <Typography noWrap>Ask</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData.map((row, index) => (
              <TableRow
                key={index}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                }}
              >
                <TableCell sx={{ width: "33%", overflow: "hidden" }}>
                  <ScriptCell
                    script={row.script}
                    change={row.change}
                    time={row.time}
                    volume={row.volume}
                    open={row.open}
                  />
                </TableCell>
                <TableCell sx={{ width: "33%", overflow: "hidden" }}>
                  <PriceCell
                    value={row.bid}
                    color="red"
                    icon={
                      <SystemUpdateAlt sx={{ color: "black", fontSize: 16 }} />
                    }
                    label="C"
                    subValue={row.bid.close}
                  />
                </TableCell>
                <TableCell sx={{ width: "33%", overflow: "hidden" }}>
                  <PriceCell
                    value={row.ask}
                    color="#00f"
                    icon={<ArrowUpward sx={{ color: "black", fontSize: 16 }} />}
                    label="L"
                    subValue={row.ask.low}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
