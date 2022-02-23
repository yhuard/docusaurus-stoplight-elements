import React, { Suspense } from "react";
import Layout from "@theme/Layout";
import "@stoplight/elements/styles.min.css";
import BrowserOnly from "@docusaurus/BrowserOnly";

const LazyStoplight = React.lazy(() => import("../components/stoplight"));
const Fallback = (
  <div style={{ minHeight: "calc(100vh - var(--ifm-navbar-height))" }} />
);

export default function Api() {
  return (
    <Layout title="API example">
      <BrowserOnly>
        {() => (
          <Suspense fallback={Fallback}>
            <LazyStoplight apiDescriptionUrl="https://api.apis.guru/v2/specs/github.com/1.1.4/openapi.yaml" />
          </Suspense>
        )}
      </BrowserOnly>
    </Layout>
  );
}
