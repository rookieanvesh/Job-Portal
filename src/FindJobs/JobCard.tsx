import { IconBookmark, IconClock } from "@tabler/icons-react";
import { Divider, Text } from '@mantine/core';
import { useState } from "react";
const JobCard = (props:any) => {
    const [isBookmarked, setIsBookmarked] = useState(false);
    return <div className="bg-woodsmoke-900 p-4 w-72 flex flex-col gap-3 rounded-xl hover:shadow-[0_0_5px_1px_red]
    !shadow-coral-red-500 hover:cursor-pointer ease-in-out transition-all duration-300 hover:bg-woodsmoke-950">
        <div className="flex justify-between">
            <div className="flex gap-2 items-center">
                <div className="p-2 bg-woodsmoke-800 rounded-md">
                    <img className="h-7" src={`/Icons/${props.company}.png`} alt="" />
                </div>
                <div>
                    <div className="font-semibold">{props.jobTitle}</div>
                    <div className="text-sm text-woodsmoke-300">{props.company} &#x2022; {props.applicants} Applicants</div>
                </div>
            </div>
            <IconBookmark 
                className="text-woodsmoke-300 hover:scale-[1.25] transition duration-300 ease-in-out cursor-pointer"
                style={{ fill: isBookmarked ? "rgb(156, 163, 175)" : "" }}
                onClick={() => setIsBookmarked(!isBookmarked)}
            />
        </div>
        <div className="flex gap-2 [&>div]:py-1 [&>div]:px-2 [&>div]:bg-woodsmoke-800 [&>div]:text-coral-red-500
        [&>div]:rounded-lg text-xs">
            <div>{props.experience}</div>
            <div>{props.jobType}</div>
            <div>{props.location}</div>
        </div>
        <Text className="!text-xs text-justify !text-woodsmoke-300" lineClamp={3}>{props.description}</Text>
    <Divider size="xs" color="woodsmoke.7"/>
        <div className="flex justify-between">
            <div className="font-semibold text-woodsmoke-200">
            &#8377;{props.package}
            </div>
            <div className="flex gap-1 text-xs text-woodsmoke-400 items-center">
                <IconClock className="h-5 w-5" stroke={1.5}/>{props.postedDaysAgo} days ago
            </div>
        </div>
    </div> 

}
export default JobCard;