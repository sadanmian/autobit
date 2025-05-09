import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

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
              <TableCell>5 4</TableCell>
              <TableCell>5 4</TableCell>
              <TableCell>5 4</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
