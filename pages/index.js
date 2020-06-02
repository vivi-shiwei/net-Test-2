import {
    Formik,
    Form,
    Field,
    ErrorMessage
} from 'formik';
import {
    Box,
    ButtonGroup,
    Button,
    Divider,
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Editable,
    EditableInput,
    EditablePreview,
    Flex,
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    useDisclosure,
    Text,
    Grid,
    Heading,
    Icon,
    IconButton,
    Image,
    Stack,
    InputLeftElement,
    InputRightElement,
    InputGroup,
    Link,
    List,
    ListItem,
    ListIcon,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuGroup,
    MenuDivider,
    MenuOptionGroup,
    MenuItemOption,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    Progress,
    Radio,
    RadioGroup,
    SimpleGrid,
    Select,
    Skeleton,
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
    Stat,
    StatLabel,
    StatNumber,
    StatHelpText,
    StatArrow,
    StatGroup,
    Switch,
    Tabs,
    TabList,
    TabPanels,
    Tab,
    TabPanel,
    Tag,
    TagIcon,
    TagLabel,
    TagCloseButton,
    Textarea,
    useToast,
    Tooltip,
    PseudoBox,
    Spinner,
    Avatar,
    ControlBox,
    VisuallyHidden,
    Collapse,
    Code,
    CloseButton,
    CircularProgress,
    CircularProgressLabel,
    Checkbox,
    CheckboxGroup,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
    Badge,
    AvatarBadge,
    AvatarGroup,
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    AspectRatioBox,
    AlertDialogCloseButton,
    Scale,
    Accordion,
    AccordionItem,
    AccordionHeader,
    AccordionPanel,
    AccordionIcon,
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
} from "@chakra-ui/core";
import { MdBuild, MdCall, MdSettings, MdGraphicEq, StarIcon } from "react-icons/md"
function HomePage() {
    const colors = ["red.200", "teal.200", "blue.200"];
    const [tabIndex, setTabIndex] = React.useState(0);
    const bg = colors[tabIndex];
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef();
    const cancelRef = React.useRef();
    const { isOpen: isOpenModel, onOpen: onOpenModel, onClose: onCloseModel } = useDisclosure();
    const { isOpen: isOpenAlert, onOpen: onOpenAlert, onClose: onCloseAlert } = useDisclosure();
    const [size, setSize] = React.useState("md");
    const toast = useToast();
    const [show, setShow] = React.useState(false);
    const [checkedItems, setCheckedItems] = React.useState([false, false]);

    const allChecked = checkedItems.every(Boolean);
    const isIndeterminate = checkedItems.some(Boolean) && !allChecked;

    const handleToggle = () => setShow(!show);

    const [resize, setResize] = React.useState("horizontal");
    const handleResizeChange = event => setResize(event.target.value);
    const handleSizeClick = newSize => {
        setSize(newSize);
        onOpenModel();
    };

    const sizes = ["xs", "sm", "md", "lg", "xl", "full"];
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
    function Feature({ title, desc, ...rest }) {
        return (
            <Box p={5} shadow="md" borderWidth="1px" {...rest}>
                <Heading fontSize="xl">{title}</Heading>
                <Text mt={4}>{desc}</Text>
            </Box>
        );
    }
    function validateName(value) {
        let error;
        if (!value) {
            error = "Name is required";
        } else if (value !== "Naruto") {
            error = "Jeez! You're not a fan 😱";
        }
        return error;
    }
    const property = {
        imageUrl: "https://bit.ly/2Z4KKcF",
        imageAlt: "Rear view of modern home with pool",
        beds: 3,
        baths: 2,
        title: "Modern home in city center in the heart of historic Los Angeles",
        formattedPrice: "$1,900.00",
        reviewCount: 34,
        rating: 4,
    };

    return (
        <>
            <Accordion allowToggle>
                <AccordionItem>
                    <AccordionHeader>
                        <Box flex="1" textAlign="left">
                            Section 1 title
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
            </Accordion>
            <Alert
                status="success"
                variant="subtle"
                flexDirection="column"
                justifyContent="center"
                textAlign="center"
                height="200px"
            >
                <AlertIcon size="40px" mr={0} />
                <AlertTitle mt={4} mb={1} fontSize="lg">
                    Application submitted!
  </AlertTitle>
                <AlertDescription maxWidth="sm">
                    Thanks for submitting your application. Our team will get back to you soon.
  </AlertDescription>
            </Alert>
            <Button ref={btnRef} onClick={onOpenAlert}>
                Discard
      </Button>
            {/* You can swap the `Scale` with `SlideIn` to see a different transition */}
            <Scale in={isOpenAlert}>
                {styles => (
                    <AlertDialog
                        leastDestructiveRef={cancelRef}
                        finalFocusRef={btnRef}
                        onClose={onCloseAlert}
                        isOpen={true}
                    >
                        <AlertDialogOverlay opacity={styles.opacity} />
                        <AlertDialogContent {...styles}>
                            <AlertDialogHeader>Discard Changes?</AlertDialogHeader>
                            <AlertDialogCloseButton />
                            <AlertDialogBody>
                                Are you sure you want to discard all of your notes? 44 words
                                will be deleted.
              </AlertDialogBody>
                            <AlertDialogFooter>
                                <Button ref={cancelRef} onClick={onCloseAlert}>
                                    No
                </Button>
                                <Button variantColor="red" ml={3}>
                                    Yes
                </Button>
                            </AlertDialogFooter>
                        </AlertDialogContent>
                    </AlertDialog>
                )}
            </Scale>
            <AspectRatioBox ratio={16 / 9}>
                <Box
                    as="iframe"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.952912260219!2d3.375295414770757!3d6.5276316452784755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos!5e0!3m2!1sen!2sng!4v1567723392506!5m2!1sen!2sng"
                    alt="demo"
                />
            </AspectRatioBox>
            <AvatarGroup size="md" max={2}>
                <Avatar name="Ryan Florence" src="https://bit.ly/ryan-florence" />
                <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />
                <Avatar name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
                <Avatar name="Prosper Otemuyiwa" src="https://bit.ly/prosper-baba" />
                <Avatar name="Christian Nwamba" src="https://bit.ly/code-beast" />
            </AvatarGroup>
            <Flex>
                <Avatar src="https://bit.ly/sage-adebayo" />
                <Box ml="3">
                    <Text fontWeight="bold">
                        Segun Adebayo
      <Badge ml="1" variantColor="green">
                            New
      </Badge>
                    </Text>
                    <Text fontSize="sm">UI Engineer</Text>
                </Box>
            </Flex>
            <Box maxW="sm" borderWidth="1px" rounded="lg" overflow="hidden">
                <Image src={property.imageUrl} alt={property.imageAlt} />

                <Box p="6">
                    <Box d="flex" alignItems="baseline">
                        <Badge rounded="full" px="2" variantColor="teal">
                            New
          </Badge>
                        <Box
                            color="gray.500"
                            fontWeight="semibold"
                            letterSpacing="wide"
                            fontSize="xs"
                            textTransform="uppercase"
                            ml="2"
                        >
                            {property.beds} beds &bull; {property.baths} baths
          </Box>
                    </Box>

                    <Box
                        mt="1"
                        fontWeight="semibold"
                        as="h4"
                        lineHeight="tight"
                        isTruncated
                    >
                        {property.title}
                    </Box>

                    <Box>
                        {property.formattedPrice}
                        <Box as="span" color="gray.600" fontSize="sm">
                            / wk
          </Box>
                    </Box>

                    <Box d="flex" mt="2" alignItems="center">
                        <Box as="span" ml="2" color="gray.600" fontSize="sm">
                            {property.reviewCount} reviews
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Breadcrumb separator="-">
                <BreadcrumbItem>
                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem>
                    <BreadcrumbLink href="/about">About</BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem isCurrentPage>
                    <BreadcrumbLink href="/contact">Contact</BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>
            <ButtonGroup spacing={4}>
                <Button leftIcon={MdBuild} variantColor="pink" variant="solid">
                    Settings
                </Button>
                <Button rightIcon={MdCall} variantColor="blue" variant="outline">
                    Call us
            </Button>
            </ButtonGroup>
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
            <CircularProgress isIndeterminate color="green"></CircularProgress>
            <Stack isInline spacing={6}>
                <CloseButton size="sm" />
                <CloseButton size="md" />
                <CloseButton size="lg" />
            </Stack>
            <Stack isInline>
                <Code children="console.log(welcome)" />
                <Code variantColor="red" children="var chakra = 'awesome!'" />
                <Code variantColor="yellow" children="npm install chakra" />
            </Stack>
            <Button variantColor="blue" onClick={handleToggle}>
                Toggle
      </Button>
            <Collapse mt={4} isOpen={show}>
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                labore wes anderson cred nesciunt sapiente ea proident.
      </Collapse>
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
            <Box>
                <span>Part 1</span>
                <Divider borderColor="red.200" />
                <span>Part 2</span>
            </Box>
            <Button ref={btnRef} variantColor="teal" onClick={onOpen}>
                Open
        </Button>
            <Drawer
                isOpen={isOpen}
                placement="right"
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Create your account</DrawerHeader>

                    <DrawerBody>
                        <Input placeholder="Type here..." />
                    </DrawerBody>

                    <DrawerFooter>
                        <Button variant="outline" mr={3} onClick={onClose}>
                            Cancel
            </Button>
                        <Button color="blue">Save</Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
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
            <Flex align="center">
                <Flex bg="green.50" align="flex-end">
                    <Text>Box 1</Text>
                </Flex>
                <Flex bg="blue.50" size="150px" align="center" justify="center">
                    <Text textAlign="center" bg="pink.50">
                        Box 2
          </Text>
                </Flex>
                <Box>
                    <Text bg="tomato" color="white">
                        Box 3
          </Text>
                </Box>
            </Flex>
            <Formik
                initialValues={{ name: "Sasuke" }}
                onSubmit={(values, actions) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        actions.setSubmitting(false);
                    }, 1000);
                }}
            >
                {props => (
                    <form onSubmit={props.handleSubmit}>
                        <Field name="name" validate={validateName}>
                            {({ field, form }) => (
                                <FormControl isInvalid={form.errors.name && form.touched.name}>
                                    <FormLabel htmlFor="name">First name</FormLabel>
                                    <Input {...field} id="name" placeholder="name" />
                                    <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                                </FormControl>
                            )}
                        </Field>
                        <Button
                            mt={4}
                            variantColor="teal"
                            isLoading={props.isSubmitting}
                            type="submit"
                        >
                            Submit
          </Button>
                    </form>
                )}
            </Formik>
            <Grid templateColumns="repeat(5, 1fr)" gap={6}>
                <Box w="100%" h="10" bg="blue.500" />
                <Box w="100%" h="10" bg="blue.500" />
                <Box w="100%" h="10" bg="blue.500" />
                <Box w="100%" h="10" bg="blue.500" />
                <Box w="100%" h="10" bg="blue.500" />
            </Grid>

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
            <Box as={MdSettings} size="32px" color="green.400" />
            <Image
                rounded="full"
                size="150px"
                src="https://bit.ly/sage-adebayo"
                alt="Segun Adebayo"
            />
            <Stack spacing={4}>
                <InputGroup>
                    <InputLeftElement children={<Icon name="phone" color="gray.300" />} />
                    <Input type="phone" placeholder="Phone number" />
                </InputGroup>

                <InputGroup>
                    <InputLeftElement color="gray.300" fontSize="1.2em" children="$" />
                    <Input placeholder="Enter amount" />
                    <InputRightElement children={<Icon name="check" color="green.500" />} />
                </InputGroup>
            </Stack>
            <Link href="https://chakra-ui.com" isExternal>
                Chakra Design system <Icon name="external-link" mx="2px" />
            </Link>
            <List spacing={3}>
                <ListItem>
                    <ListIcon icon="check-circle" color="green.500" />
    Lorem ipsum dolor sit amet, consectetur adipisicing elit
  </ListItem>
                <ListItem>
                    <ListIcon icon="check-circle" color="green.500" />
    Assumenda, quia temporibus eveniet a libero incidunt suscipit
  </ListItem>
                <ListItem>
                    <ListIcon icon="check-circle" color="green.500" />
    Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
  </ListItem>
                {/* You can also use custom icons from react-icons */}
                <ListItem>
                    <ListIcon icon={MdSettings} color="green.500" />
    Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
  </ListItem>
            </List>
            <Menu>
                <MenuButton as={Button} variantColor="pink">
                    Profile
  </MenuButton>
                <MenuList>
                    <MenuGroup title="Profile">
                        <MenuItem>My Account</MenuItem>
                        <MenuItem>Payments </MenuItem>
                    </MenuGroup>
                    <MenuDivider />
                    <MenuGroup title="Help">
                        <MenuItem>Docs</MenuItem>
                        <MenuItem>FAQ</MenuItem>
                    </MenuGroup>
                </MenuList>
            </Menu>
            {sizes.map(size => (
                <Button
                    onClick={() => handleSizeClick(size)}
                    key={size}
                    m={4}
                >{`Open ${size} Modal`}</Button>
            ))}

            <Modal onClose={onCloseModel} size={size} isOpen={isOpenModel}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Modal Title</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco deserunt aute id consequat veniam incididunt duis in sint irure nisi. Mollit officia cillum Lorem ullamco minim nostrud elit officia tempor esse quis.
                        Sunt ad dolore quis aute consequat. Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit dolor adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis. Velit duis sit officia eiusmod Lorem aliqua enim laboris do dolor eiusmod. Et mollit incididunt nisi consectetur esse laborum eiusmod pariatur proident Lorem eiusmod et. Culpa deserunt nostrud ad veniam.
                    </ModalBody>
                    <ModalFooter>
                        <Button>Close</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
            <Stack shouldWrapChildren isInline>
                <NumberInput size="sm" defaultValue={15} min={10}>
                    <NumberInputField />
                    <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                    </NumberInputStepper>
                </NumberInput>

                <NumberInput size="md" defaultValue={15} min={10}>
                    <NumberInputField />
                    <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                    </NumberInputStepper>
                </NumberInput>

                <NumberInput size="lg" defaultValue={15} min={10}>
                    <NumberInputField />
                    <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                    </NumberInputStepper>
                </NumberInput>
            </Stack>
            <Popover placement="top-start">
                <PopoverTrigger>
                    <Button>Click me</Button>
                </PopoverTrigger>
                <PopoverContent zIndex={4}>
                    <PopoverHeader fontWeight="semibold">Popover placement</PopoverHeader>
                    <PopoverArrow />
                    <PopoverCloseButton />
                    <PopoverBody>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore.
                    </PopoverBody>
                </PopoverContent>
            </Popover>
            <Progress hasStripe isAnimated />
            <Stack isInline>
                <PseudoBox
                    as="a"
                    href="/radio"
                    color="blue.600"
                    textDecoration="underline"
                    fontWeight="semibold"
                >
                    Unvisited Link
  </PseudoBox>
                <PseudoBox
                    as="a"
                    href="/pseudobox"
                    color="blue.600"
                    textDecoration="underline"
                    fontWeight="semibold"
                    _visited={{ color: "purple.600" }}
                >
                    Visited Link
  </PseudoBox>
            </Stack>
            <RadioGroup isInline spacing={4} defaultValue="1">
                <Radio value="1" isDisabled>
                    Radio 1
  </Radio>
                <Radio value="2">Radio 2</Radio>
                <Radio value="3">Radio 3</Radio>
            </RadioGroup>

            <SimpleGrid columns={[2, null, 3]} spacing="40px">
                <Box bg="tomato" height="80px"></Box>
                <Box bg="tomato" height="80px"></Box>
                <Box bg="tomato" height="80px"></Box>
                <Box bg="tomato" height="80px"></Box>
                <Box bg="tomato" height="80px"></Box>
            </SimpleGrid>
            <Stack spacing={3}>
                <Select placeholder="large size" size="lg" />
                <Select placeholder="default size" size="md" />
                <Select placeholder="small size" size="sm" />
            </Stack>
            <div>
                <Skeleton height="20px" my="10px" />
                <Skeleton height="20px" my="10px" />
                <Skeleton height="20px" my="10px" />
            </div>
            <Slider defaultValue={30}>
                <SliderTrack bg="red.100" />
                <SliderFilledTrack bg="tomato" />
                <SliderThumb size={6}>
                    <Box color="tomato" as={MdGraphicEq} />
                </SliderThumb>
            </Slider>
            <Stack isInline spacing={4}>
                <Spinner size="xs" />
                <Spinner size="sm" />
                <Spinner size="md" />
                <Spinner size="lg" />
                <Spinner size="xl" />
            </Stack>
            <StatGroup>
                <Stat>
                    <StatLabel>Sent</StatLabel>
                    <StatNumber>345,670</StatNumber>
                    <StatHelpText>
                        <StatArrow type="increase" />
      23.36%
    </StatHelpText>
                </Stat>

                <Stat>
                    <StatLabel>Clicked</StatLabel>
                    <StatNumber>45</StatNumber>
                    <StatHelpText>
                        <StatArrow type="decrease" />
      9.05%
    </StatHelpText>
                </Stat>
            </StatGroup>
            <Stack spacing={8}>
                <Feature
                    title="Plan Money"
                    desc="The future can be even brighter but a goal without a plan is just a wish"
                />
                <Feature
                    title="Save Money"
                    desc="You deserve good things. With a whooping 10-15% interest rate per annum, grow your savings on your own terms with our completely automated process"
                />
            </Stack>
            <Stack align="center" isInline>
                <Switch size="sm" />
                <Switch size="md" />
                <Switch size="lg" />
            </Stack>
            <Tabs onChange={index => setTabIndex(index)} color="white" bg={bg}>
                <TabList>
                    <Tab>Red</Tab>
                    <Tab>Teal</Tab>
                    <Tab>Blue</Tab>
                </TabList>
                <TabPanels p="2rem">
                    <TabPanel>The Primary Colors</TabPanel>
                    <TabPanel>Are 1, 2, 3</TabPanel>
                    <TabPanel>Red, yellow and blue.</TabPanel>
                </TabPanels>
            </Tabs>
            <Tag variantColor="red" rounded="full">
                <Avatar
                    src="https://bit.ly/sage-adebayo"
                    size="xs"
                    name="Segun Adebayo"
                    ml={-1}
                    mr={2}
                />
                <TagLabel>Segun</TagLabel>
            </Tag>
            <Text as="i">Italic</Text>
            <br />
            <Text as="u">Underline</Text>
            <br />
            <Text as="abbr">I18N</Text>
            <br />
            <Text as="cite">Citation</Text>
            <br />
            <Text as="del">Deleted</Text>
            <br />
            <Text as="em">Emphasis</Text>
            <br />
            <Text as="ins">Inserted</Text>
            <br />
            <Text as="kbd">Ctrl + C</Text>
            <br />
            <Text as="mark">Highlighted</Text>
            <br />
            <Text as="s">Strikethrough</Text>
            <br />
            <Text as="samp">Sample</Text>
            <br />
            <Text as="sub">sub</Text>
            <br />
            <Text as="sup">sup</Text>
            <RadioGroup
                isInline
                spacing={5}
                defaultValue={resize}
                onChange={handleResizeChange}
                mb={6}
            >
                <Radio value="horizontal">Horizontal</Radio>
                <Radio value="vertical">Vertical</Radio>
                <Radio value="none">None</Radio>
            </RadioGroup>

            <Textarea
                placeholder="Here is a sample placeholder"
                size="sm"
                resize={resize}
            />
            <Button
                onClick={() =>
                    toast({
                        title: "Account created.",
                        description: "We've created your account for you.",
                        status: "success",
                        duration: 9000,
                        isClosable: true,
                    })
                }
            >
                Show Success Toast
    </Button>
            <Stack shouldWrapChildren spacing={6}>
                <Tooltip label="Right end" placement="right-end">
                    <Button variant="outline">Right-End</Button>
                </Tooltip>

                <Tooltip label="Left" placement="left">
                    <Button variant="outline">Left</Button>
                </Tooltip>

                <Tooltip label="Auto start" placement="auto-start">
                    <Button variant="outline">Auto-Start</Button>
                </Tooltip>

                <Tooltip label="Auto end" placement="auto-end">
                    <Button variant="outline">Auto-End</Button>
                </Tooltip>

                <Tooltip label="Left end" placement="left-end">
                    <Button variant="outline">Left-End</Button>
                </Tooltip>
            </Stack>
        </>
    )
}

export default HomePage