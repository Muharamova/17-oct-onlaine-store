import {Button, Card} from "react-bootstrap";

type StoreItemProps = {
    id: number
    name: string
    price: number
    imgUrl: string
}


export function StoreItem({id, name, price, imgUrl}: StoreItemProps) {
    const quantity = 1
    return (
//todo Card
        <Card className="h-18">


            <Card.Img
                variant="top"
                src={imgUrl}
                height="200px"
                style={{objectFit: "cover"}}

            />


            <Card.Body className="d-flex flex-column">


                <Card.Title>
                    <span className="fs-3"> {name}</span>
                    <span className="ms-5 text-muted"> {price}</span>
                </Card.Title>


                {/*different interfaces*/}
                <div className="mt-auto ">
                    {quantity === 0 ? (
                        <Button
                            className="w-100 "
                            variant="primary">
                            Add to Cart
                        </Button>) : (
                        <div
                            className="d-flex align-items-center flex-column"
                            style={{gap:".5rem"}}
                        >
                            <div
                                className="d-flex align-items-center justify-content-center"
                            >

                                <Button> - </Button>
                                <div>
                                    <span>{quantity}</span> in cart
                                </div>
                                <Button> + </Button>
                            </div>

                            <Button
                                variant="danger"
                                size="sm"
                            >Remove</Button>
                        </div>


                    )}


                </div>
            </Card.Body>
        </Card>
    )
}