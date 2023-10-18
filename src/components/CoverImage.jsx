export const CoverImage = ({images}) => {
  return images.map(item => {
   
      return (
          <div >
              <img src={ item.url } />
          </div>
      );
 })
}
