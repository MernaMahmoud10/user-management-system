import { useNavigate } from "react-router-dom";

interface Props {
    title: string;
    btnTitle?: string
    path?: string
}

export default function ComponentsHeader({ title, btnTitle, path }: Props) {
    const navigate = useNavigate()

    return (
        <>

            <div className={`container-fluid`}>
                <div className="componentsHeader d-flex justify-content-between align-items-center py-2 ">
                    <h5 className='componentsTitle mb-0 py-2'>{title}</h5>
                    {btnTitle && path ?
                        <button className=' border-0 bg-mustard rounded-3 text-white px-4 py-2 fw-bold'
                            onClick={() => navigate(path)}>{btnTitle}</button>
                        : ""}
                </div>
            </div>

        </>
    )
}
