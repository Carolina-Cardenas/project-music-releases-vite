export const ArtistName = ({artists}) => {


  return (
    <div className="containerArtists">
      {
      artists.map((artist, index) => (
        <div key={index} className="item artist-name">
          <a href={artist.external_urls.spotify}>
            <p>{artist.name}
              {index <artists.length - 1 && <span>, </span>}
            </p>
          </a>
        </div>
      ))}      
    </div>
  );
}






  //   return artists.map(item => {
   
//  return (
//         <div key={item.id} >
//            <p>{ item.name }</p> 
//             </div>
// )
// })

