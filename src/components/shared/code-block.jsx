import { useState } from 'react'

import { Box, Checkbox, Spinner, Stack } from '@chakra-ui/react'
import { JSONTree } from 'react-json-tree'
import { Prism } from 'react-syntax-highlighter'
import { materialOceanic } from 'react-syntax-highlighter/dist/esm/styles/prism'

export const CodeBlock = ({ code, language = 'jsx', result, treeView = false, isLoading, isError }) => {
  const [isTreeView, setIsTreeView] = useState(treeView)

  return (
    <Stack>
      <Prism style={materialOceanic} language={language}>
        {code}
      </Prism>
      {isLoading ? (
        <Spinner />
      ) : isError ? (
        <Box>Error! Check console</Box>
      ) : (
        result && (
          <Stack>
            <Checkbox defaultChecked={treeView} onChange={e => setIsTreeView(e.target.checked)}>
              Tree view
            </Checkbox>
            {isTreeView ? (
              <JSONTree data={result} />
            ) : (
              <Prism style={materialOceanic} language='json'>
                {JSON.stringify(result, null, 2)}
              </Prism>
            )}
          </Stack>
        )
      )}
    </Stack>
  )
}
