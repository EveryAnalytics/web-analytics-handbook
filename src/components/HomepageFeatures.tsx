import React from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import mq from 'theme/mq';

const FeatureList = [
  {
    title: 'DAU, GA... 먹는건가요?',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        사용자 데이터 분석(Daily Active User, 전환율 측정 등)은 모던 웹
        프로젝트에서 필수적인 부분이지만, 어디서부터 시작해야 할지 막막해하는
        개발자들이 많습니다. 이 핸드북을 통해 기초적인 분석에 대한 개념을
        잡습니다.
      </>
    ),
  },
  {
    title: '개발자에게 필요한 웹 분석 지식',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        여러분의 프로젝트에 웹 분석 툴을 연동하기 위해선 어떤 코드가 필요할까요?
      </>
    ),
  },
  {
    title: 'GA와 Amplitude를 한번에',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        react-analytics-provider 오픈소스를 통해 Google Analytics, Amplitude와
        같은 분석 툴 도입의 진입 장벽을 낮출 수 있습니다.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <FeatureContainer>
      <FeatureIconWrapper>
        <Svg css={featureIconStyle} alt={title} />
      </FeatureIconWrapper>
      <FeatureInfo>
        <FeatureTitle>{title}</FeatureTitle>
        <FeatureDescription>{description}</FeatureDescription>
      </FeatureInfo>
    </FeatureContainer>
  );
}

export default function HomepageFeatures() {
  return (
    <section css={featuresStyle}>
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

const FeatureIconWrapper = styled.div`
  text-align: center;
`;

const FeatureInfo = styled.div`
  text-align: center;
  padding-left: 1rem;
  padding-right: 1rem;
`;

const featureIconStyle = css`
  height: 200px;
  width: 200px;
`;

const FeatureTitle = styled.h3``;
const FeatureDescription = styled.p``;
const FeatureContainer = styled.div`
  ${mq()({
    flex: ['0 0 100%', '0 0 calc(4/12 * 100%)'],
    maxWidth: ['100%', 'calc(4/12 * 100%)'],
  })}
`;

const featuresStyle = css`
  display: flex;
  align-items: center;
  padding: 2rem 0;
  width: 100%;
`;
