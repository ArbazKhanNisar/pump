"use client";

import React, { useMemo, useState, useEffect } from "react";
import Image from "next/image";
import "./productdetailstyle.css";


  const relatedProducts = [
    {
      id: 1,
      title: "Title 11111",
      model: "Model11 111111",
      type: "Type11 111111111",
      drive: "Drive1111111111",
      image: "https://ghostwhite-alligator-811158.hostingersite.com/storage/product/1758746380_3.sm.webp"
    },
    {
      id: 2,
      title: "Title 22222",
      model: "Model22 222222",
      type: "Type22 222222222",
      drive: "Drive2222222222",
      image: "https://ghostwhite-alligator-811158.hostingersite.com/storage/product/1758746963_2.sm.webp"
    },
    {
      id: 3,
      title: "Title 33333",
      model: "Model33 333333",
      type: "Type33 333333333",
      drive: "Drive3333333333",
      image: "https://ghostwhite-alligator-811158.hostingersite.com/storage/product/1758926060_2.sm.webp"
    }
  ];
  
  
  export default function ProductDetailProductDetail({ product }) {
    const [activeTab, setActiveTab] = useState("description");
    return (
      <div className="container">
        <main className="product-detail">
          <div className="product-header">
            <h1>{product.title}</h1>
            <div className="product-model">Model: {product.model}</div>
          </div>
  
          <div className="product-content">
            <div className="product-gallery">
              <div className="main-image">
                <img src={product.image} alt={product.title} 
                onError={(e) => { e.currentTarget.src = '/assets/img/blog/blog-post-3.webp'; }}
                />
              </div>
             
            </div>
  
            <div className="product-info">
              <div className="specs-highlight">
                <div className="spec-item">
                  <span className="spec-label">Model:</span>
                  <span className="spec-value">{product.model}</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Type:</span>
                  <span className="spec-value">{product.type}</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Drive:</span>
                  <span className="spec-value">{product.drive}</span>
                </div>
              </div>
              <div className="action-section">
                  <div className="price-container">
                  
                    <div className="price-note">
                      Depending on configuration and materials
                    </div>
                  </div>
  
                  <div className="cta-buttons">
                    {/* <button className="btn-primary">Request Quote</button> */}
                    <button className="btn-primary">Contact Sales</button>
                    <button className="btn-outline">Download Brochure</button>
                  </div>
  
                  {/* <div className="quick-info">
                    <div className="info-item">
                      <span className="icon">✓</span>
                      <span>In stock: 5 units</span>
                    </div>
                    <div className="info-item">
                      <span className="icon">✓</span>
                      <span>Lead time: 2-4 weeks</span>
                    </div>
                    <div className="info-item">
                      <span className="icon">✓</span>
                      <span>2-year warranty</span>
                    </div>
                  </div> */}
                </div>
            </div>
  
          
  
          </div>
  
          <div className="product-tabs">
            <div className="tabs-header">
              <button className={activeTab === "description" ? "tab-active" : ""} onClick={() => setActiveTab("description")}>Description</button>
              <button className={activeTab === "specifications" ? "tab-active" : ""} onClick={() => setActiveTab("specifications")}>Specifications</button>
              <button className={activeTab === "applications" ? "tab-active" : ""} onClick={() => setActiveTab("applications")}>Applications</button>
              <button className={activeTab === "features" ? "tab-active" : ""} onClick={() => setActiveTab("features")}>Model Features</button>
              <button className={activeTab === "resources" ? "tab-active" : ""} onClick={() => setActiveTab("resources")}>Resources</button>
            </div>
  
            <div className="tabs-content">
              {activeTab === "description" && (
                <div className="tab-panel" dangerouslySetInnerHTML={{ __html: product.description }} />
              )}
  
              {activeTab === "specifications" && (
                <div className="tab-panel">
                  <h2>Technical Specifications</h2>
                  <div className="specs-table">
                    {product.product_specifications.map((spec) => (
                      <div key={spec.id} className="spec-row">
                        <div className="spec-name">{spec.name}</div>
                        <div className="spec-value">{spec.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
  
              {activeTab === "applications" && (
                <div className="tab-panel">
                  <h2>Applications</h2>
                  {product.product_applications.map((app) => (
                    <div key={app.id} className="application-category">
                      <h3>{app.title}</h3>
                      <ul>
                        {app.points.map((point, i) => (
                          <li key={i}>{point}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
  
              {activeTab === "features" && (
                <div className="tab-panel">
                  <h2>Model Features</h2>
                  <ul>
                    {product.product_model_features.map((f) => (
                      <li key={f.id}>{f.title}</li>
                    ))}
                  </ul>
                </div>
              )}
  
              {activeTab === "resources" && (
                <div className="tab-panel">
                  <h2>Resources</h2>
                  {product.product_resources.map((res) => (
                    <div key={res.id} className="resource-item">
                      <h3>{res.title}</h3>
                      <ul>
                        {res.points.map((p, i) => (
                          <li key={i}>{p}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className="related-products">
    <h2>Related Products</h2>
    <div className="related-grid">
      {relatedProducts.map((product) => (
        <div key={product.id} className="related-item">
          <img src={product.image} alt={product.title} 
          onError={(e) => { e.currentTarget.src = '/assets/img/blog/blog-post-3.webp'; }}
          />
          <div className="related-info">
            <h4>{product.title}</h4>
            <p>Model: {product.model}</p>
            {/* <p>Type: {product.type}</p>
            <p>Drive: {product.drive}</p> */}
          </div>
        </div>
      ))}
    </div>
  </div>
  
        </main>
      </div>
    );
  }
  