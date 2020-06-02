import { Checkbox, CheckboxGroup, Stack } from "@chakra-ui/core"
function checkbox() {
    const [checkedItems, setCheckedItems] = React.useState([false, false]);

    const allChecked = checkedItems.every(Boolean);
    const isIndeterminate = checkedItems.some(Boolean) && !allChecked;

    return (
        <>
            <Checkbox
                isChecked={allChecked}
                isIndeterminate={isIndeterminate}
                onChange={e => setCheckedItems([e.target.checked, e.target.checked])}
                children="Parent Checkbox"
            />
            <Stack pl={6} mt={1} spacing={1}>
                <Checkbox
                    isChecked={checkedItems[0]}
                    onChange={e => setCheckedItems([e.target.checked, checkedItems[1]])}
                    children="Child Checkbox 1"
                />
                <Checkbox
                    isChecked={checkedItems[1]}
                    onChange={e => setCheckedItems([checkedItems[0], e.target.checked])}
                    children="Child Checkbox 2"
                />
            </Stack>
        </>
    );
}

export default checkbox