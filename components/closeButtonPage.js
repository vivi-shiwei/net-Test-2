import { CloseButton, Stack } from "@chakra-ui/core"
function closeButton() {
    return (
        <Stack isInline spacing={6}>
            <CloseButton size="sm" />
            <CloseButton size="md" />
            <CloseButton size="lg" />
        </Stack>
    )
}

export default closeButton