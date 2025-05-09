import * as React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Box,
  Stack,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { ArrowUpward, ShowChart, SystemUpdateAlt } from "@mui/icons-material";

const tableData = Array(11).fill({
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
});

const ScriptCell = ({ script, change, time, volume, open }) => (
  <Box sx={{ overflow: "hidden" }}>
    <Stack direction="row" alignItems="center" spacing={1}>
      <ShowChart sx={{ color: "black", fontSize: 16 }} />
      <Typography variant="body2" noWrap>
        {change}
      </Typography>
    </Stack>
    <Typography variant="h6" noWrap sx={{ fontWeight: 500, mt: 0.5 }}>
      {script}
    </Typography>
    <Stack direction="row" spacing={1}>
      <Typography variant="body2" noWrap fontWeight={500}>
        {time}
      </Typography>
      <Typography variant="body2" noWrap color="text.secondary">
        {volume}
      </Typography>
    </Stack>
    <Typography variant="body2" noWrap sx={{ mt: 0.5 }}>
      O: {open}
    </Typography>
  </Box>
);

const PriceCell = ({ value, color, icon, label, subValue }) => (
  <Box sx={{ py: 1, overflow: "hidden" }}>
    <Box sx={{ display: "flex", alignItems: "baseline", flexWrap: "wrap" }}>
      <Typography variant="h6" sx={{ color, fontWeight: 500 }}>
        {value.whole}
      </Typography>
      <Typography variant="h4" sx={{ color, fontWeight: 500 }}>
        {value.fraction}
      </Typography>
      <Typography variant="h6" sx={{ color, fontWeight: 500 }}>
        {value.decimal}
      </Typography>
    </Box>
    <Stack direction="row" alignItems="center" spacing={1} mt={0.5}>
      {icon}
      <Typography variant="body1" noWrap>
        {value.price}
      </Typography>
    </Stack>
    <Typography variant="body2" noWrap mt={0.5}>
      {label}: {subValue}
    </Typography>
  </Box>
);

export default function StickyHeadTable() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const cellWidth = isMobile ? "100%" : "33.33%";

  return (
    <Box
      sx={{
        m: 2,
        height: "100%",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <TableContainer
        sx={{
          flex: 1,
          overflowX: "auto",
          "&::-webkit-scrollbar": {
            height: 6,
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "rgba(0,0,0,.1)",
            borderRadius: 4,
          },
        }}
      >
        <Table
          stickyHeader
          sx={{
            minWidth: isMobile ? 600 : "100%",
            tableLayout: "fixed",
          }}
        >
          <TableHead>
            <TableRow>
              <TableCell
                sx={{
                  backgroundColor: "#f5f5f5",
                  borderTopLeftRadius: 2,
                  width: cellWidth,
                }}
              >
                <Typography noWrap>Script</Typography>
              </TableCell>
              <TableCell
                sx={{
                  backgroundColor: "#f5f5f5",
                  width: cellWidth,
                }}
              >
                <Typography noWrap>Bid</Typography>
              </TableCell>
              <TableCell
                sx={{
                  backgroundColor: "#f5f5f5",
                  borderTopRightRadius: 2,
                  width: cellWidth,
                }}
              >
                <Typography noWrap>Ask</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData.map((row, index) => (
              <TableRow key={index}>
                <TableCell sx={{ width: cellWidth }}>
                  <ScriptCell
                    script={row.script}
                    change={row.change}
                    time={row.time}
                    volume={row.volume}
                    open={row.open}
                  />
                </TableCell>
                <TableCell sx={{ width: cellWidth }}>
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
                <TableCell sx={{ width: cellWidth }}>
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
