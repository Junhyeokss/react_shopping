import styled from "styled-components";
import { Link } from "react-router-dom";
import { BsInstagram, BsFacebook } from "react-icons/bs";
import { DEFAULT } from "../data/default";

const FOOTERWrap = styled.footer`
  background: #333;
  color: #fff;
`;
const FooterTop = styled.div`
  border-bottom: 1px solid #555;
`;
const FooterBottom = styled.div`
  height: 80px;
`;
const FInner = styled.div`
  display: flex;
  width: 1200px;
  justify-content: space-between;
  margin: 0 auto;
`;
const UL = styled.ul`
  display: flex;
  gap: 30px;
  align-items: center;
  height: 80px;
`;
const LI = styled.li`
  position: relative;
  &::after {
    content: "";
    position: absolute;
    inset: 50% auto auto -15px;
    width: 1px;
    height: 12px;
    background: #ddd;
    transform: translate(-50%, -50%);
  }
`;

const SnsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 30px;
  line-height: 100px;
`;

const Address = () => {
  return <ADDress> {DEFAULT.address}</ADDress>;
};

const ADDress = styled.address`
  font-style: normal;
  height: 50px;
`;

const FooterService = ({ DEFAULT }) => {
  return (
    <UL>
      {DEFAULT.service.map((service) => {
        return (
          <LI>
            <Link to="">{service.title}</Link>
          </LI>
        );
      })}
    </UL>
  );
};

const FooterSns = () => {
  return (
    <SnsWrapper>
      <a href="" target="_blank">
        <BsInstagram />
      </a>
      ,
      <a href="" target="_blank">
        <BsFacebook />
      </a>
    </SnsWrapper>
  );
};

const linkOpen = (e) => {
  const link = e.target.value;
  link && window.open(link);
};

const FamilyLinkWrapper = styled.div`
  align-items: center;
  display: flex;
  line-height: 50px;
  background: #333;
`;

const FoooterLInk = ({ DEFAULT }) => {
  return (
    <FamilyLinkWrapper>
      <select on onChange={linkOpen}>
        {DEFAULT.familLink.map((it) => {
          return <option value={it.link}>{it.title}</option>;
        })}
      </select>
    </FamilyLinkWrapper>
  );
};

const Footer = ({ DEFAULT }) => {
  return (
    <FOOTERWrap>
      <FInner>
        <FooterService DEFAULT={DEFAULT} />
        <FooterSns />
      </FInner>
      <FInner>
        <Address DEFAULT={DEFAULT} />
        <FoooterLInk DEFAULT={DEFAULT} />
      </FInner>
    </FOOTERWrap>
  );
};

export default Footer;
