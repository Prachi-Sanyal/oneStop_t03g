import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './BlogPage.css'; // Import your CSS file

const blogPosts = [
  {
    id: 1,
    category: 'Corporate',
    image: 'https://via.placeholder.com/300x200', // Replace with your image URL
    title: 'Boost Employee Engagement with Fun Team-Building Activities',
    excerpt: 'Discover creative ways to break the ice, foster teamwork, and motivate your employees.',
  },
  {
    id: 2,
    category: 'Corporate',
    image: 'https://via.placeholder.com/300x200', // Replace with your image URL
    title: 'Mastering the Art of Corporate Presentations',
    excerpt: 'Learn effective techniques to deliver impactful presentations that captivate your audience.',
  },
  {
    id: 3,
    category: 'Cultural',
    image: 'https://via.placeholder.com/300x200', // Replace with your image URL
    title: 'Explore Diverse Cultural Events in Your City',
    excerpt: 'Broaden your horizons and expand your cultural understanding with exciting events.',
  },
  {
    id: 4,
    category: 'Cultural',
    image: 'https://via.placeholder.com/300x200', // Replace with your image URL
    title: 'Celebrate Cultural Traditions Around the World',
    excerpt: 'Immerse yourself in the rich tapestry of cultures through vibrant festivals and gatherings.',
  },
  {
    id: 5,
    category: 'Wedding',
    image: 'https://via.placeholder.com/300x200', // Replace with your image URL
    title: 'Planning the Perfect Dream Wedding',
    excerpt: 'Turn your vision into reality with expert tips and inspiration for unforgettable weddings.',
  },
  {
    id: 6,
    category: 'Wedding',
    image: 'https://via.placeholder.com/300x200', // Replace with your image URL
    title: 'Wedding Trends: What\'s Hot and Happening',
    excerpt: 'Stay ahead of the curve and discover the latest trends that are transforming wedding celebrations.',
  },
  {
    id: 7,
    category: 'Party and Celebration',
    image: 'https://via.placeholder.com/300x200', // Replace with your image URL
    title: 'Throwing the Ultimate Party: Tips for All Occasions',
    excerpt: 'Transform any gathering into an unforgettable experience with these fun and creative ideas.',
  },
  {
    id: 8,
    category: 'Party and Celebration',
    image: 'https://via.placeholder.com/300x200', // Replace with your image URL
    title: 'Themed Parties that Wow: Get Inspired',
    excerpt: 'Explore unique themes, decorations, and activities to create a party that\'s truly memorable.',
  },
];

const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredPosts = blogPosts.filter(post => {
    if (selectedCategory === 'all') return true;
    return post.category === selectedCategory;
  });

  return (
    <div className="blog-page">
      <Banner />
      <div className="blog-card-container">
        {filteredPosts.map(post => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
      <Sidebar selectedCategory={selectedCategory} onCategoryChange={setSelectedCategory} />
    </div>
  );
};

const Banner = () => {
  return (
    <div className="banner">
      {/* Your banner image */}
      Inspire your next event.
    </div>
  );
};


const BlogCard = ({ post }) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const handleOpenPost = () => {
    // Implement logic to open the full blog post on a new page (e.g., using React Router)
    navigate(`/blog/${post.id}`);

    //console.log(`Opening blog post with ID: ${post.id}`);
  };

  const cardStyles = {
    transform: isHovered ? 'scale(1.02) translateY(-3px)' : 'none',
    boxShadow: isHovered ? '0px 3px 6px rgba(0, 0, 0, 0.1)' : 'none',
  };

  return (
    <div className="blog-card" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={cardStyles} onClick={handleOpenPost}>
      <div className="blog-card-image" style={{ backgroundImage: `url(${post.image})` }}>
        <span className="category-tag">{post.category}</span>
      </div>
      <div className="blog-card-content">
        <h3 className="blog-card-title">{post.title}</h3>
        <p className="blog-card-excerpt">{post.excerpt}</p>
        <button className="read-more-button">Read More</button>
      </div>
    </div>
  );
};

const Sidebar = ({ selectedCategory, onCategoryChange }) => {
  const categories = ['all', 'Cultural', 'Corporate', 'Wedding', 'Party and Celebration'];

  return (
    <div className="sidebar">
      {/* Search bar */} Search for: 
      <div className="categories">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={category === selectedCategory ? 'active' : ''}
          >
            {category}
          </button>
        ))}
      </div>
    </div>

/*const BlogPage = () => {
  return (
    <div className="blog-page">
      <div className="blog-card-container">
        {blogPosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>*/
  );
};

export default BlogPage;
