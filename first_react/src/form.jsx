function formOnSubmit(event) {
    event.preventDefault();
    console.log("Form Submitted");
}

export default function Form() {
    return (
        <form onSubmit={formOnSubmit}>
            <input type="text" />
            <button type="submit">Submit</button>
        </form>
    );
}
