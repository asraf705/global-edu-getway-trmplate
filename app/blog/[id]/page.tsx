'use client'

import Link from 'next/link'
import LazyImage from '@/components/LazyImage'
import { motion } from 'framer-motion'
import { ArrowLeft, Calendar, Clock, User, Tag, Share2, BookOpen, ArrowRight } from 'lucide-react'

const blogData: { [key: string]: any } = {
  '1': {
    title: 'Top 10 Russian Universities for International Students',
    date: '2024-01-15',
    category: 'Universities',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1523059623039-a9ed027e7fad?w=1200&h=600&fit=crop',
    author: 'Dr. Mohammad Rahman',
    authorImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
    content: `
      <p class="text-xl text-gray-600 mb-6 font-medium">
        Russia is home to some of the world's most prestigious universities, offering exceptional educational opportunities 
        for international students. This comprehensive guide will help you discover the top institutions and understand 
        what makes them stand out.
      </p>
      
      <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Moscow State University</h2>
      <p class="mb-4">
        Ranked #74 globally, Moscow State University (MSU) is Russia's oldest and most prestigious institution. Founded in 1755, 
        MSU offers a wide range of programs in sciences, humanities, and professional fields. The university has produced numerous 
        Nobel Prize winners and is known for its excellent research facilities.
      </p>
      
      <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">2. St. Petersburg State University</h2>
      <p class="mb-4">
        Located in Russia's cultural capital, St. Petersburg State University ranks #242 globally. It's renowned for its 
        programs in humanities, sciences, and social sciences. The university has a rich history and beautiful campus facilities.
      </p>
      
      <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Novosibirsk State University</h2>
      <p class="mb-4">
        As a major scientific center, Novosibirsk State University ranks #246 globally. It's particularly strong in natural 
        sciences, mathematics, and technology. The university is located in Akademgorodok, a unique scientific town.
      </p>
      
      <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Admission Requirements</h2>
      <p class="mb-4">
        Most Russian universities require international students to submit academic transcripts, language proficiency certificates, 
        medical certificates, and a motivation letter. Some programs may require entrance exams or interviews.
      </p>
      
      <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Why Choose Russian Universities?</h2>
      <ul class="list-disc list-inside mb-4 space-y-2">
        <li>World-class education at affordable prices</li>
        <li>Globally recognized degrees</li>
        <li>Diverse range of programs</li>
        <li>Rich cultural experience</li>
        <li>Scholarship opportunities</li>
      </ul>
    `,
  },
  '2': {
    title: 'Complete Guide to Student Visa for Russia',
    date: '2024-01-10',
    category: 'Visa',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&h=600&fit=crop',
    author: 'Fatima Ahmed',
    authorImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face',
    content: `
      <p class="text-xl text-gray-600 mb-6 font-medium">
        Applying for a Russian student visa can seem complex, but with the right guidance, the process is straightforward. 
        This guide covers everything you need to know about obtaining your student visa.
      </p>
      
      <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Step 1: Receive Admission Letter</h2>
      <p class="mb-4">
        Before applying for a visa, you must first receive an official admission letter from a Russian university. This letter 
        confirms your acceptance and is required for the visa application.
      </p>
      
      <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Step 2: Gather Required Documents</h2>
      <p class="mb-4">
        You'll need the following documents for your visa application:
      </p>
      <ul class="list-disc list-inside mb-4 space-y-2">
        <li>Valid passport (minimum 18 months validity)</li>
        <li>Admission letter from Russian university</li>
        <li>Medical certificate</li>
        <li>HIV test certificate</li>
        <li>Passport photos</li>
        <li>Completed visa application form</li>
        <li>Proof of financial means</li>
      </ul>
      
      <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Step 3: Submit Application</h2>
      <p class="mb-4">
        Submit your application to the Russian consulate or visa center in your country. Processing typically takes 10-20 
        working days, so apply well in advance of your intended travel date.
      </p>
      
      <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Tips for Success</h2>
      <p class="mb-4">
        Ensure all documents are properly translated and notarized. Double-check all information for accuracy. Our team at 
        GlobalEdu Gateway can assist you throughout this process to ensure a smooth application.
      </p>
    `,
  },
  '3': {
    title: 'Living Costs in Russia: A Student\'s Budget Guide',
    date: '2024-01-05',
    category: 'Living',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&h=600&fit=crop',
    author: 'Rashid Khan',
    authorImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
    content: `
      <p class="text-xl text-gray-600 mb-6 font-medium">
        Understanding living costs is crucial for planning your study abroad journey. This comprehensive guide breaks down 
        all expenses you'll encounter as a student in Russia.
      </p>
      
      <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Accommodation Costs</h2>
      <p class="mb-4">
        University dormitories are the most affordable option, costing between $100-300 per month. Private apartments 
        range from $200-500 per month depending on location and amenities. Most universities provide dormitory accommodation 
        for international students.
      </p>
      
      <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Food Expenses</h2>
      <p class="mb-4">
        Monthly food costs typically range from $150-300. Cooking at home is more economical, while eating at university 
        cafeterias costs around $3-5 per meal. Restaurants range from $10-30 per meal.
      </p>
      
      <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Transportation</h2>
      <p class="mb-4">
        Public transportation is very affordable in Russia. Monthly passes cost around $20-30. Taxis and ride-sharing 
        services are also reasonably priced compared to Western countries.
      </p>
      
      <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Total Monthly Budget</h2>
      <p class="mb-4">
        A comfortable student lifestyle in Russia costs approximately $400-700 per month, including accommodation, food, 
        transportation, and entertainment. This is significantly lower than most Western countries.
      </p>
    `,
  },
  '4': {
    title: 'Scholarships Available for Bangladeshi Students in Russia',
    date: '2023-12-28',
    category: 'Scholarships',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&h=600&fit=crop',
    author: 'Dr. Mohammad Rahman',
    authorImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
    content: `
      <p class="text-xl text-gray-600 mb-6 font-medium">
        There are numerous scholarship opportunities available for Bangladeshi students wishing to study in Russia. 
        This guide covers all available options and how to apply.
      </p>
      
      <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Russian Government Scholarships</h2>
      <p class="mb-4">
        The Russian government offers full scholarships covering tuition fees, accommodation, and monthly stipends for 
        outstanding international students. These scholarships are highly competitive and require excellent academic records.
      </p>
      
      <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">University Scholarships</h2>
      <p class="mb-4">
        Many Russian universities offer merit-based scholarships and financial aid programs. These can cover partial or 
        full tuition fees based on academic performance and entrance exam results.
      </p>
      
      <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">How to Apply</h2>
      <p class="mb-4">
        Scholarship applications typically require academic transcripts, recommendation letters, motivation letters, and 
        sometimes entrance exam scores. Our team can help you identify suitable scholarships and prepare your application.
      </p>
    `,
  },
  '5': {
    title: 'Why Study Medicine in Russia?',
    date: '2023-12-20',
    category: 'Courses',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=1200&h=600&fit=crop',
    author: 'Fatima Ahmed',
    authorImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face',
    content: `
      <p class="text-xl text-gray-600 mb-6 font-medium">
        Russia is one of the most popular destinations for medical education among international students. Here's why 
        studying medicine in Russia is an excellent choice.
      </p>
      
      <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Globally Recognized Degrees</h2>
      <p class="mb-4">
        Russian medical degrees are recognized by WHO, UNESCO, and medical councils worldwide. Graduates can practice 
        medicine in many countries after completing necessary licensing exams.
      </p>
      
      <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Affordable Tuition</h2>
      <p class="mb-4">
        Medical education in Russia costs significantly less than in Western countries. Annual tuition ranges from 
        $3,000-8,000, making it accessible to students from various economic backgrounds.
      </p>
      
      <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Excellent Clinical Training</h2>
      <p class="mb-4">
        Russian medical universities provide extensive clinical training with hands-on experience in modern hospitals. 
        Students gain practical skills from early years of study.
      </p>
      
      <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">English Medium Programs</h2>
      <p class="mb-4">
        Many universities offer MBBS programs in English, making it easier for international students. However, learning 
        Russian is beneficial for clinical practice and daily life.
      </p>
    `,
  },
  '6': {
    title: 'Russian Language Learning Tips for International Students',
    date: '2023-12-15',
    category: 'Language',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=1200&h=600&fit=crop',
    author: 'Rashid Khan',
    authorImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
    content: `
      <p class="text-xl text-gray-600 mb-6 font-medium">
        Learning Russian can enhance your study abroad experience significantly. Here are practical tips to help you 
        master the language quickly.
      </p>
      
      <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Start Early</h2>
      <p class="mb-4">
        Begin learning Russian before arriving in Russia. Use language learning apps, online courses, or find a tutor. 
        Even basic knowledge will help you adapt faster.
      </p>
      
      <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Practice Daily</h2>
      <p class="mb-4">
        Consistency is key. Practice speaking, listening, reading, and writing daily. Join language exchange programs 
        or find Russian-speaking friends.
      </p>
      
      <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Immerse Yourself</h2>
      <p class="mb-4">
        Once in Russia, immerse yourself in the language. Watch Russian TV, listen to Russian music, and try to 
        communicate in Russian as much as possible.
      </p>
      
      <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Take Language Courses</h2>
      <p class="mb-4">
        Most universities offer Russian language courses for international students. These courses are often included 
        in your program or available at additional cost.
      </p>
    `,
  },
  '7': {
    title: 'Student Life in Moscow: What to Expect',
    date: '2023-12-10',
    category: 'Living',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1513326738677-b964603b136d?w=1200&h=600&fit=crop',
    author: 'Dr. Mohammad Rahman',
    authorImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
    content: `
      <p class="text-xl text-gray-600 mb-6 font-medium">
        Moscow offers an exciting and vibrant student life. Discover what to expect when studying in Russia's capital city.
      </p>
      
      <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Accommodation</h2>
      <p class="mb-4">
        Most universities provide dormitory accommodation for international students. Dormitories are affordable and 
        offer a great opportunity to meet students from around the world.
      </p>
      
      <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Transportation</h2>
      <p class="mb-4">
        Moscow has an excellent metro system that's both affordable and efficient. The metro is a work of art itself, 
        with beautiful stations throughout the city.
      </p>
      
      <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Culture & Entertainment</h2>
      <p class="mb-4">
        Moscow is rich in culture with numerous museums, theaters, parks, and cultural events. Students can enjoy 
        discounted tickets to many attractions.
      </p>
      
      <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Food & Dining</h2>
      <p class="mb-4">
        From affordable university cafeterias to diverse restaurants, Moscow offers various dining options. You can 
        find cuisine from around the world alongside traditional Russian food.
      </p>
    `,
  },
  '8': {
    title: 'How to Choose the Right University in Russia',
    date: '2023-12-05',
    category: 'Universities',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1523059623039-a9ed027e7fad?w=1200&h=600&fit=crop&sig=2',
    author: 'Fatima Ahmed',
    authorImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face',
    content: `
      <p class="text-xl text-gray-600 mb-6 font-medium">
        Choosing the right university is crucial for your academic and career success. Here's a comprehensive guide 
        to help you make the best decision.
      </p>
      
      <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Consider Rankings</h2>
      <p class="mb-4">
        Check global and national university rankings. However, don't rely solely on rankings - consider other factors 
        like program quality, faculty, and facilities.
      </p>
      
      <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Program Quality</h2>
      <p class="mb-4">
        Research the specific program you're interested in. Look at curriculum, faculty qualifications, research 
        opportunities, and graduate outcomes.
      </p>
      
      <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Location</h2>
      <p class="mb-4">
        Consider the city where the university is located. Think about climate, cost of living, cultural opportunities, 
        and proximity to home.
      </p>
      
      <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Cost & Scholarships</h2>
      <p class="mb-4">
        Evaluate tuition fees, living costs, and available scholarships. Some universities offer more financial aid 
        than others.
      </p>
      
      <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Career Opportunities</h2>
      <p class="mb-4">
        Consider the university's connections with employers, internship opportunities, and career services. This can 
        significantly impact your future career prospects.
      </p>
    `,
  },
}

