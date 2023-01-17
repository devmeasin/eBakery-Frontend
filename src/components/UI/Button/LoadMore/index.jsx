import { Button } from "@mantine/core";

export const LoadMore = ({ meta, setPage , loader }) => {

    if(!meta) return;
    const { page, pageCount } = meta?.pagination;

    const handlePaginate = () => {
        setPage(page + 1);
    };

    return (
        <div style={{ display: 'flex', alignItem : 'center' , justifyContent:'center', padding : '30px 0px 10px'}}>
            {
                page >= pageCount ? '' :
                    <Button radius='lg' variant="gradient" gradient={{ from: 'orange', to: 'red' }}
                        onClick={() => handlePaginate()}
                        loading={loader}
                    >
                        Load More..
                    </Button>
            }

        </div>
    );
};
