import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
} from "@chakra-ui/core";
function breadcrumb() {
    return (
        <Breadcrumb fontWeight="medium" fontSize="sm">
            <BreadcrumbItem>
                <BreadcrumbLink href="/google">Home</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
                <BreadcrumbLink href="/about">About</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink href="/current">Current</BreadcrumbLink>
            </BreadcrumbItem>
        </Breadcrumb>
    )
}

export default breadcrumb