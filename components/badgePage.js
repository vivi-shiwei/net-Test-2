import { Badge, Flex, Text, Avatar, Box } from "@chakra-ui/core"
function badge() {
    return (
        <Flex>
            <Avatar src="https://bit.ly/sage-adebayo" />
            <Box ml="3">
                <Text fontWeight="bold">
                    Segun Adebayo
                    <Badge ml="1" variantColor="green">
                        New
                    </Badge>
                </Text>
                <Text fontSize="sm">UI Engineer</Text>
            </Box>
        </Flex>
    )
}

export default badge