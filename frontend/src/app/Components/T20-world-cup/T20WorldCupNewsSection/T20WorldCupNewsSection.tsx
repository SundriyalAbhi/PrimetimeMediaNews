'use client';
import React, { useState } from 'react';
import styles from './T20WorldCupNewsSection.module.scss';
import Image from 'next/image';
import Link from 'next/link';

interface NewsItem {
  id: string;
  image: string;
  title: string;
  slug: string;
}

interface ScheduleMatch {
  id: string;
  team1: string;
  team2: string;
  team1Flag: string;
  team2Flag: string;
  venue: string;
  date: string;
  matchNumber: string;
  group: string;
}

interface PointsTableTeam {
  team: string;
  m: number;
  w: number;
  l: number;
  nr: number;
  nrr: string;
  pts: number;
}

const newsData: NewsItem[] = [
  {
    id: '1',
    image: '/images/mayank-yadav.jpg',
    title: 'Mayank Yadav set to return in T20 World Cup warm-ups, Tilak Varma, Riyan Parag set to be cleared soon',
    slug: 'mayank-yadav-t20-world-cup-return'
  },
  {
    id: '2',
    image: '/images/kamindu-mendis.jpg',
    title: 'Why is Kamindu Mendis dropped from T20 World Cup 2026? Sri Lanka captain Dasun Shanaka answers',
    slug: 'kamindu-mendis-dropped-t20-world-cup'
  },
  {
    id: '3',
    image: '/images/t20-trophy.jpg',
    title: 'T20 World Cup 2026 warm up matches schedule confirmed, two Indian teams to play',
    slug: 't20-world-cup-warm-up-schedule'
  },
  {
    id: '4',
    image: '/images/rohit-sharma.jpg',
    title: 'Rohit Sharma wants India to play both Varun Chakravarthy, Kuldeep Yadav in T20 World Cup',
    slug: 'rohit-sharma-varun-kuldeep-t20'
  },
  {
    id: '5',
    image: '/images/icc-pakistan.jpg',
    title: "ICC's massive U-turn set to shock Pakistan amid T20 World Cup boycott row, Bangladesh on standby",
    slug: 'icc-pakistan-t20-world-cup-boycott'
  },
  {
    id: '6',
    image: '/images/ajinkya-rahane.jpg',
    title: "'He plays that high-risk game: Ajinkya Rahane advises India to prepare around star batter ahead of T20 WC 2026",
    slug: 'ajinkya-rahane-india-t20-advice'
  },
  {
    id: '7',
    image: '/images/pcb-secretary.jpg',
    title: "Former PCB secretary questions Board's 'purpose' for Pakistan's potential T20 World Cup pull out",
    slug: 'pcb-pakistan-t20-world-cup-pullout'
  },
  {
    id: '8',
    image: '/images/west-indies-retirement.jpg',
    title: 'Disappointed with T20 World Cup snub, West Indies cricketer hints at retirement from international cricket',
    slug: 'west-indies-t20-retirement'
  },
  {
    id: '9',
    image: '/images/italy-ireland.jpg',
    title: 'Italy, ranked 29th in ICC T20I rankings, upset Ireland ahead of T20 World Cup 2026',
    slug: 'italy-upset-ireland-t20'
  }
];

