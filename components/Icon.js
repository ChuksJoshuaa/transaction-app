import React from "react";
import { Image } from "react-native";

const menuIcon = <Image style={{ height: 14, width: 18 }} />;
const notificationIcon = <Image style={{ height: 22, width: 21 }} />;
const vehicleIcon = <Image style={{ height: 50, width: 50 }} />;
const distanceIcon = <Image style={{ height: 50, width: 50 }} />;
const optionsIcon = <Image style={{ height: 16, width: 16 }} />;

const IconImage = ({
  menu,
  notification,
  vehicle,
  distance,
  options,
  children,
}) => {
  if (menu) return menuIcon;
  if (notification) return notificationIcon;
  if (vehicle) return vehicleIcon;
  if (distance) return distanceIcon;
  if (options) return optionsIcon;

  return children || null;
};

export default IconImage;
