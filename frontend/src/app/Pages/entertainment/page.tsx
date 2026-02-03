import LatestNewsSection from '@/app/Components/Common/LatestNewsSection/LatestNewsSection'
import MoreFromSection from '@/app/Components/Common/MoreFromSection/MoreFromSection'
import NewsSection from '@/app/Components/Common/NewsSection/NewsSection'
import { PhotosSection } from '@/app/Components/Common/PhotosSection/Photos'
import { latestEntertainmentNews, latestSportsNews } from '@/Data/LatestNewsSection/LatestNewsSection'
import { moreFromEntertainmentData, moreFromSportsData } from '@/Data/MoreFromSection/MoreFromSection'
import { entertainmentSectionData, sportsSectionData } from '@/Data/NewsSection/NewsSection'
import React from 'react'

const page = () => {
  return (
    <>
    <NewsSection sectionTitle={entertainmentSectionData.sectionTitle}
        subCategories={entertainmentSectionData.subCategories}
        mainNews={entertainmentSectionData.mainNews}
        topNews={entertainmentSectionData.topNews}
        showSidebar={true}
        gridColumns={3}/>
        <LatestNewsSection
        sectionTitle="Latest Entertainment News"
        newsData={latestEntertainmentNews}
        showReadMore={true}
        readMoreLink="/entertainment"
        columns={3}
      />
      <PhotosSection/>
      <MoreFromSection 
        sectionTitle="More From Entertainment" 
        items={moreFromEntertainmentData}
        columns={2}
      />
    </>
  )
}

export default page