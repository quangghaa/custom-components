# React + TypeScript + Vite: Custom components

## Require:

-   Node version >= 18
-   Sass
-   Ant design + Ant design icons library

Currently availabel components:

-   Rating

## Screenshot:

![alt text](https://github.com/quangghaa/custom-components/blob/main/public/rate_us/sreen_rating.png)

![alt text](https://github.com/quangghaa/custom-components/blob/main/public/rate_us/screen_rating-result.png)

## Rating: Used

Give users ability to rate (0 to 5 stars) among a set of content like: UI/UX, functionalities, customer supports, ...

Parameters:

-   `title: string`: Title of the component
-   `buttonLabel: string`: Label of the submit button
-   `itemsToRate: RateItemType[]`: List of rating items
-   `onSubmit: (ratings: { [key: number]: number }) => void`: Handle submit logic
-   `result: ResultType`: Custom result screen

Exported types:

-   `RateItemType`: Rating item
-   `ResultType`: Result object

Example of used:

```js
import { useState } from "react";
import "./App.css";
import RateUs, { RateItemType } from "./components/rate_us/RateUs";

function App() {
    const itemsToRate: RateItemType[] = [
        { key: 1, label: "Giao diện" },
        { key: 2, label: "Nội dung" },
        { key: 3, label: "Chất lượng dịch vụ" },
        {
            key: 4,
            label: "Some veery very long content, like this, or like that, or reallly ly ly ly long :D, one two three for five",
        },
    ];
    function handleSubmit(ratings: { [key: number]: number }) {
        console.log("Ratings: ", ratings);
    }

    return (
        <>
            <div className="demo">
                <span>This is a demo wrapper</span>
                <RateUs
                    title="EPR web rating"
                    buttonLabel="Submit"
                    itemsToRate={itemsToRate}
                    onSubmit={handleSubmit}
                    // result={{ title: "Thank you !!!" }}
                />
            </div>
        </>
    );
}

export default App;
```
Enjoy!!
