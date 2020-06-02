import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
} from "@chakra-ui/core";
function drawer() {
    const [size, setSize] = React.useState("md");
    const { isOpen, onOpen, onClose } = useDisclosure();

    const handleClick = newSize => {
        setSize(newSize);
        onOpen();
    };

    const sizes = ["xs", "sm", "md", "lg", "xl", "full"];

    return (
        <>
            {sizes.map(size => (
                <Button
                    onClick={() => handleClick(size)}
                    type="button"
                    key={size}
                    m={4}
                >{`Open ${size} Drawer`}</Button>
            ))}

            <Drawer onClose={onClose} isOpen={isOpen} size={size}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerHeader>{`${size} drawer contents`}</DrawerHeader>
                    <DrawerBody>
                        {size === "full"
                            ? `You're trapped 😆, refresh the page to leave`
                            : null}
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    );
}

export default drawer