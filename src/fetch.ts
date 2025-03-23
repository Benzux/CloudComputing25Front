// Function used for connecting to the backend so we can utilize the sentiment analysis model there

export async function sentimentAnalysis(review: string) {
    console.log("fetch called")

    // The URL where the backend is hosted, with the /sentiment endpoint
    const url = "https://cc25-backend-git-cc-sentiment-backend-bl.2.rahtiapp.fi/sentiment"
    try {
        // POST request done with fetch, with the user input (review) put into a JSON for the backend to handle
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*"
            },
            body: JSON.stringify({ review: review})
        })
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`)
        }

        // Backend will return both the input_data and the model_response, 
        // but we only need the latter, so we save that and return it.
        // The model_response part of the Response is in list format, but only has one element
        const data = await response.json();
        const modelResponse = data.model_response?.[0] || "empty response";

        console.log(modelResponse)

        return modelResponse

    } catch (error) {
        console.error("Error:", error)
    }

};
