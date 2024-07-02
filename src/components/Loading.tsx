import { Spinner } from 'react-bootstrap'

function Loading() {
    return (
        <div
            className='d-flex justify-content-center align-items-center flex-column gap-3'
        >
            <Spinner animation="border" role="status" />
            <span className="sr-only">Cargando...</span>
        </div>
    )
}

export default Loading