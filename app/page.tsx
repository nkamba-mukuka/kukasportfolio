import Image from 'next/image'

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <Image
                src="/placeholder.svg?height=200&width=200"
                alt="Cartoon profile picture"
                width={200}
                height={200}
                className="rounded-full border-4 border-[#FFC0CB]"
            />
            <h1 className="mt-8 text-4xl font-bold text-[#FFC0CB]">Your Name</h1>
            <p className="mt-4 text-xl">Software Engineer</p>
            <p className="mt-2 text-center max-w-md">
                Passionate about creating elegant solutions to complex problems.
            </p>
        </div>
    )
}

