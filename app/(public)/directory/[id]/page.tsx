import Image from 'next/image';
import { churches } from '@/data/churches';
import HeroSection from '@/components/sections/HeroSection';

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function ChurchProfilePage({ params }: PageProps) {
  const { id } = await params;
  const church = churches.find((c) => c.id === id);

  if (!church) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-dark-text mb-4">
            Church Not Found
          </h1>
          <p className="text-medium-gray">
            The church you&apos;re looking for doesn&apos;t exist.
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title={church.name}
        subtitle="Church Profile"
        backgroundImage={church.image || '/images/community-worship.jpg'}
        overlayOpacity={0.3}
      />

      {/* Main Content */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Left Column - Main Info */}
            <div className="md:col-span-2">
              {/* Pastor Info */}
              <div className="mb-8 pb-8 border-b border-border-gray">
                <h2 className="text-2xl font-bold text-dark-text mb-4">
                  Leadership
                </h2>
                <div className="space-y-2">
                  <p className="text-lg text-dark-text font-semibold">
                    Pastor {church.pastor}
                  </p>
                  <p className="text-medium-gray">{church.location}</p>
                </div>
              </div>

              {/* Description */}
              {church.description && (
                <div className="mb-8 pb-8 border-b border-border-gray">
                  <h2 className="text-2xl font-bold text-dark-text mb-4">
                    About Us
                  </h2>
                  <p className="text-medium-gray leading-relaxed text-lg">
                    {church.description}
                  </p>
                </div>
              )}

              {/* Ministries */}
              {church.ministries && church.ministries.length > 0 && (
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-dark-text mb-4">
                    Our Ministries
                  </h2>
                  <div className="flex flex-wrap gap-3">
                    {church.ministries.map((ministry, idx) => (
                      <span
                        key={idx}
                        className="bg-light-gray text-dark-blue px-4 py-2 rounded-lg font-medium text-sm"
                      >
                        {ministry}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Column - Contact Info */}
            <div className="bg-light-gray rounded-lg p-6 h-fit">
              <h3 className="text-xl font-bold text-dark-text mb-6">
                Contact Information
              </h3>

              <div className="space-y-4">
                {/* Location */}
                <div>
                  <p className="text-sm text-medium-gray font-semibold mb-1">
                    Location
                  </p>
                  <p className="text-dark-text">{church.location}</p>
                </div>

                {/* Phone */}
                <div>
                  <p className="text-sm text-medium-gray font-semibold mb-1">
                    Phone
                  </p>
                  <p className="text-dark-text">(678) 555-0100</p>
                </div>

                {/* Email */}
                <div>
                  <p className="text-sm text-medium-gray font-semibold mb-1">
                    Email
                  </p>
                  <p className="text-dark-text text-sm break-all">
                    contact@{church.name.toLowerCase().replace(/\s+/g, '')}.org
                  </p>
                </div>

                {/* Website */}
                <div>
                  <p className="text-sm text-medium-gray font-semibold mb-1">
                    Website
                  </p>
                  <p className="text-dark-text text-sm">
                    www.{church.name.toLowerCase().replace(/\s+/g, '')}.org
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 space-y-2">
                <button className="w-full bg-gold hover:bg-gold/90 text-dark-blue font-bold py-3 px-4 rounded-lg transition-colors">
                  Connect Now
                </button>
                <button className="w-full bg-dark-blue hover:bg-dark-blue/90 text-white font-bold py-3 px-4 rounded-lg transition-colors">
                  Back to Directory
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
