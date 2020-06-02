import { VisuallyHidden, ControlBox, Icon, Box } from "@chakra-ui/core"
function controlBox() {
    return (
        <label>
            {/* This is the sibling input, it's visually hidden */}
            <VisuallyHidden as="input" type="checkbox" defaultChecked />

            {/* This is the control box with a check icon as children */}
            <ControlBox
                borderWidth="1px"
                size="24px"
                rounded="sm"
                _checked={{ bg: "green.500", color: "white", borderColor: "green.500" }}
                _focus={{ borderColor: "green.600", boxShadow: "outline" }}
            >
                <Icon name="check" size="16px" />
            </ControlBox>

            {/* You can pass additional text */}
            <Box as="span" verticalAlign="top" ml={3}>
                Checkbox Label
            </Box>
        </label>
    )
}

export default controlBox