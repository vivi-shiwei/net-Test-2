import { Grid } from "@chakra-ui/core";
function grid() {
    return (
        <Grid templateColumns="repeat(5, 1fr)" gap={6}>
            <Box w="100%" h="10" bg="blue.500" />
            <Box w="100%" h="10" bg="blue.500" />
            <Box w="100%" h="10" bg="blue.500" />
            <Box w="100%" h="10" bg="blue.500" />
            <Box w="100%" h="10" bg="blue.500" />
        </Grid>
    )
}

export default grid