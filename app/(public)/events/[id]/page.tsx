import Image from 'next/image';
import { events } from '@/data/events';
import HeroSection from '@/components/sections/HeroSection';

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function EventDetailPage({ params }: PageProps) {
  const { id } = await params;
  const event = events.find((e) => e.id === id);

  if (!event) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-dark-text mb-4">
            Event Not Found
          </h1>
          <p className="text-medium-gray">
            The event you&apos;re looking for doesn&apos;t exist.
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title={event.title}
        subtitle="Event Details"
        backgroundImage={event.image || '/images/event-gathering.jpg'}
        overlayOpacity={0.4}
      />

      {/* Main Content */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Left Column - Event Details */}
            <div className="md:col-span-2">
              {/* Description */}
              <div className="mb-8 pb-8 border-b border-border-gray">
                <h2 className="text-2xl font-bold text-dark-text mb-4">
                  About This Event
                </h2>
                <p className="text-medium-gray leading-relaxed text-lg">
                  {event.description}
                </p>
              </div>

              {/* Details */}
              <div className="mb-8 pb-8 border-b border-border-gray">
                <h2 className="text-2xl font-bold text-dark-text mb-4">
                  Event Details
                </h2>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-medium-gray font-semibold mb-1">
                      Date & Time
                    </p>
                    <p className="text-dark-text text-lg">
                      {event.date} at {event.time}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-medium-gray font-semibold mb-1">
                      Location
                    </p>
                    <p className="text-dark-text text-lg">{event.location}</p>
                  </div>
                  <div>
                    <p className="text-sm text-medium-gray font-semibold mb-1">
                      Category
                    </p>
                    <p className="text-dark-text text-lg">{event.category}</p>
                  </div>
                </div>
              </div>

              {/* Tags */}
              {event.tags && event.tags.length > 0 && (
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-dark-text mb-4">
                    Tags
                  </h2>
                  <div className="flex flex-wrap gap-3">
                    {event.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="bg-light-gray text-dark-blue px-4 py-2 rounded-lg font-medium text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Column - Registration */}
            <div className="bg-light-gray rounded-lg p-6 h-fit">
              <h3 className="text-xl font-bold text-dark-text mb-6">
                Register for This Event
              </h3>

              <div className="space-y-4 mb-6">
                <div>
                  <p className="text-sm text-medium-gray font-semibold mb-1">
                    Date
                  </p>
                  <p className="text-dark-text">{event.date}</p>
                </div>

                <div>
                  <p className="text-sm text-medium-gray font-semibold mb-1">
                    Time
                  </p>
                  <p className="text-dark-text">{event.time}</p>
                </div>

                <div>
                  <p className="text-sm text-medium-gray font-semibold mb-1">
                    Location
                  </p>
                  <p className="text-dark-text text-sm">{event.location}</p>
                </div>

                <div>
                  <p className="text-sm text-medium-gray font-semibold mb-1">
                    Hosted By
                  </p>
                  <p className="text-dark-text">{event.hostedBy}</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2">
                <button className="w-full bg-gold hover:bg-gold/90 text-dark-blue font-bold py-3 px-4 rounded-lg transition-colors">
                  Register / Join Event
                </button>
                <button className="w-full bg-dark-blue hover:bg-dark-blue/90 text-white font-bold py-3 px-4 rounded-lg transition-colors">
                  View All Events
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