const pointsTableData = {
  groupA: [
    { team: 'PAK', m: 0, w: 0, l: 0, nr: 0, nrr: '0', pts: 0 },
    { team: 'IND', m: 0, w: 0, l: 0, nr: 0, nrr: '0', pts: 0 },
    { team: 'NED', m: 0, w: 0, l: 0, nr: 0, nrr: '0', pts: 0 },
    { team: 'USA', m: 0, w: 0, l: 0, nr: 0, nrr: '0', pts: 0 },
    { team: 'NAM', m: 0, w: 0, l: 0, nr: 0, nrr: '0', pts: 0 }
  ],
  groupB: [
    { team: 'AUS', m: 0, w: 0, l: 0, nr: 0, nrr: '0', pts: 0 },
    { team: 'IRE', m: 0, w: 0, l: 0, nr: 0, nrr: '0', pts: 0 },
    { team: 'SL', m: 0, w: 0, l: 0, nr: 0, nrr: '0', pts: 0 },
    { team: 'ZIM', m: 0, w: 0, l: 0, nr: 0, nrr: '0', pts: 0 },
    { team: 'OMA', m: 0, w: 0, l: 0, nr: 0, nrr: '0', pts: 0 }
  ],
  groupC: [
    { team: 'SCO', m: 0, w: 0, l: 0, nr: 0, nrr: '0', pts: 0 },
    { team: 'WI', m: 0, w: 0, l: 0, nr: 0, nrr: '0', pts: 0 },
    { team: 'ENG', m: 0, w: 0, l: 0, nr: 0, nrr: '0', pts: 0 },
    { team: 'NEP', m: 0, w: 0, l: 0, nr: 0, nrr: '0', pts: 0 },
    { team: 'ITA', m: 0, w: 0, l: 0, nr: 0, nrr: '0', pts: 0 }
  ],
  groupD: [
    { team: 'NZ', m: 0, w: 0, l: 0, nr: 0, nrr: '0', pts: 0 },
    { team: 'UAE', m: 0, w: 0, l: 0, nr: 0, nrr: '0', pts: 0 },
    { team: 'SA', m: 0, w: 0, l: 0, nr: 0, nrr: '0', pts: 0 },
    { team: 'BAN', m: 0, w: 0, l: 0, nr: 0, nrr: '0', pts: 0 },
    { team: 'PNG', m: 0, w: 0, l: 0, nr: 0, nrr: '0', pts: 0 }
  ]
};

const scheduleData: ScheduleMatch[] = [
  {
    id: '1',
    team1: 'Pakistan',
    team2: 'Netherlands',
    team1Flag: '/flags/pak.png',
    team2Flag: '/flags/ned.png',
    venue: 'Sinhalese Sports Club Ground, Sri Lanka',
    date: '07 Feb, 2026',
    matchNumber: '1st Match',
    group: 'Group A'
  },
  {
    id: '2',
    team1: 'West Indies',
    team2: 'Scotland',
    team1Flag: '/flags/wi.png',
    team2Flag: '/flags/sco.png',
    venue: 'Eden Gardens, India',
    date: '07 Feb, 2026',
    matchNumber: '2nd Match',
    group: 'Group C'
  }
];

