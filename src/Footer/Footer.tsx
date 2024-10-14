import { IconBrandFacebook, IconBrandFacebookFilled, IconBrandGithub, IconBrandInstagram, IconBrandLinkedin, IconUserScan } from "@tabler/icons-react";
import { footerLinks } from "../Data/Data";

const Footer = () => {
    return <div className="mb-20 pb-5 flex gap-5 justify-around">
        <div className="w-1/4 flex flex-col gap-4">
        <div className="flex gap-1 items-center text-coral-red-500">
        <IconUserScan className="h-6 w-6 mt-5" />
        <div className="text-xl font-semibold mt-5">WorkWatch</div>
    </div>
    <div className="text-sm text-woodsmoke-300">Job portal with user profiles, skill updates, certifications, work experience and admin job postings.</div>
        <div className="flex gap-3 text-coral-red-500 [&>*]:cursor-pointer">
        <div className="bg-woodsmoke-950 p-2 rounded-full hover:scale-[1.25] transition duration-300 ease-in-out [&>*]:hover:text-woodsmoke-100"><IconBrandGithub/></div>
        <div className="bg-woodsmoke-950 p-2 rounded-full hover:scale-[1.25] transition duration-300 ease-in-out [&>*]:hover:text-woodsmoke-100"><IconBrandInstagram/></div>
        <div className="bg-woodsmoke-950 p-2 rounded-full hover:scale-[1.25] transition duration-300 ease-in-out [&>*]:hover:text-woodsmoke-100"><IconBrandLinkedin/></div>
    </div>
    </div>
    {
        footerLinks.map((item,index)=> <div key={index}>
            <div className="text-lg font-semibold mb-4 text-coral-red-500 mt-5">{item.title}</div>
            {
                item.links.map((link,index)=> <div key={index} className="text-sm text-woodsmoke-300 
                hover:text-woodsmoke-100 cursor-pointer mb-1 hover:scale-[1.25] transition duration-300 ease-in-out [&>*]:hover:text-woodsmoke-100" >{link}</div>)
            }
        </div>)
    }
    </div>
}
export default Footer;