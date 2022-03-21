import { memo, useMemo } from 'react'

import { JSONTree } from 'react-json-tree'

export const JsonTree = memo(function JsonTree({ data }) {
  const memoizedData = useMemo(() => data, [data])
  return <JSONTree data={memoizedData}>JSONTree</JSONTree>
})
