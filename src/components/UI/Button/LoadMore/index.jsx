import { Button } from "@mantine/core";

export const LoadMore = ({ meta, setPage }) => {

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
                    >
                        Load More..
                    </Button>
            }

        </div>
    );
};
