import { NavLink, NavLinkProps } from "react-router-dom";
import styled from "styled-components";

const JJ = styled.div`
  color: ${({ theme }) => theme.colors.state.success[400]};
`;

const Link = (props: NavLinkProps): JSX.Element => {
  return (
    <NavLink
      to={props.to}
      className={({ isActive }) =>
        isActive ? "text-gray-500 hover:text-black" : "text-primary"
      }
    >
      <JJ>{props.children}</JJ>
    </NavLink>
  );
};

export default Link;
