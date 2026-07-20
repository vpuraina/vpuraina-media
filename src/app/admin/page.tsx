"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

// --- MOCK DATA ---
const metrics = [
  { label: "Total Leads (This Month)", value: "24", trend: "+12%", positive: true },
  { label: "Active Proposals", value: "7", trend: "Steady", positive: true },
  { label: "Strategy Calls Booked", value: "12", trend: "+3", positive: true },
];

const recentLeads = [
  { id: 1, name: "Rahul Sharma", email: "rahul@startup.in", service: "Performance Ads", date: "Today, 10:30 AM", status: "New" },
  { id: 2, name: "Priya Desai", email: "priya@d2cbrand.com", service: "Full Funnel", date: "Yesterday", status: "Followed Up" },
  { id: 3, name: "Amit Patel", email: "amit@techcorp.com", service: "SEO & Content", date: "July 18", status: "Meeting Booked" },
];

const contentPosts = [
  { id: 1, title: "Why Your Meta Ad ROAS Dropped in 2026", type: "Blog", date: "June 10, 2026", status: "Published" },
  { id: 2, title: "How We Use AI to 10x Our Content Output", type: "Blog", date: "June 2, 2026", status: "Published" },
  { id: 3, title: "Kapoor Threads Case Study", type: "Portfolio", date: "Draft", status: "Draft" },
  { id: 4, title: "Local SEO in India: 2026 Playbook", type: "Blog", date: "May 14, 2026", status: "Published" },
];

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("overview");

  useEffect(() => {
    // Re-trigger fade animation when tab changes
    const elements = document.querySelectorAll('.dash-fade');
    elements.forEach((el) => {
      el.classList.remove('visible');
      // small delay to re-trigger transition
      setTimeout(() => el.classList.add('visible'), 50);
    });
  }, [activeTab]);

  // Helper function to render different content based on the active tab
  const renderTabContent = () => {
    if (activeTab === "overview") {
      return (
        <div className="dash-fade">
          {/* Key Metrics Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginBottom: '40px' }}>
            {metrics.map((m, i) => (
              <div key={i} style={{ background: '#0A0A0A', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '12px', padding: '24px' }}>
                <div style={{ fontSize: '0.8rem', color: '#888', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{m.label}</div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px' }}>
                  <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#F0F0F0', lineHeight: '1' }}>{m.value}</div>
                  <div style={{ fontSize: '0.8rem', color: m.positive ? '#4ADE80' : '#F87171', fontWeight: 'bold' }}>{m.trend}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Recent Leads Table */}
          <div style={{ background: '#0A0A0A', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '12px', overflow: 'hidden' }}>
            <div style={{ padding: '20px 24px', borderBottom: '1px solid rgba(255,255,255,0.06)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h2 style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#F0F0F0', margin: 0 }}>Recent Inquiries</h2>
              <button onClick={() => setActiveTab("leads")} style={{ fontSize: '0.85rem', color: '#B38CFF', background: 'none', border: 'none', cursor: 'pointer' }}>View All Leads →</button>
            </div>
            
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '600px' }}>
                <thead>
                  <tr style={{ background: 'rgba(255,255,255,0.02)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                    <th style={{ padding: '16px 24px', fontSize: '0.75rem', color: '#888', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 'normal' }}>Name</th>
                    <th style={{ padding: '16px 24px', fontSize: '0.75rem', color: '#888', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 'normal' }}>Interested In</th>
                    <th style={{ padding: '16px 24px', fontSize: '0.75rem', color: '#888', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 'normal' }}>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {recentLeads.map((lead) => (
                    <tr key={lead.id} style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                      <td style={{ padding: '16px 24px' }}>
                        <div style={{ fontSize: '0.9rem', color: '#F0F0F0', fontWeight: 'bold', marginBottom: '4px' }}>{lead.name}</div>
                        <div style={{ fontSize: '0.8rem', color: '#888' }}>{lead.email}</div>
                      </td>
                      <td style={{ padding: '16px 24px', fontSize: '0.85rem', color: '#ccc' }}>{lead.service}</td>
                      <td style={{ padding: '16px 24px' }}>
                        <span style={{ 
                          background: lead.status === 'New' ? 'rgba(107,47,235,0.2)' : 'rgba(255,255,255,0.05)', 
                          color: lead.status === 'New' ? '#B38CFF' : '#ccc',
                          padding: '4px 10px', borderRadius: '20px', fontSize: '0.7rem', fontWeight: 'bold', textTransform: 'uppercase'
                        }}>
                          {lead.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      );
    }

    if (activeTab === "leads") {
      return (
        <div className="dash-fade">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#F0F0F0' }}>Lead Pipeline</h2>
            <button className="btn-primary" style={{ padding: '8px 16px', fontSize: '0.85rem' }}>+ Add Lead manually</button>
          </div>
          {/* Kanban Board Mockup */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
            {["New", "Contacted", "Proposal Sent", "Closed"].map((col) => (
              <div key={col} style={{ background: '#0A0A0A', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '12px', padding: '16px', minHeight: '400px' }}>
                <div style={{ fontSize: '0.85rem', fontWeight: 'bold', color: '#888', textTransform: 'uppercase', marginBottom: '16px', display: 'flex', justifyContent: 'space-between' }}>
                  {col} <span style={{ background: 'rgba(255,255,255,0.1)', padding: '2px 8px', borderRadius: '12px', color: '#F0F0F0' }}>{col === "New" ? "1" : "0"}</span>
                </div>
                {/* Dummy Card in "New" column */}
                {col === "New" && (
                  <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '8px', padding: '16px', cursor: 'grab' }}>
                    <div style={{ fontWeight: 'bold', color: '#F0F0F0', marginBottom: '4px' }}>Rahul Sharma</div>
                    <div style={{ fontSize: '0.8rem', color: '#888', marginBottom: '12px' }}>Performance Ads</div>
                    <div style={{ fontSize: '0.75rem', color: '#B38CFF' }}>Just now</div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      );
    }

    if (activeTab === "content manager") {
      return (
        <div className="dash-fade">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#F0F0F0' }}>Manage Website Content</h2>
            <button className="btn-primary" style={{ padding: '8px 16px', fontSize: '0.85rem' }}>+ Create New Post</button>
          </div>
          <div style={{ background: '#0A0A0A', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '12px', overflow: 'hidden' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
              <thead>
                <tr style={{ background: 'rgba(255,255,255,0.02)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                  <th style={{ padding: '16px 24px', fontSize: '0.75rem', color: '#888', textTransform: 'uppercase' }}>Title</th>
                  <th style={{ padding: '16px 24px', fontSize: '0.75rem', color: '#888', textTransform: 'uppercase' }}>Type</th>
                  <th style={{ padding: '16px 24px', fontSize: '0.75rem', color: '#888', textTransform: 'uppercase' }}>Status</th>
                  <th style={{ padding: '16px 24px', fontSize: '0.75rem', color: '#888', textTransform: 'uppercase', textAlign: 'right' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {contentPosts.map((post) => (
                  <tr key={post.id} style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                    <td style={{ padding: '16px 24px' }}>
                      <div style={{ fontSize: '0.9rem', color: '#F0F0F0', fontWeight: 'bold' }}>{post.title}</div>
                      <div style={{ fontSize: '0.8rem', color: '#888' }}>{post.date}</div>
                    </td>
                    <td style={{ padding: '16px 24px', fontSize: '0.85rem', color: '#ccc' }}>{post.type}</td>
                    <td style={{ padding: '16px 24px' }}>
                      <span style={{ 
                        background: post.status === 'Published' ? 'rgba(74, 222, 128, 0.1)' : 'rgba(255, 255, 255, 0.1)', 
                        color: post.status === 'Published' ? '#4ADE80' : '#888',
                        padding: '4px 10px', borderRadius: '20px', fontSize: '0.7rem', fontWeight: 'bold', textTransform: 'uppercase'
                      }}>
                        {post.status}
                      </span>
                    </td>
                    <td style={{ padding: '16px 24px', textAlign: 'right' }}>
                      <button style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.2)', color: '#F0F0F0', padding: '6px 12px', borderRadius: '4px', fontSize: '0.8rem', cursor: 'pointer' }}>Edit</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );
    }

    if (activeTab === "analytics") {
      return (
        <div className="dash-fade">
          <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#F0F0F0', marginBottom: '24px' }}>Traffic & Performance</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
            <div style={{ background: '#0A0A0A', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '12px', padding: '30px', minHeight: '250px', display: 'flex', flexDirection: 'column' }}>
              <div style={{ fontSize: '0.9rem', color: '#888', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '16px' }}>Website Visitors (Last 30 Days)</div>
              <div style={{ fontSize: '3rem', fontWeight: 'bold', color: '#F0F0F0', marginBottom: 'auto' }}>12,450</div>
              <div style={{ height: '60px', width: '100%', background: 'linear-gradient(to top, rgba(107,47,235,0.2), transparent)', borderBottom: '2px solid #6B2FEB' }}></div>
            </div>
            <div style={{ background: '#0A0A0A', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '12px', padding: '30px', minHeight: '250px', display: 'flex', flexDirection: 'column' }}>
              <div style={{ fontSize: '0.9rem', color: '#888', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '16px' }}>Top Traffic Sources</div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <li style={{ display: 'flex', justifyContent: 'space-between', color: '#F0F0F0', fontSize: '0.9rem' }}><span>Direct</span> <span>45%</span></li>
                <li style={{ display: 'flex', justifyContent: 'space-between', color: '#ccc', fontSize: '0.9rem' }}><span>Organic Search (Google)</span> <span>30%</span></li>
                <li style={{ display: 'flex', justifyContent: 'space-between', color: '#ccc', fontSize: '0.9rem' }}><span>Social (LinkedIn)</span> <span>15%</span></li>
                <li style={{ display: 'flex', justifyContent: 'space-between', color: '#ccc', fontSize: '0.9rem' }}><span>Referral</span> <span>10%</span></li>
              </ul>
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <main style={{ paddingTop: '120px', paddingBottom: '100px', minHeight: '100vh', paddingLeft: '5%', paddingRight: '5%', background: '#050505' }}>
      
      {/* Dashboard Header */}
      <div className="dash-fade" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '40px', borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: '20px', flexWrap: 'wrap', gap: '20px' }}>
        <div>
          <div className="section-label" style={{ marginBottom: '8px' }}>Admin Panel</div>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#F0F0F0', fontFamily: 'var(--font-display)', letterSpacing: '2px' }}>
            AGENCY OVERVIEW
          </h1>
        </div>
        <div style={{ display: 'flex', gap: '12px' }}>
          <button style={{ background: 'rgba(255,255,255,0.05)', color: '#F0F0F0', border: '1px solid rgba(255,255,255,0.1)', padding: '10px 20px', borderRadius: '6px', fontSize: '0.85rem', cursor: 'pointer' }}>
            Settings
          </button>
          <button className="btn-primary" style={{ padding: '10px 20px', fontSize: '0.85rem' }}>
            Export Data
          </button>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr', lg: '250px 1fr', gap: '40px', display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        
        {/* Sidebar Navigation */}
        <div className="dash-fade" style={{ width: '250px', flexShrink: 0 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {["overview", "leads", "content manager", "analytics"].map((tab) => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab)}
                style={{ 
                  textAlign: 'left', 
                  padding: '12px 16px', 
                  background: activeTab === tab ? 'rgba(107,47,235,0.15)' : 'transparent',
                  color: activeTab === tab ? '#B38CFF' : '#888',
                  border: activeTab === tab ? '1px solid rgba(107,47,235,0.3)' : '1px solid transparent',
                  borderRadius: '8px',
                  fontSize: '0.9rem',
                  fontWeight: activeTab === tab ? 'bold' : 'normal',
                  textTransform: 'capitalize',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Main Content Area */}
        <div style={{ flexGrow: 1, minWidth: '300px' }}>
          {renderTabContent()}
        </div>

      </div>
    </main>
  );
}