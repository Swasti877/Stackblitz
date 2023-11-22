export const calculateStartAndEndPagination = (pageIndex: number, pageSize: number): { start: number, end: number } => {

    const start = (pageIndex * pageSize) + 1

    return {
        start,
        end: start + pageSize,
    }
}