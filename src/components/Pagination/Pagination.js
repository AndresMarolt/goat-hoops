import { useState, useEffect } from "react";


const Pagination = ({totalRecords, pageLimit, pageNeighbours, onPageChanged}) => {

    const [currentPage, setCurrentPage] = useState(1);
    
    useEffect(() => {
        pageLimit = typeof pageLimit === 'number' ? pageLimit : 30;
        totalRecords = typeof totalRecords === 'number' ? totalRecords : 0;
        
        pageNeighbours = typeof pageNeighbours === 'number' ? Math.max(0, Math.min(pageNeighbours, 2)) 
                                                            : 0;
    
        const totalPages = Math.ceil(totalRecords / pageLimit);

    }, [])

    const range = (from, to, step = 1) => {
        let i = from;
        const range = [];
        
        while (i <= to) {
            range.push(i);
            i += step;
        }
        
        return range;
        }

    const fetchPageNumbers = () => {
        const totalNumbers = (this.pageNeighbours * 2) + 3;
        const totalBlocks = totalNumbers + 2;

        if (totalPages > totalBlocks) {
            const startPage = Math.max(2, currentPage - pageNeighbours);
            const endPage = Math.min(totalPages - 1, currentPage + pageNeighbours);
            let pages = range(startPage, endPage);

            /**
             * hasLeftSpill: has hidden pages to the left
             * hasRightSpill: has hidden pages to the right
             * spillOffset: number of hidden pages either to the left or to the right
             */
            const hasLeftSpill = startPage > 2;
            const hasRightSpill = (totalPages - endPage) > 1;
            const spillOffset = totalNumbers - (pages.length + 1);

            switch (true) {
                // handle: (1) < {5 6} [7] {8 9} (10)
                case (hasLeftSpill && !hasRightSpill): {
                    const extraPages = range(startPage - spillOffset, startPage - 1);
                    pages = [LEFT_PAGE, ...extraPages, ...pages];
                    break;
                }

                // handle: (1) {2 3} [4] {5 6} > (10)
                case (!hasLeftSpill && hasRightSpill): {
                    const extraPages = range(endPage + 1, endPage + spillOffset);
                    pages = [...pages, ...extraPages, RIGHT_PAGE];
                    break;
                }
    
                // handle: (1) < {4 5} [6] {7 8} > (10)
                case (hasLeftSpill && hasRightSpill):
                    default: {
                    pages = [LEFT_PAGE, ...pages, RIGHT_PAGE];
                    break;
                }
            }

            return [1, ...pages, totalPages];
        }

        
    }
}

export default Pagination;