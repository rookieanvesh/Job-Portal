import { Divider } from "@mantine/core"
import SearchBar from "../FindJobs/SearchBar"
import Jobs from "../FindJobs/Jobs"


const FindJobs = () => {
    return (
    <div className="min-h-[100vh] bg-woodsmoke-950 font-['Roboto']">
    <Divider size="xs" mx="md" />
    <SearchBar/>
    <Divider size="xs" mx="md" />
    <Jobs/>
</div>
    )
}
export default FindJobs