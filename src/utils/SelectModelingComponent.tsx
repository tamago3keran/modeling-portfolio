import Notebook from "../features/modeling/resources/Notebook";
import House from "../features/modeling/resources/House";

export const selectModelingComponent = (name?: string | null) => {
  switch (name) {
    case "notebook":
      return <Notebook scale={[1.2, 1.2, 1.2]} position={[0, -0.2, 0.8]} />;
    case "house":
      return <House scale={[1, 1, 1]} position={[0, 0.8, 0]} />;
    default:
      return <></>;
  }
};
