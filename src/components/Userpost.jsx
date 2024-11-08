import { Link } from 'react-router-dom'
import { Flex, Avatar, Box, Text, Image } from '@chakra-ui/react'
import { BsThreeDots } from 'react-icons/bs'
import Actions from './Actions'
const Userpost = () => {
    return (
        <Link to={'/mark/post/1'}>
            <Flex gap={3} mb={4} py={5}>
                <Flex flexDirection={'column'} alignItems={'center'}>
                    <Avatar mt={5} size={'sm'} name='Mark' src='/pfp.jpg' />
                    <Box w='1px' h='full' bg={'gray.light'}></Box>
                    <Box position={'relative'} w={'full'}>
                        <Avatar
                            size='xs'
                            position={'absolute'}
                            src='https://bit.ly/dan-abramov'
                            top={'0px'}
                            left='11px'
                            padding={'2px'} />
                        {/* <Avatar
                            size='xs'
                            position={'absolute'}
                            src='https://bit.ly/kent-c-dodds'
                            bottom={'0px'}
                            right='-5px'
                            padding={'2px'} />
                        <Avatar
                            size='xs'
                            position={'absolute'}
                            src='https://bit.ly/ryan-florence'
                            bottom={'0px'}
                            left='4px'
                            padding={'2px'} /> */}
                    </Box>
                </Flex>
                <Flex flex={1} flexDirection={'column'} gap={2}>
                    <Flex justifyContent={'space-between'} w={'full'} mt={5}>
                        <Flex w={'full'} alignItems={'center'}>
                            <Text fontSize={'sm'} fontWeight={'bold'}>Mark</Text>
                            <Image src='/verified.png' w={4} h={4} ml={1} />
                        </Flex>
                        <Flex gap={4} alignItems={'center'}>
                            <Text fontSize={'sm'} color={'gray.light'}>1d</Text>
                            <BsThreeDots />
                        </Flex>
                    </Flex>
                    <Text fontSize={'sm'}>This is my first post</Text>
                    <Box borderRadius={6} overflow={'hidden'}>
                        <Image src='/im2.jpg' w={'full'} h={'full'} />
                    </Box>
                    <Flex gap={3} my={1} >
                        <Actions />
                    </Flex>
                </Flex>
            </Flex>
        </Link>
    )
}

export default Userpost
