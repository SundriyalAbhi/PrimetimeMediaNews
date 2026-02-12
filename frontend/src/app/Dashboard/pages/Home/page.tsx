'use client'

import React, { useState } from 'react'
import ProtectedRoute from "../../ProtectedRoute/ProtectedRoute"
import MainSection from '@/app/Dashboard/Components/Home/MainSection/Main'

const sections = [
  { id: 'india', label: 'India', icon: '🇮🇳' },
  { id: 'sports', label: 'Sports', icon: '⚽' },
  { id: 'business', label: 'Business', icon: '📈' },
  { id: 'technology', label: 'Tech', icon: '💻' },
  { id: 'entertainment', label: 'Entertainment', icon: '🎬' },
  { id: 'lifestyle', label: 'Lifestyle', icon: '✨' },
  { id: 'world', label: 'World', icon: '🌍' },
  { id: 'health', label: 'Health', icon: '🏥' },
  { id: 'state', label: 'State', icon: '📰' },
] as const

type SectionId = typeof sections[number]['id']

export default function NewsAdminPage() {
  const [activeSection, setActiveSection] = useState<SectionId>('india')

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100 p-3 sm:p-4 md:p-5 lg:p-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-4 lg:gap-6">

          <div className="lg:hidden sticky top-0 z-40 bg-gradient-to-r from-slate-900/95 to-slate-800/95 backdrop-blur-xl border-b border-slate-700/60 py-3 px-4 shadow-lg">
            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none snap-x snap-mandatory">
              {sections.map(section => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`
                    flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 snap-center whitespace-nowrap
                    border border-slate-700/60 backdrop-blur-lg shadow-sm
                    ${activeSection === section.id
                      ? 'bg-gradient-to-r from-blue-600/40 to-indigo-600/40 text-white scale-105 shadow-blue-500/30 border-blue-500/50'
                      : 'bg-slate-800/60 text-slate-200 hover:bg-slate-700/70 hover:border-slate-600'
                    }
                  `}
                >
                  <span className="text-lg">{section.icon}</span>
                  <span>{section.label}</span>
                </button>
              ))}
            </div>
          </div>

          <aside className="hidden lg:block w-72 bg-slate-800/50 backdrop-blur-xl border border-slate-700/60 rounded-2xl p-4 shadow-2xl sticky top-6 h-fit max-h-[calc(100vh-3rem)]">
            <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4">
              Sections
            </h1>
            <nav className="space-y-1.5">
              {sections.map(section => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`
                    w-full flex items-center gap-3 p-3 rounded-xl transition-all duration-200
                    ${activeSection === section.id
                      ? 'bg-gradient-to-r from-blue-600/30 to-indigo-600/30 text-white shadow-lg shadow-blue-500/20 border border-blue-500/40'
                      : 'text-slate-300 hover:bg-slate-700/50 hover:text-white'
                    }
                  `}
                >
                  <span className="text-2xl">{section.icon}</span>
                  <span className="font-medium">{section.label}</span>
                  {activeSection === section.id && (
                    <div className="w-2 h-2 bg-blue-400 rounded-full ml-auto animate-pulse" />
                  )}
                </button>
              ))}
            </nav>
          </aside>

          <main className="flex-1 space-y-6 pb-8 lg:pb-0">
            <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-5 shadow-xl">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <span className="text-4xl p-3 bg-slate-900/60 rounded-xl shadow-inner">
                    {sections.find(s => s.id === activeSection)?.icon}
                  </span>
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-bold capitalize">
                      {sections.find(s => s.id === activeSection)?.label} News
                    </h2>
                    <p className="text-slate-400 mt-1">Manage articles • {activeSection}</p>
                  </div>
                </div>
                <div className="px-5 py-2.5 bg-blue-600/20 border border-blue-500/40 rounded-xl text-blue-100 font-medium backdrop-blur-lg">
                  Active: <span className="font-bold capitalize">{activeSection}</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/40 backdrop-blur-xl border border-slate-700/50 rounded-2xl shadow-2xl overflow-hidden">
              <MainSection section={activeSection} />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-5 text-center shadow-lg hover:border-blue-500/40 transition-colors">
                <div className="text-3xl font-bold text-blue-400">9</div>
                <div className="text-slate-400 mt-1">Sections</div>
              </div>
              <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-5 text-center shadow-lg hover:border-emerald-500/40 transition-colors">
                <div className="text-3xl font-bold text-emerald-400">248</div>
                <div className="text-slate-400 mt-1">Articles</div>
              </div>
              <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-5 text-center shadow-lg hover:border-purple-500/40 transition-colors">
                <div className="text-3xl font-bold text-purple-400">12.4k</div>
                <div className="text-slate-400 mt-1">Views</div>
              </div>
              <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-5 text-center shadow-lg hover:border-amber-500/40 transition-colors">
                <div className="text-3xl font-bold text-amber-400">47</div>
                <div className="text-slate-400 mt-1">Drafts</div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </ProtectedRoute>
  )
}