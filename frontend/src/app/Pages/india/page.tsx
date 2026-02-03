import Footer from '@/app/Components/Common/Footer/Footer'
import MoreFromSection from '@/app/Components/Common/MoreFromSection/MoreFromSection'
import Navbar from '@/app/Components/Common/Navbar/Navber'
import NewsCards from '@/app/Components/Common/NewsCard/NewsCard'
import { PhotosSection } from '@/app/Components/Common/PhotosSection/Photos'
import  { LatestNewsSection } from '@/app/Components/Common/LatestNewsSection/LatestNewsSection'
import NewsSection from '@/app/Components/Common/NewsSection/NewsSection'
import { moreFromIndiaData } from '@/Data/MoreFromSection/MoreFromSection'
import { indiaMainNews, indiaSectionData } from '@/Data/NewsSection/NewsSection'
import { stateNewsData } from '@/Data/SampleStateNewsData'
import React from 'react'
import { latestIndiaNews } from '@/Data/LatestNewsSection/LatestNewsSection'

const page = () => {
  return (
  <>
    <NewsSection sectionTitle={indiaSectionData.sectionTitle}
        subCategories={indiaSectionData.subCategories}
        mainNews={indiaSectionData.mainNews}
        topNews={indiaSectionData.topNews}
        showSidebar={true}
        gridColumns={3}/>
    <LatestNewsSection
    sectionTitle="Latest India News"
        newsData={latestIndiaNews}
        showReadMore={true}
        readMoreLink="/india"
        columns={3}/>
    <NewsCards data={stateNewsData} columns={3} />
    <PhotosSection/>
     <MoreFromSection 
        sectionTitle="More From India" 
        items={moreFromIndiaData}
        columns={2}
      />
  </>
  )
}

export default page