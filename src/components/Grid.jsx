import theme from "../theme/theme";
import { GridItem } from "./GridItem";

export const Grid = () => {
  return (
    <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
      {Object.keys(theme.animation).sort().map((animation) => (
        <GridItem key={animation} animation_name={animation} />
      ))}
    </ul>
  );
};
