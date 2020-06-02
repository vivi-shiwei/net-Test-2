import { Heading } from "@chakra-ui/core";
function circularProgress() {
    return (
        // Example from paystack.com

        <Box maxW="32rem">
            <Heading mb={4}>Modern online and offline payments for Africa</Heading>
            <Text fontSize="xl">
                Paystack helps businesses in Africa get paid by anyone, anywhere in the
                world
            </Text>
            <Button size="lg" variantColor="green" mt="24px">
                Create a free account
            </Button>
        </Box>
    )
}

export default circularProgress