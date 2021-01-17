import { StylesObject } from "../common/types";

const styles: StylesObject = {
  errorContainer: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: 16,
    boxSizing: "border-box",
    overflow: "auto",
    whiteSpace: "pre-wrap",
    textTransform: "uppercase",
    fontSize: "0.5em",
    alignItems: "start",
  },
  reloadButton: {
    color: "#FF6060",
    marginTop: 32,
    fontSize: "1rem",
    padding: "8px 16px",
    flexShrink: 0,
  },
  reloadText: { fontSize: "1rem", marginBottom: 32 },
  flatlinedText: { fontSize: "3rem" },
  errorStackHeading: { marginTop: 8 },
};

export default styles;
