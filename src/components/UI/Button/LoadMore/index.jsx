import { Button } from "@mantine/core";
import { IconAssembly } from "@tabler/icons";

export const LoadMore = ({ handlePaginate, loader = false }) => {

    return (
        <div style={{ display: 'flex', alignItem: 'center', justifyContent: 'center', padding: '30px 0px 10px' }}>
            <Button radius="xl" variant="gradient" gradient={{ from: 'lime', to: 'teal', deg: 105 }}
                onClick={() => handlePaginate()}
                loading={loader}
            >
                Load More {loader === false && <IconAssembly size='20px' style={{marginLeft:'5px'}}/>}
            </Button>
        </div>
    );
};
