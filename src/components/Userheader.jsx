import { Avatar, Box, Flex, Link, Text, VStack } from '@chakra-ui/react'
import { BsInstagram } from 'react-icons/bs'
import { Menu, MenuButton, MenuItem, MenuList, Portal } from '@chakra-ui/react'
import { useToast } from '@chakra-ui/react'
import { CgMoreO } from 'react-icons/cg'

const Userheader = () => {
    const toast = useToast()
    const copyURL = () => {
        const url = window.location.href
        navigator.clipboard.writeText(url).then(() => {
            toast({
                title: 'Profile link copied to clipboard',
                status: 'success',
                duration: 1000,
                isClosable: true,
            })
        })
    }
    return (
        <VStack gap={4} alignItems={'start'}>
            <Flex justifyContent={'space-between'} w={'full'}>
                <Box>
                    <Text fontSize={'2xl'} fontWeight={'bold'}>
                        Mark
                    </Text>
                    <Flex gap={2} alignItems={'center'}>
                        <Text fontSize={'sm'}>sasukeuchiha</Text>
                        <Text fontSize={'xs'} bg={'gray.dark'} color={'gray.light'} p={1} borderRadius='full'>threads.net</Text>
                    </Flex>
                </Box>
                <Box>
                    <Avatar name='mark' src='/pfp.jpg' size={'xl'} />
                </Box>
            </Flex>
            <Text fontSize={'sm'}>I have miles to go before I sleep</Text>
            <Flex w={'full'} justifyContent={'space-between'}>
                <Flex gap={2} alignItems={'center'}>
                    <Text color={'gray.light'} fontSize={'xs'}>3.2K Followers</Text>
                    <Box w={1} h={1} bg={'gray.light'} rounded={'full'}></Box>
                    <Link color={'gray.light'} fontSize={'xs'}>instagram.com</Link>
                </Flex>
                <Flex>
                    <Box className='icon-container'>
                        <BsInstagram size={24} cursor={'pointer'} />
                    </Box>
                    <Box className='icon-container'>
                        <Menu>
                            <MenuButton>
                                <CgMoreO size={24} cursor={'pointer'} />
                            </MenuButton>
                            <Portal>
                                <MenuList bg={'gray.dark'}>
                                    <MenuItem bg={'gray.dark'} onClick={copyURL}>Copy Link</MenuItem>
                                </MenuList>
                            </Portal>
                        </Menu>
                    </Box>
                </Flex>
            </Flex>
            <Flex w={'full'}>
                <Flex flex={1} borderBottom={'1.5px solid white'} justifyContent={'center'} cursor={'pointer'} pb={3}>
                    <Text fontWeight={'bold'}>Threads </Text>
                </Flex>
                <Flex flex={1} borderBottom={'1px solid gray'} color={'gray.light'} justifyContent={'center'} cursor={'pointer'} pb={3}>
                    <Text fontWeight={'bold'}>Replies </Text>
                </Flex>
            </Flex>
        </VStack>
    )
}

export default Userheader
