import LatestNewsSection from '@/app/Components/Common/LatestNewsSection/LatestNewsSection'
import MoreFromSection from '@/app/Components/Common/MoreFromSection/MoreFromSection'
import NewsCards from '@/app/Components/Common/NewsCard/NewsCard'
import NewsSection from '@/app/Components/Common/NewsSection/NewsSection'
import { PhotosSection } from '@/app/Components/Common/PhotosSection/Photos'
import { latestBusinessNews } from '@/Data/LatestNewsSection/LatestNewsSection'
import { moreFromBusinessData } from '@/Data/MoreFromSection/MoreFromSection'
import { businessNewsData } from '@/Data/NewsCardData/NewsCardData'
import { businessSectionData } from '@/Data/NewsSection/NewsSection'
import React from 'react'

const page = () => {
  return (
   <>
   <NewsSection sectionTitle={businessSectionData.sectionTitle}
        subCategories={businessSectionData.subCategories}
        mainNews={businessSectionData.mainNews}
        topNews={businessSectionData.topNews}
        showSidebar={true}
        gridColumns={3}/>
        <LatestNewsSection
        sectionTitle="Latest Business News"
        newsData={latestBusinessNews}
        showReadMore={true}
        readMoreLink="/business"
        columns={3}
      />
      <NewsCards data={businessNewsData} columns={3}/>
      <PhotosSection/>
      <MoreFromSection 
        sectionTitle="More From Business" 
        items={moreFromBusinessData}
        columns={2}
      />
   </>
  )
}

export default page