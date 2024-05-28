import { HStack, Link } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <HStack spacing={4} justify="center" py={4}>
      <Link as={NavLink} to="/" exact>
        Home
      </Link>
      <Link as={NavLink} to="/product">
        Product
      </Link>
    </HStack>
  );
};

export default Navigation;
