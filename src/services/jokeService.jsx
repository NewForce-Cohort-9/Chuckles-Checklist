export const addNewJoke = async (jokeObject) => {
    const postOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(jokeObject)
    }

    await fetch("http://localhost:8088/jokes", postOptions)
}