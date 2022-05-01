function QuoteMessage() {
    const headingStyle = {
        textAlign: "center"
    }

    const paragraphStyle = {
        textAlign: "center",
        backgroundColor: "lightgrey",
        width: "700px",
        height: "225px",
        padding: "100px",
        marginLeft: "200px",
        borderRadius: "25px"
    }

    return (
        <div>
            <div style={headingStyle}>
                <h3><i>Quote of the day</i></h3>
            </div>
            <div style={paragraphStyle}>
                <p><i>Be yourself; everyone else is already taken.</i></p>
                <p><i>Oscar Wilde</i></p>
            </div>
            <div style={headingStyle}>
                <a href="/MoreQuotes">More Quotes</a>
            </div>
        </div>
    );
}

export default QuoteMessage