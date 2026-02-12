'use client'

import React, { useState } from 'react'
import ProtectedRoute from "../../ProtectedRoute/ProtectedRoute"
import MainSection from '@/app/Dashboard/Components/Home/MainSection/Main'
import styles from './Page.module.scss'

const sections = [
  { id: 'india' as const, label: 'India', icon: '🇮🇳' },
  { id: 'sports' as const, label: 'Sports', icon: '⚽' },
  { id: 'business' as const, label: 'Business', icon: '📈' },
  { id: 'technology' as const, label: 'Tech', icon: '💻' },
  { id: 'entertainment' as const, label: 'Entertainment', icon: '🎬' },
  { id: 'lifestyle' as const, label: 'Lifestyle', icon: '✨' },
  { id: 'world' as const, label: 'World', icon: '🌍' },
  { id: 'health' as const, label: 'Health', icon: '🏥' },
  { id: 'state' as const, label: 'State', icon: '📰' },
] as const

type SectionId = typeof sections[number]['id']

export default function NewsAdminPage() {
  const [activeSection, setActiveSection] = useState<SectionId>('india')

  const activeSectionData = sections.find(s => s.id === activeSection)

  return (
    <ProtectedRoute>
      <div className={styles.pageContainer}>
        <div className={styles.contentWrapper}>
          {/* Mobile Tabs */}
          <div className={styles.mobileTabs}>
            <div className={styles.mobileTabsContainer}>
              <div className={styles.tabsList}>
                {sections.map(section => (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`${styles.tabButton} ${activeSection === section.id ? styles.active : ''}`}
                  >
                    <span className={styles.tabIcon}>{section.icon}</span>
                    <span>{section.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Desktop Sidebar */}
          <aside className={styles.desktopSidebar}>
            <h1 className={styles.sidebarTitle}>Sections</h1>
            <nav className={styles.sidebarNav}>
              {sections.map(section => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`${styles.sidebarButton} ${activeSection === section.id ? styles.active : ''}`}
                >
                  <span className={styles.sidebarIcon}>{section.icon}</span>
                  <span>{section.label}</span>
                  {activeSection === section.id && (
                    <div className={styles.activeIndicator} />
                  )}
                </button>
              ))}
            </nav>
          </aside>

          {/* Main Content */}
          <main className={styles.mainContent}>
            <div className={styles.headerCard}>
              <div className={styles.headerContent}>
                <div className={styles.headerMain}>
                  <span className={styles.headerIcon}>
                    {activeSectionData?.icon}
                  </span>
                  <div className={styles.headerText}>
                    <h2 className={styles.pageTitle}>
                      {activeSectionData?.label} News
                    </h2>
                    <p className={styles.subtitle}>
                      Manage articles • {activeSection}
                    </p>
                  </div>
                </div>
                <div className={styles.activeBadge}>
                  Active: <span>{activeSection}</span>
                </div>
              </div>
            </div>

            <div className={styles.contentCard}>
              <MainSection section={activeSection} />
            </div>

            <div className={styles.statsGrid}>
              <div className={styles.statCard}>
                <div className={styles.statNumber}>9</div>
                <div className={styles.statLabel}>Sections</div>
              </div>
              <div className={styles.statCard}>
                <div className={styles.statNumber}>248</div>
                <div className={styles.statLabel}>Articles</div>
              </div>
              <div className={styles.statCard}>
                <div className={styles.statNumber}>12.4k</div>
                <div className={styles.statLabel}>Views</div>
              </div>
              <div className={styles.statCard}>
                <div className={styles.statNumber}>47</div>
                <div className={styles.statLabel}>Drafts</div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </ProtectedRoute>
  )
}
