import LatestNewsSection from '@/app/Components/Common/LatestNewsSection/LatestNewsSection'
import NewsSection from '@/app/Components/Common/NewsSection/NewsSection'
import { PhotosSection } from '@/app/Components/Common/PhotosSection/Photos'
import { VideosSection } from '@/app/Components/Common/VideosSection/VideosSection'
import { latestHealthNews } from '@/Data/LatestNewsSection/LatestNewsSection'
import { healthSectionData } from '@/Data/NewsSection/NewsSection'
import React from 'react'

const page = () => {
  return (
    <>
    <NewsSection sectionTitle={healthSectionData.sectionTitle}
        subCategories={healthSectionData.subCategories}
        mainNews={healthSectionData.mainNews}
        topNews={healthSectionData.topNews}
        showSidebar={true}
        gridColumns={3}/>
        <LatestNewsSection
                sectionTitle="Latest Health News"
                newsData={latestHealthNews}
                showReadMore={true}
                readMoreLink="/health"
                columns={3}
              /> 
        <VideosSection/>
    <PhotosSection/>
    </>
  )
}

export default page