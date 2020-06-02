import { Button, Collapse } from "@chakra-ui/core"
function collapse() {
    const [show, setShow] = React.useState(false);

    const handleToggle = () => setShow(!show);

    return (
        <>
            <Button variantColor="blue" onClick={handleToggle}>
                Toggle
            </Button>
            <Collapse mt={4} isOpen={show}>
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                labore wes anderson cred nesciunt sapiente ea proident.
            </Collapse>
        </>
    )
}

export default collapse