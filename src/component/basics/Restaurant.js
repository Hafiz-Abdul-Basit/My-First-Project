import React, { useState } from 'react'
import menu from './MenuApi'
import MenuCard from './MenuCard'
import "./Style.css"
import Navbar from './Navbar'

const uniqueList = [
  ...new Set(
    menu.map((curElem) => {
      return curElem.category;
    })
  ),
  "All",
];

const Restaurant = () => {

  const [menuData, setMenuData] = useState(menu)
  const [menuList, setMenuList] = useState(uniqueList);

  const filterItem = (category) => {
    if (category === "All") {
      setMenuData(menu);
      return;
    }

    const updatedList = menu.filter((curElem) => {
      return curElem.category === category;
    });

    setMenuData(updatedList);
  };

  return (
    <>
      <Navbar filterItem={filterItem} menuList={menuList} />
      <MenuCard menuData={menuData} />
    </>
  )
}

export default Restaurant