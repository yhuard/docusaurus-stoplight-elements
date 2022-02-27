import React from "react";
import { API } from "@stoplight/elements";
import styles from "./Stoplight.module.scss";

interface StoplightProps {
  apiDescriptionUrl: string;
}

export function Stoplight({ apiDescriptionUrl }: StoplightProps) {
  return (
    <div className={(styles as { stoplight: string }).stoplight}>
      <API apiDescriptionUrl={apiDescriptionUrl} router="hash" />
    </div>
  );
}

export default Stoplight;
