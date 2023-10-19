export const ArtistName = ({artists}) => {


  return (
    <div className="containerArtists">
      {
      artists.map((artist, index) => (
        <div key={index} className="item">
         <p>{artist.name}
          {index <artists.length - 1 && <span>, </span>}</p>
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

