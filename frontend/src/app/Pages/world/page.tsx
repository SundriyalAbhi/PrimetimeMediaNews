import LatestNewsSection from '@/app/Components/Common/LatestNewsSection/LatestNewsSection'
import MoreFromSection from '@/app/Components/Common/MoreFromSection/MoreFromSection'
import NewsSection from '@/app/Components/Common/NewsSection/NewsSection'
import { PhotosSection } from '@/app/Components/Common/PhotosSection/Photos'
import { latestWorldNews } from '@/Data/LatestNewsSection/LatestNewsSection'
import { moreFromWorldData } from '@/Data/MoreFromSection/MoreFromSection'
import { worldSectionData } from '@/Data/NewsSection/NewsSection'
import React from 'react'

const page = () => {
  return (
    <>
     <NewsSection sectionTitle={worldSectionData.sectionTitle}
        subCategories={worldSectionData.subCategories}
        mainNews={worldSectionData.mainNews}
        topNews={worldSectionData.topNews}
        showSidebar={true}
        gridColumns={3}/>
        <LatestNewsSection
        sectionTitle="Latest World News"
        newsData={latestWorldNews}
        showReadMore={true}
        readMoreLink="/world"
        columns={3}
      />
      <PhotosSection/>
      <MoreFromSection 
        sectionTitle="More From World" 
        items={moreFromWorldData}
        columns={2}
      />

    </>
  )
}

export default page