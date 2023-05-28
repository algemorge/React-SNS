import { Avatar, Button, Card } from "antd";
import React, { useCallback } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { logoutAction } from "../reducers";

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const UserProfile = () => {
  const dispatch = useDispatch();

  const onLogOut = useCallback(() => {
    // setIsLoggedIn(false);
    dispatch(logoutAction());
  }, []);

  return (
    <Card
      actions={[
        <div key="twit">
          짹짹
          <br />0
        </div>,
        <div key="followings">
          팔로잉
          <br />0
        </div>,
        <div key="followers">
          팔로워
          <br />0
        </div>,
      ]}>
      <CardWrapper>
        <Card.Meta avatar={<Avatar>algemorge</Avatar>} title="AlgeMorge" />
        <br />
        <Button onClick={onLogOut}>로그아웃</Button>
      </CardWrapper>
    </Card>
  );
};

export default UserProfile;
