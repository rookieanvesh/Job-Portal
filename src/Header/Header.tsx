import { Avatar } from "@mantine/core";
import { IconAsset, IconBellPlus, IconBinocularsFilled, IconTool } from "@tabler/icons-react";

const Header =()=>{
return <div className="w-full bg-black px-6 text-white h-28 flex justify-between items-center">
    <div className="flex gap-3 items-center">
        <IconBinocularsFilled className="h-10 w-10" />
        <div className="text-3xl font-semibold">WorkWatch</div>
    </div>
    <div className="flex gap-3 items-center">
        <a href="/">Find Jobs</a>
        <a href="/">Find Talent</a>
        <a href="/">Upload Job</a>
        <a href="/">About Us</a>
    </div>
    <div className="flex gap-5 items-center">
    <IconBellPlus/>
    <div className="flex gap-2 items-center">
        <div>Anvesh</div>
        <Avatar src="avatar.png" alt="it's me" />
    </div>
    <IconTool/>
    </div>
</div>
}
export default Header;