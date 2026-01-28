
import './blog.css';
import blog1 from '../../assets/blog01.png';
import blog2 from '../../assets/blog02.png';
import blog3 from '../../assets/blog03.png';
import blog4 from '../../assets/blog04.png';
import blog5 from '../../assets/blog05.png';


const blogPosts = [
        {
            id: 1,
            date: 'Sep 26, 2021',
            title: 'GPT-3 and Open AI is the future. Let us explore how it is?',
            image: blog1
        },
        {
            id: 2,
            date: 'Sep 26, 2021',
            title: 'GPT-3 and Open AI is the future. Let us explore how it is?',
            image: blog2
        },
        {
            id: 3,
            date: 'Sep 26, 2021',
            title: 'GPT-3 and Open AI is the future. Let us explore how it is?',
            image: blog3
        },
        {
            id: 4,
            date: 'Sep 26, 2021',
            title: 'GPT-3 and Open AI is the future. Let us explore how it is?',
            image: blog4
        },
        {
            id: 5,
            date: 'Sep 26, 2021',
            title: 'GPT-3 and Open AI is the future. Let us explore how it is?',
            image: blog5
        }
    ];

const Blog = () => {

    return (
        <div className="blog-section">
            <div className="blog-header">
                <h1>
                    A lot is happening,<br />
                    We are blogging about it.
                </h1>
            </div>

            <div className="blog-container">
                {/* Featured post - larger on the left */}
                <div className="blog-featured">
                    <div className="blog-card featured-card">
                        <div className="blog-image">
                            <img src={blogPosts[0].image} alt="Blog post" />
                        </div>
                        <div className="blog-content">
                            <p className="blog-date">{blogPosts[0].date}</p>
                            <h3 className="blog-title">{blogPosts[0].title}</h3>
                            <button className="blog-link">Read Full Article</button>
                        </div>
                    </div>
                </div>

                {/* Grid of smaller posts on the right */}
                <div className="blog-grid">
                    {blogPosts.slice(1).map((post) => (
                        <div key={post.id} className="blog-card">
                            <div className="blog-image">
                                <img src={post.image} alt="Blog post" />
                            </div>
                            <div className="blog-content">
                                <p className="blog-date">{post.date}</p>
                                <h3 className="blog-title">{post.title}</h3>
                                <button className="blog-link">Read Full Article</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blog;