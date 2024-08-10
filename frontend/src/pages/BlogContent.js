import React from 'react';
import { useParams } from 'react-router-dom';
import './BlogContent.css';

const blogPosts = [
    {
      id: 1,
      category: 'Corporate',
      image: 'https://via.placeholder.com/300x200', // Replace with your image URL
      title: 'Boost Employee Engagement with Fun Team-Building Activities',
      excerpt: 'Discover creative ways to break the ice, foster teamwork, and motivate your employees.',
      content: `
        <h2 id="introduction">Introduction</h2>
        <p>In the fast-paced world of corporate environments, maintaining employee engagement is crucial. Team-building activities provide a refreshing break from routine work and can significantly enhance team cohesion and productivity.</p>
        
        <h2 id="ice-breaker-games">Ice-Breaker Games</h2>
        <p>Start with simple ice-breaker games that encourage interaction. Games like Two Truths and a Lie or Human Bingo can help employees get to know each other in a relaxed setting.</p>
        
        <h2 id="creative-team-challenges">Creative Team Challenges</h2>
        <p>Move on to creative challenges such as Escape Rooms or Scavenger Hunts. These activities not only promote teamwork but also stimulate problem-solving and creativity.</p>
        
        <h2 id="outdoor-adventures">Outdoor Adventures</h2>
        <p>Consider organizing outdoor adventures like obstacle courses or adventure racing. These activities are not only fun but also build resilience and trust among team members.</p>
        
        <h2 id="conclusion">Conclusion</h2>
        <p>Incorporating diverse team-building activities can lead to a more motivated and cohesive workforce. Experiment with different types of activities to find what resonates best with your team.</p>
      `
    },
    {
      id: 2,
      category: 'Corporate',
      image: 'https://via.placeholder.com/300x200', // Replace with your image URL
      title: 'Mastering the Art of Corporate Presentations',
      excerpt: 'Learn effective techniques to deliver impactful presentations that captivate your audience.',
      content: `
        <h2 id="introduction">Introduction</h2>
        <p>Delivering a compelling corporate presentation is both an art and a science. Effective presentations can persuade, inform, and inspire your audience.</p>
        
        <h2 id="structuring-your-presentation">Structuring Your Presentation</h2>
        <p>Begin by outlining a clear structure: Introduction, Body, and Conclusion. Start with a strong opening to grab attention, followed by well-organized content, and finish with a memorable conclusion.</p>
        
        <h2 id="designing-visual-aids">Designing Visual Aids</h2>
        <p>Use visual aids effectively. Incorporate graphs, charts, and images to illustrate key points. Keep slides uncluttered and ensure text is readable from a distance.</p>
        
        <h2 id="engaging-the-audience">Engaging the Audience</h2>
        <p>Interactive elements like Q&A sessions or live polls can keep the audience engaged. Encourage participation and address questions promptly to maintain interest.</p>
        
        <h2 id="conclusion">Conclusion</h2>
        <p>Practice your delivery and refine your content to enhance your presentation skills. Remember, a well-prepared and engaging presentation can leave a lasting impact.</p>
      `
    },
    {
      id: 3,
      category: 'Cultural',
      image: 'https://via.placeholder.com/300x200', // Replace with your image URL
      title: 'Explore Diverse Cultural Events in Your City',
      excerpt: 'Broaden your horizons and expand your cultural understanding with exciting events.',
      content: `
        <h2 id="introduction">Introduction</h2>
        <p>Cities are melting pots of cultures, offering a variety of cultural events that reflect their vibrant communities. Exploring these events can be both educational and entertaining.</p>
        
        <h2 id="local-festivals">Local Festivals</h2>
        <p>Attend local festivals that celebrate traditions, arts, and cuisine. Festivals like food fairs, music events, and art exhibitions offer a glimpse into different cultures.</p>
        
        <h2 id="cultural-workshops">Cultural Workshops</h2>
        <p>Participate in workshops that teach traditional crafts, cooking, or dance. These hands-on experiences provide deeper insights into cultural practices.</p>
        
        <h2 id="museum-and-gallery-visits">Museum and Gallery Visits</h2>
        <p>Explore museums and galleries that showcase local and international art and history. These visits can broaden your understanding of cultural heritage.</p>
        
        <h2 id="conclusion">Conclusion</h2>
        <p>By immersing yourself in diverse cultural events, you enrich your own cultural knowledge and contribute to the celebration of community diversity.</p>
      `
    },
    {
      id: 4,
      category: 'Cultural',
      image: 'https://via.placeholder.com/300x200', // Replace with your image URL
      title: 'Celebrate Cultural Traditions Around the World',
      excerpt: 'Immerse yourself in the rich tapestry of cultures through vibrant festivals and gatherings.',
      content: `
        <h2 id="introduction">Introduction</h2>
        <p>Cultural traditions are a reflection of a society's values and history. Celebrating these traditions can foster global understanding and appreciation.</p>
        
        <h2 id="festivals-and-celebrations">Festivals and Celebrations</h2>
        <p>Learn about global festivals like Diwali, Carnival, and Chinese New Year. Each festival has unique customs and traditions that are celebrated with enthusiasm.</p>
        
        <h2 id="traditional-cuisine">Traditional Cuisine</h2>
        <p>Experience the flavors of traditional dishes from around the world. Cooking or tasting authentic recipes can be a delicious way to understand different cultures.</p>
        
        <h2 id="customs-and-rituals">Customs and Rituals</h2>
        <p>Explore various customs and rituals, such as Japanese tea ceremonies or Indian wedding ceremonies. These practices offer insights into cultural values and social norms.</p>
        
        <h2 id="conclusion">Conclusion</h2>
        <p>Celebrating cultural traditions enhances global awareness and respect. Embrace and honor these traditions to foster a more inclusive world.</p>
      `
    },
    {
      id: 5,
      category: 'Wedding',
      image: 'https://via.placeholder.com/300x200', // Replace with your image URL
      title: 'Planning the Perfect Dream Wedding',
      excerpt: 'Turn your vision into reality with expert tips and inspiration for unforgettable weddings.',
      content: `
        <h2 id="introduction">Introduction</h2>
        <p>Planning a wedding is an exciting yet challenging task. With careful planning and attention to detail, you can create the perfect dream wedding.</p>
        
        <h2 id="choosing-the-venue">Choosing the Venue</h2>
        <p>Select a venue that matches your vision and guest list. Consider factors like location, size, and ambiance to ensure it fits your style.</p>
        
        <h2 id="designing-the-theme">Designing the Theme</h2>
        <p>Choose a theme that reflects your personality and preferences. From classic elegance to modern chic, the theme sets the tone for your wedding.</p>
        
        <h2 id="planning-the-details">Planning the Details</h2>
        <p>Focus on details like invitations, decorations, and floral arrangements. Personal touches make your wedding unique and memorable.</p>
        
        <h2 id="conclusion">Conclusion</h2>
        <p>With thorough planning and a clear vision, you can create a wedding that is both beautiful and meaningful. Enjoy the process and celebrate your special day with joy.</p>
      `
    },
    {
      id: 6,
      category: 'Wedding',
      image: 'https://via.placeholder.com/300x200', // Replace with your image URL
      title: 'Wedding Trends: What\'s Hot and Happening',
      excerpt: 'Stay ahead of the curve and discover the latest trends that are transforming wedding celebrations.',
      content: `
        <h2 id="introduction">Introduction</h2>
        <p>Wedding trends evolve constantly, offering new and exciting ways to personalize your special day. Stay updated on the latest trends to make your wedding stand out.</p>
        
        <h2 id="current-trends">Current Trends</h2>
        <p>Explore popular trends like eco-friendly weddings, micro-weddings, and unconventional venues. These trends reflect changing preferences and societal values.</p>
        
        <h2 id="innovative-ideas">Innovative Ideas</h2>
        <p>Incorporate innovative ideas such as virtual ceremonies or interactive guest experiences. These modern touches can add a unique flair to your wedding.</p>
        
        <h2 id="conclusion">Conclusion</h2>
        <p>Keeping up with wedding trends allows you to create a celebration that feels fresh and relevant. Embrace new ideas while staying true to your vision.</p>
      `
    },
    {
      id: 7,
      category: 'Party and Celebration',
      image: 'https://via.placeholder.com/300x200', // Replace with your image URL
      title: 'Throwing the Ultimate Party',
      excerpt: 'Transform any gathering into an unforgettable experience with these fun and creative ideas.',
      content: `
      <h2 id="introduction">Introduction</h2>
      <p>Planning the ultimate party involves a mix of creativity, organization, and fun. Whether it’s a birthday bash, anniversary celebration, or casual get-together, the right approach can make your event unforgettable.</p>
      
      <h2 id="choosing-a-theme">Choosing a Theme</h2>
      <p>Select a theme that aligns with the occasion and your guests' interests. Themes like tropical luau, retro disco, or Hollywood glam can set the tone and guide your decorations and activities.</p>
      
      <h2 id="setting-up-the-venue">Setting Up the Venue</h2>
      <p>Decorate the venue according to your theme. Think about lighting, table settings, and ambiance to create a cohesive look. Don't forget to plan for comfortable seating and easy movement for your guests.</p>
      
      <h2 id="entertainment-options">Entertainment Options</h2>
      <p>Choose entertainment that suits your guests’ preferences. Options include live bands, DJs, interactive games, or even a photo booth. The right entertainment keeps the party lively and engaging.</p>
      
      <h2 id="conclusion">Conclusion</h2>
      <p>Throwing an unforgettable party requires attention to detail and a touch of creativity. Plan thoughtfully, and your party will be a memorable celebration for everyone involved.</p>
    `
  },
  {
    id: 8,
    category: 'Party and Celebration',
    image: 'https://via.placeholder.com/300x200', // Replace with your image URL
    title: 'Creative Ideas for Memorable Celebrations',
    excerpt: 'Add a special touch to your celebrations with these creative and unique ideas that will wow your guests.',
    content: `
      <h2 id="introduction">Introduction</h2>
      <p>Making your celebration stand out can be achieved through creative ideas that add personal touches and memorable moments. Here are some innovative ideas to inspire your next event.</p>
      
      <h2 id="personalized-decorations">Personalized Decorations</h2>
      <p>Incorporate personalized decorations that reflect the guest of honor or the event’s theme. Custom banners, photo collages, or monogrammed items can make the setting more special.</p>
      
      <h2 id="unique-gaming-options">Unique Gaming Options</h2>
      <p>Introduce unique games or activities that match your theme. Consider options like trivia contests, scavenger hunts, or interactive workshops that keep guests entertained and engaged.</p>
      
      <h2 id="specialty-foods-and-drinks">Specialty Foods and Drinks</h2>
      <p>Offer specialty foods and drinks that are both delicious and visually appealing. Create a custom menu or signature cocktails that align with your event’s theme for an added touch of elegance.</p>
      
      <h2 id="conclusion">Conclusion</h2>
      <p>Creative touches can elevate any celebration, making it more enjoyable and memorable. Embrace unique ideas to create an experience that will be cherished by all your guests.</p>
    `
  }
];


  


const BlogContent = () => {
    const { id } = useParams();
    const post = blogPosts.find(post => post.id === parseInt(id, 10));
  
    if (!post) return <div>Post not found</div>;
  
    // Extract headings for the index
    const headings = post.content.match(/<h2 id="(.*?)">.*?<\/h2>/g)?.map(h => h.match(/id="(.*?)"/)[1]) || [];
  
    return (
      <div className="blog-content">
        <img src={post.image} alt={post.title} />
        <h1>{post.title}</h1>
        <p>{post.excerpt}</p>
        <div className="index">
          <h3>Index</h3>
          <ul>
            {headings.map((heading, index) => (
              <li key={heading}>
                <a href={`#${heading}`}>{`Section ${index + 1}: ${heading.replace(/-/g, ' ').toUpperCase()}`}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="content" dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
    );
  };

export default BlogContent;
