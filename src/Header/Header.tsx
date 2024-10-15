import { Avatar, Indicator, NavLink } from "@mantine/core";
import { IconAdjustments, IconAsset, IconBellFilled, IconBellPlus, IconBinocularsFilled, IconTool, IconUserScan } from "@tabler/icons-react";
import NavLinks from "./NavLinks";

const Header =()=>{
return <div className="w-full bg-woodsmoke-950 font-['Roboto'] px-6 text-white h-20 flex justify-between items-center">
    <div className="flex gap-1 items-center text-coral-red-500">
        <IconUserScan className="h-10 w-10 " />
        <div className="text-3xl font-semibold">WorkWatch</div>
    </div>
    {NavLinks()}
    <div className="flex gap-3 items-center">
    <div className="flex gap-2 items-center">
        <div>Anvesh</div>
        <Avatar src="avatar.png" alt="it's me" />
    </div>
    <div className="bg-woodsmoke-900 p-1.5 rounded-full">
    <IconAdjustments stroke={1.5}/>

    </div>
    <div className="bg-woodsmoke-900 p-1.5 rounded-full">
    <Indicator color="coral-red.5" offset={6} size={8} processing>
    <IconBellFilled stroke={1.5}/>
    </Indicator>
    </div>
    </div>
</div>
}
export default Header;