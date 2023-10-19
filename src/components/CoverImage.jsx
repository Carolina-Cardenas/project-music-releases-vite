export const CoverImage = ({images}) => {
const selectedImage = images.find(img => img.width ===300)

console.log(selectedImage)
 return ( 
    <div className="album">
        <img src={selectedImage.url} alt="Medium Image" className="album-cover" />
        <div className="overlay">
        <button className="favorite-button">	&#9825;</button>
        <div className="play-button-container">
            <button className="play-button">&#9654;</button>
          </div>
        <button className="ellipsis-button">&#8230;</button>
  </div>
    </div>
  )
}





























// export const CoverImage = ({images}) => {
//     const mediumImage = images.find(image => image.width === 300);
//     // return images.map(item => {
   
//       return (
//         <div>
//         {mediumImage && (
//             <img src={mediumImage.url} alt="Medium Image" />
//           )}
//           </div>
//       );
//       //}
//  }
 

