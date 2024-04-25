import React from "react";
import blogData from "../../data/blog";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <>
      {blogData.slice(35, 38).map((blog) => (
        <div key={blog.id} className="col-lg-4 col-md-6 d-flex">
          <article
            className="blog-meta-seven mb-40"
            data-aos="fade-up"
            data-aos-delay={blog.delay}
          >
            <figure className="post-img m0">
              <a href={blog.urlwebsite} className="w-100 d-block">
                <img
                  src={blog.imgSrc}
                  alt="blog"
                  className="lazy-img w-100 tran4s"
                />
              </a>
            </figure>
            <div className="post-data mt-30 lg-mt-20">
              <div className="post-tag text-uppercase">{blog.tag}</div>
              <a href={blog.urlwebsite} className="mt-10 mb-15">
                <h4 className="tran3s blog-title tx-dark">{blog.title}</h4>
              </a>
              <div>
                <a
                  href={blog.urlwebsite}
                  className="read-btn fw-500 tran3s d-flex align-items-center justify-content-between"
                >
                  <span>Discover More</span>
                  <span>
                    <i className="bi bi-arrow-right" />
                  </span>
                </a>
              </div>
            </div>
          </article>
        </div>
      ))}
    </>
  );
};

export default Blog;
