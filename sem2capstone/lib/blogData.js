

const categories = ["Impact", "Education", "Health", "Environment"];
const titles = [
  "Clean Water Initiative", "School Building Project", "Mobile Health Clinic", "Tree Planting Drive",
  "Scholarship Program", "Community Garden", "Medical Equipment Fund", "Solar Panel Installation",
  "Literacy Campaign", "Food Distribution", "Wildlife Protection", "Disaster Relief Fund",
  "Youth Mentorship", "Senior Care Program", "Environmental Cleanup", "Emergency Shelter"
];

const descriptions = [
  "Making a lasting impact in communities through sustainable solutions.",
  "Empowering future generations with access to quality education and resources.",
  "Providing essential healthcare services to underserved populations.",
  "Protecting our planet for future generations through environmental action.",
  "Creating opportunities for growth and development in local communities.",
  "Building stronger, more resilient communities through collaborative efforts."
];

const images = [
  "https://images.unsplash.com/photo-1541919329513-35f7af297129?w=400&h=250&fit=crop",
  "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400&h=250&fit=crop",
  "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250&fit=crop",
  "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=250&fit=crop",
  "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=250&fit=crop",
  "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=400&h=250&fit=crop",
  "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=400&h=250&fit=crop",
  "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=400&h=250&fit=crop"
];

const fullContent = [
  {
    intro: "Access to clean water is a fundamental human right, yet millions of people worldwide still lack this basic necessity. Our Clean Water Initiative is working to change this reality.",
    sections: [
      { heading: "The Problem", content: "In many rural communities, families must walk hours each day to collect water that may not even be safe to drink. This burden often falls on women and children, preventing them from attending school or pursuing economic opportunities." },
      { heading: "Our Solution", content: "We partner with local communities to build sustainable water infrastructure including wells, filtration systems, and rainwater harvesting solutions. Each project is designed to serve the community for decades to come." },
      { heading: "Impact So Far", content: "Since launching this initiative, we've provided clean water access to over 15,000 people across 23 communities. The health improvements and educational opportunities that follow are transformative." }
    ]
  },
  {
    intro: "Education is the foundation of progress, and every child deserves access to quality learning environments. Our School Building Project creates safe, modern spaces for learning.",
    sections: [
      { heading: "Building for the Future", content: "Each school we build is designed with input from the local community, ensuring it meets their specific needs while incorporating modern educational best practices." },
      { heading: "More Than Just Buildings", content: "Our projects include teacher training programs, educational materials, and ongoing support to ensure these schools continue to thrive long after construction is complete." },
      { heading: "Community Transformation", content: "New schools don't just educate children – they become community centers that bring people together and serve as catalysts for broader development." }
    ]
  }
];


export const generateMoreItems = (startIndex, count) => {
  return Array.from({ length: count }, (_, i) => {
    const index = startIndex + i;
    const contentIndex = index % fullContent.length;
    

    const total = 50000 + ((index * 1234) % 20000);
    const current = 5000 + ((index * 5678) % 40000);

    return {
      id: `project-${index}`,
      title: `${titles[index % titles.length]} ${Math.floor(index / titles.length) + 1}`,
      description: descriptions[index % descriptions.length],
      image: images[index % images.length],
      badge: categories[index % categories.length],
      progress: { 
        current: Math.min(current, total), 
        total: total 
      },
      fullContent: fullContent[contentIndex],
      author: "Community Impact Team",
      
      date: new Date(Date.now() - (index * 17 * 24 * 60 * 60 * 1000)).toISOString(),
     
      readTime: ((index * 3) % 5) + 3 
    };
  });
};

export const getPostById = (id) => {
  const idNumber = parseInt(id.replace('project-', ''), 10);
  if (isNaN(idNumber)) return null;
  return generateMoreItems(idNumber, 1)[0];
};
