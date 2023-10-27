import { AlbumName } from "./AlbumName"
import{ ArtistName } from "./ArtistName"
import{ CoverImage } from "./CoverImage"

export const Album = ({  artists, name, images,external_urls }) => {
  return (
    <div className="box" >
      <CoverImage images={images} /> 
      <div >
        <AlbumName name={name} external_urls={external_urls} />
        <ArtistName artists={artists} />
      </div>
    </div>
  );
};
