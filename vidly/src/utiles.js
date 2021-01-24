

export default function slicer(items,currentPage,pageSize){
    const start = currentPage *pageSize
    return items.slice(start,(start+pageSize)) ;
}
