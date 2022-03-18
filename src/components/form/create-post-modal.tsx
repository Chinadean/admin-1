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
  useToast,
} from '@chakra-ui/react'

import { FileUploader } from '@components'
import { useCreatePostMutation, useUploadFileMutation } from '@store'

interface CreatePostModalProps {
  isOpen: boolean
  onClose: () => void
}

export const CreatePostModal = ({ isOpen, onClose }: CreatePostModalProps) => {
  const [file, setFile] = useState<File>()
  const [text, setText] = useState<string>()
  const toast = useToast()

  const [upload, { isLoading, isError }] = useUploadFileMutation()
  const [createPost] = useCreatePostMutation()

  const onCreate = async () => {
    const uploadedImage = await upload({ file }).unwrap()
    const post = await createPost({
      locale: 'en',
      image: uploadedImage.upload.data?.id as string,
      text: text || '',
    }).unwrap()

    if (post.createPost?.data?.attributes?.image) {
      toast({ status: 'success', description: 'Post created successfully', isClosable: true, duration: 3000 })
    }

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
