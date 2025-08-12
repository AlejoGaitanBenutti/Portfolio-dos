// src/components/CVPreviewDialog.jsx
import * as React from "react";
import {
  Dialog,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Box,
  useMediaQuery
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import DownloadIcon from "@mui/icons-material/Download";
import { useTheme } from "@mui/material/styles";

export default function CVPreviewDialog({ open, onClose, url, downloadName }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullScreen={isMobile}
      maxWidth="lg"
      fullWidth
      PaperProps={{ sx: { bgcolor: "background.paper" } }}
    >
      <AppBar position="relative" color="default" elevation={1}>
        <Toolbar>
          <IconButton edge="start" onClick={onClose} aria-label="Cerrar">
            <CloseIcon />
          </IconButton>

          <Typography sx={{ ml: 2, flex: 1 }} variant="h6">
            Vista previa • CV
          </Typography>

          <Button
            component="a"
            href={url}
            download={downloadName}
            startIcon={<DownloadIcon />}
            variant="contained"
          >
            Descargar
          </Button>
        </Toolbar>
      </AppBar>

      <Box sx={{ height: isMobile ? "calc(100vh - 64px)" : "80vh" }}>
        <iframe
          title="Vista previa CV"
          src={url}
          width="100%"
          height="100%"
          style={{ border: "none" }}
        />
      </Box>
    </Dialog>
  );
}
