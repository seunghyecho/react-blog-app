export const sizes = {
  desktop: 1024,
  tablet: 768,
};

export const media = (key: keyof typeof sizes) => {
  return (style: any) =>
    `@media (max-width: ${sizes[key] / 16}em) { ${style} }`;
};
