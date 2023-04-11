import React from "react";

import { AppHeader } from "../AppHeader/appHeader";
import { ComposedProviders } from "../../store/composeProviders";

export const AppWrapper: React.FC<React.PropsWithChildren> = ({ children }) => (
  <div style={{ display: "flex", flexDirection: "column" }}>
    <AppHeader />
    <div style={{ padding: "10px 8%" }}>
      <ComposedProviders>{children}</ComposedProviders>
    </div>
  </div>
);
