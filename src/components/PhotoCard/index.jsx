import React, {useEffect, useRef, useState} from 'react'
import { ImgWrapper, Img, Button, Article } from './styles'
import {MdFavoriteBorder, MdFavorite} from 'react-icons/md'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import {useNearScreen} from '../../hooks/useNearScreen'
const default_img = 'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png'

const PhotoCard = ({id, likes=0, src = default_img}) => {
  const [liked, setLiked] = useLocalStorage(key, false)
  const key = `like-${id}`
  const [show, ref] = useNearScreen()
  
  
  const Icon = liked ? MdFavorite : MdFavoriteBorder

  return (
    <Article ref={ref}>
      {
        show && <>
           <a href={`/detail/${id}`} >
            <ImgWrapper>
                <Img src={src}/>
            </ImgWrapper>
           </a>
          <Button onClick={() => setLiked(!liked)}>
              <Icon size='32px'/> {likes} likes!
          </Button>
        </>
      }
       
    </Article>
  )
}

export {PhotoCard}