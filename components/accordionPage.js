import {
    Accordion,
    AccordionItem,
    AccordionHeader,
    AccordionPanel,
    AccordionIcon,
    Box,
    Icon
} from "@chakra-ui/core"
function accordionPage() {
    return (
        <Accordion allowMultiple>
            <AccordionItem>
                <AccordionHeader>
                    <Box flex="1" textAlign="left">
                        Section 2 title
                    </Box>
                    <AccordionIcon />
                </AccordionHeader>
                <AccordionPanel pb={4}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat.
                </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
                {({ isExpanded }) => (
                    <>
                        <AccordionHeader>
                            <Box flex="1" textAlign="left">
                                Section 2 title
                            </Box>
                            <Icon size="12px" name={isExpanded ? "minus" : "add"} />
                        </AccordionHeader>
                        <AccordionPanel pb={4}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat.
                        </AccordionPanel>
                    </>
                )}
            </AccordionItem>
        </Accordion>
    )
}

export default accordionPage