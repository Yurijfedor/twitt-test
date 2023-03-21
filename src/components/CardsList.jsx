import data from "../db.json";
import { CardsListStyled } from "./CardsList.styled";
import { CardItem } from "./CardItem";

export const CardsList = () => {
  const savedUsers = JSON.parse(localStorage.getItem("savedInfo"));
  !savedUsers && localStorage.setItem("savedInfo", JSON.stringify(data.users));
  const users = savedUsers ? savedUsers : data.users;

  return (
    <CardsListStyled>
      {users.length !== 0
        ? users.map((user) => {
            return <CardItem key={user.id} user={user} />;
          })
        : "Sorry! Something went wrong!"}
    </CardsListStyled>
  );
};
