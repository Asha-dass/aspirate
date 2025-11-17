import React from 'react';

const Blog = () => {
  const blogPosts = [
    {
      image: "/assets/images/blog/ai-powered-seo.webp",
      title: "AI-Powered SEO: Unlock Faster Rankings with AI",
      link: "ai-powered-seo-unlock-faster-rankings-with-ai.html"
    },
    {
      image: "/assets/images/blog/web-development-company-in-chennai.webp",
      title: "Fast, Secure and SEO-Optimized Websites | Best Web Development Company in Chennai",
      link: "leading-web-development-company-chennai.html"
    },
    {
      image: "/assets/images/blog/Add a hThe Power of Color Psychology in Web Design.webp",
      title: "The Power of Color Psychology in Web Design",
      link: "color-psychology-in-web-design.html"
    }
  ];

  return (
    <section className="blog-area blog-style-four pt-40 pb-40">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section-title section-title-two text-center mb-50 wow fadeInUp">
              <h2 className="text-underline">Latest News</h2>
            </div>
          </div>
        </div>
        <div className="row">
          {blogPosts.map((post, index) => (
            <div key={index} className="col-lg-4 col-md-6 col-sm-12">
              <div className="blog-post-item mb-40 wow fadeInUp" data-wow-delay=".2s">
                <div className="post-thumbnail">
                  <img src={post.image} alt="Blog Image" />
                </div>
                <div className="entry-content">
                  <h3 className="title">
                    <a href={post.link}>{post.title}</a>
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="pt-3 text-center">
          <a href="blog.html" className="main-btn text-black">Read More</a>
        </div>
      </div>
    </section>
  );
};

export default Blog;

