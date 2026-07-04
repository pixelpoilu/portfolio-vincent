import React, { startTransition } from "react";
import ReactDOM from "react-dom/client";
import { HydratedRouter } from "react-router/dom";

startTransition(() => {
  ReactDOM.hydrateRoot(
    document,
    <React.StrictMode>
      <HydratedRouter />
    </React.StrictMode>,
  );
});
