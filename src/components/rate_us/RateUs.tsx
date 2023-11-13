import React, { useState } from "react"
import './style.scss'
import { Button, Rate } from "antd"
import { SmileOutlined } from "@ant-design/icons"

export type RateItemType = { key: number, label: string }
export type ResultType = { title: string, subtitle?: string }
interface Props {
    title?: string
    buttonLabel?: string
    result?: ResultType

    itemsToRate: RateItemType[]
    onSubmit: (ratings: { [key: number]: number }) => void;
}
const RateUs: React.FC<Props> = (props) => {

    const defaultTitle = "Rate us"
    const defaultButtonLabel = "Submit"
    const defaultResult = {
        title: "Thank you",
        subtitle: "We're very appriciate your ratings"
    }

    const { title, buttonLabel, itemsToRate, onSubmit, result } = props
    const [ratings, setRatings] = useState<{ [key: number]: number }>({})
    const [submited, setSubmited] = useState(false)

    const viewTitle = title ? title : defaultTitle
    const viewButtonLabel = buttonLabel ? buttonLabel : defaultButtonLabel
    const viewResult = result ? result : defaultResult

    function handleRatingChange(key: number, value: number) {
        setRatings(prevRatings => ({
            ...prevRatings,
            [key]: value
        }))
    }
    function handleButtonClick() {
        onSubmit(ratings)
        setSubmited(true)
    }
    return (
        <div className="rate-us" style={{ borderWidth: "1px" }}>
            {!submited ? <div className="rate-ui">
                <div className="rate-ui__head">
                    <span>{viewTitle}</span>
                </div>
                <div className="rate-ui__body">
                    {itemsToRate.map(item => (
                        <div className="rate-item" key={item.key}>
                            <div className="rate-item__label">
                                <span>{item.label}</span>
                            </div>
                            <div className="rate-item__icons">
                                <Rate value={ratings[item.key]} onChange={value => handleRatingChange(item.key, value)} />
                            </div>
                        </div>
                    ))}
                </div>
                <div className="rate-ui__foot">
                    <Button onClick={handleButtonClick} >
                        {viewButtonLabel}
                    </Button>
                </div>
            </div> :
                <div className="rate-result">
                    <div className="rate-result__smile">
                        <span><SmileOutlined /></span>
                    </div>
                    <div className="rate-result__content">
                        <span className="title">{viewResult.title}</span>
                        {viewResult.subtitle &&
                            <>
                                <br />
                                <span className="subtitle">We're very appriciate your ratings</span>
                            </>}
                    </div>
                </div>
            }
        </div>
    )
}
export default RateUs