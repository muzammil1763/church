'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Search, 
  Filter,
  Package,
  Users,
  Utensils,
  GraduationCap,
  Heart,
  AlertCircle,
  School,
  CheckCircle2
} from 'lucide-react'

export default function ResourcesPage() {
  const [activeCategory, setActiveCategory] = useState('All')

  const urgentNeeds = [
    {
      id: 1,
      church: 'FIRST BAPTIST POWDER SPRINGS',
      logo: '✝️',
      title: 'Volunteers for Family Drive',
      description: 'Need 10–15 volunteers this Saturday from 9am–1pm to help with our community food drive.',
      location: 'Powder Springs, GA',
      tags: ['Volunteers', 'Outreach', 'Urgent'],
      urgency: 'URGENT',
    },
    {
      id: 2,
      church: 'NEW HOPE COMMUNITY CHURCH',
      logo: '🌱',
      title: 'Hygiene Products Needed',
      description: 'Collecting hygiene products for families in need. Items needed by May 28.',
      location: 'Kennesaw, GA',
      tags: ['Essentials', 'Donations', 'Urgent'],
      urgency: 'URGENT',
    },
    {
      id: 3,
      church: 'BRIDGE OF FAITH CHURCH',
      logo: '❤️',
      title: 'Backpacks for Students',
      description: 'We need 30 backpacks for our back to school drive on July 20.',
      location: 'Marietta, GA',
      tags: ['Students', 'School Support', 'Urgent'],
      urgency: 'URGENT',
    },
  ]

  const availableResources = [
    {
      id: 1,
      church: 'VISION FOR SOULS CHURCH',
      logo: 'V',
      title: 'Event Space Available',
      description: 'Large event space available for community events, meetings, workshops, and more.',
      location: 'Austell, GA',
      tags: ['Space', 'Events', 'Facilities'],
    },
    {
      id: 2,
      church: 'FIRST BAPTIST POWDER SPRINGS',
      logo: '✝️',
      title: 'Volunteer Team Available',
      description: 'Team of volunteers ready to help with outreach projects, events, and more.',
      location: 'Powder Springs, GA',
      tags: ['Volunteers', 'Outreach', 'Support'],
    },
    {
      id: 3,
      church: 'COUNT ME IN GROUP',
      logo: 'CMIG',
      title: 'Youth Mentorship Program',
      description: 'Mentorship program for boys ages 10–17. Mentors and resources available.',
      location: 'Smyrna, GA',
      tags: ['Mentorship', 'Youth', 'Leadership'],
    },
  ]

  const categories = [
    { icon: Package, label: 'All' },
    { icon: Users, label: 'Volunteers' },
    { icon: Package, label: 'Equipment / Space' },
    { icon: Utensils, label: 'Food / Essentials' },
    { icon: GraduationCap, label: 'Mentorship / Youth' },
    { icon: Heart, label: 'Prayer / Spiritual Support' },
    { icon: AlertCircle, label: 'Crisis Response' },
    { icon: School, label: 'School Support' },
  ]

  const howItWorks = [
    {
      number: '1',
      icon: Search,
      title: 'Post or Search',
      description: 'Find resources or share what you have.',
    },
    {
      number: '2',
      icon: Users,
      title: 'Connect',
      description: 'Reach out directly to the church.',
    },
    {
      number: '3',
      icon: CheckCircle2,
      title: 'Take Action',
      description: 'Share, support, and collaborate together.',
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[400px] sm:min-h-[450px] md:h-[500px] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1920&h=500&fit=crop"
          alt="Resources"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-navy-dark/80" />
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-12 md:py-0">
          <p className="text-gold text-xs sm:text-sm font-semibold uppercase mb-3 sm:mb-4 tracking-widest">
            RESOURCE SHARING NETWORK
          </p>
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4 px-2">
            Find What You <span className="text-gold">Need.</span>
            <br />
            Share What You <span className="text-gold">Have.</span>
          </h1>
          <p className="text-sm sm:text-base md:text-xl text-gray-200 max-w-3xl mx-auto mb-6 sm:mb-8 px-2">
            A centralized place where churches connect through resources, support, and opportunities.
          </p>

          {/* Search Bar */}
          <div className="max-w-4xl mx-auto flex flex-col sm:flex-row gap-3 px-2">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search resources, needs, or churches..."
                className="w-full pl-10 sm:pl-12 pr-3 py-3 sm:py-4 rounded-lg text-gray-900 text-sm sm:text-base"
              />
            </div>
            <Button className="w-full sm:w-auto bg-gold hover:bg-gold-light text-navy-dark px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base font-semibold">
              OFFER A RESOURCE
            </Button>
            <Button className="w-full sm:w-auto bg-navy-dark hover:bg-navy-medium text-white px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base font-semibold">
              REQUEST A RESOURCE
            </Button>
          </div>
        </div>
      </section>

      {/* Category Filters */}
      <section className="bg-navy-dark text-white py-3 sm:py-4 md:py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto pb-1 scrollbar-hide">
            {categories.map((category, idx) => {
              const Icon = category.icon
              const isActive = activeCategory === category.label
              return (
                <button
                  key={idx}
                  onClick={() => setActiveCategory(category.label)}
                  className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 rounded-lg whitespace-nowrap font-semibold transition-colors text-xs sm:text-sm md:text-base flex-shrink-0 ${
                    isActive
                      ? 'bg-gold text-navy-dark'
                      : 'bg-navy-medium hover:bg-navy-light text-white'
                  }`}
                >
                  <Icon className="h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-5 md:w-5 flex-shrink-0" />
                  <span>{category.label}</span>
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* Filters Bar */}
      <section className="bg-gray-50 border-b border-gray-200 py-3 sm:py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              <select className="px-2 sm:px-3 py-2 border border-gray-300 rounded-md bg-white text-xs sm:text-sm w-full sm:w-auto">
                <option>📍 All Locations</option>
                <option>Powder Springs</option>
                <option>Austell</option>
                <option>Marietta</option>
                <option>Kennesaw</option>
              </select>
              
              <select className="px-2 sm:px-3 py-2 border border-gray-300 rounded-md bg-white text-xs sm:text-sm w-full sm:w-auto">
                <option>⛪ All Churches</option>
              </select>
              
              <select className="px-2 sm:px-3 py-2 border border-gray-300 rounded-md bg-white text-xs sm:text-sm w-full sm:w-auto">
                <option>📦 Resource Type</option>
                <option>Volunteers</option>
                <option>Equipment</option>
                <option>Food</option>
                <option>Space</option>
              </select>
              
              <select className="px-2 sm:px-3 py-2 border border-gray-300 rounded-md bg-white text-xs sm:text-sm w-full sm:w-auto">
                <option>⚠️ All Urgency</option>
                <option>Urgent</option>
                <option>High</option>
                <option>Normal</option>
              </select>
            </div>

            <Button variant="outline" className="w-full sm:w-auto border-navy-dark text-navy-dark hover:bg-gray-100 text-xs sm:text-sm">
              <Filter className="mr-2 h-3.5 w-3.5 sm:h-4 sm:w-4" />
              Reset Filters
            </Button>
          </div>
        </div>
      </section>

      {/* Urgent Needs */}
      <section className="py-10 sm:py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-4 mb-6 sm:mb-8 md:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-navy-dark">
              URGENT NEEDS IN OUR COMMUNITY
            </h2>
            <Link href="/resources/urgent" className="flex-shrink-0">
              <Button variant="outline" className="w-full sm:w-auto border-navy-dark text-navy-dark hover:bg-navy-dark hover:text-white text-xs sm:text-sm">
                View All Urgent Needs →
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {urgentNeeds.map((need) => (
              <Card key={need.id} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="bg-red-600 px-3 sm:px-4 py-2">
                  <Badge className="bg-white text-red-600 font-bold text-xs">{need.urgency}</Badge>
                </div>
                <CardContent className="p-4 sm:p-5 md:p-6">
                  <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-navy-dark flex items-center justify-center text-lg sm:text-2xl flex-shrink-0">
                      {need.logo}
                    </div>
                    <p className="text-xs font-semibold text-gray-500 leading-tight">{need.church}</p>
                  </div>

                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-navy-dark mb-2">{need.title}</h3>
                  <p className="text-gray-600 mb-3 text-xs sm:text-sm">{need.description}</p>
                  
                  <p className="text-xs sm:text-sm text-gray-500 mb-3 flex items-center gap-1">
                    📍 {need.location}
                  </p>

                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                    {need.tags.map((tag, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex flex-col xs:flex-row gap-2">
                    <Button className="flex-1 bg-navy-dark hover:bg-navy-medium text-white font-semibold text-xs sm:text-sm py-2">
                      Respond to Need
                    </Button>
                    <Button variant="outline" className="flex-1 xs:flex-none border-navy-dark text-navy-dark hover:bg-gray-100 text-xs sm:text-sm py-2">
                      View Church
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Available Resources */}
      <section className="py-10 sm:py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-4 mb-6 sm:mb-8 md:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-navy-dark">
              AVAILABLE RESOURCES
            </h2>
            <Link href="/resources/all" className="flex-shrink-0">
              <Button variant="outline" className="w-full sm:w-auto border-navy-dark text-navy-dark hover:bg-navy-dark hover:text-white text-xs sm:text-sm">
                View All Resources →
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {availableResources.map((resource) => (
              <Card key={resource.id} className="overflow-hidden hover:shadow-xl transition-shadow">
                <CardContent className="p-4 sm:p-5 md:p-6">
                  <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-navy-dark flex items-center justify-center text-base sm:text-xl text-white flex-shrink-0">
                      {resource.logo}
                    </div>
                    <p className="text-xs font-semibold text-gray-500 leading-tight">{resource.church}</p>
                  </div>

                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-navy-dark mb-2">{resource.title}</h3>
                  <p className="text-gray-600 mb-3 text-xs sm:text-sm">{resource.description}</p>
                  
                  <p className="text-xs sm:text-sm text-gray-500 mb-3 flex items-center gap-1">
                    📍 {resource.location}
                  </p>

                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                    {resource.tags.map((tag, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex flex-col xs:flex-row gap-2">
                    <Button className="flex-1 bg-navy-dark hover:bg-navy-medium text-white font-semibold text-xs sm:text-sm py-2">
                      Contact Now
                    </Button>
                    <Button variant="outline" className="flex-1 xs:flex-none border-navy-dark text-navy-dark hover:bg-gray-100 text-xs sm:text-sm py-2">
                      View Church
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Need Support / Have Something to Offer */}
      <section className="py-10 sm:py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            <Card className="bg-navy-dark text-white overflow-hidden">
              <CardContent className="p-6 sm:p-8 md:p-10">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mb-4 sm:mb-5 md:mb-6 rounded-full bg-gold flex items-center justify-center">
                  <Heart className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-navy-dark" />
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3 md:mb-4">Need Support?</h3>
                <p className="text-gray-300 mb-4 sm:mb-5 md:mb-6 text-sm sm:text-base md:text-lg">
                  Let the network know how we can help.
                </p>
                <Button className="w-full sm:w-auto bg-gold hover:bg-gold-light text-navy-dark font-semibold px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base md:text-lg">
                  SUBMIT A NEED
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gold text-navy-dark overflow-hidden">
              <CardContent className="p-6 sm:p-8 md:p-10">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mb-4 sm:mb-5 md:mb-6 rounded-full bg-navy-dark flex items-center justify-center">
                  <Package className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-gold" />
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3 md:mb-4">Have Something to Offer?</h3>
                <p className="text-navy-medium mb-4 sm:mb-5 md:mb-6 text-sm sm:text-base md:text-lg">
                  Share your resources and support other churches.
                </p>
                <Button className="w-full sm:w-auto bg-navy-dark hover:bg-navy-medium text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base md:text-lg">
                  OFFER A RESOURCE
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-10 sm:py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy-dark text-center mb-8 sm:mb-10 md:mb-16">
            HOW IT WORKS
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6 md:gap-12">
            {howItWorks.map((step, idx) => {
              const Icon = step.icon
              return (
                <div key={idx} className="text-center">
                  <div className="relative mb-4 sm:mb-6 inline-block">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto rounded-full bg-navy-dark flex items-center justify-center">
                      <Icon className="h-10 w-10 sm:h-12 sm:w-12 text-gold" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-gold flex items-center justify-center">
                      <span className="text-navy-dark font-bold text-base sm:text-xl">{step.number}</span>
                    </div>
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-navy-dark mb-2 sm:mb-3">{step.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600">{step.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Connected Churches */}
      <section className="py-8 sm:py-10 md:py-12 bg-white border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-center text-xs sm:text-sm font-semibold text-gray-600 mb-4 sm:mb-6 uppercase tracking-widest">
            Connected Churches
          </h3>
          <div className="flex items-center justify-center gap-4 sm:gap-6 md:gap-10 flex-wrap">
            {['V', '✝️', 'CMIG', '🌱', '❤️'].map((logo, idx) => (
              <div key={idx} className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-navy-dark flex items-center justify-center text-lg sm:text-xl md:text-2xl text-white">
                {logo}
              </div>
            ))}
            <Link href="/directory">
              <Button variant="outline" className="w-full sm:w-auto border-navy-dark text-navy-dark hover:bg-navy-dark hover:text-white text-xs sm:text-sm">
                View Full Church Directory →
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-14 sm:py-16 md:py-20 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=1920&h=400&fit=crop"
          alt="Community"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-navy-dark/85" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 px-2">
            When Churches Share Resources...
            <br />
            <span className="text-gold italic text-3xl sm:text-4xl md:text-5xl">Communities Feel the Impact.</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-6 sm:mb-8 max-w-2xl mx-auto px-2">
            This platform works when churches actively participate.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <Button className="w-full sm:w-auto bg-gold hover:bg-gold-light text-navy-dark font-semibold px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg">
              JOIN THE NETWORK
            </Button>
            <Button className="w-full sm:w-auto bg-transparent border-2 border-white hover:bg-white/10 text-white font-semibold px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg">
              CONTACT US
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
