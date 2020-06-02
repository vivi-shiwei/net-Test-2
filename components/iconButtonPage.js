import { IconButton } from "@chakra-ui/core";
function iconButton() {
    return (
        <IconButton
            variantColor="teal"
            aria-label="Call Segun"
            size="lg"
            icon="phone"
        />
        <IconButton
            variant="outline"
            variantColor="teal"
            aria-label="Send email"
            icon="email"
        />
        <IconButton
            variant="outline"
            variantColor="teal"
            aria-label="Call Sage"
            fontSize="20px"
            icon={MdPhone}
        />
    )
}

export default iconButton