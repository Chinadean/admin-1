import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
} from '@chakra-ui/react'

export const FormItem = ({ id, type, isTextarea, leftElement, label, helperText, errors, register }) => {
  const Tag = isTextarea ? Textarea : Input

  return (
    <FormControl isInvalid={errors?.[id]}>
      {label && <FormLabel htmlFor={id}>{label}</FormLabel>}
      <InputGroup>
        {leftElement && <InputLeftElement pointerEvents='none'>{leftElement}</InputLeftElement>}
        <Tag id={id} type={type} placeholder={label} {...register(id)} />
      </InputGroup>
      <FormErrorMessage>{errors?.[id]?.message}</FormErrorMessage>
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  )
}
