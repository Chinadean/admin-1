import { useState } from 'react'

import {
  Alert,
  AlertDescription,
  AlertIcon,
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
} from '@chakra-ui/react'

import { useCreatePostMutation } from '../../hooks'

import { FileUploader } from './file-uploader'

export const CreatePostModal = ({ isOpen, onClose }) => {
  const [file, setFile] = useState()
  const [text, setText] = useState()

  const { mutate: createPost, isLoading, isError } = useCreatePostMutation()

  const onCreate = async () => {
    const formData = new FormData()
    formData.append('data', JSON.stringify({ locale: 'en', text: text || '' }))
    formData.append(`files.image`, file)
    createPost(formData)

    setTimeout(() => {
      onClose()
    }, 1000)
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered size='xl' closeOnOverlayClick={false}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Create Hashtag Post</ModalHeader>
        <ModalBody>
          <Stack>
            <FileUploader shouldRecognize onHandleFile={setFile} onRecognizeText={setText} />
          </Stack>
        </ModalBody>
        <ModalFooter justifyContent='space-between'>
          <Button colorScheme='red' onClick={onClose}>
            Cancel
          </Button>
          <Button colorScheme='blue' isDisabled={!file || !text} isLoading={isLoading} onClick={onCreate}>
            Create
          </Button>
        </ModalFooter>
        {isError && (
          <Alert status='error'>
            <AlertIcon />
            <AlertDescription>An error occured</AlertDescription>
          </Alert>
        )}
      </ModalContent>
    </Modal>
  )
}
