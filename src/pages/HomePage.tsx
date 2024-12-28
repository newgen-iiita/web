import { Sparkles } from 'lucide-react';
import Image from 'next/image';

export default function Page() {
  return (
    <main className="min-h-screen bg-[#020817] text-white">
      {/* Hero Section */}
      <div className="container relative mx-auto px-4 pt-16">
        <div className="flex flex-row items-start justify-between gap-8">
          {/* Left Section */}
          <div className="relative lg:w-1/2 order-1 lg:order-1">
            {/* Decorative elements */}
            <div className="absolute -top-10 right-10 h-16 w-16 rounded-full bg-cyan-400/20 blur-xl" />
            <div className="absolute -bottom-5 left-10 h-20 w-20 rounded-full bg-cyan-400/20 blur-xl" />

            {/* Welcome Text */}
            <div className="space-y-8">
              <div className="inline-flex items-center rounded-full bg-gray-800/50 px-4 py-2">
                <Sparkles className="mr-2 h-4 w-4 text-cyan-400" />
                <span className="text-sm">Welcome to NewGen IEDC</span>
              </div>

              <h1 className="space-y-2 text-5xl font-bold lg:text-6xl">
                <div>The New</div>
                <div className="text-cyan-400">Generation</div>
                <div>E-Cell</div>
              </h1>

              <p className="text-gray-400">
                NewGen IEDC aims to inculcate the spirit of innovation and entrepreneurship amongst the
                young S&T students, encourage and support start-up creation through guidance, mentorship &
                support.
              </p>
            </div>
          </div>

          {/* Right Section */}
          <div className="relative lg:w-1/2 order-2 lg:order-2">
            <div className="flex flex-col items-start space-y-2">
              {/* Business illustration */}
              <div className="relative">
                <Image
                  src="/business.png?height=75&width=112"
                  alt="Business illustration"
                  width={224}
                  height={150}
                  className="rounded-lg"
                />
              </div>

              {/* Robotic hand illustration */}
              <div className="relative">
                <Image
                  src="/robotarm.jpg?height=150&width=224"
                  alt="Robotic hand illustration"
                  width={448}
                  height={300}
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="space-y-2">
            <h3 className="text-4xl font-bold">100+</h3>
            <p className="text-sm text-cyan-400">PARTNERS</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-4xl font-bold">20+</h3>
            <p className="text-sm text-cyan-400">LISTED STARTUPS</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-4xl font-bold">$1M+</h3>
            <p className="text-sm text-cyan-400">TOTAL VALUATION</p>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-32">
          <h2 className="mb-12 text-4xl font-bold">
            You do the business,
            <br />
            we'll handle the money.
          </h2>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-8">
              <p className="text-gray-400">
                NewGen IEDC has a mission to "promote knowledge based and technology-driven start-ups by
                harnessing young minds and their innovation potential in an academic environment"
              </p>

              <button className="rounded-full border border-cyan-400 px-8 py-3 text-cyan-400 hover:bg-cyan-400/10">
                Get Started
              </button>
            </div>

            <div className="space-y-8">
              <div className="space-y-2">
                <h3 className="flex items-center text-xl font-semibold">
                  <span className="mr-3 rounded-full bg-cyan-400/10 p-2">⭐</span>
                  No Equity Taken
                </h3>
                <p className="text-gray-400">
                  NewGen will not take any equity from the founder in against of the funding
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="flex items-center text-xl font-semibold">
                  <span className="mr-3 rounded-full bg-cyan-400/10 p-2">🛡️</span>
                  100% Secured
                </h3>
                <p className="text-gray-400">
                  We take proactive steps make sure your information and transactions are secure.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="flex items-center text-xl font-semibold">
                  <span className="mr-3 rounded-full bg-cyan-400/10 p-2">📤</span>
                  Easy fund Transfer
                </h3>
                <p className="text-gray-400">
                  Quick and secure fund transfer process for approved startups
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
