"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import styles from "./style.module.scss";
import { NewsArticle } from "@/components/NewsGrid";

// All articles data - same as in updates page
const ALL_ARTICLES: NewsArticle[] = [
  {
    id: "1",
    slug: "konga-fm-launches-new-morning-show",
    category: "News",
    title: "Konga FM Launches Exciting New Morning Show",
    excerpt:
      "Discover the latest additions to our radio lineup with dynamic hosts and engaging content.",
    date: "Mar 10, 2026",
    readTime: "5 mins read",
    imageUrl: "/morningInspiration.png",
  },
  {
    id: "2",
    slug: "behind-the-scenes-kongafm-studios",
    category: "News",
    title: "Behind the Scenes: Inside Our State-of-the-Art Studios",
    excerpt:
      "Get an exclusive look at the cutting-edge technology powering Konga Communications.",
    date: "Mar 8, 2026",
    readTime: "4 mins read",
    imageUrl: "/kongaDeals.png",
  },
  {
    id: "3",
    slug: "entrepreneur-showcase-success-stories",
    category: "News",
    title: "The Entrepreneur: Celebrating Nigeria's Business Leaders",
    excerpt:
      "Meet the visionaries transforming Nigeria's business landscape through innovation.",
    date: "Mar 5, 2026",
    readTime: "6 mins read",
    imageUrl: "/theScoop.png",
  },
  {
    id: "4",
    slug: "travel-essentials-adventure-guide",
    category: "Blogs",
    title: "Travel Essentials: Your Complete Adventure Guide",
    excerpt:
      "Expert tips and tricks to make your next journey seamless and unforgettable.",
    date: "Mar 3, 2026",
    readTime: "7 mins read",
    imageUrl: "/cruiseControl.png",
  },
  {
    id: "5",
    slug: "health-wellness-expert-interview",
    category: "Blogs",
    title: "Health & Wellness: Expert Interview Series",
    excerpt:
      "Learn from top health professionals about living your best, healthiest life.",
    date: "Feb 28, 2026",
    readTime: "5 mins read",
    imageUrl: "/healthCheck.png",
  },
  {
    id: "6",
    slug: "creative-minds-digital-innovation",
    category: "Updates",
    title: "Creative Minds: Digital Innovation in Nigeria",
    excerpt:
      "Spotlight on creators and influencers shaping the future of digital media.",
    date: "Feb 25, 2026",
    readTime: "4 mins read",
    imageUrl: "/beyondHeadlines.png",
  },
  {
    id: "7",
    slug: "music-festival-lineup-announcement",
    category: "News",
    title: "Exclusive: Music Festival Lineup Announcement",
    excerpt:
      "Get ready for the biggest music event of the year with incredible artists.",
    date: "Feb 22, 2026",
    readTime: "3 mins read",
    imageUrl: "/morningInspiration.png",
  },
  {
    id: "8",
    slug: "tech-startup-interview-founder-story",
    category: "News",
    title: "Tech Startup Interview: From Idea to Impact",
    excerpt:
      "An inspiring conversation with the founder of Nigeria's fastest-growing tech company.",
    date: "Feb 20, 2026",
    readTime: "6 mins read",
    imageUrl: "/kongaDeals.png",
  },
  {
    id: "9",
    slug: "sustainable-fashion-trend-report",
    category: "Blogs",
    title: "Sustainable Fashion: Trends for 2026",
    excerpt:
      "Discover how eco-friendly fashion is revolutionizing the industry in Africa.",
    date: "Feb 18, 2026",
    readTime: "5 mins read",
    imageUrl: "/theScoop.png",
  },
  {
    id: "10",
    slug: "fitness-transformation-success-stories",
    category: "Blogs",
    title: "Fitness Transformation: Real Stories of Change",
    excerpt:
      "Inspiring journeys from everyday people who transformed their lives.",
    date: "Feb 15, 2026",
    readTime: "7 mins read",
    imageUrl: "/cruiseControl.png",
  },
  {
    id: "11",
    slug: "business-podcast-series-launch",
    category: "Updates",
    title: "New Business Podcast Series Launches on Konga FM",
    excerpt:
      "Meet the entrepreneurs reshaping Africa's business landscape weekly.",
    date: "Feb 12, 2026",
    readTime: "3 mins read",
    imageUrl: "/healthCheck.png",
  },
  {
    id: "12",
    slug: "celebrity-interview-exclusive-chat",
    category: "News",
    title: "Exclusive Celebrity Interview: Behind the Scenes",
    excerpt:
      "A candid conversation with one of Nigeria's biggest entertainment stars.",
    date: "Feb 10, 2026",
    readTime: "5 mins read",
    imageUrl: "/beyondHeadlines.png",
  },
];

