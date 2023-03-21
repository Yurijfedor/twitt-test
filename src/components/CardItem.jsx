import { useState, useEffect } from "react";
import {
  CardThumb,
  Delimiter,
  AvatarWrapp,
  Avatar,
  FeaturesList,
  FeatureItem,
  CardContent,
  ButtonStyled,
} from "./CardItem.styled";

export const CardItem = ({ user }) => {
  const savedUsers = JSON.parse(localStorage.getItem("savedInfo"));
  let savedUser = savedUsers.find((savedUser) => savedUser.id === user.id);
  const [amountOfFollowers, setAmountOfFollowers] = useState(
    savedUser.followers
  );
  const [isClicked, setIsClicked] = useState(
    savedUser.isClicked ? savedUser.isClicked : false
  );

  const formatedAmountOfFollowers = new Intl.NumberFormat("en-EN").format(
    amountOfFollowers
  );

  const handleClick = () => {
    setAmountOfFollowers((prevState) =>
      !isClicked ? (prevState += 1) : (prevState -= 1)
    );
    setIsClicked((prevState) => !prevState);
  };

  const updateSavedUsers = () => {
    savedUser = {
      ...savedUser,
      isClicked,
      followers: amountOfFollowers,
    };
    const indexOfSavedUser = savedUsers.findIndex(
      (item) => item.id === savedUser.id
    );
    savedUsers.splice(indexOfSavedUser, 1, savedUser);
  };

  useEffect(() => {
    updateSavedUsers();
    localStorage.setItem("savedInfo", JSON.stringify(savedUsers));
  });

  return (
    <CardThumb>
      <Delimiter>
        <AvatarWrapp>
          <Avatar>
            <img src={user.avatar} alt="avatar" />
          </Avatar>
        </AvatarWrapp>
      </Delimiter>
      <CardContent>
        <FeaturesList>
          <FeatureItem> {`${user.tweets} tweets`}</FeatureItem>
          <FeatureItem>{`${formatedAmountOfFollowers} Followers`}</FeatureItem>
        </FeaturesList>
        <ButtonStyled
          onClick={handleClick}
          style={isClicked ? { background: "#5CD3A8" } : {}}
        >
          {!isClicked ? "Follow" : "Following"}
        </ButtonStyled>
      </CardContent>
    </CardThumb>
  );
};
