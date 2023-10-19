import { AlbumName } from "./AlbumName"
import{ ArtistName } from "./ArtistName"
import{ CoverImage } from "./CoverImage"
import  '../css/album.css';
export const Album = ({  artists, name, images }) => {
  return (
    <div className="box" >
      <AlbumName name={name} />
      <ArtistName artists={artists} /> 
      <CoverImage images={images} /> 
    </div>
  )
}
