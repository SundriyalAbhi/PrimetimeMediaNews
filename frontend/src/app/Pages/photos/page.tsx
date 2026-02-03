import NewsSection from '@/app/Components/Common/NewsSection/NewsSection'
import { PhotosSection } from '@/app/Components/Common/PhotosSection/Photos'
import { VideosSection } from '@/app/Components/Common/VideosSection/VideosSection'
import Entertainment from '@/app/Components/Home/EntertainmentNewsSection/EntertainmentNews'
import Sports from '@/app/Components/Home/SportsNewsSection/SportsNews'
import { photosSectionData } from '@/Data/NewsSection/NewsSection'
import React from 'react'

const page = () => {
  return (
    <>
     <NewsSection sectionTitle={photosSectionData.sectionTitle}
        subCategories={photosSectionData.subCategories}
        mainNews={photosSectionData.mainNews}
        topNews={photosSectionData.topNews}
        showSidebar={true}
        gridColumns={3}/>
    
    <PhotosSection/>
     <VideosSection/>
     <Entertainment/>
     <Sports/>
  </>
  )
}

export default page