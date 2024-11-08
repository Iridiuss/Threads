import { Flex, Image, useColorMode } from "@chakra-ui/react"

const Header = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
        <Flex justifyContent='center' mt={6} mb={12}>
            <Image cursor='pointer' onClick={toggleColorMode} width={6} src={colorMode === 'dark' ? "/dark-logo.svg" : "/light-logo.svg"} alt="logo" />

        </Flex>
    )
}

export default Header
