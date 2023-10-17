interface Size {
  sm: string;
  md: string;
}

export const size: Size = {
  sm: "600px",
  md: "900px",
};

export const device = {
  sm: `(max-width: ${size.sm})`,
  md: `(max-width: ${size.md})`,
};
