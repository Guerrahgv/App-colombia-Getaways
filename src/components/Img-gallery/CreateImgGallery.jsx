import React from 'react'
import Masonry, {ResponsiveMasonry} from 'react-responsive-masonry'
import galleryImgs from './gallery-img'


const CreateImgGallery = () => {
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{350:1, 768:3, 992:3}}>
        <Masonry gutter='1rem'>
            {
                galleryImgs.map((item, index)=>(
                    <img  className='masonry__img' src={item} key={index} alt="" style={{'width':'95%', 'display':'block', 'borderRadius':'10px'}} />
                ))
            }
        </Masonry>
    </ResponsiveMasonry>
  )
}

export default CreateImgGallery