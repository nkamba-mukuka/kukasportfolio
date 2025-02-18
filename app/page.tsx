import Image from 'next/image'

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <Image
                src="/profile.jpeg"
                alt="profile picture"
                width={200}
                height={200}
                className="rounded-full border-4 border-[#FFC0CB]"
                style={{ borderRadius: '50%', objectFit: 'cover' }}
            />
            <h2 className="mt-8 text-4xl font-bold text-[#FFC0CB]">Mukuka Nkamba</h2>
            <h3 className="mt-4 text-xl">Software Engineer</h3>
            <p className="mt-2 text-center max-w-md">
                Driven and innovative software engineer with a track record of excellence, adaptability, and problem-solving. Secured a permanent position post-internship due to outstanding performance, demonstrating the ability to thrive in dynamic and fast-paced environments.Proficient in backend development and front-end technologies, with a passion for creating efficient, scalable solutions. Known for creativity, honesty, and delivering excellence under pressure.
                In addition to software development, I have brief knowledge of IT consulting, allowing me to understand business needs and provide technical solutions that drive success.
            </p>
        </div>
    )
}

