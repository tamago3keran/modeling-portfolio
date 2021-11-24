import React, { Suspense } from "react";
import { selectModelingComponent } from "../../../utils/SelectModelingComponent";

type Props = {
  name?: string | null;
};

export const Modeling: React.FC<Props> = ({ name }) => {
  const Modeling = selectModelingComponent(name);

  return <Suspense fallback={null}>{Modeling}</Suspense>;
};
