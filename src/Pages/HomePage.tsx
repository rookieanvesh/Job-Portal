import Header from "../Header/Header"
import Companies from "../LandingPage/Companies"
import DreamJob from "../LandingPage/DreamJob"
import JobCategory from "../LandingPage/JobCategory"

const HomePage = () => {
    return (
        <div className="min-h-[100vh] bg-woodsmoke-950 font-['Roboto']">
            <Header/>
            <DreamJob/>
            <Companies/>
            <JobCategory/>
        </div>
    )
}
export default HomePage