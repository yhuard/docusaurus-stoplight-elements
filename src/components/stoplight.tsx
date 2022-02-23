import React from "react";
import { API } from "@stoplight/elements";

interface StoplightProps {
  apiDescriptionUrl: string;
}

export default function Stoplight({ apiDescriptionUrl }: StoplightProps) {
  return <API apiDescriptionUrl={apiDescriptionUrl} router="hash" />;
}
