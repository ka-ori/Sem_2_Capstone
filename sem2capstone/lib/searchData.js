// lib/searchData.js
import { generateMoreItems } from './blogData';

const aboutPageData = [
  { 
    id: 'about-1', 
    title: 'Our Mission', 
    content: "We believe in the power of collective giving to transform lives and communities. Our platform makes it easy for donors to find and support verified causes that align with their values. Through transparency, efficiency, and innovation, we're building a world where giving has maximum impact.", 
    url: '/about#mission', 
    page: 'About Us' 
  },
  { 
    id: 'about-2', 
    title: 'Our Impact', 
    content: "Since our founding, we've facilitated millions in donations to verified charities worldwide. Our platform has connected thousands of donors with causes they care about. $10M+ Donations Facilitated, 1000+ Verified Charities, 50K+ Active Donors, 100+ Countries Reached.", 
    url: '/about#impact', 
    page: 'About Us' 
  },
  { 
    id: 'about-3', 
    title: 'Our Values', 
    content: "Compassion, Transparency, and Integrity. We believe in empathy, maintain complete openness, and uphold the highest ethical standards.", 
    url: '/about#values', 
    page: 'About Us' 
  },
  { 
    id: 'about-4', 
    title: 'Our Leadership Team', 
    content: "Meet our leaders: Michael Lee, Sarah Hyland, Emma Watt, and Donald Trump. They guide our mission with their expertise and passion.", 
    url: '/about#leadership', 
    page: 'About Us' 
  },
];

const donatePageData = [
    {
        id: 'donate-1',
        title: 'Ways to Give & Giving Programs',
        content: 'Monthly Giving Program, Corporate Partnerships, Legacy Giving, Wildlife Conservation, Emergency Relief. Make a lasting impact with recurring monthly donations.',
        url: '/donate#giving-options',
        page: 'Donate'
    },
    {
        id: 'donate-2',
        title: 'Frequently Asked Questions (FAQ)',
        content: 'How do I start a monthly donation? Can I change my donation amount? Is my donation tax-deductible? How do I cancel my recurring donation?',
        url: '/donate#faq',
        page: 'Donate'
    }
];

// Generate 100 blog posts to make them searchable
const blogPosts = generateMoreItems(0, 100); 
const blogPageData = blogPosts.map(post => ({
  id: `blog-${post.id}`,
  title: post.title,
  content: post.description + ' ' + post.fullContent.intro + ' ' + post.fullContent.sections.map(s => s.content).join(' '),
  url: `/blog/${post.id}`,
  page: 'blog'
}));

export const searchData = [...aboutPageData, ...donatePageData, ...blogPageData];