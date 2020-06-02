import { Editable, EditableInput, EditablePreview } from "@chakra-ui/core";
function editable() {
    /* Here's a custom control */
    function EditableControls({ isEditing, onSubmit, onCancel, onRequestEdit }) {
        return isEditing ? (
            <ButtonGroup justifyContent="center" size="sm">
                <IconButton icon="check" onClick={onSubmit} />
                <IconButton icon="close" onClick={onCancel} />
            </ButtonGroup>
        ) : (
                <Flex justifyContent="center">
                    <IconButton size="sm" icon="edit" onClick={onRequestEdit} />
                </Flex>
            );
    }

    return (
        <Editable
            textAlign="center"
            defaultValue="Rasengan ⚡️"
            fontSize="2xl"
            isPreviewFocusable={false}
            submitOnBlur={false}
        >
            {props => (
                <>
                    <EditablePreview />
                    <EditableInput />
                    <EditableControls {...props} />
                </>
            )}
        </Editable>
    );
}

export default editable