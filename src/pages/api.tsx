import React, { Suspense } from "react";
import Layout from "@theme/Layout";
import BrowserOnly from "@docusaurus/BrowserOnly";
import { Fallback } from "../components/Fallback";

const LazyStoplight = React.lazy(() => import("../components/stoplight"));

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
