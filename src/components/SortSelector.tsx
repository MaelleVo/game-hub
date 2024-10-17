import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const SortSelector = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by: Relevance
      </MenuButton>
      <MenuList>
        <MenuItem>R</MenuItem>
        <MenuItem>D</MenuItem>
        <MenuItem>N</MenuItem>
        <MenuItem>RE</MenuItem>
        <MenuItem>P</MenuItem>
        <MenuItem>Av</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
