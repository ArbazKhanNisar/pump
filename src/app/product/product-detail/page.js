"use client";

import React, { useMemo, useState, useEffect } from "react";
import Image from "next/image";





export default function ProductDetail() {
  const [activeTab, setActiveTab] = useState('description');

  return (
    <>
    
     <div className="container">
     

 
     

     <main className="product-detail">
       <div className="product-header">
         <h1>ICM Metallic Magnetic Drive Process Pump</h1>
         <div className="product-model">Model: ICM/ICMB</div>
       </div>

       <div className="product-content">
         <div className="product-gallery">
           <div className="main-image">
             <Image 
               src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
               alt="ICM Metallic Magnetic Drive Process Pump" 
             />
           </div>
           <div className="image-thumbnails">
             <div className="thumbnail active">
               <Image src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80" alt="Pump Overview" />
             </div>
             <div className="thumbnail">
               <Image src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80" alt="Pump Components" />
             </div>
             <div className="thumbnail">
               <Image src="https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80" alt="Pump Installation" />
             </div>
             <div className="thumbnail">
               <Image src="https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80" alt="Technical Diagram" />
             </div>
           </div>
         </div>

         <div className="product-info">
           <div className="specs-highlight">
             <div className="spec-item">
               <span className="spec-label">Model:</span>
               <span className="spec-value">ICM/ICMB</span>
             </div>
             <div className="spec-item">
               <span className="spec-label">Type:</span>
               <span className="spec-value">ISO Process Pump</span>
             </div>
             <div className="spec-item">
               <span className="spec-label">Standard:</span>
               <span className="spec-value">ISO 5199 / ANSI B73.1</span>
             </div>
             <div className="spec-item">
               <span className="spec-label">Drive:</span>
               <span className="spec-value">Magnetic Drive (Sealless)</span>
             </div>
           </div>

           <div className="action-section">
             <div className="price-container">
               <div className="price">$3,850 - $7,200</div>
               <div className="price-note">Depending on configuration and materials</div>
             </div>

             <div className="cta-buttons">
               <button className="btn-primary">Request Quote</button>
               <button className="btn-secondary">Contact Sales</button>
               <button className="btn-outline">Download Brochure</button>
             </div>

             <div className="quick-info">
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
             </div>
           </div>
         </div>
       </div>

       <div className="product-tabs">
         <div className="tabs-header">
           <button 
             className={activeTab === 'description' ? 'tab-active' : ''}
             onClick={() => setActiveTab('description')}
           >
             Description
           </button>
           <button 
             className={activeTab === 'specifications' ? 'tab-active' : ''}
             onClick={() => setActiveTab('specifications')}
           >
             Specifications
           </button>
           <button 
             className={activeTab === 'applications' ? 'tab-active' : ''}
             onClick={() => setActiveTab('applications')}
           >
             Applications
           </button>
           <button 
             className={activeTab === 'features' ? 'tab-active' : ''}
             onClick={() => setActiveTab('features')}
           >
             Model Features
           </button>
           <button 
             className={activeTab === 'hydraulic' ? 'tab-active' : ''}
             onClick={() => setActiveTab('hydraulic')}
           >
             Hydraulic Coverage
           </button>
           <button 
             className={activeTab === 'resources' ? 'tab-active' : ''}
             onClick={() => setActiveTab('resources')}
           >
             Resources
           </button>
         </div>

         <div className="tabs-content">
           {activeTab === 'description' && (
             <div className="tab-panel">
               <h2>Product Description</h2>
               <p>
                 The ICM model is a metallic magnetic drive chemical process pump constructed from 
                 stainless steel, hastelloy, ductile cast iron, and special metals. Designed for 
                 normal and demanding chemical process applications where leakage cannot be tolerated.
               </p>
               <p>
                 This sealless, leak-proof pump features a magnetic drive system that eliminates 
                 the need for mechanical seals, preventing product leakage and reducing maintenance 
                 requirements. The ICM pump complies with ISO 5199 and ANSI B73.1 standards, ensuring 
                 reliability and interoperability.
               </p>
               
               <h3>Key Benefits</h3>
               <ul>
                 <li>Zero leakage operation - completely sealless design</li>
                 <li>Eliminates seal maintenance and replacement costs</li>
                 <li>Compatible with a wide range of corrosive and hazardous fluids</li>
                 <li>Available in various metallurgies for different applications</li>
                 <li>Energy efficient operation with optimized hydraulic performance</li>
               </ul>
             </div>
           )}

           {activeTab === 'specifications' && (
             <div className="tab-panel">
               <h2>Technical Specifications</h2>
               <div className="specs-table">
                 <div className="spec-row">
                   <div className="spec-name">Capacity</div>
                   <div className="spec-value">Up to 400 m³/h (1760 USGPM)</div>
                 </div>
                 <div className="spec-row">
                   <div className="spec-name">Head</div>
                   <div className="spec-value">Up to 120 meters (394 feet)</div>
                 </div>
                 <div className="spec-row">
                   <div className="spec-name">Temperature Range</div>
                   <div className="spec-value">-40°C to +200°C (-40°F to +392°F)</div>
                 </div>
                 <div className="spec-row">
                   <div className="spec-name">Pressure Rating</div>
                   <div className="spec-value">Up to 16 bar (232 psi)</div>
                 </div>
                 <div className="spec-row">
                   <div className="spec-name">Materials of Construction</div>
                   <div className="spec-value">316SS, Hastelloy C, Duplex Stainless Steel, Alloy 20</div>
                 </div>
                 <div className="spec-row">
                   <div className="spec-name">Connection Standards</div>
                   <div className="spec-value">ANSI/ASME B16.5 Flanges, DIN, JIS</div>
                 </div>
                 <div className="spec-row">
                   <div className="spec-name">Motor Options</div>
                   <div className="spec-value">IEC standard motors, explosion-proof options available</div>
                 </div>
               </div>
             </div>
           )}

           {activeTab === 'applications' && (
             <div className="tab-panel">
               <h2>Typical Applications</h2>
               <p>The ICM Magnetic Drive Pump is suitable for a wide range of applications including:</p>
               
               <div className="applications-grid">
                 <div className="application-category">
                   <h3>Chemical Processing</h3>
                   <ul>
                     <li>Acid and alkali transfer</li>
                     <li>Solvent circulation</li>
                     <li>Chemical dosing</li>
                     <li>Reactor feed</li>
                   </ul>
                 </div>
                 
                 <div className="application-category">
                   <h3>Pharmaceutical</h3>
                   <ul>
                     <li>API processing</li>
                     <li>Solvent recovery</li>
                     <li>Batch processes</li>
                     <li>Clean-in-place systems</li>
                   </ul>
                 </div>
                 
                 <div className="application-category">
                   <h3>Petrochemical</h3>
                   <ul>
                     <li>Refinery processes</li>
                     <li>Hydrocarbon transfer</li>
                     <li>Additive injection</li>
                     <li>Waste treatment</li>
                   </ul>
                 </div>
                 
                 <div className="application-category">
                   <h3>Other Industries</h3>
                   <ul>
                     <li>Electroplating</li>
                     <li>Water treatment</li>
                     <li>Food processing (non-lubricated versions)</li>
                     <li>Pulp and paper</li>
                   </ul>
                 </div>
               </div>
             </div>
           )}

           {activeTab === 'features' && (
             <div className="tab-panel">
               <h2>Model Features</h2>
               
               <div className="features-grid">
                 <div className="feature">
                   <h3>Magnetic Drive System</h3>
                   <p>Completely sealless operation with permanent magnet coupling that eliminates leakage and reduces maintenance.</p>
                 </div>
                 
                 <div className="feature">
                   <h3>Robust Construction</h3>
                   <p>Manufactured from corrosion-resistant materials suitable for aggressive chemical services.</p>
                 </div>
                 
                 <div className="feature">
                   <h3>Back Pull-Out Design</h3>
                   <p>Allows for easy maintenance without disturbing piping or motor alignment.</p>
                 </div>
                 
                 <div className="feature">
                   <h3>Standardized Dimensions</h3>
                   <p>Interchangeable with other ISO 5199 compliant pumps for easy replacement.</p>
                 </div>
                 
                 <div className="feature">
                   <h3>Temperature Monitoring</h3>
                   <p>Integrated temperature sensors monitor bearing and fluid temperature for protection.</p>
                 </div>
                 
                 <div className="feature">
                   <h3>Double Containment</h3>
                   <p>Optional containment shell provides secondary containment in case of primary containment failure.</p>
                 </div>
               </div>
             </div>
           )}

           {activeTab === 'hydraulic' && (
             <div className="tab-panel">
               <h2>Hydraulic Coverage</h2>
               <p>The ICM pump series offers comprehensive hydraulic coverage for various application requirements:</p>
               
               <div className="hydraulic-chart">
                 <Image src="https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" alt="Hydraulic Performance Chart" />
               </div>
               
               <div className="impeller-options">
                 <h3>Impeller Options</h3>
                 <ul>
                   <li><strong>Closed impeller:</strong> For general purpose applications with clean fluids</li>
                   <li><strong>Semi-open impeller:</strong> For applications with small solids or slightly viscous fluids</li>
                   <li><strong>Vortex impeller:</strong> For handling solids and stringy materials</li>
                 </ul>
               </div>
             </div>
           )}

           {activeTab === 'resources' && (
             <div className="tab-panel">
               <h2>Resources</h2>
               
               <div className="resources-grid">
                 <div className="resource-item">
                   <h3>Documentation</h3>
                   <ul>
                     <li><a href="#">Product Brochure (PDF, 2.4MB)</a></li>
                     <li><a href="#">Installation Manual (PDF, 1.8MB)</a></li>
                     <li><a href="#">Maintenance Guide (PDF, 1.2MB)</a></li>
                     <li><a href="#">Certificates of Compliance</a></li>
                   </ul>
                 </div>
                 
                 <div className="resource-item">
                   <h3>Technical Drawings</h3>
                   <ul>
                     <li><a href="#">Dimensional Drawings (DWG)</a></li>
                     <li><a href="#">Sectional Views (PDF)</a></li>
                     <li><a href="#">Installation Layouts</a></li>
                     <li><a href="#">3D Models (STEP)</a></li>
                   </ul>
                 </div>
                 
                 <div className="resource-item">
                   <h3>Performance Data</h3>
                   <ul>
                     <li><a href="#">Curve Data (CSV)</a></li>
                     <li><a href="#">NPSH Requirements</a></li>
                     <li><a href="#">Material Selection Guide</a></li>
                     <li><a href="#">Efficiency Data</a></li>
                   </ul>
                 </div>
               </div>
             </div>
           )}
         </div>
       </div>

       <div className="related-products">
         <h2>Related Products</h2>
         <div className="related-grid">
           <div className="related-item">
             <Image src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80" alt="ICM Lined Version" />
             <h4>ICM Lined Version</h4>
             <p>PTFE-lined magnetic drive pump for ultra-corrosive applications</p>
           </div>
           
           <div className="related-item">
             <Image src="https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80" alt="ICM High-Temp Version" />
             <h4>ICM High-Temp Version</h4>
             <p>Designed for applications up to 450°C with special cooling jacket</p>
           </div>
           
           <div className="related-item">
             <Image src="https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80" alt="ICM Explosion-Proof" />
             <h4>ICM Explosion-Proof</h4>
             <p>ATEX certified version for hazardous area applications</p>
           </div>
         </div>
       </div>
     </main>

     <style jsx>{`
       .container {
         max-width: 1200px;
         margin: 0 auto;
         padding: 0 1rem;
       }
       
       .breadcrumb {
         padding: 1rem 0;
         color: #666;
         font-size: 0.9rem;
       }
       
       .breadcrumb span {
         cursor: pointer;
       }
       
       .breadcrumb span:hover {
         text-decoration: underline;
       }
       
       .product-header {
         margin-bottom: 2rem;
       }
       
       .product-header h1 {
         font-size: 2.2rem;
         color: #1a365d;
         margin: 0 0 0.5rem 0;
       }
       
       .product-model {
         font-size: 1.1rem;
         color: #4a5568;
         font-weight: 500;
       }
       
       .product-content {
         display: grid;
         grid-template-columns: 1fr 1fr;
         gap: 2rem;
         margin-bottom: 3rem;
       }
       
       .product-gallery {
         display: flex;
         flex-direction: column;
       }
       
       .main-image {
         width: 100%;
         height: 400px;
         overflow: hidden;
         border-radius: 8px;
         margin-bottom: 1rem;
       }
       
       .main-image img {
         width: 100%;
         height: 100%;
         object-fit: cover;
       }
       
       .image-thumbnails {
         display: grid;
         grid-template-columns: repeat(4, 1fr);
         gap: 0.5rem;
       }
       
       .thumbnail {
         height: 80px;
         border-radius: 4px;
         overflow: hidden;
         cursor: pointer;
         border: 2px solid transparent;
       }
       
       .thumbnail.active {
         border-color: #3182ce;
       }
       
       .thumbnail img {
         width: 100%;
         height: 100%;
         object-fit: cover;
       }
       
       .product-info {
         display: flex;
         flex-direction: column;
         gap: 1.5rem;
       }
       
       .specs-highlight {
         background: #f7fafc;
         border-radius: 8px;
         padding: 1.5rem;
         border: 1px solid #e2e8f0;
       }
       
       .spec-item {
         display: flex;
         justify-content: space-between;
         padding: 0.5rem 0;
         border-bottom: 1px solid #edf2f7;
       }
       
       .spec-item:last-child {
         border-bottom: none;
       }
       
       .spec-label {
         font-weight: 600;
         color: #4a5568;
       }
       
       .spec-value {
         color: #2d3748;
       }
       
       .action-section {
         background: white;
         border-radius: 8px;
         padding: 1.5rem;
         border: 1px solid #e2e8f0;
         box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
       }
       
       .price-container {
         margin-bottom: 1.5rem;
       }
       
       .price {
         font-size: 1.8rem;
         font-weight: 700;
         color: #2d3748;
       }
       
       .price-note {
         font-size: 0.9rem;
         color: #718096;
       }
       
       .cta-buttons {
         display: flex;
         flex-direction: column;
         gap: 0.8rem;
         margin-bottom: 1.5rem;
       }
       
       button {
         padding: 0.8rem 1rem;
         border-radius: 6px;
         border: none;
         font-weight: 600;
         cursor: pointer;
         transition: all 0.2s;
       }
       
       .btn-primary {
         background-color: #3182ce;
         color: white;
       }
       
       .btn-primary:hover {
         background-color: #2b6cb0;
       }
       
       .btn-secondary {
         background-color: #e2e8f0;
         color: #2d3748;
       }
       
       .btn-secondary:hover {
         background-color: #cbd5e0;
       }
       
       .btn-outline {
         background-color: transparent;
         border: 1px solid #cbd5e0;
         color: #4a5568;
       }
       
       .btn-outline:hover {
         background-color: #f7fafc;
       }
       
       .quick-info {
         display: flex;
         flex-direction: column;
         gap: 0.5rem;
       }
       
       .info-item {
         display: flex;
         align-items: center;
         gap: 0.5rem;
         color: #38a169;
         font-size: 0.9rem;
       }
       
       .product-tabs {
         margin-bottom: 3rem;
       }
       
       .tabs-header {
         display: flex;
         border-bottom: 1px solid #e2e8f0;
         margin-bottom: 1.5rem;
         flex-wrap: wrap;
       }
       
       .tabs-header button {
         padding: 0.8rem 1.2rem;
         background: transparent;
         border: none;
         color: #718096;
         font-weight: 500;
         border-bottom: 3px solid transparent;
         cursor: pointer;
       }
       
       .tabs-header button.tab-active {
         color: #3182ce;
         border-bottom-color: #3182ce;
       }
       
       .tabs-header button:hover {
         color: #2b6cb0;
       }
       
       .tab-panel h2 {
         color: #2d3748;
         margin-top: 0;
       }
       
       .tab-panel h3 {
         color: #4a5568;
       }
       
       .specs-table {
         display: flex;
         flex-direction: column;
       }
       
       .spec-row {
         display: grid;
         grid-template-columns: 1fr 2fr;
         padding: 0.8rem 0;
         border-bottom: 1px solid #e2e8f0;
       }
       
       .spec-name {
         font-weight: 600;
         color: #4a5568;
       }
       
       .spec-value {
         color: #2d3748;
       }
       
       .applications-grid {
         display: grid;
         grid-template-columns: 1fr 1fr;
         gap: 1.5rem;
       }
       
       .application-category {
         background: #f7fafc;
         padding: 1.2rem;
         border-radius: 6px;
       }
       
       .application-category h3 {
         margin-top: 0;
         color: #3182ce;
       }
       
       .features-grid {
         display: grid;
         grid-template-columns: 1fr 1fr;
         gap: 1.5rem;
       }
       
       .feature {
         background: #f7fafc;
         padding: 1.2rem;
         border-radius: 6px;
       }
       
       .feature h3 {
         margin-top: 0;
         color: #3182ce;
       }
       
       .hydraulic-chart {
         margin: 1.5rem 0;
       }
       
       .hydraulic-chart img {
         width: 100%;
         border-radius: 6px;
       }
       
       .resources-grid {
         display: grid;
         grid-template-columns: 1fr 1fr 1fr;
         gap: 1.5rem;
       }
       
       .resource-item {
         background: #f7fafc;
         padding: 1.2rem;
         border-radius: 6px;
       }
       
       .resource-item h3 {
         margin-top: 0;
         color: #3182ce;
       }
       
       .resource-item ul {
         padding-left: 1.2rem;
       }
       
       .resource-item a {
         color: #3182ce;
         text-decoration: none;
       }
       
       .resource-item a:hover {
         text-decoration: underline;
       }
       
       .related-products {
         margin-bottom: 3rem;
       }
       
       .related-products h2 {
         color: #2d3748;
         margin-bottom: 1.5rem;
       }
       
       .related-grid {
         display: grid;
         grid-template-columns: 1fr 1fr 1fr;
         gap: 1.5rem;
       }
       
       .related-item {
         background: white;
         border: 1px solid #e2e8f0;
         border-radius: 8px;
         overflow: hidden;
         transition: transform 0.2s, box-shadow 0.2s;
       }
       
       .related-item:hover {
         transform: translateY(-4px);
         box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
       }
       
       .related-item img {
         width: 100%;
         height: 160px;
         object-fit: cover;
       }
       
       .related-item h4 {
         margin: 1rem 1rem 0.5rem;
         color: #2d3748;
       }
       
       .related-item p {
         margin: 0 1rem 1rem;
         color: #718096;
         font-size: 0.9rem;
       }
       
       @media (max-width: 768px) {
         .product-content {
           grid-template-columns: 1fr;
         }
         
         .applications-grid,
         .features-grid,
         .resources-grid,
         .related-grid {
           grid-template-columns: 1fr;
         }
         
         .tabs-header {
           overflow-x: auto;
           white-space: nowrap;
         }
       }
     `}</style>
   </div>
  
    </>
   
  );
}