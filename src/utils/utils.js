import { useTheme, useMediaQuery } from '@mui/material';

export function slugify(str = "") {
  return String(str)
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function useResponsiveImage({ xs, sm, md }) {
  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const isMd = useMediaQuery(theme.breakpoints.up('md'));

  if (isMd) return md ?? sm ?? xs;
  if (isSm) return sm ?? xs;
  return xs;
}