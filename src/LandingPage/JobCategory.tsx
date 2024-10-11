import { Carousel } from "@mantine/carousel";
import { jobCategories as jobCategory } from "../Data/Data";
import { rem } from "@mantine/core";
import { IconArrowRight, IconArrowLeft } from "@tabler/icons-react";

const JobCategory = () => {
    return <div className="mt-20 pb-5">
    <div className="text-4xl text-center font-semibold mb-3 text-woodsmoke-100">Browse <span className="text-coral-red-500">Job </span>
    Categories</div>
    <div className="text-lg mx-auto mb-10 text-woodsmoke-300 text-center w-1/2">Unlock your potential and find your dream job. Browse our diverse range of job categories and kick-start your career today!</div>
    <Carousel slideSize="22%" slideGap="md" loop className="focus-visible:[&_button]:!outline-none
    [&_button]:!outline-1 [&_button]:!outline-coral-red-500 [&_button]:!border-none 
    [&_button]:hover:opacity-50 [&_button]:opacity-0 hover:[&_button]:opacity-100
    [&_button]:!bg-coral-red-500" 
    nextControlIcon={<IconArrowRight className="h-8 w-8" />}
    previousControlIcon={<IconArrowLeft className="h-8 w-8" />}
    >
        {
            jobCategory.map((category,index)=><Carousel.Slide>
        <div className="flex flex-col items-center w-64 gap-2 border-coral-red-500 border rounded-xl p-5 hover:bg-woodsmoke-900 hover:cursor-pointer 
        hover:shadow-lg hover:shadow-coral-red-300 ease-in-out transition-all duration-300">
        <div className="p-2 bg-coral-red-300 rounded-full">
            <img className="h-8 w-8" src={`/Category/${category.name}.png`} alt={category.name} />
        </div>
        <div className="text-woodsmoke-100 text-xl font-semibold">{category.name}</div>
        <div className="text-sm text-woodsmoke-300 text-center">{category.desc}</div>
        <div className="text-coral-red-300 text-lg">{category.jobs}+ new jobs posted</div>
        </div>
            </Carousel.Slide>)
        }
    </Carousel>
    
    </div>
}

export default JobCategory;