import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Market(){
    const router = useRouter()
    const { dc, item_id } = router.query
    return(
        <div>{dc} {item_id}</div>
    )
}