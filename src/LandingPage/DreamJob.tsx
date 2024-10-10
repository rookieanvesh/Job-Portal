import { Avatar, TextInput } from "@mantine/core";
import { IconLocationSearch } from "@tabler/icons-react";

const DreamJob = () => {
    return (
    <div className="flex items-center px-16">
        <div className="flex flex-col w-[45%] gap-3">
            <div className="text-6xl font-bold leading-tight text-woodsmoke-100 [&>span]:text-coral-red-500">Find your <span >dream</span>
            <span> job </span> with us</div>
            <div className="text-lg text-woodsmoke-300">Don't wait for the right opportunity: create it. Explore tons of jobs in one place.</div>
            <div className="flex gap-3 mt-5">
            <TextInput className="bg-woodsmoke-900 rounded-lg p-1 px-2 text-woodsmoke-100 [&_input]:!text-woodsmoke-100"variant="unstyled" label="Job Title" placeholder="Software Engineer"/>
            <TextInput className="bg-woodsmoke-900 rounded-lg p-1 px-2 text-woodsmoke-100 [&_input]:!text-woodsmoke-100"variant="unstyled" label="Job Type" placeholder="Full Time"/>
            <div className="flex items-center justify-center h-full w-20 bg-coral-red-500 rounded-lg text-woodsmoke-100 p-2 hover:bg-coral-red-600 cursor-pointer">
                <IconLocationSearch className="h-[85%] w-[85%]"/>
            </div>
            </div>
        </div>
        {/* this is the right section*/}
        <div className="w-[55%] flex items-right justify-center">
            <div className="w-[20rem] relative">
                <img src="boy.png" alt="boy" />
                <div className="absolute -right-10 w-fit top-[50%] border-woodsmoke-300 border rounded-lg p-2 backdrop-blur-md">
                <div className="text-center mb-1 text-sm text-woodsmoke-100">100+ Offers</div>
                <Avatar.Group>
                    <Avatar src="avatar.png" className="w-10 h-10" />
                    <Avatar src="avatar2.png" className="w-10 h-10" />
                    <Avatar src="avatar3.jpeg" className="w-10 h-10" />
                    <Avatar>+90</Avatar>
                </Avatar.Group>
                </div>
                <div className="absolute -left-10 w-fit top-[28%] border-woodsmoke-300 border rounded-lg p-2 backdrop-blur-md gap-3 flex flex-col">
                    <div className="flex gap-2 items-center">
                        <div className="w-10 h-10 bg-woodsmoke-900 rounded-lg">
                            <img src="google.png" alt="" />
                        </div>
                        <div className="text-sm text-woodsmoke-100">
                            <div>Software Engineer</div>
                            <div className="text-woodsmoke-300 text-xs">Bangalore</div>
                        </div>
                    </div>
                    <div className="flex justify-between gap-2 text-woodsmoke-300 text-xs">
                        <span>1 day ago</span>
                        <span>100+ Applied</span>
                    </div>
                </div>
            </div>
        </div>
    </div>);
};

export default DreamJob;