import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg?: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Slash 라이브러리",
    // Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        <p>
          Slash 라이브러리는 트래블메이커스에서 사용하는 TypeScript/JavaScript
          패키지들이에요.
        </p>
        <p>
          웹 서비스를 만들 수 있는 기반으로 사용할 수 있도록 npm 패키지를
          제공하고 있어요.
        </p>
        <p>⌘ + K를 입력해서 라이브러리 문서를 탐색해보세요.</p>
      </>
    ),
  },
  {
    title: "추천 라이브러리",
    // Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        <ul>
          <li>
            <a
              href="https://slash.page/ko/libraries/react/use-overlay/src/useOverlay.i18n"
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong>@travelmakers-design-v2/core</strong>
            </a>{" "}
            는 React <code>Component</code> 를 제공해요.
          </li>
          <li>
            <a
              href="https://slash.page/ko/libraries/react/react/src/components/clickarea/clickarea.i18n"
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong>@travelmakers-design-v2/hooks</strong>
            </a>{" "}
            는 높은 퀄리티의 웹 서비스를 개발할 수 있도록 다양한 React 컴포넌트,
            Hooks, 유틸리티 함수를 제공해요.
          </li>
          <li>
            <a
              href="https://slash.page/ko/libraries/common/utils/README.i18n"
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong>@travelmakers-design-v2/utils</strong>
            </a>{" "}
            는 Node.js와 브라우저 환경에서 사용할 수 있는 간단하고 모던한
            유틸리티 함수를 제공해요.
          </li>
          <li>
            <a
              href="https://slash.page/ko/libraries/common/hangul/README.i18n"
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong>@travelmakers-design-v2/styles</strong>
            </a>{" "}
            는 유틸리티 함수를 제공해요.
          </li>
        </ul>
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--12")}>
      {Svg && (
        <div className="text--center">
          <Svg className={styles.featureSvg} role="img" />
        </div>
      )}
      <div className="padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
