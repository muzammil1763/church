import { Prisma, PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Starting seed...')

  // Clear existing data
  await prisma.pastorStory.deleteMany()
  await prisma.crisisNeed.deleteMany()
  await prisma.resource.deleteMany()
  await prisma.event.deleteMany()
  await prisma.church.deleteMany()
  await prisma.user.deleteMany()

  console.log('✅ Cleared existing data')

  // Create admin user
  const hashedPassword = await bcrypt.hash('admin123', 10)
  const admin = await prisma.user.create({
    data: {
      name: 'Admin User',
      email: 'admin@cobbchurch.org',
      password: hashedPassword,
      role: 'admin',
    },
  })
  console.log('✅ Created admin user')

  // Create churches
  const churches = await Promise.all([
    prisma.church.create({
      data: {
        name: 'First Baptist Church of Powder Springs',
        slug: 'first-baptist-powder-springs',
        description: 'A vibrant community of believers committed to worship, fellowship, and serving our community. We believe in the power of unity and collaboration.',
        pastor: 'John Smith',
        address: '123 Church Street',
        city: 'Powder Springs',
        state: 'GA',
        zip: '30127',
        phone: '(770) 555-0101',
        email: 'info@fbcps.org',
        website: 'https://fbcps.org',
        image: 'https://images.unsplash.com/photo-1438032005730-c779502df39b?w=800&h=600&fit=crop',
        denomination: 'Baptist',
        size: '500-1000',
        founded: '1985',
        services: ['Sunday Worship 10:00 AM', 'Wednesday Bible Study 7:00 PM', 'Youth Group Friday 6:00 PM'],
        ministries: ['Worship', 'Youth Ministry', 'Outreach', 'Missions'],
        published: true,
      },
    }),
    prisma.church.create({
      data: {
        name: 'Vision for Souls Church',
        slug: 'vision-for-souls',
        description: 'Reaching souls and transforming lives through the power of the Gospel. We are passionate about evangelism and community impact.',
        pastor: 'Ricky Mims',
        address: '456 Faith Avenue',
        city: 'Austell',
        state: 'GA',
        zip: '30106',
        phone: '(770) 555-0102',
        email: 'contact@visionforsouls.org',
        website: 'https://visionforsouls.org',
        image: 'https://images.unsplash.com/photo-1464207687429-7505649dae38?w=800&h=600&fit=crop',
        denomination: 'Non-denominational',
        size: '200-500',
        founded: '2010',
        services: ['Sunday Service 11:00 AM', 'Prayer Meeting Tuesday 6:30 PM'],
        ministries: ['Evangelism', 'Prayer', 'Youth', 'Community Outreach'],
        published: true,
      },
    }),
    prisma.church.create({
      data: {
        name: 'New Hope Community Church',
        slug: 'new-hope-community',
        description: 'A place where hope is renewed and lives are transformed. We focus on families, worship, and serving together.',
        pastor: 'Michael Thompson',
        address: '789 Hope Lane',
        city: 'Kennesaw',
        state: 'GA',
        zip: '30144',
        phone: '(770) 555-0103',
        email: 'hello@newhopecommunity.org',
        website: 'https://newhopecommunity.org',
        image: 'https://images.unsplash.com/photo-1519491050282-cf00c82424b4?w=800&h=600&fit=crop',
        denomination: 'Non-denominational',
        size: '300-500',
        founded: '2005',
        services: ['Sunday Worship 9:00 AM & 11:00 AM', 'Small Groups Wednesday'],
        ministries: ['Worship', 'Families', 'Serve', 'Children'],
        published: true,
      },
    }),
    prisma.church.create({
      data: {
        name: 'Bridge of Faith Church',
        slug: 'bridge-of-faith',
        description: 'Building bridges between faith and community. We are committed to serving our neighbors and making a difference.',
        pastor: 'David Williams',
        address: '321 Bridge Road',
        city: 'Smyrna',
        state: 'GA',
        zip: '30080',
        phone: '(770) 555-0104',
        email: 'info@bridgeoffaith.org',
        website: 'https://bridgeoffaith.org',
        image: 'https://images.unsplash.com/photo-1478860409698-8707f313ee8b?w=800&h=600&fit=crop',
        denomination: 'Non-denominational',
        size: '400-600',
        founded: '2000',
        services: ['Sunday Service 10:30 AM', 'Community Dinner Thursday 6:00 PM'],
        ministries: ['Faith', 'Community', 'Outreach', 'Counseling'],
        published: true,
      },
    }),
    prisma.church.create({
      data: {
        name: 'Living Word Church',
        slug: 'living-word',
        description: 'Where the Word of God comes alive. We are dedicated to teaching, missions, and youth development.',
        pastor: 'James Walker',
        address: '654 Word Way',
        city: 'Acworth',
        state: 'GA',
        zip: '30101',
        phone: '(770) 555-0105',
        email: 'contact@livingword.org',
        website: 'https://livingword.org',
        image: 'https://images.unsplash.com/photo-1502635385003-ee1e6a1a742d?w=800&h=600&fit=crop',
        denomination: 'Pentecostal',
        size: '250-400',
        founded: '1995',
        services: ['Sunday Worship 10:00 AM', 'Bible Study Wednesday 7:00 PM'],
        ministries: ['Teaching', 'Youth', 'Missions', 'Prayer'],
        published: true,
      },
    }),
    prisma.church.create({
      data: {
        name: 'Grace Fellowship Church',
        slug: 'grace-fellowship',
        description: 'Experiencing God\'s grace together. We believe in small groups, service, and authentic community.',
        pastor: 'Daniel Brown',
        address: '987 Grace Street',
        city: 'Mableton',
        state: 'GA',
        zip: '30126',
        phone: '(770) 555-0106',
        email: 'info@gracefellowship.org',
        website: 'https://gracefellowship.org',
        image: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800&h=600&fit=crop',
        denomination: 'Non-denominational',
        size: '350-500',
        founded: '2008',
        services: ['Sunday Service 9:30 AM & 11:30 AM'],
        ministries: ['Grace', 'Groups', 'Serve', 'Worship'],
        published: true,
      },
    }),
  ])
  console.log(`✅ Created ${churches.length} churches`)

  // Create events
  const events = await Promise.all([
    prisma.event.create({
      data: {
        title: 'Cobb Community Coed Basketball Tournament',
        slug: 'cobb-basketball-tournament',
        description: 'Annual basketball tournament bringing churches, families, and organizations together under one mission—unity. Join us for a day of competition, fellowship, and community impact.',
        date: new Date('2026-07-19'),
        time: '2:30 PM',
        location: 'First Baptist Church of Powder Springs',
        address: '123 Church Street, Powder Springs, GA 30127',
        organizer: 'Cobb Church Network',
        contactEmail: 'events@cobbchurch.org',
        contactPhone: '(770) 555-0100',
        image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&h=600&fit=crop',
        category: 'Community',
        capacity: 200,
        registered: 45,
        published: true,
      },
    }),
    prisma.event.create({
      data: {
        title: 'Community Food Distribution',
        slug: 'community-food-distribution',
        description: 'Monthly food distribution serving families in need. Volunteers needed to help pack and distribute food boxes.',
        date: new Date('2026-05-24'),
        time: '9:00 AM - 12:00 PM',
        location: 'Vision for Souls Church',
        address: '456 Faith Avenue, Austell, GA 30106',
        organizer: 'Vision for Souls Church',
        contactEmail: 'outreach@visionforsouls.org',
        contactPhone: '(770) 555-0102',
        image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&h=600&fit=crop',
        category: 'Outreach',
        capacity: 50,
        registered: 32,
        published: true,
      },
    }),
    prisma.event.create({
      data: {
        title: 'County Wide Prayer Gathering',
        slug: 'prayer-gathering',
        description: 'Join pastors and believers from across Cobb County for a powerful night of worship and prayer.',
        date: new Date('2026-06-07'),
        time: '7:00 PM',
        location: 'New Hope Community Church',
        address: '789 Hope Lane, Kennesaw, GA 30144',
        organizer: 'New Hope Community Church',
        contactEmail: 'prayer@newhopecommunity.org',
        contactPhone: '(770) 555-0103',
        image: 'https://images.unsplash.com/photo-1507692049790-de58290a4334?w=800&h=600&fit=crop',
        category: 'Prayer',
        capacity: 300,
        registered: 156,
        published: true,
      },
    }),
    prisma.event.create({
      data: {
        title: 'Community Clean-Up Day',
        slug: 'community-cleanup',
        description: 'Serve together to beautify our community. Bring your family and join us for a morning of service.',
        date: new Date('2026-06-14'),
        time: '8:30 AM',
        location: 'South Central Park, Marietta',
        address: 'South Central Park, Marietta, GA',
        organizer: 'Bridge of Faith Church',
        contactEmail: 'serve@bridgeoffaith.org',
        contactPhone: '(770) 555-0104',
        image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&h=600&fit=crop',
        category: 'Community',
        capacity: 100,
        registered: 67,
        published: true,
      },
    }),
  ])
  console.log(`✅ Created ${events.length} events`)

  // Create resources
  const resources = await Promise.all([
    prisma.resource.create({
      data: {
        title: 'Event Space Available',
        slug: 'event-space-available',
        description: 'Large event space available for community events, meetings, workshops, and more. Seats up to 300 people with full AV equipment.',
        category: 'Space',
        type: 'Facility',
        provider: 'Vision for Souls Church',
        contactName: 'Pastor Ricky Mims',
        contactEmail: 'facilities@visionforsouls.org',
        contactPhone: '(770) 555-0102',
        availability: 'Available weekdays and weekends',
        image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&h=600&fit=crop',
        tags: ['Space', 'Events', 'Facilities', 'AV Equipment'],
        published: true,
      },
    }),
    prisma.resource.create({
      data: {
        title: 'Volunteer Team Available',
        slug: 'volunteer-team',
        description: 'Team of 15-20 volunteers ready to help with outreach projects, events, food distribution, and community service.',
        category: 'Volunteers',
        type: 'Human Resources',
        provider: 'First Baptist Church of Powder Springs',
        contactName: 'John Smith',
        contactEmail: 'volunteers@fbcps.org',
        contactPhone: '(770) 555-0101',
        availability: 'Weekends and some weekdays',
        image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&h=600&fit=crop',
        tags: ['Volunteers', 'Outreach', 'Support', 'Service'],
        published: true,
      },
    }),
    prisma.resource.create({
      data: {
        title: 'Youth Mentorship Program',
        slug: 'youth-mentorship',
        description: 'Comprehensive mentorship program for boys ages 10-17. Trained mentors and structured curriculum available.',
        category: 'Mentorship',
        type: 'Program',
        provider: 'Count Me In Group',
        contactName: 'Program Director',
        contactEmail: 'mentorship@cmig.org',
        contactPhone: '(770) 555-0107',
        availability: 'Year-round program',
        image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop',
        tags: ['Mentorship', 'Youth', 'Leadership', 'Boys'],
        published: true,
      },
    }),
  ])
  console.log(`✅ Created ${resources.length} resources`)

  // Create crisis needs
  const crisisNeeds = await Promise.all([
    prisma.crisisNeed.create({
      data: {
        title: 'Family in Need - House Fire in Austell',
        description: 'Family of 5 displaced due to house fire. Need temporary housing, clothing (sizes: adult M/L, children 8, 10, 12), and food support.',
        urgency: 'urgent',
        category: 'Housing',
        location: 'Austell, GA',
        contactName: 'Pastor Ricky Mims',
        contactEmail: 'crisis@visionforsouls.org',
        contactPhone: '(770) 555-0102',
        needBy: new Date('2026-05-15'),
        status: 'active',
        resolved: false,
      },
    }),
    prisma.crisisNeed.create({
      data: {
        title: 'Elderly Support - Marietta',
        description: 'Elderly woman without family support needs meals, transportation to medical appointments, and wellness check-ins.',
        urgency: 'high',
        category: 'Medical',
        location: 'Marietta, GA',
        contactName: 'David Williams',
        contactEmail: 'care@bridgeoffaith.org',
        contactPhone: '(770) 555-0104',
        status: 'active',
        resolved: false,
      },
    }),
    prisma.crisisNeed.create({
      data: {
        title: 'Flood Relief - Multiple Families in Smyrna',
        description: 'Several families affected by flooding need cleaning supplies, clothing, and volunteers to help with cleanup.',
        urgency: 'urgent',
        category: 'Other',
        location: 'Smyrna, GA',
        contactName: 'Community Coordinator',
        contactEmail: 'relief@cobbchurch.org',
        contactPhone: '(770) 555-0100',
        needBy: new Date('2026-05-10'),
        status: 'active',
        resolved: false,
      },
    }),
  ])
  console.log(`✅ Created ${crisisNeeds.length} crisis needs`)

  // Create pastor stories
  const pastorStories = await Promise.all([
    prisma.pastorStory.create({
      data: {
        pastorName: 'Pastor Marcus D.',
        churchName: 'First Baptist Church',
        title: 'The Power of Partnership',
        slug: 'power-of-partnership',
        story: 'When we joined the Cobb Church Network, I didn\'t realize how much it would transform our ministry. We were struggling to meet the needs in our community alone. Through this network, we connected with other churches, shared resources, and together we\'ve been able to impact hundreds of families. Unity isn\'t just a concept anymore—it\'s our reality.',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop',
        videoUrl: 'https://youtube.com/watch?v=example1',
        featured: true,
        published: true,
      },
    }),
    prisma.pastorStory.create({
      data: {
        pastorName: 'Pastor Marie S.',
        churchName: 'New Hope Church',
        title: 'Stronger Together',
        slug: 'stronger-together',
        story: 'As a smaller church, we often felt isolated. The Cobb Church Network changed everything. Now we have partners in ministry, access to resources we never had before, and most importantly, genuine relationships with other pastors who understand the journey. We\'re not just surviving—we\'re thriving.',
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=600&fit=crop',
        videoUrl: 'https://youtube.com/watch?v=example2',
        featured: true,
        published: true,
      },
    }),
    prisma.pastorStory.create({
      data: {
        pastorName: 'Pastor James L.',
        churchName: 'Living Word Church',
        title: 'Impacting Our Community',
        slug: 'impacting-community',
        story: 'The crisis response system has been a game-changer. When a family in our area lost everything in a fire, we were able to mobilize multiple churches within hours. What used to take days or weeks now happens in real-time. This is what the body of Christ is supposed to look like.',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&h=600&fit=crop',
        videoUrl: 'https://youtube.com/watch?v=example3',
        featured: true,
        published: true,
      },
    }),
  ])
  console.log(`✅ Created ${pastorStories.length} pastor stories`)

  console.log('🎉 Seed completed successfully!')
  console.log('\n📊 Summary:')
  console.log(`   - ${churches.length} churches`)
  console.log(`   - ${events.length} events`)
  console.log(`   - ${resources.length} resources`)
  console.log(`   - ${crisisNeeds.length} crisis needs`)
  console.log(`   - ${pastorStories.length} pastor stories`)
  console.log(`   - 1 admin user (admin@cobbchurch.org / admin123)`)
}

main()
  .catch((e) => {
    console.error('❌ Seed failed:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
