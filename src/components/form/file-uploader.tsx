import { useState } from 'react'

import {
  Box,
  CircularProgress,
  FormLabel,
  HStack,
  Image as ChakraImage,
  Radio,
  RadioGroup,
  SimpleGrid,
  Stack,
  Text,
  Textarea,
} from '@chakra-ui/react'
import Dropzone, { DropEvent, FileRejection } from 'react-dropzone'
import { FiUpload, FiRefreshCw } from 'react-icons/fi'
import { createWorker, PSM } from 'tesseract.js'

const languages = {
  en: 'eng',
  nl: 'nld',
  tr: 'tur',
}

interface FileUploaderProps {
  shouldRecognize?: boolean
  onRecognizeText?: (text: string) => void
  onHandleFile?: (file?: File) => void
}

export const FileUploader = ({ shouldRecognize, onRecognizeText, onHandleFile }: FileUploaderProps) => {
  const [image, setImage] = useState<HTMLImageElement>()
  const [isRecognizing, setIsRecognizing] = useState(false)
  const [recognizedText, setRecognizedText] = useState<string>()
  const [lang, setLang] = useState<'en' | 'nl' | 'tr'>('en')
  const [progress, setProgress] = useState<number>()

  const resetFiles = () => {
    onHandleFile?.(undefined)
    setImage(undefined)
    setRecognizedText(undefined)
  }

  const onDrop: <T extends File>(
    acceptedFiles: T[],
    fileRejections: FileRejection[],
    event: DropEvent,
  ) => void = async acceptedFiles => {
    const image = new Image()
    image.src = URL.createObjectURL(acceptedFiles[0])
    image.crossOrigin = 'anonymous'
    setImage(image)

    onHandleFile?.(acceptedFiles[0])

    if (shouldRecognize) {
      const worker = createWorker({
        logger: m => {
          if (m.status === 'recognizing text' && m.jobId) setProgress(m.progress * 100)
        },
      })
      try {
        setIsRecognizing(true)
        await worker.load()
        await worker.loadLanguage(languages[lang])
        await worker.initialize(languages[lang])
        await worker.setParameters({ tessedit_pageseg_mode: PSM.AUTO_OSD })
        const result = await worker.recognize(image)
        console.log('result', result)

        const text = result.data.text.replace(/\n/g, ' ').trim()
        setRecognizedText(text)
        onRecognizeText?.(text)
      } catch (error) {
        console.log('error', error)
      } finally {
        setIsRecognizing(false)
        await worker.terminate()
      }
    }
  }

  if (image)
    return (
      <SimpleGrid columns={{ base: 1, lg: isRecognizing || recognizedText ? 2 : 1 }} gap={4}>
        <Box role='group' pos='relative'>
          <ChakraImage w='full' src={image.src} alt='image' />

          <Stack
            pos='absolute'
            left={0}
            top={0}
            boxSize='full'
            display='none'
            align='center'
            justify='center'
            bg='blackAlpha.600'
            color='white'
            cursor='pointer'
            fontWeight='medium'
            fontSize='xl'
            _groupHover={{ display: 'flex' }}
            onClick={resetFiles}
          >
            <Box as={FiRefreshCw} />
            <Box>Reset</Box>
          </Stack>
        </Box>
        {isRecognizing && progress ? (
          <Stack align='center' justify='center' h='full'>
            <CircularProgress value={progress} color='blue.400' thickness={16} />
            <Text fontSize='sm'>Recognizing text</Text>
          </Stack>
        ) : (
          recognizedText && (
            <Textarea flex={1} value={recognizedText} onChange={e => setRecognizedText(e.target.value)} h='full' />
          )
        )}
      </SimpleGrid>
    )

  return (
    <Stack>
      <Dropzone maxFiles={1} accept='image/jpeg, image/png, image/webp' onDrop={onDrop}>
        {({ getRootProps, getInputProps }) => (
          <Box
            maxH={400}
            overflowY='auto'
            p={4}
            borderWidth={2}
            borderColor='gray.400'
            shadow='base'
            borderStyle='dashed'
            {...getRootProps()}
          >
            <input {...getInputProps()} />
            <Stack spacing={4} color='gray.400' align='center'>
              <Box fontSize='2em' color='primary.400' as={FiUpload} />
              <Box textAlign='center'>
                <Text>Click to upload or</Text>
                <Text>drag & drop your image.</Text>
                <Text>We support jpeg, png and webp.</Text>
              </Box>
            </Stack>
          </Box>
        )}
      </Dropzone>
      {shouldRecognize && (
        <HStack align='center'>
          <FormLabel htmlFor='lang'>Recognized Language</FormLabel>
          <RadioGroup id='lang' onChange={v => setLang(v as 'nl' | 'en' | 'tr')} value={lang}>
            <HStack>
              <Radio value='en'>EN</Radio>
              <Radio value='nl'>NL</Radio>
              <Radio value='tr'>TR</Radio>
            </HStack>
          </RadioGroup>
        </HStack>
      )}
    </Stack>
  )
}
