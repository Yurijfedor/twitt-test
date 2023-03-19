import styled from "styled-components";
import logo from "../images/logo.svg";
import background from "../images/picture2 1.png";

export const CardThumb = styled.div`
  position: relative;
  width: 380px;
  height: 460px;
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
  background-image: url(${logo}), url(${background}),
    linear-gradient(114.99deg, #471ca9 -0.99%, #5736a3 54.28%, #4b2a99 78.99%);
  background-repeat: no-repeat, no-repeat, no-repeat;
  background-position: 20px 20px, 28px 36px, center;
  background-size: _, _, cover;
`;

export const Delimiter = styled.div`
  position: absolute;
  top: 214px;
  width: 100%;
  height: 8px;
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
`;

export const AvatarWrapp = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80px;
  height: 80px;
  background: #ebd8ff;
  z-index: 1;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
  border-radius: 85.9232px;

  &:after {
    display: block;
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
      inset 0px -2.19582px 4.39163px #ae7be3,
      inset 0px 4.39163px 3.29372px #fbf8ff;
  }
`;

export const Avatar = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 62px;
  height: 62px;
  border-radius: 50%;
  background: #5736a3;
`;

export const CardContent = styled.div`
  position: absolute;
  top: 284px;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  text-align: center;
`;
export const FeaturesList = styled.ul`
  display: grid;
  gap: 16px;
`;

export const FeatureItem = styled.li`
  text-align: center;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.2;
  text-transform: uppercase;
  color: #ebd8ff;
`;

export const ButtonStyled = styled.button`
  width: 196px;
  height: 50px;
  margin-top: 40px;
  padding: 14px 28px;
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;

  font-weight: 600;
  font-size: 18px;
  line-height: 1.22;
  text-transform: uppercase;
  color: #373737;

  &:hover {
    cursor: pointer;
  }
`;
