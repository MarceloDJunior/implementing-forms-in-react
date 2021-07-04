import styled from "styled-components";
import { Link, useLocation } from 'react-router-dom';
import { useState } from "react";

const Container = styled.nav`
  display: "flex";
  flex-direction: "row";
  justify-content: "center";
  max-width: 606px;
  margin: 10px auto;
`

const MenuItemWrapper = styled.div`
  cursor: pointer;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin: 3px;
  padding: 8px;
  display: inline-block;
  width: auto;
`

const StyledLink = styled(Link)`
  color: #000;
  text-decoration: none;
`

const MenuItem = ({ to, children, selected, onSelect }) => {
  const backgroundColor = selected ? '#ccc' : '#fff';
  return (
    <MenuItemWrapper style={{ backgroundColor }}>
      <StyledLink to={to} onClick={onSelect}>
        {children}
      </StyledLink>
    </MenuItemWrapper>
  )
}

const PATHS = {
  VANILLA_REACT: "/vanilla-react",
  FORMIK: "/formik",
  FORMIK_WITH_YUP: "/formik-with-yup",
  REUSABLE_CUSTOM_COMPONENTS: "/reusable-custom-form-elements",
  UNCONTROLLED_VANILLA_REACT: "/uncontrolled-vanilla-react",
  UNCONTROLLED_REACT_HOOK_FORM: "/uncontrolled-react-hook-form",
}

const Menu = () => {

  const location = useLocation();

  const url = location.pathname && location.pathname !== "/" ? location.pathname : PATHS.VANILLA_REACT
  const [menuSelected, setMenuSelected] = useState(url);

  return (
    <Container>
      <MenuItem to={PATHS.VANILLA_REACT} selected={menuSelected === PATHS.VANILLA_REACT} onSelect={() => setMenuSelected(PATHS.VANILLA_REACT)}>Vanilla React Form</MenuItem>
      <MenuItem to={PATHS.FORMIK} selected={menuSelected === PATHS.FORMIK} onSelect={() => setMenuSelected(PATHS.FORMIK)}>Formik</MenuItem>
      <MenuItem to={PATHS.FORMIK_WITH_YUP} selected={menuSelected === PATHS.FORMIK_WITH_YUP} onSelect={() => setMenuSelected(PATHS.FORMIK_WITH_YUP)}>Formik With Yup</MenuItem>
      <MenuItem to={PATHS.REUSABLE_CUSTOM_COMPONENTS} selected={menuSelected === PATHS.REUSABLE_CUSTOM_COMPONENTS} onSelect={() => setMenuSelected(PATHS.REUSABLE_CUSTOM_COMPONENTS)}>Custom Form Components</MenuItem>
      <MenuItem to={PATHS.UNCONTROLLED_VANILLA_REACT} selected={menuSelected === PATHS.UNCONTROLLED_VANILLA_REACT} onSelect={() => setMenuSelected(PATHS.UNCONTROLLED_VANILLA_REACT)}>Uncontrolled Form Vanilla React</MenuItem>
      <MenuItem to={PATHS.UNCONTROLLED_REACT_HOOK_FORM} selected={menuSelected === PATHS.UNCONTROLLED_REACT_HOOK_FORM} onSelect={() => setMenuSelected(PATHS.UNCONTROLLED_REACT_HOOK_FORM)}>Uncontrolled Form React Hook Form</MenuItem>
    </Container>
  )
}

export default Menu;