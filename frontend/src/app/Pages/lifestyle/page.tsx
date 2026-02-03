import LatestNewsSection from '@/app/Components/Common/LatestNewsSection/LatestNewsSection'
import MoreFromSection from '@/app/Components/Common/MoreFromSection/MoreFromSection'
import NewsCards from '@/app/Components/Common/NewsCard/NewsCard'
import NewsSection from '@/app/Components/Common/NewsSection/NewsSection'
import { PhotosSection } from '@/app/Components/Common/PhotosSection/Photos'
import { latestLifestyleNews } from '@/Data/LatestNewsSection/LatestNewsSection'
import { moreFromLifestyleData } from '@/Data/MoreFromSection/MoreFromSection'
import { lifestyleNewsData } from '@/Data/NewsCardData/NewsCardData'
import { lifestyleSectionData } from '@/Data/NewsSection/NewsSection'
import React from 'react'

const page = () => {
  return (
    <>
    <NewsSection sectionTitle={lifestyleSectionData.sectionTitle}
        subCategories={lifestyleSectionData.subCategories}
        mainNews={lifestyleSectionData.mainNews}
        topNews={lifestyleSectionData.topNews}
        showSidebar={true}
        gridColumns={3}/>
    <LatestNewsSection
    sectionTitle="Latest Lifestyle News"
        newsData={latestLifestyleNews}
        showReadMore={true}
        readMoreLink="/india"
        columns={3}/>
    <NewsCards data={lifestyleNewsData} columns={3} />
    <PhotosSection/>
     <MoreFromSection 
        sectionTitle="More From Lifestyle" 
        items={moreFromLifestyleData}
        columns={2}
      />
  </>
  )
}

export default page