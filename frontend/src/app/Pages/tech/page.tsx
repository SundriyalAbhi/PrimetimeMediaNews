import LatestNewsSection from '@/app/Components/Common/LatestNewsSection/LatestNewsSection'
import MoreFromSection from '@/app/Components/Common/MoreFromSection/MoreFromSection'
import NewsSection from '@/app/Components/Common/NewsSection/NewsSection'
import { PhotosSection } from '@/app/Components/Common/PhotosSection/Photos'
import { latestTechnologyNews } from '@/Data/LatestNewsSection/LatestNewsSection'
import { moreFromTechnologyData } from '@/Data/MoreFromSection/MoreFromSection'
import { technologySectionData } from '@/Data/NewsSection/NewsSection'
import React from 'react'

const page = () => {
  return (
    <>
    <NewsSection sectionTitle={technologySectionData.sectionTitle}
        subCategories={technologySectionData.subCategories}
        mainNews={technologySectionData.mainNews}
        topNews={technologySectionData.topNews}
        showSidebar={true}
        gridColumns={3}/>
        <LatestNewsSection
        sectionTitle="Latest Technology News"
        newsData={latestTechnologyNews}
        showReadMore={true}
        readMoreLink="/tech"
        columns={3}
      />
      <PhotosSection/>
      <MoreFromSection 
        sectionTitle="More From Technology" 
        items={moreFromTechnologyData}
        columns={2}
      />
    </>
  )
}

export default page