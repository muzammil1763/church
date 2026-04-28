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
  ArrowRight,
  CheckCircle2
} from 'lucide-react'

export default function ResourcesPage() {
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
    { icon: Package, label: 'All', active: true },
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
      <section className="relative min-h-[350px] md:h-[400px] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1920&h=400&fit=crop"
          alt="Resources"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-navy-dark/80" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full py-12 md:py-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 md:mb-4 px-4">
            Find What You <span className="text-gold">Need.</span>
            <br />
            Share What You <span className="text-gold">Have.</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-6 md:mb-8 px-4">
            A centralized place where churches connect through resources, support, and opportunities.
          </p>

          {/* Search Bar */}
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-3 md:gap-4 px-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 md:left-4 top-1/2 transform -translate-y-1/2 h-4 md:h-5 w-4 md:w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search resources, needs, or churches..."
                className="w-full pl-10 md:pl-12 pr-3 md:pr-4 py-3 md:py-4 rounded-lg text-gray-900 text-sm md:text-base lg:text-lg"
              />
            </div>
            <Button className="bg-gold hover:bg-gold-light text-navy-dark px-4 md:px-8 py-3 md:py-4 text-sm md:text-base lg:text-lg font-semibold whitespace-nowrap">
              OFFER A RESOURCE
            </Button>
            <Button className="bg-navy-dark hover:bg-navy-medium text-white px-4 md:px-8 py-3 md:py-4 text-sm md:text-base lg:text-lg font-semibold whitespace-nowrap">
              REQUEST A RESOURCE
            </Button>
          </div>
        </div>
      </section>

      {/* Category Filters */}
      <section className="bg-navy-dark text-white py-4 md:py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 md:gap-6 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
            {categories.map((category, idx) => {
              const Icon = category.icon
              return (
                <button
                  key={idx}
                  className={`flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 rounded-lg whitespace-nowrap font-semibold transition-colors text-sm md:text-base ${
                    category.active
                      ? 'bg-gold text-navy-dark'
                      : 'bg-navy-medium hover:bg-navy-light'
                  }`}
                >
                  <Icon className="h-4 md:h-5 w-4 md:w-5" />
                  {category.label}
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* Filters Bar */}
      <section className="bg-gray-50 border-b border-gray-200 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <select className="px-4 py-2 border border-gray-300 rounded-md bg-white">
              <option>📍 Location (City / Zip)</option>
            </select>
            
            <select className="px-4 py-2 border border-gray-300 rounded-md bg-white">
              <option>⛪ Church Name</option>
            </select>
            
            <select className="px-4 py-2 border border-gray-300 rounded-md bg-white">
              <option>📦 Resource Type</option>
            </select>
            
            <select className="px-4 py-2 border border-gray-300 rounded-md bg-white">
              <option>⚠️ Urgency</option>
            </select>
          </div>

          <Button variant="outline" className="border-navy-dark text-navy-dark hover:bg-gray-100">
            <Filter className="mr-2 h-4 w-4" />
            Reset Filters
          </Button>
        </div>
      </section>

      {/* Urgent Needs */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 md:mb-12">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy-dark mb-2">
                URGENT NEEDS IN OUR COMMUNITY
              </h2>
            </div>
            <Link href="/resources/urgent">
              <Button variant="outline" className="border-navy-dark text-navy-dark hover:bg-navy-dark hover:text-white text-sm md:text-base whitespace-nowrap">
                View All Urgent Needs →
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {urgentNeeds.map((need) => (
              <Card key={need.id} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="bg-red-600 px-4 py-2">
                  <Badge className="bg-white text-red-600 font-bold">{need.urgency}</Badge>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-navy-dark flex items-center justify-center text-2xl">
                      {need.logo}
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-gray-500">{need.church}</p>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-navy-dark mb-2">{need.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{need.description}</p>
                  
                  <p className="text-sm text-gray-500 mb-4 flex items-center gap-1">
                    📍 {need.location}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {need.tags.map((tag, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <Button className="flex-1 bg-navy-dark hover:bg-navy-medium text-white font-semibold">
                      Respond to Need
                    </Button>
                    <Button variant="outline" className="border-navy-dark text-navy-dark hover:bg-gray-100">
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
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-4xl font-bold text-navy-dark">AVAILABLE RESOURCES</h2>
            <Link href="/resources/all">
              <Button variant="outline" className="border-navy-dark text-navy-dark hover:bg-navy-dark hover:text-white">
                View All Resources →
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {availableResources.map((resource) => (
              <Card key={resource.id} className="overflow-hidden hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-navy-dark flex items-center justify-center text-xl text-white">
                      {resource.logo}
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-gray-500">{resource.church}</p>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-navy-dark mb-2">{resource.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{resource.description}</p>
                  
                  <p className="text-sm text-gray-500 mb-4 flex items-center gap-1">
                    📍 {resource.location}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {resource.tags.map((tag, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <Button className="flex-1 bg-navy-dark hover:bg-navy-medium text-white font-semibold">
                      Contact Now
                    </Button>
                    <Button variant="outline" className="border-navy-dark text-navy-dark hover:bg-gray-100">
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
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <Card className="bg-navy-dark text-white overflow-hidden">
              <CardContent className="p-8 md:p-12">
                <div className="w-12 h-12 md:w-16 md:h-16 mb-4 md:mb-6 rounded-full bg-gold flex items-center justify-center">
                  <Heart className="h-6 w-6 md:h-8 md:w-8 text-navy-dark" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">Need Support?</h3>
                <p className="text-gray-300 mb-4 md:mb-6 text-base md:text-lg">
                  Let the network know how we can help.
                </p>
                <Button className="w-full sm:w-auto bg-gold hover:bg-gold-light text-navy-dark font-semibold px-6 md:px-8 py-3 md:py-4 text-base md:text-lg">
                  SUBMIT A NEED
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gold text-navy-dark overflow-hidden">
              <CardContent className="p-8 md:p-12">
                <div className="w-12 h-12 md:w-16 md:h-16 mb-4 md:mb-6 rounded-full bg-navy-dark flex items-center justify-center">
                  <Package className="h-6 w-6 md:h-8 md:w-8 text-gold" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">Have Something to Offer?</h3>
                <p className="text-navy-medium mb-4 md:mb-6 text-base md:text-lg">
                  Share your resources and support other churches.
                </p>
                <Button className="w-full sm:w-auto bg-navy-dark hover:bg-navy-medium text-white font-semibold px-6 md:px-8 py-3 md:py-4 text-base md:text-lg">
                  OFFER A RESOURCE
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-navy-dark text-center mb-16">HOW IT WORKS</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {howItWorks.map((step, idx) => {
              const Icon = step.icon
              return (
                <div key={idx} className="text-center">
                  <div className="relative mb-6">
                    <div className="w-24 h-24 mx-auto rounded-full bg-navy-dark flex items-center justify-center">
                      <Icon className="h-12 w-12 text-gold" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-12 h-12 rounded-full bg-gold flex items-center justify-center mx-auto left-0 right-0">
                      <span className="text-navy-dark font-bold text-xl">{step.number}</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-navy-dark mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Connected Churches */}
      <section className="py-12 bg-white border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-center text-sm font-semibold text-gray-600 mb-6">CONNECTED CHURCHES</h3>
          <div className="flex items-center justify-center gap-12 flex-wrap">
            {['V', '✝️', 'CMIG', '🌱', '❤️'].map((logo, idx) => (
              <div key={idx} className="w-16 h-16 rounded-full bg-navy-dark flex items-center justify-center text-2xl text-white">
                {logo}
              </div>
            ))}
            <Button variant="outline" className="border-navy-dark text-navy-dark hover:bg-navy-dark hover:text-white">
              View Full Church Directory →
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-20 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=1920&h=400&fit=crop"
          alt="Community"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-navy-dark/85" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl font-bold mb-4">
            When Churches Share Resources...
            <br />
            <span className="text-gold italic text-5xl">Communities Feel the Impact.</span>
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            This platform works when churches actively participate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gold hover:bg-gold-light text-navy-dark font-semibold px-8 py-6 text-lg">
              JOIN THE NETWORK
            </Button>
            <Button className="bg-transparent border-2 border-white hover:bg-white/10 text-white font-semibold px-8 py-6 text-lg">
              CONTACT US
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
