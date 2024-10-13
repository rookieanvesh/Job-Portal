import { Button, TextInput } from "@mantine/core";

const Subscribe = () => {
    return <div className="mt-20 flex items-center bg-woodsmoke-900 mx-20 py-3 rounded-xl justify-around">
        <div className="text-4xl text-center font-semibold text-woodsmoke-100">Never want to miss any<span className="text-coral-red-500"> job news? </span></div>
        <div className="flex gap-4 bg-woodsmoke-700 px-3 py-2 items-center rounded-xl">
        <TextInput
        className="[&_input]:text-woodsmoke-100 font-semibold "
            variant="unstyled"
            placeholder="Your@email.com"
            size="xl"
    />
    <Button className="!rounded-lg" size="lg" color="coral-red.5" variant="filled">Subscribe</Button>
        </div>
    </div>
}
export default Subscribe;