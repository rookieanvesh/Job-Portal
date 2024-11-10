import { Divider, RangeSlider } from "@mantine/core";
import { useState } from "react";
import MultiInput from "../FindJobs/MultiInput";
import { searchFields } from "../Data/TalentData";

const SearchBar = () => {
    const [value, setValue] = useState<[number, number]>([1,100]);
    return <div className="flex px-5 py-8"> 
        {
            searchFields.map((item,index)=>{
            return<><div key={index} className="w-1/5">
                <MultiInput title={item.title} icon={item.icon} options={item.options}/>
            </div>
            <Divider mr="xs" size="xs" orientation="vertical" />
            </>
            })
        }
        <div className="w-1/5 [&_.mantine-Slider-label]:!translate-y-10">
            <div >
                <div>Salary</div>
                <div className="flex justify-between">
                <div className="text-woodsmoke-300 text-sm ">&#8377;{value[0]} LPA</div>
                <div className="text-woodsmoke-300 text-sm ">&#8377;{value[1]} LPA</div>
                </div>
            </div>
        <RangeSlider color="coral-red.5" size="xs" 
        value={value} labelTransitionProps={{
            transition: 'skew-down',
            duration: 150,
            timingFunction: 'linear',
        }} onChange={setValue} />
        </div>
</div>
}
export default SearchBar;