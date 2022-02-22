import React from "react";
import Layout from "@theme/Layout";
import "@stoplight/elements/styles.min.css";
import { API } from "@stoplight/elements";
import BrowserOnly from "@docusaurus/BrowserOnly";

export default function Api() {
  return (
    <Layout title="API example">
      <BrowserOnly>
        {() => (
          <API
            apiDescriptionUrl="https://api.apis.guru/v2/specs/github.com/1.1.4/openapi.yaml"
            router="hash"
          />
        )}
      </BrowserOnly>
    </Layout>
  );
}
