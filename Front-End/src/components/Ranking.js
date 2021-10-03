import React from "react";
import styled from "styled-components";
import {
  CloseCircleOutlined,
  TrophyTwoTone,
  CrownFilled,
} from "@ant-design/icons";
import axios from "axios";

const Ranking = (props) => {
  const [toggle, setToggle] = React.useState(true);
  let rankButton;
  const onClick = () => {
    setToggle(true);
    rankButton = document.getElementById("RankButton");
    rankButton.style.display = "none";
  };
  const onCloseButtonClick = () => {
    setToggle(false);
    rankButton = document.getElementById("RankButton");
    rankButton.style.display = "block";
  };
  const [rank, setRank] = React.useState([]);
  const now = new Date();
  const month = now.getMonth() + 1;
  const rendering = () => {
    const result = [];
    rank.map((item, index) => {
      if (index < 10) {
        result.push(
          <Elem key={index}>
            <Rank>
              {index === 0 ? (
                <>
                  <CrownFilled
                    style={{
                      fontSize: "20px",
                      color: "#FFC312",
                    }}
                  />
                </>
              ) : (
                <> {index + 1}등</>
              )}
            </Rank>
            <ID>{item.nickname}</ID>
            <Count>{item.count}</Count>
            <Count>0</Count>
          </Elem>
        );
      }
    });
    return result;
  };

  React.useEffect(() => {
    axios
      .get("http://localhost:8080/app/accounts/rankings", {})
      .then((res) => {
        console.log(res.data.result);
        setRank(res.data.result);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  }, []);
  return (
    <>
      <RankButton onClick={onClick} id="RankButton">
        <TrophyTwoTone
          twoToneColor="#FFC312"
          style={{
            fontSize: "50px",
            paddingTop: "25%",
            color: "#FFC312",
          }}
        />
      </RankButton>
      {toggle && (
        <Body>
          <HeaderInRank>
            <TrophyTwoTone
              twoToneColor="#FFC312"
              style={{ fontSize: "20px" }}
            />
            {month}월의 Ranking
            <CloseButton
              style={{ fontSize: "18px", color: "#576574" }}
              onClick={onCloseButtonClick}
            />
          </HeaderInRank>
          <RankTable>
            <RankElement>순위</RankElement> <RankElement>아이디</RankElement>
            <RankElement>참여</RankElement>
          </RankTable>
          <Table>{rendering()}</Table>
        </Body>
      )}
    </>
  );
};

const RankButton = styled.div`
  display: none;
  position: fixed;
  width: 6em;
  height: 6em;
  bottom: 4em;
  right: 7em;
  z-index: 2;
  cursor: pointer;
  border: 2px solid gray;
  border-radius: 50px;
  background-color: #f5f6fa;
  &:hover {
    background-color: #dcdde1;
  }
  box-shadow: 2px 2px 5px #999;
`;
const Body = styled.div`
  position: fixed;
  width: 15%;
  height: 75%;
  bottom: 2em;
  right: 5em;
  z-index: 1;
  border-radius: 10px;
  border: 1px solid #a5a5a5;
  background-color: white;
  @media screen and (max-width: 930px) {
    display: none;
  }
`;
const CloseButton = styled(CloseCircleOutlined)`
  cursor: pointer;
`;

const HeaderInRank = styled.div`
  padding: 5%;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #a5a5a5;
  background-color: #ebebeb;
  border-radius: 10px 10px 0px 0px;
  font-weight: bold;
`;

const Table = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 85%;
  display: flex;
  justify-content: flex-start;
`;

const Elem = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 2%;
  padding-bottom: 2%;
  height: 8%;
  align-items: center;
  margin-top: 1%;
  margin-bottom: 4%;
`;
const Rank = styled.div`
  display: flex;
  width: 20%;
  align-items: center;
  justify-content: center;
  margin-left: 3%;
`;
const ID = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Count = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15%;
  padding-left: 10px;
  padding-right: 5%;
`;
const RankTable = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 5%;
`;

const RankElement = styled.div`
  font-weight: bold;
  font-size: 13px;
  color: #2f3640;
`;
export default Ranking;