const relatedPosts = [
  { id: 3, title: 'Living Costs in Russia', category: 'Living', image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop' },
  { id: 4, title: 'Scholarships for Bangladeshi Students', category: 'Scholarships', image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=400&h=300&fit=crop' },
  { id: 5, title: 'Why Study Medicine in Russia?', category: 'Courses', image: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=400&h=300&fit=crop' },
]

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const post = blogData[params.id] || {
    title: 'Complete Guide to Studying in Russia for International Students',
    date: '2024-01-15',
    category: 'General',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1523059623039-a9ed027e7fad?w=1200&h=600&fit=crop',
    author: 'Dr. Mohammad Rahman',
    authorImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
    content: `
      <p class="text-xl text-gray-600 mb-6 font-medium">
        Russia offers exceptional educational opportunities for international students, with world-class universities, 
        affordable tuition fees, and globally recognized degrees. This comprehensive guide will help you understand 
        everything you need to know about studying in Russia.
      </p>
      
      <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Why Choose Russia for Higher Education?</h2>
      <p class="mb-4">
        Russia is home to some of the world's most prestigious universities, many of which rank among the top 
        institutions globally. The country has a long-standing tradition of academic excellence, particularly 
        in fields like medicine, engineering, science, and technology.
      </p>
      
      <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Top Universities in Russia</h2>
      <p class="mb-4">
        Russia boasts several world-renowned universities. Moscow State University, ranked #74 globally, is one of 
        the oldest and most prestigious institutions.
      </p>
      
      <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Application Process</h2>
      <p class="mb-4">
        The application process for Russian universities typically involves submitting academic transcripts, 
        language proficiency certificates, medical certificates, and a motivation letter.
      </p>
    `,
  }

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <Link
            href="/blog"
            className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Blog
          </Link>
        </motion.div>

        {/* Article */}
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl shadow-md overflow-hidden mb-12"
        >
          {/* Hero Image */}
          <div className="relative aspect-video w-full">
            <LazyImage
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
            <div className="absolute bottom-6 left-6 right-6 z-20">
              <span className="bg-primary-500 text-white px-4 py-2 rounded-full text-sm font-semibold inline-block mb-4">
                {post.category}
              </span>
            </div>
          </div>
          
          {/* Content */}
          <div className="p-8 md:p-12">
            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-6">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </div>
              <span>•</span>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                {post.readTime}
              </div>
              <span>•</span>
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2" />
                {post.author}
              </div>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {post.title}
            </h1>

            {/* Author Card */}
            <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg mb-8">
              <div className="w-12 h-12 relative rounded-full overflow-hidden">
                <LazyImage
                  src={post.authorImage}
                  alt={post.author}
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <div>
                <div className="font-semibold text-gray-900">{post.author}</div>
                <div className="text-sm text-gray-600">Education Expert</div>
              </div>
            </div>

            {/* Article Content */}
            <div 
              className="prose prose-lg max-w-none text-gray-700"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Share Section */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <span className="text-gray-600 font-medium">Share this article:</span>
                  <button className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors">
                    <Share2 className="w-5 h-5 text-gray-600" />
                  </button>
                </div>
                <Link
                  href="/apply"
                  className="flex items-center text-primary-600 hover:text-primary-700 font-semibold"
                >
                  Ready to Apply?
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </motion.article>

        {/* Related Posts */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {relatedPosts.map((relatedPost, index) => (
              <motion.div
                key={relatedPost.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={`/blog/${relatedPost.id}`}>
                  <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow overflow-hidden group">
                    <div className="relative aspect-video overflow-hidden">
                      <LazyImage
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute top-2 left-2 z-20">
                        <span className="bg-primary-500 text-white px-2 py-1 rounded text-xs font-semibold">
                          {relatedPost.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-gray-900 group-hover:text-primary-600 transition-colors line-clamp-2">
                        {relatedPost.title}
                      </h3>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl p-8 text-white text-center"
        >
          <BookOpen className="w-12 h-12 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-2">Ready to Start Your Journey?</h2>
          <p className="text-primary-100 mb-6">Let us help you achieve your dream of studying in Russia.</p>
          <Link
            href="/apply"
            className="inline-flex items-center bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Apply Now
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </div>
  )
}

