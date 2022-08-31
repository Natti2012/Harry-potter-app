import React from 'react'

function Pagination({ hasPrevPage, hasNextPage, page, prevPage, nextPage, totalPages }) {
    console.log('soy page',page)
    console.log('soy nextpage',nextPage)
    console.log('soy prevpage',prevPage)
    ;
    return (
        <nav aria-label="Page navigation example">
            <ul class="pagination justify-content-center">
                {page && page > 1 ?
                    <li class="page-item">
                        <a class="page-link" href={`/characters/1`} aria-disabled="true">First</a>
                    </li> :
                    <li class="page-item disabled">
                        <a class="page-link" href="#" aria-disabled="true">First</a>
                    </li>

                }
                {prevPage?
                <li class="page-item"><a class="page-link" href={`/characters/${prevPage}`}>{prevPage}</a></li>:null
                }
                {page?
                <li class="page-item active"><a class="page-link" href={`/characters/${page}`}>{page}</a></li>:null}
                  {nextPage?
                <li class="page-item"><a class="page-link" href={`/characters/${nextPage}`}>{nextPage}</a></li>:null}
                 {prevPage?null:
                <li class="page-item"><a class="page-link" href={`/characters/${nextPage+1}`}>{nextPage&& nextPage+1}</a></li>
                }
                {page && (page + 1) < totalPages?
                <li class="page-item"><a class="page-link" href='#'>...</a></li>:null
                }
                {page && (page + 1) < totalPages ?
                    <li class="page-item ">
                        <a class="page-link" href={`/characters/${totalPages}`}>Last</a>
                    </li>
                    :
                    <li class="page-item disabled">
                        <a class="page-link" href="#">Last</a>
                    </li>
                }


            </ul>
        </nav>

        // "totalDocs": 73,
        // "limit": 12,
        // "totalPages": 7,
        // "page": 1,
        // "pagingCounter": 1,
        // "hasPrevPage": false,
        // "hasNextPage": true,
        // "prevPage": null,
        // "nextPage": 2

    )
}

export default Pagination