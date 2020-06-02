import { Divider, Box } from "@chakra-ui/core";
function divider() {
    return (
        <Box>
            <span>Part 1</span>
            <Divider borderColor="red.200" />
            <span>Part 2</span>
        </Box>
    )
}

export default divider