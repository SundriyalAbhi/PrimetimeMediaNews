import LatestNewsSection from '@/app/Components/Common/LatestNewsSection/LatestNewsSection'
import MoreFromSection from '@/app/Components/Common/MoreFromSection/MoreFromSection'
import NewsSection from '@/app/Components/Common/NewsSection/NewsSection'
import { PhotosSection } from '@/app/Components/Common/PhotosSection/Photos'
import { latestSportsNews } from '@/Data/LatestNewsSection/LatestNewsSection'
import { moreFromSportsData } from '@/Data/MoreFromSection/MoreFromSection'
import { sportsSectionData } from '@/Data/NewsSection/NewsSection'
import React from 'react'

const page = () => {
  return (
   <>
   <NewsSection sectionTitle={sportsSectionData.sectionTitle}
        subCategories={sportsSectionData.subCategories}
        mainNews={sportsSectionData.mainNews}
        topNews={sportsSectionData.topNews}
        showSidebar={true}
        gridColumns={3}/>
        <LatestNewsSection
        sectionTitle="Latest Sports News"
        newsData={latestSportsNews}
        showReadMore={true}
        readMoreLink="/sports"
        columns={3}
      />
      <PhotosSection/>
      <MoreFromSection 
        sectionTitle="More From Sports" 
        items={moreFromSportsData}
        columns={2}
      />
   </>
  )
}

export default page