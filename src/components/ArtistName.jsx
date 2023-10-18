export const ArtistName = ({artists}) => {
  return artists.map(item => {
   
 return (
        <div >
            { item.name } 
            </div>
)
})
}
