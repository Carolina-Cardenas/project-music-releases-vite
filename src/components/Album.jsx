import { AlbumName } from "./AlbumName"
import{ ArtistName } from "./ArtistName"
import{ CoverImage } from "./CoverImage"
export const Album = ({  artists, name, images }) => {
  return (
    <div >Album
      <AlbumName name={name} />
      <ArtistName artists={artists} />
      <CoverImage images={images} />
    </div>
  )
}
