import { useEffect, useState } from 'react'

const useBookmarks = () => {
  const [bookmarks, setBookMarks] = useState<
    Array<chrome.bookmarks.BookmarkTreeNode>
  >([])

  useEffect(() => {
    chrome.bookmarks.getChildren('1', (bookmarks) => {
      setBookMarks(bookmarks)
    })
  }, [])

  return bookmarks
}

export default useBookmarks