// Full article content map
const ARTICLE_CONTENT: Record<string, string> = {
  "konga-fm-launches-new-morning-show": `Konga FM 103.7 is thrilled to announce the launch of an exciting new morning show that promises to revolutionize your daily radio experience. This groundbreaking program brings together some of the most dynamic and engaging hosts in the industry.

The new morning show features an innovative format that blends entertainment, information, and interactive segments designed to keep you entertained from sunrise to mid-morning. With cutting-edge production techniques and a commitment to delivering quality content, this show sets a new standard for morning radio broadcasting.

Our team of experienced hosts brings a wealth of expertise and genuine passion for connecting with listeners. They understand what makes for compelling radio and are dedicated to creating an atmosphere where listeners feel heard, valued, and entertained.

The show includes a variety of segments including news updates, entertainment interviews, music selections, and interactive games. Listeners can call in, text, or engage through social media to be part of the conversation.

We're confident that this new addition to our lineup will quickly become your go-to source for morning entertainment and information. Tune in daily and discover why Konga FM continues to be Nigeria's leading voice in entertainment and lifestyle radio.`,

  "behind-the-scenes-kongafm-studios": `Have you ever wondered what happens behind the scenes at Konga FM? Our state-of-the-art studios represent the pinnacle of modern broadcasting technology, and we're excited to give you an exclusive look at what makes our operation unique.

Located in the heart of Lagos, our broadcasting complex spans multiple floors and features cutting-edge equipment that rivals international standards. From soundproofing systems to digital mixing consoles, every aspect of our studio has been carefully designed and implemented.

Our technical team is comprised of highly skilled professionals who ensure that every broadcast meets the highest quality standards. These experts work tirelessly behind the scenes, managing everything from audio levels to technical coordination between different broadcast segments.

The studio design incorporates elements that both enhance functionality and create an inspiring environment for our on-air talents. Natural lighting, ergonomic workstations, and a vibrant atmosphere all contribute to the energy you hear when tuning into Konga FM.

Beyond just equipment, our studios are spaces of creativity and innovation. Hosts, producers, and technicians collaborate daily to bring you the best content possible. The open layout encourages communication and creative collaboration, resulting in the fresh, dynamic programming you've come to expect from us.`,

  "entrepreneur-showcase-success-stories": `Nigeria's entrepreneurial landscape is thriving, and Konga Communications is proud to showcase the remarkable stories of business leaders who are transforming our nation's economy. Through our various platforms, we celebrate those who dare to dream and turn their visions into reality.

From tech startups disrupting traditional industries to established businesses expanding their reach, Nigerian entrepreneurs continue to prove their mettle on both continental and global stages. These men and women embody resilience, innovation, and an unwavering commitment to excellence.

The Entrepreneur initiative on Konga 103.7FM provides a dedicated platform where business leaders can share their journeys, insights, and lessons learned. Listeners get unfiltered access to real stories of struggle, growth, and success from people who understand the Nigerian business environment.

What makes these entrepreneurs special is not just their financial success, but their impact on society. Many use their platforms to create employment, transfer knowledge, and mentor the next generation of business leaders. Their stories inspire hope and demonstrate what's possible when talent meets determination.

We believe in amplifying these voices and creating spaces where entrepreneurial wisdom can be shared and celebrated. Through features, interviews, and dedicated programming, we continue to highlight the stories that matter and the leaders who are shaping Nigeria's future.`,

  "travel-essentials-adventure-guide": `Travel is one of life's greatest adventures, but successful travel requires thoughtful preparation and essential knowledge. Whether you're a seasoned globetrotter or embarking on your first international journey, this comprehensive guide covers the essentials you need to know.

First and foremost, ensure your documentation is in order. A valid passport, necessary visas, and travel insurance are non-negotiable. Check expiration dates well in advance and understand the entry requirements for your destination.

Packing smartly can make or break your travel experience. Rather than overpacking, focus on versatile items that can be mixed and matched. Quality luggage, a good travel pillow, and organizational solutions keep things manageable and accessible.

Understanding local customs and basic language phrases shows respect and enriches your experience. Take time to research your destination's culture, etiquette, and practical information like currency exchange rates and local transportation options.

Health and safety should always be prioritized. Carry essential medications, know the location of medical facilities, and maintain awareness of your surroundings. Travel with purpose and mindfulness.

Finally, travel is as much about the journey as the destination. Leave room in your itinerary for spontaneity, meaningful connections with locals, and those unexpected moments that become your best travel stories. With proper planning and the right mindset, every journey becomes an unforgettable adventure.`,

  "health-wellness-expert-interview": `In an increasingly fast-paced world, prioritizing health and wellness has become more important than ever. We sat down with leading health experts to discuss the key principles and practices that lead to a healthier, happier life.

The experts emphasized that wellness is not just about physical health—it encompasses mental, emotional, and spiritual dimensions. True wellness comes from a holistic approach that addresses all these aspects of human wellbeing.

One consistent theme across our interviews was the importance of consistent, moderate exercise. Rather than extreme fitness regimens, the experts recommend finding activities you genuinely enjoy and can sustain long-term. Whether it's walking, dancing, yoga, or team sports, movement should be a regular part of your lifestyle.

Nutrition plays an equally crucial role. The experts stressed that diets don't work; sustainable eating habits do. Focus on whole foods, understand your body's nutritional needs, and develop a relationship with food based on nourishment rather than restriction.

Mental health is equally important as physical health. Stress management techniques like meditation, journaling, and therapy have proven benefits. The experts encouraged listeners to prioritize sleep, maintain healthy relationships, and engage in activities that bring joy and purpose.

Preventive care cannot be overlooked. Regular health check-ups, vaccinations, and staying informed about health matters can prevent serious issues down the line. Listen to your body and seek professional help when needed.

The overarching message: Health and wellness are journeys, not destinations. Small, consistent changes lead to significant long-term transformations.`,

  "creative-minds-digital-innovation": `The digital landscape in Nigeria is evolving rapidly, and at the forefront of this revolution are creative minds leveraging technology to push boundaries and create meaningful impact. These innovators are redefining what's possible in digital media and technology.

Content creators have emerged as powerful voices, building communities around their unique perspectives and talents. From YouTube creators to podcasters and social media influencers, these digital pioneers have democratized content creation and proven that quality and authenticity resonate with audiences.

Digital innovation extends beyond content. Entrepreneurs are building platforms, tools, and services that solve real problems in the Nigerian market. Tech startups are addressing challenges in education, finance, healthcare, and commerce through innovative digital solutions.

What unites these creative minds is a willingness to experiment, take risks, and adapt. They understand the power of digital platforms and use them not just for self-promotion, but to create value, educate, and inspire their audiences.

Collaboration is another key element. Many of Nigeria's most successful digital creators and innovators work together, cross-promote, and build ecosystems that elevate everyone involved.

The future of digital innovation in Nigeria looks incredibly bright. As more young people discover the possibilities of digital media and technology, we can expect even more groundbreaking ideas and transformative projects. These creative minds are not just following trends—they're setting them and inspiring the next generation to dream bigger.`,

  "music-festival-lineup-announcement": `Konga FM is excited to bring you the exclusive announcement of this year's biggest music festival. Featuring a stellar lineup of both established and emerging artists, this event promises to be an unforgettable celebration of music and culture.

The festival brings together talents from across the continent, creating a unique platform for musical exchange and cultural celebration. With multiple stages, interactive experiences, and exclusive performances, it's shaping up to be the event of the year.

Early bird tickets are already seeing high demand, and industry experts predict a sold-out show. Mark your calendars and join us for an incredible weekend of music, entertainment, and community.`,

  "tech-startup-interview-founder-story": `In this exclusive interview, we sit down with one of Nigeria's most innovative tech entrepreneurs to discuss their journey from a simple idea to building a multi-million naira company. Their story is a testament to perseverance, creativity, and the power of solving real problems.

The founder shares insights about overcoming early challenges, securing funding, building a talented team, and scaling operations across multiple markets. They discuss the importance of understanding local problems deeply and creating solutions that resonate with African users.

This is an inspiring story for anyone interested in entrepreneurship, tech innovation, or simply understanding how great ideas turn into thriving businesses.`,

  "sustainable-fashion-trend-report": `The fashion industry is undergoing a significant transformation as sustainability moves from niche to mainstream. African designers and fashion brands are leading the charge, creating beautiful, high-quality pieces while respecting the environment and supporting fair labor practices.

From upcycled materials to organic fabrics and innovative production techniques, sustainable fashion in Africa is anything but boring. Designers are proving that eco-conscious fashion can be stylish, affordable, and accessible to everyone.

Consumers are increasingly making conscious choices about what they wear, and brands that prioritize sustainability are building loyal communities. This report explores the trends shaping sustainable fashion in 2026 and the exciting opportunities ahead.`,

  "fitness-transformation-success-stories": `Real people. Real results. Real inspiration. These are the stories of individuals who took control of their health and transformed their lives through dedicated fitness journeys. Each story demonstrates that with the right mindset and support, anything is possible.

From weight loss to building strength, improving mobility, or simply finding joy in movement, these transformations go beyond physical changes. They're stories about self-discovery, confidence, and the power of consistency.

Whether you're at the beginning of your fitness journey or looking for motivation to continue, these stories will inspire you to take that first step toward becoming the best version of yourself.`,

  "business-podcast-series-launch": `Konga FM launches an exciting new podcast series dedicated to the entrepreneurs and business leaders shaping Africa's future. Each episode features candid conversations with successful business minds who share their experiences, lessons learned, and vision for the continent.

From startup founders to established business leaders, the series covers diverse industries and perspectives. Listeners will gain insights into business strategy, innovation, overcoming challenges, and building sustainable enterprises.

The podcast is now available on all major platforms. Subscribe to stay updated on new episodes and be part of the conversation about African business innovation.`,

  "celebrity-interview-exclusive-chat": `In this exclusive sit-down interview, we get an intimate look at the life, career, and aspirations of one of Nigeria's biggest entertainment personalities. Beyond the glamour and spotlight, discover the person behind the fame—their journey, challenges, and what drives them today.

The conversation covers their early days in the industry, breakthrough moments, memorable projects, and what's next on their horizon. It's a candid discussion that gives listeners rare insight into the entertainment world and one star's unique perspective on fame and success.

This is an interview you won't want to miss if you're interested in entertainment, inspiration, or simply getting to know one of the industry's most influential figures.`,
};

