import Image from 'next/image';
import { pastorStories } from '@/data/pastorStories';
import HeroSection from '@/components/sections/HeroSection';

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function PastorStoryPage({ params }: PageProps) {
  const { id } = await params;
  const story = pastorStories.find((s) => s.id === id);

  if (!story) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-dark-text mb-4">
            Story Not Found
          </h1>
          <p className="text-medium-gray">
            The pastor story you&apos;re looking for doesn&apos;t exist.
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title={story.title}
        subtitle={`Pastor ${story.pastorName}`}
        backgroundImage={story.image || '/images/pastoral-leadership.jpg'}
        overlayOpacity={0.5}
      />

      {/* Main Content */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Left Column - Story Content */}
            <div className="md:col-span-2">
              {/* Church & Theme */}
              <div className="mb-8 pb-8 border-b border-border-gray">
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-medium-gray font-semibold mb-1">
                      Church
                    </p>
                    <p className="text-lg text-dark-text font-semibold">
                      {story.church}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-medium-gray font-semibold mb-1">
                      Theme
                    </p>
                    <span className="inline-block bg-light-gray text-dark-blue px-4 py-2 rounded-lg font-semibold text-sm">
                      {story.theme}
                    </span>
                  </div>
                </div>
              </div>

              {/* Story Content */}
              <div className="mb-8 pb-8 border-b border-border-gray">
                <h2 className="text-2xl font-bold text-dark-text mb-4">
                  The Story
                </h2>
                <div className="space-y-4 text-medium-gray leading-relaxed">
                  {story.content.split('\n\n').map((paragraph, idx) => (
                    <p key={idx} className="text-lg">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              {/* Impact */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-dark-text mb-4">
                  The Impact
                </h2>
                <div className="bg-light-gray p-8 rounded-lg">
                  <p className="text-dark-text text-lg leading-relaxed">
                    {story.impact}
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Pastor Info */}
            <div className="bg-light-gray rounded-lg p-6 h-fit">
              <h3 className="text-xl font-bold text-dark-text mb-6">
                About Pastor {story.pastorName}
              </h3>

              <div className="space-y-4 mb-6">
                <div>
                  <p className="text-sm text-medium-gray font-semibold mb-1">
                    Name
                  </p>
                  <p className="text-dark-text font-semibold">
                    Pastor {story.pastorName}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-medium-gray font-semibold mb-1">
                    Church
                  </p>
                  <p className="text-dark-text">{story.church}</p>
                </div>

                <div>
                  <p className="text-sm text-medium-gray font-semibold mb-1">
                    Years of Ministry
                  </p>
                  <p className="text-dark-text">{story.yearsInMinistry} years</p>
                </div>

                <div>
                  <p className="text-sm text-medium-gray font-semibold mb-1">
                    Focus Area
                  </p>
                  <p className="text-dark-text">{story.theme}</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2">
                <button className="w-full bg-gold hover:bg-gold/90 text-dark-blue font-bold py-3 px-4 rounded-lg transition-colors">
                  Connect with Pastor
                </button>
                <button className="w-full bg-dark-blue hover:bg-dark-blue/90 text-white font-bold py-3 px-4 rounded-lg transition-colors">
                  View Church Profile
                </button>
              </div>

              <p className="text-center text-xs text-medium-gray mt-6">
                When pastors unite, communities change.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* More Stories CTA */}
      <section className="py-16 bg-light-gray">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-dark-text mb-4">
            More Pastor Stories
          </h2>
          <p className="text-medium-gray mb-8 max-w-2xl mx-auto text-lg">
            Be inspired by the stories of pastors across Cobb County working together to strengthen churches and serve communities.
          </p>
          <button className="bg-dark-blue hover:bg-dark-blue/90 text-white font-bold py-3 px-8 rounded-lg transition-colors">
            Read More Stories
          </button>
        </div>
      </section>
    </>
  );
}
