import useBookmarks from './useBookmarks'

function BookMark({
  bookmark,
}: {
  bookmark: chrome.bookmarks.BookmarkTreeNode
}) {
  return (
    <a
      href={bookmark.url}
      style={{ display: 'flex', alignItems: 'center', gap: 4 }}
    >
      <img
        src={`https://s2.googleusercontent.com/s2/favicons?domain=${bookmark.url}`}
      />
      {bookmark.title}
    </a>
  )
}

function Bookmarks() {
  const bookmarks = useBookmarks()

  return (
    <div
      style={{
        position: 'absolute',
        top: 24,
        left: 24,
        display: 'flex',
        gap: 24,
        flexWrap: 'wrap',
      }}
    >
      {bookmarks.map((bookmark) => (
        <BookMark bookmark={bookmark} />
      ))}
    </div>
  )
}

export default Bookmarks
