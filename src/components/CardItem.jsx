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
import hansel from "../images/hansel.png";

export const CardItem = () => {
  return (
    <CardThumb>
      <Delimiter>
        <AvatarWrapp>
          <Avatar>
            <img src={hansel} alt="hansel" />
          </Avatar>
        </AvatarWrapp>
      </Delimiter>
      <CardContent>
        <FeaturesList>
          <FeatureItem> 777 tweets</FeatureItem>
          <FeatureItem>100,500 Followers</FeatureItem>
        </FeaturesList>
        <ButtonStyled>Follow</ButtonStyled>
      </CardContent>
    </CardThumb>
  );
};
