
import Footer from '@/Component/footer'
import Nav from '@/Component/navbar'
import'./main.css'
export default function page(params) {
  
    
return <>




  <BlogDetails/>

 

</>

};







 function BlogDetails() {
  return (
    <main className="main">
      {/* Page Title */}
      <div className="page-title" data-aos="fade">
        <div className="container">
          <nav className="breadcrumbs">
            <ol>
              <li>
                <a href="index.html">Home</a>
              </li>
              <li className="current">Blog Details</li>
            </ol>
          </nav>
          <h1>Blog Details</h1>
        </div>
      </div>
      {/* End Page Title */}

      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            {/* Blog Details Section */}
            <section id="blog-details" className="blog-details section">
              <div className="container" data-aos="fade-up">
                <article className="article">
                  <div className="hero-img" data-aos="zoom-in">
                    <img
                      src="/assets/img/blog/blog-post-3.webp"
                      alt="Featured blog image"
                      className="img-fluid"
                      loading="lazy"
                    />
                    <div className="meta-overlay">
                      <div className="meta-categories">
                        <a href="#" className="category">
                          Web Development
                        </a>
                        <span className="divider">•</span>
                        <span className="reading-time">
                          <i className="bi bi-clock"></i> 6 min read
                        </span>
                      </div>
                    </div>
                  </div>

                  <div
                    className="article-content"
                    data-aos="fade-up"
                    data-aos-delay="100"
                  >
                    <div className="content-header">
                      <h1 className="title">
                        Modern Web Development: Best Practices and Future Trends
                        for 2025
                      </h1>

                      <div className="author-info">
                        <div className="author-details">
                          <img
                            src="/assets/img/person/person-f-8.webp"
                            alt="Author"
                            className="author-img"
                          />
                          <div className="info">
                            <h4>Michael Chen</h4>
                            <span className="role">Senior Web Developer</span>
                          </div>
                        </div>
                        <div className="post-meta">
                          <span className="date">
                            <i className="bi bi-calendar3"></i> Mar 15, 2025
                          </span>
                          <span className="divider">•</span>
                          <span className="comments">
                            <i className="bi bi-chat-text"></i> 18 Comments
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="content">
                      <p className="lead">
                        The landscape of web development continues to evolve at
                        an unprecedented pace, bringing new technologies,
                        frameworks, and methodologies that reshape how we build
                        modern web applications.
                      </p>

                      <p>
                        As we delve into 2025, the web development ecosystem has
                        transformed dramatically, introducing innovative
                        approaches to building faster, more secure, and highly
                        engaging web experiences. This comprehensive guide
                        explores the latest trends and best practices that are
                        defining the future of web development.
                      </p>

                      <div className="content-image right-aligned">
                        <img
                          src="/assets/img/blog/blog-hero-2.webp"
                          className="img-fluid"
                          alt="Modern web development tools"
                          loading="lazy"
                        />
                        <figcaption>
                          Modern development environments emphasize
                          collaboration and efficiency
                        </figcaption>
                      </div>

                      <h2>The Rise of Web Components</h2>
                      <p>
                        Web Components have become increasingly crucial in
                        modern web development, offering a standardized way to
                        create reusable custom elements. Key advantages include:
                      </p>
                      <ul>
                        <li>Enhanced code reusability across different frameworks</li>
                        <li>Better encapsulation of functionality</li>
                        <li>Improved maintenance and scalability</li>
                        <li>Framework-agnostic component development</li>
                      </ul>

                      <div className="highlight-box">
                        <h3>Key Trends in 2025</h3>
                        <ul className="trend-list">
                          <li>
                            <i className="bi bi-lightning-charge"></i>
                            <span>Edge Computing and Serverless Architecture</span>
                          </li>
                          <li>
                            <i className="bi bi-shield-check"></i>
                            <span>Enhanced Security Measures</span>
                          </li>
                          <li>
                            <i className="bi bi-phone"></i>
                            <span>Progressive Web Apps (PWAs)</span>
                          </li>
                        </ul>
                      </div>

                      <h2>Performance Optimization</h2>
                      <p>
                        Performance remains a critical factor in web
                        development, with an increasing focus on Core Web Vitals
                        and user experience metrics. Modern applications must be
                        optimized for both speed and efficiency.
                      </p>

                      <blockquote>
                        <p>
                          The future of web development lies not just in
                          writing code, but in creating seamless, accessible,
                          and performant experiences that work for everyone,
                          everywhere.
                        </p>
                        <cite>Emily Thompson, Web Performance Architect</cite>
                      </blockquote>

                      <div className="content-grid">
                        <div className="row g-4">
                          <div className="col-md-6">
                            <div className="info-card">
                              <i className="bi bi-speedometer2"></i>
                              <h4>Performance Metrics</h4>
                              <p>
                                Focus on Core Web Vitals and user-centric
                                performance metrics for better search rankings
                                and user experience.
                              </p>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="info-card">
                              <i className="bi bi-universal-access"></i>
                              <h4>Accessibility</h4>
                              <p>
                                Implementing WCAG guidelines and ensuring web
                                applications are accessible to all users across
                                different devices.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <h2>Looking Forward</h2>
                      <p>
                        As we continue through 2025, web development practices
                        will further evolve, embracing new technologies while
                        maintaining a strong foundation in performance,
                        accessibility, and user experience. Staying updated with
                        these trends and best practices is crucial for
                        developers looking to build modern, scalable web
                        applications.
                      </p>
                    </div>

                    <div className="meta-bottom">
                      <div className="tags-section">
                        <h4>Related Topics</h4>
                        <div className="tags">
                          <a href="#" className="tag">
                            Web Development
                          </a>
                          <a href="#" className="tag">
                            Performance
                          </a>
                          <a href="#" className="tag">
                            Best Practices
                          </a>
                          <a href="#" className="tag">
                            Trends
                          </a>
                          <a href="#" className="tag">
                            2025
                          </a>
                        </div>
                      </div>

                      <div className="share-section">
                        <h4>Share Article</h4>
                        <div className="social-links">
                          <a href="#" className="twitter">
                            <i className="bi bi-twitter-x"></i>
                          </a>
                          <a href="#" className="facebook">
                            <i className="bi bi-facebook"></i>
                          </a>
                          <a href="#" className="linkedin">
                            <i className="bi bi-linkedin"></i>
                          </a>
                          <a href="#" className="copy-link" title="Copy Link">
                            <i className="bi bi-link-45deg"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            </section>
            {/* /Blog Details Section */}

            {/* Blog Comments Section */}
            <section id="blog-comments" className="blog-comments section">
              <div className="container" data-aos="fade-up" data-aos-delay="100">
                <div className="blog-comments-4">
                  <div className="comments-header">
                    <h3 className="title">Community Feedback</h3>
                    <div className="comments-stats">
                      <span className="count">12</span>
                      <span className="label">Comments</span>
                    </div>
                  </div>

                  <div className="comments-container">
                    {/* Example Comment */}
                    <div className="comment-thread">
                      <div className="comment-box">
                        <div className="comment-wrapper">
                          <div className="avatar-wrapper">
                            <img
                              src="assets/img/person/person-f-9.webp"
                              alt="Avatar"
                              loading="lazy"
                            />
                            <span className="status-indicator"></span>
                          </div>
                          <div className="comment-content">
                            <div className="comment-header">
                              <div className="user-info">
                                <h4>Thomas Anderson</h4>
                                <span className="time-badge">
                                  <i className="bi bi-clock"></i> 2 hours ago
                                </span>
                              </div>
                              <div className="engagement">
                                <span className="likes">
                                  <i className="bi bi-heart"></i> 24
                                </span>
                              </div>
                            </div>
                            <div className="comment-body">
                              <p>
                                Nullam ac urna eu felis dapibus condimentum sit
                                amet a augue. Sed non neque elit. Sed ut
                                imperdiet nisi. Proin condimentum fermentum
                                nunc.
                              </p>
                            </div>
                            <div className="comment-actions">
                              <button className="action-btn like-btn">
                                <i className="bi bi-heart"></i>
                                <span>Like</span>
                              </button>
                              <button className="action-btn reply-btn">
                                <i className="bi bi-chat"></i>
                                <span>Reply</span>
                              </button>
                              <button className="action-btn share-btn">
                                <i className="bi bi-share"></i>
                                <span>Share</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* More comments... */}
                  </div>
                </div>
              </div>
            </section>
            {/* /Blog Comments Section */}

            {/* Blog Comment Form Section */}
            <section id="blog-comment-form" className="blog-comment-form section">
              <div className="container" data-aos="fade-up" data-aos-delay="100">
                <form method="post">
                  <div className="form-header">
                    <h3>Leave a Comment</h3>
                    <p>
                      Your email address will not be published. Required fields
                      are marked *
                    </p>
                  </div>

                  <div className="row gy-3">
                    <div className="col-md-6">
                      <div className="input-group">
                        <label htmlFor="name">Full Name *</label>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          placeholder="Enter your full name"
                          required
                        />
                        <span className="error-text">
                          Please enter your name
                        </span>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="input-group">
                        <label htmlFor="email">Email Address *</label>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          placeholder="Enter your email address"
                          required
                        />
                        <span className="error-text">
                          Please enter a valid email address
                        </span>
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="input-group">
                        <label htmlFor="website">Website</label>
                        <input
                          type="url"
                          name="website"
                          id="website"
                          placeholder="Your website (optional)"
                        />
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="input-group">
                        <label htmlFor="comment">Your Comment *</label>
                        <textarea
                          name="comment"
                          id="comment"
                          rows="5"
                          placeholder="Write your thoughts here..."
                          required
                        ></textarea>
                        <span className="error-text">
                          Please enter your comment
                        </span>
                      </div>
                    </div>

                    <div className="col-12 text-center">
                      <button type="submit">Post Comment</button>
                    </div>
                  </div>
                </form>
              </div>
            </section>
            {/* /Blog Comment Form Section */}
          </div>

          {/* Sidebar */}
          <div className="col-lg-4 sidebar">
            <div
              className="widgets-container"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              {/* Search Widget */}
              <div className="search-widget widget-item">
                <h3 className="widget-title">Search</h3>
                <form>
                  <input type="text" />
                  <button type="submit" title="Search">
                    <i className="bi bi-search"></i>
                  </button>
                </form>
              </div>

              {/* Recent Posts Widget */}
              <div className="recent-posts-widget widget-item">
                <h3 className="widget-title">Recent Posts</h3>
                <div className="post-item">
                  <img
                    src="assets/img/blog/blog-post-square-1.webp"
                    alt=""
                    className="flex-shrink-0"
                  />
                  <div>
                    <h4>
                      <a href="blog-details.html">
                        Nihil blanditiis at in nihil autem
                      </a>
                    </h4>
                    <time dateTime="2020-01-01">Jan 1, 2020</time>
                  </div>
                </div>
              </div>

              {/* Categories Widget */}
              <div className="categories-widget widget-item">
                <h3 className="widget-title">Categories</h3>
                <ul className="mt-3">
                  <li>
                    <a href="#">
                      General <span>(25)</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Lifestyle <span>(12)</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Travel <span>(5)</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Design <span>(22)</span>
                    </a>
                  </li>
                </ul>
              </div>

              {/* Tags Widget */}
              <div className="tags-widget widget-item">
                <h3 className="widget-title">Tags</h3>
                <ul>
                  <li>
                    <a href="#">App</a>
                  </li>
                  <li>
                    <a href="#">IT</a>
                  </li>
                  <li>
                    <a href="#">Business</a>
                  </li>
                  <li>
                    <a href="#">Design</a>
                  </li>
                  <li>
                    <a href="#">Marketing</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* /Sidebar */}
        </div>
      </div>
    </main>
  );
}


