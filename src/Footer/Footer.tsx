import { IconBrandFacebook, IconBrandFacebookFilled, IconBrandInstagram, IconBrandLinkedin, IconUserScan } from "@tabler/icons-react";

const Footer = () => {
    return <div className="mb-20 pb-5">
        <div>
        <div className="flex gap-1 items-center text-coral-red-500">
        <IconUserScan className="h-6 w-6" />
        <div className="text-xl font-semibold">WorkWatch</div>
    </div>
    <div className="text-sm text-woodsmoke-300">Job portal with user profiles, skill updates, certifications, work experience and admin job postings.</div>
        </div>
        <div><IconBrandFacebook/></div>
        <div><IconBrandInstagram/></div>
        <div><IconBrandLinkedin/></div>
    </div>
}
export default Footer;