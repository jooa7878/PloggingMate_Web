import React from "react";
import styled from "styled-components";

const PrivacyPolicy = () => {
  return (
    <>
      <H1>개인정보 수집 및 이용 동의</H1>
      <Ol>
        <li>
          수집하는 개인정보 항목 및 이용 목적
          <br />
          1) 회원가입 시 <br />
          - 수집목적 : 회원제 서비스 가입 및 본인여부 확인
          <br />- 수집항목 : 이름, 아이디, 비밀번호, e-메일
          <br />
          2) 주소등록 시<br />- 수집목적 : 공원추천, 미세먼지 확인
          <br />- 수집항목 : 아이디, 주소, 위도, 경도
        </li>
        <br />
        <li>
          서비스 이용과정이나 사업처리 과정에서 아래와 같은 정보들이 자동으로
          생성되어 수집될 수 있습니다. - IP Address, 쿠키, 방문 일시, 서비스
          이용 기록, 불량 이용 기록, 광고 ID
          <br />- 모바일 서비스의 특성상 단말기 모델 정보가 수집될 수 있으나,
          이는 개인을 식별할 수 없는 형태입니다.
        </li>
        <br />
        <li>개인정보의 보유 및 이용기간</li>- 회원탈퇴를 요청하거나 개인정보의
        수집 및 이용에 대한 동의를 철회하는 경우, 수집 및 이용목적이 달성되거나
        이용기간이 종료한 경우 개인정보를 지체 없이 파기합니다. 단, 상법 등
        관계법령의 규정에 의하여 보존할 필요가 있는 경우 법령에서 규정한
        보존기간 동안 거래내역과 최소한의 기본정보를 보유합니다.
      </Ol>
    </>
  );
};

export default PrivacyPolicy;

const Ol = styled.ol`
  text-align: start;
`;

const H1 = styled.h1`
  margin-bottom: 35px;
`;
