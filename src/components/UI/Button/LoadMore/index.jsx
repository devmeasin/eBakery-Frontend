export const LoadMore = ({ meta , setPage}) => {

    const { page, pageCount} = meta?.pagination;

    const handlePaginate = () => {
        setPage(page + 1);
    };
    console.log( meta?.pagination);

    return (
        <div className="flex justify-center mt-24">
            {
                page >= pageCount ? '' :
                    <button
                        onClick={() => handlePaginate()}
                        className={`${'bg-primary py-2 px-4 text-white w-24 rounded'}`}>
                        Load More..
                    </button>
            }

        </div>
    );
};
