import Image from 'next/image';
import { resources } from '@/data/resources';
import HeroSection from '@/components/sections/HeroSection';

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function ResourceDetailPage({ params }: PageProps) {
  const { id } = await params;
  const resource = resources.find((r) => r.id === id);

  if (!resource) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-dark-text mb-4">
            Resource Not Found
          </h1>
          <p className="text-medium-gray">
            The resource you&apos;re looking for doesn&apos;t exist.
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title={resource.title}
        subtitle="Available Resource"
        backgroundImage={resource.image || '/images/resource-sharing.jpg'}
        overlayOpacity={0.4}
      />

      {/* Main Content */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Left Column - Resource Details */}
            <div className="md:col-span-2">
              {/* Description */}
              <div className="mb-8 pb-8 border-b border-border-gray">
                <h2 className="text-2xl font-bold text-dark-text mb-4">
                  About This Resource
                </h2>
                <p className="text-medium-gray leading-relaxed text-lg">
                  {resource.description}
                </p>
              </div>

              {/* Details */}
              <div className="mb-8 pb-8 border-b border-border-gray">
                <h2 className="text-2xl font-bold text-dark-text mb-4">
                  Resource Details
                </h2>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-medium-gray font-semibold mb-1">
                      Type
                    </p>
                    <p className="text-dark-text text-lg">{resource.type}</p>
                  </div>
                  <div>
                    <p className="text-sm text-medium-gray font-semibold mb-1">
                      Location
                    </p>
                    <p className="text-dark-text text-lg">{resource.location}</p>
                  </div>
                  <div>
                    <p className="text-sm text-medium-gray font-semibold mb-1">
                      Available For
                    </p>
                    <p className="text-dark-text text-lg">{resource.availableFor}</p>
                  </div>
                  <div>
                    <p className="text-sm text-medium-gray font-semibold mb-1">
                      Availability
                    </p>
                    <p className="text-dark-text text-lg">{resource.availability}</p>
                  </div>
                </div>
              </div>

              {/* How to Access */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-dark-text mb-4">
                  How to Access This Resource
                </h2>
                <div className="bg-light-gray p-6 rounded-lg">
                  <ol className="space-y-3">
                    <li className="flex gap-4">
                      <span className="flex-shrink-0 w-8 h-8 bg-gold text-dark-blue rounded-full flex items-center justify-center font-bold">
                        1
                      </span>
                      <span className="text-dark-text">Contact {resource.offeredBy}</span>
                    </li>
                    <li className="flex gap-4">
                      <span className="flex-shrink-0 w-8 h-8 bg-gold text-dark-blue rounded-full flex items-center justify-center font-bold">
                        2
                      </span>
                      <span className="text-dark-text">Discuss your needs and how this resource can help</span>
                    </li>
                    <li className="flex gap-4">
                      <span className="flex-shrink-0 w-8 h-8 bg-gold text-dark-blue rounded-full flex items-center justify-center font-bold">
                        3
                      </span>
                      <span className="text-dark-text">Arrange the details and schedule access</span>
                    </li>
                    <li className="flex gap-4">
                      <span className="flex-shrink-0 w-8 h-8 bg-gold text-dark-blue rounded-full flex items-center justify-center font-bold">
                        4
                      </span>
                      <span className="text-dark-text">Use the resource to serve your ministry</span>
                    </li>
                  </ol>
                </div>
              </div>
            </div>

            {/* Right Column - Contact */}
            <div className="bg-light-gray rounded-lg p-6 h-fit">
              <h3 className="text-xl font-bold text-dark-text mb-6">
                Connect to Access
              </h3>

              <div className="space-y-4 mb-6">
                <div>
                  <p className="text-sm text-medium-gray font-semibold mb-1">
                    Offered By
                  </p>
                  <p className="text-dark-text font-semibold">{resource.offeredBy}</p>
                </div>

                <div>
                  <p className="text-sm text-medium-gray font-semibold mb-1">
                    Resource Type
                  </p>
                  <p className="text-dark-text">{resource.type}</p>
                </div>

                <div>
                  <p className="text-sm text-medium-gray font-semibold mb-1">
                    Location
                  </p>
                  <p className="text-dark-text text-sm">{resource.location}</p>
                </div>

                <div>
                  <p className="text-sm text-medium-gray font-semibold mb-1">
                    Availability
                  </p>
                  <p className="text-dark-text">{resource.availability}</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2">
                <button className="w-full bg-gold hover:bg-gold/90 text-dark-blue font-bold py-3 px-4 rounded-lg transition-colors">
                  Connect Now
                </button>
                <button className="w-full bg-dark-blue hover:bg-dark-blue/90 text-white font-bold py-3 px-4 rounded-lg transition-colors">
                  Request Information
                </button>
              </div>

              <p className="text-center text-xs text-medium-gray mt-6">
                Sharing resources strengthens every church in our community.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
