function NavigationBar() {
    const mystyle = {
        position: "relative",
        color: "white",
        backgroundColor: "DodgerBlue",
        /* padding: "0px", */
        fontFamily: "Arial",
        textAlign: "center",
        h2 : {
            /* display: "inline-block", */
            margin: "5px",
            display: "inline-block"
        },
        a: {
            float: "right",
            position: "relative",
            //left: "1100px",
           /*  display: "inline-block" */
        },
        tr: {
            colspan: 3
        }
      };

    return (
        <div style={mystyle}>
            <table>
                <tr>
                    <td>
                        <h1>Quotesland</h1>
                    </td>
                    <td>
                        <a>Home</a>
                    </td>
                    <td>
                        <a>More Quotes</a>
                    </td>
                    <td>
                        <a>About</a>  
                    </td>
                </tr>
            </table>
        </div>
    );
}

export default NavigationBar