export default function ArticleDetailPage() {
  const params = useParams();
  const slug = params.slug as string;

  // Find current article
  const article = ALL_ARTICLES.find((a) => a.slug === slug);

  if (!article) {
    return (
      <main className={styles.articlePage}>
        <div className={styles.container}>
          <p>Article not found</p>
          <Link href="/updates">Back to Updates</Link>
        </div>
      </main>
    );
  }

  // Get related articles (same category, exclude current)
  const relatedArticles = ALL_ARTICLES.filter(
    (a) => a.category === article.category && a.slug !== slug
  ).slice(0, 8);

  const fullContent = ARTICLE_CONTENT[slug] || article.excerpt;

  return (
    <main className={styles.articlePage}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroWrapper}>
          {/* Left Column - Image + Info */}
          <div className={styles.imageColumn}>
            <div className={styles.imageWrapper}>
              <Image
                src={article.imageUrl}
                alt={article.title}
                fill
                style={{ objectFit: "cover" }}
                priority
              />
            </div>
            {/* Info below image */}
            <div className={styles.columnInfo}>
              <div className={styles.categoryTag}>
                <span className={styles.categoryDot}></span>
                <span className={styles.categoryText}>{article.category}</span>
              </div>
              <h1 className={styles.articleTitle}>{article.title}</h1>
              <div className={styles.metaInfo}>
                <span className={styles.date}>{article.date}</span>
                <span className={styles.bullet}>&bull;</span>
                <span className={styles.readTime}>{article.readTime}</span>
              </div>
            </div>

            {/* Article Content */}
            <article className={styles.articleContent}>
              {fullContent.split("\n\n").map((paragraph, index) => (
                <p key={index} className={styles.paragraph}>
                  {paragraph}
                </p>
              ))}
            </article>
          </div>

          {/* Right Column - Up Next */}
          <div className={styles.sidePanel}>
            {/* Up Next Card */}
            {relatedArticles.length > 0 && (
              <Link
                href={`/updates/${relatedArticles[0].slug}`}
                className={styles.upNextCard}
              >
                <div className={styles.upNextHeader}>
                  <span className={styles.upNextLabel}>Up Next</span>
                  <span className={styles.upNextArrow}>→</span>
                </div>
                <div className={styles.nextArticleImage}>
                  <Image
                    src={relatedArticles[0].imageUrl}
                    alt={relatedArticles[0].title}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className={styles.nextArticleInfo}>
                  <h3 className={styles.nextArticleTitle}>
                    {relatedArticles[0].title}
                  </h3>
                  <p className={styles.nextArticleCategory}>
                    {relatedArticles[0].category}
                  </p>
                </div>
              </Link>
            )}

            {/* Share Section */}
            <div className={styles.shareSection}>
              <p className={styles.shareTitle}>Share this article</p>
              <div className={styles.socialLinks}>
                <button className={styles.socialIcon} title="Facebook">
                  f
                </button>
                <button className={styles.socialIcon} title="Twitter">
                  𝕏
                </button>
                <button className={styles.socialIcon} title="LinkedIn">
                  in
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* More Articles Section */}
      {relatedArticles.length > 1 && (
        <section className={styles.moreArticlesSection}>
          <div className={styles.container}>
            <h2 className={styles.moreArticlesTitle}>
              More {article.category}
            </h2>
            <div className={styles.articlesGrid}>
              {relatedArticles.slice(1).map((related) => (
                <Link
                  key={related.id}
                  href={`/updates/${related.slug}`}
                  className={styles.articleCard}
                >
                  <div className={styles.cardImage}>
                    <Image
                      src={related.imageUrl}
                      alt={related.title}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div className={styles.cardContent}>
                    <h3 className={styles.cardTitle}>{related.title}</h3>
                    <div className={styles.cardMeta}>
                      <span>{related.date}</span>
                      <span>&bull;</span>
                      <span>{related.readTime}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Back Link */}
      <section className={styles.backSection}>
        <div className={styles.container}>
          <Link href="/updates" className={styles.backLink}>
            ← Back to Updates
          </Link>
        </div>
      </section>
    </main>
  );
}