const T20WorldCupSection: React.FC = () => {
  const [scheduleTab, setScheduleTab] = useState<'current' | 'upcoming' | 'recent'>('upcoming');

  return (
    <section className={styles.t20Section}>
      <div className={styles.containerInner}>
        <div className={styles.titleWrapper}>
          <div className={styles.titleIcon}></div>
          <h2 className={styles.mainTitle}>T20 CRICKET WORLD CUP 2026</h2>
        </div>

        <div className={styles.contentGrid}>
          <div className={styles.leftColumn}>
            <div className={styles.featuredCard}>
              <div className={styles.featuredImageWrapper}>
                <Image 
                  src="/images/ravi-shastri-india.jpg" 
                  alt="Ravi Shastri India T20"
                  fill
                  className={styles.featuredImage}
                />
              </div>
              <div className={styles.featuredContent}>
                <h3 className={styles.featuredTitle}>
                  'Very explosive': Ravi Shastri makes bold claim around team India ahead of T20 World Cup 2026
                </h3>
              </div>
            </div>

            <div className={styles.newsGrid}>
              {newsData.slice(0, 6).map((news, index) => (
                <Link 
                  key={news.id} 
                  href={`/cricket/${news.slug}`}
                  className={styles.newsCard}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={styles.newsImageWrapper}>
                    <Image 
                      src={news.image} 
                      alt={news.title}
                      fill
                      className={styles.newsImage}
                    />
                  </div>
                  <p className={styles.newsTitle}>{news.title}</p>
                </Link>
              ))}
            </div>

            <div className={styles.moreNewsGrid}>
              {newsData.slice(6).map((news, index) => (
                <Link 
                  key={news.id} 
                  href={`/cricket/${news.slug}`}
                  className={styles.moreNewsCard}
                  style={{ animationDelay: `${(index + 6) * 0.1}s` }}
                >
                  <div className={styles.moreNewsImageWrapper}>
                    <Image 
                      src={news.image} 
                      alt={news.title}
                      fill
                      className={styles.moreNewsImage}
                    />
                  </div>
                  <p className={styles.moreNewsTitle}>{news.title}</p>
                </Link>
              ))}
            </div>

            <button className={styles.readMoreButton}>
              <span>Read More</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            <div className={styles.scheduleSection}>
              <div className={styles.scheduleTitleWrapper}>
                <div className={styles.titleIcon}></div>
                <h3 className={styles.scheduleTitle}>SCHEDULE</h3>
              </div>

              <div className={styles.scheduleTabs}>
                <button 
                  className={`${styles.scheduleTab} ${scheduleTab === 'current' ? styles.active : ''}`}
                  onClick={() => setScheduleTab('current')}
                >
                  CURRENT
                </button>
                <button 
                  className={`${styles.scheduleTab} ${scheduleTab === 'upcoming' ? styles.active : ''}`}
                  onClick={() => setScheduleTab('upcoming')}
                >
                  UPCOMING
                </button>
                <button 
                  className={`${styles.scheduleTab} ${scheduleTab === 'recent' ? styles.active : ''}`}
                  onClick={() => setScheduleTab('recent')}
                >
                  RECENT
                </button>
              </div>

              <div className={styles.scheduleMatches}>
                {scheduleData.map((match, index) => (
                  <div 
                    key={match.id} 
                    className={styles.scheduleMatch}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className={styles.matchInfo}>
                      <p className={styles.matchMeta}>
                        {match.matchNumber}, {match.group}, {match.venue} <span className={styles.matchDate}>{match.date}</span>
                      </p>
                      <div className={styles.teamsInfo}>
                        <div className={styles.teamItem}>
                          <Image 
                            src={match.team1Flag} 
                            alt={match.team1}
                            width={20}
                            height={20}
                            className={styles.teamFlag}
                          />
                          <span className={styles.teamName}>{match.team1}</span>
                        </div>
                        <div className={styles.teamItem}>
                          <Image 
                            src={match.team2Flag} 
                            alt={match.team2}
                            width={20}
                            height={20}
                            className={styles.teamFlag}
                          />
                          <span className={styles.teamName}>{match.team2}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className={styles.rightColumn}>
            <div className={styles.adBanner}>
              <Image 
                src="/images/swadeshi-ad.jpg" 
                alt="Advertisement"
                fill
                className={styles.adImage}
              />
              <span className={styles.adLabel}>Advertisement</span>
            </div>

            <div className={styles.pointsTableWrapper}>
              <div className={styles.pointsHeader}>
                <h3 className={styles.pointsTitle}>ICC MENS T20 WORLD CUP POINTS TABLE</h3>
              </div>

              <div className={styles.tableHeader}>
                <span className={styles.thTeams}>TEAMS</span>
                <span className={styles.th}>M</span>
                <span className={styles.th}>W</span>
                <span className={styles.th}>L</span>
                <span className={styles.th}>NR</span>
                <span className={styles.th}>NRR</span>
                <span className={styles.th}>PTS</span>
              </div>

              {Object.entries(pointsTableData).map(([groupKey, teams], groupIndex) => (
                <div key={groupKey} className={styles.groupSection}>
                  <div className={styles.groupHeader}>
                    GROUP {String.fromCharCode(65 + groupIndex)}
                  </div>
                  {teams.map((team, index) => (
                    <div key={team.team} className={styles.tableRow}>
                      <span className={styles.tdTeam}>{team.team}</span>
                      <span className={styles.td}>{team.m}</span>
                      <span className={styles.td}>{team.w}</span>
                      <span className={styles.td}>{team.l}</span>
                      <span className={styles.td}>{team.nr}</span>
                      <span className={styles.td}>{team.nrr}</span>
                      <span className={styles.td}>{team.pts}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default T20WorldCupSection;
