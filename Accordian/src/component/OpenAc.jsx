import { useCallback, useState } from "react"

export const OpenAc = (initialstate) => {

    const [open, setOpen] = useState(initialstate);

    const toggle = useCallback(() => {
        setOpen((state) => !state);
    }, [setOpen]);

    return {open, toggle};
}