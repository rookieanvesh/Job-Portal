import { Avatar } from "@mantine/core";
import { work } from "../Data/Data"

const Working=()=>{
    return <div className="mt-20 pb-5">
    <div className="text-4xl text-center font-semibold mb-3 text-woodsmoke-100">How it <span className="text-coral-red-500">Works </span>
    </div>
    <div className="text-lg mx-auto mb-10 text-woodsmoke-300 text-center w-1/2">Simplify your job search and get hired quickly.</div>
    <div className="flex px-16 justify-between items-center">
        <div className=""> 
            <img className="w-[25rem]" src="/Working/boy.png" alt="girl" />
            <div>
            <Avatar className="!h-16 !w-16" src="avatar2.png" alt="it's me" />
            </div>
        </div>
        <div className="flex flex-col gap-10">
            {
                work.map((item,index)=><div key={index} className="flex items-center gap-4">
                <div className="p-2.5 bg-coral-red-300 rounded-full">
                    <img className="h-12 w-12" src={`/Working/${item.name}.png`} alt="item.name" />
                </div>
                <div>
                <div className="text-woodsmoke-200 text-xl font-semibold">{item.name}</div>
                <div className="text-woodsmoke-300">{item.desc}</div>
                </div>
            </div>)
            }
        </div>
    </div>
    </div>
}
export default Working;