export const AlbumName = ({name, external_urls}) => {
  return (
    <div>
      <a className="item album-title" href={external_urls.spotify}>{name}</a>
    </div>
  )
}
